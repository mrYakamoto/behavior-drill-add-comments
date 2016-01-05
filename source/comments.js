// Shorthand for document ready
$(document).ready(function(){
  $("#new_comment_button").click(function(){
    $("form#new_comment").toggle();
  });
  $("#submitComment").click(function(event){
    event.preventDefault();
    var name, text;
    name = $("#authorName").val();
    text = $("#commentText").val();
    $("#comment_list").append("<li>" + text + "<span class='author'>" + name + "</span></li>");
    $("form#new_comment")[0].reset();
    $("form#new_comment").hide();
  });
});
