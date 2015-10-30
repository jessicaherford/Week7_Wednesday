$( document ).ready(function() {


  $('.badge').hover(function() {
    $(this).css('background-color', "#b20000");
  }, function() {
    $(this).css('background-color', "#000");
  })

  $('.panel-body').css('background-color', '#cccccc');

  var message = $('<span />').addClass('.projection').html(' 2016 projection');

$(message).css('color', '#000');
$(message).css('padding', '5px');

$('.progress-bar-success').hover(function() {
  $(this).after(message);
}, function() {
    $(message).remove();
})

$(".table.table-striped tbody tr:nth-last-child(1)").remove();
$(".table.table-striped tbody tr:nth-last-child(1)").remove();

$(".btn.btn-primary.col-sm-3").click(function() {
  $(this).find(".glyphicon.glyphicon").hide();
  $(this).css("color", "grey");
})

$(".btn.btn-primary.col-sm-3").dblclick(function() {
  $(this).hide()
});


$('.close').click(function (){
  var closeIt = confirm("You Can Never Get This Back! Are You Sure You Want This Removed?");
  if (closeIt == true){
    $('.alert.alert-info').remove();
  }
  else{
  return false;
}
})

var userName = prompt('Hi there! What is your name?');

$("input[type = 'text']").each(function(){
  var $this = $(this);
  $this.attr("placeholder", $this.attr("value")).removeAttr('value').attr('placeholder', userName);
});





});

/*<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" style="width: 72%">
                                    <span class="sr-only">72% Complete</span>
                                </div>


  $( "li" ).add( "<p id='new'>new paragraph</p>" )
  .css( "background-color", "red" );  */
