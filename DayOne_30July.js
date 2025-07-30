$(document).ready(function () {
  // Q1 Hide a paragraph using jQuery
  $("#btn1").click(function () {
    $(".Q1").hide();
  });

  // Q2 Create 3 para with diff class,id and element type. Add 3 buttons to hide each using correct JQuery selector
  $(".btn2-1").click(function () {
    $("#Q2").hide();
  });
  $(".btn2-2").click(function () {
    $(".Q2").hide();
  });
  $(".btn2-3").click(function () {
    $(this).prev("p").hide();
  });

  // Q3 Use JQuery to hide the input field that has type="text" when a button is clicked
  $(".btn3").click(function () {
    $("[type=text]").hide();
    // $("[type=text]").val("");
  });

  // Q4 Hide the element with ID "Test" (or any variation like "TEST", "test") using a case-insensitive selector.
  $(".btn4").click(function () {
    $("[id]")
      .filter(function () {
        return (
          $(this).attr("id") && $(this).attr("id").toLowerCase() === "test"
        );
      })
      .hide();
  });

  // Q5 Add 2 images, 1 paragraph and 1 link. Hide all of them using one button.
  $(".btn5").click(function (){
    $(".hideme").hide();
  });

  // Q6 Create a button. When clicked , change the text of a paragraph to "Welcome to jQuery!".
  $(".btn6").click(function(){
    $(".Q6").text("Welcome to jQuery!");
  });
});
