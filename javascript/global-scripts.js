$(document).ready(function(){
  
    // PROJECT PAGES
    // Show/hide project descriptions when toggle button is clicked
    $("button").click(function(){
        $(".hidey").fadeToggle(500);
    });
  
    // Switch + and - based on whether project description is shown or hidden
    $("#toggle").on("click", function(){
        var el = $(this);
        el.text() == el.data("text-swap") 
          ? el.text(el.data("text-original")) 
          : el.text(el.data("text-swap"));
    });

});   // Close document.ready function

    // QUIZ PAGE
    function checkAnswer1Function(){
        document.getElementById("q1-blurb").innerHTML = "Test";
    };




