var db = require("../data/contacts.json"),
  _ = require("underscore");

module.exports = function(app) {
  app.get("/contacts", function(req, res) {
    res.render("contacts/contactlist", {
      contacts: db
    });
  });

  app.get("/contacts/:guid", function(req, res) {
    var guid = req.param("guid"),
      record = _.findWhere(db, {
        guid: guid
      });

    if (record) {
      res.render("contacts/contactprofile", {
        contact: record
      });
    } else {
      res.send("Sorry, the contact with id " + guid + " doesn't exist in the DB.");
    }
  });

  app.get("/contacts/edit/:guid", function(req, res) {
    var guid = req.param("guid"),
      record = _.findWhere(db, {
        guid: guid
      });

    if (record) {
      res.render("contacts/contact", {
        contact: record
      });
    } else {
      res.send("Sorry, the guid " + guid + " doesn't exist in the DB.");
    }
  });

  app.post("/contacts/edit/:guid", function(req, res) {
    var guid = req.param("guid"),
      record = _.findWhere(db, {
        guid: guid
      });

    if (record) {
      var formValues = _.pick(req.body, "firstName", "lastName", "nickname", "dateOfBirth", "company", "email");
      _.extend(record, formValues);
      if (record.nickname === "") {
        record.nickname = record.firstName;
      }
      res.redirect("/contacts");
    } else {
      res.send("Sorry, the guid " + guid + " doesn't exist in the DB.");
    }
  });
}