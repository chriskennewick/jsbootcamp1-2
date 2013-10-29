

function makeContactRowClickable() {
  $(".table > tbody > tr").click(function() {
    var newUrl = window.location.href;
    if(newUrl.charAt(newUrl.length) != "/") {
      newUrl = newUrl + "/";
    }
    newUrl = newUrl + $(this).data("contact-guid");
    window.location.href = newUrl;
  });
}

function makeColumnSortable(){
  var head = $('th');
  head.on('click', function(){
    var descending = $(this).hasClass('descending');
    var i = $(this).index();
    $(this).closest('table').find('td').filter(function(){
      return i === $(this).index();
    }).sortElements(function(a, b){
          return $.text([a]) > $.text([b]) ?
              descending ? -1 : 1
            : descending ? 1 : -1;
    }, function(){
        return this.parentNode;
    });
    $('th').removeClass('ascending');
    $('th').removeClass('descending');
    if(!descending){
      $(this).addClass('descending');
    }
    else{
      $(this).addClass('ascending');
    }
  });
}


