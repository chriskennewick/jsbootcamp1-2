

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
    if($(this).hasClass('ascending')){
      $(this).removeClass('ascending');
      $(this).addClass('descending');
    }
    else{
      $(this).addClass('ascending');
      $(this).removeClass('descending');
    }
  });
}
