/*
 * This is the main entry module for our node.js application.
 */
var path = require("path"),
    express = require("express"),
    _ = require("underscore"),
    db = require("./data/contacts.json");


// Our sample application uses the express framework to abstarct away
// the raw HTTP concerns. This block creates an instance of the express
// server and sets configuration related to our static file server and
// the handlebar template engine.
var app = express()
            .set("views", path.join(__dirname, "views"))
            .set("view engine", "hbs")
            .use(express.static(path.join(__dirname, "public")))
            .use(express.bodyParser());


// Now we finally define the various URL patterns that our application
// understands and associate a handler function with them. Express takes
// care of everything else for us.
app.get("/", function(req, res) {
  res.redirect("/contacts");
});


app.get("/contacts", function(req, res) {
  res.render("contactlist", {contacts: db});
});

app.get("/contacts/:guid", function(req, res) {
  var guid = req.param("guid"),
      record = _.findWhere(db, {guid: guid});

  if(record) {
    res.render("contact", {contact: record});
  } else {
    res.send("Sorry, the guid " + guid + " doesn't exist in the DB.");
  }
});

app.post("/contacts/:guid", function(req, res) {
  var guid = req.param("guid"),
      record = _.findWhere(db, {guid: guid});

  if(record) {
    var formValues = _.pick(req.body, "firstName", "lastName", "nickname", "company", "email");
    _.extend(record, formValues);
    if(record.nickname === "") {
      record.nickname = record.firstName;
    }
    res.redirect("/contacts");
  } else {
    res.send("Sorry, the guid " + guid + " doesn't exist in the DB.");
  }
});


// With the express server and routes defined, we can start to listen
// for requests. Heroku defines the port in an environment variable.
// Our app should use that if defined, otherwise 3000 is a pretty good
// default.
var port = process.env.PORT || 3000;
app.listen(port);
console.log("The server is now listening on port %s", port);
