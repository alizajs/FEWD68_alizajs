console.log("this is working");


$(document).ready(function(){

 /*Hide all cocktails to begin*/
  $(".cocktailResult").hide();



 /*Setting our cocktail score to zero to start out*/ 
  var cocktailScore = 0;
  console.log(cocktailScore);

  /*User gets number added to their score based on their answer*/
      $("#hemingway").click(function(){
          cocktailScore = cocktailScore + 0;
          console.log(cocktailScore);
        });

      $("#buffet").click(function(){
          cocktailScore = cocktailScore + 5;
          console.log(cocktailScore);
        });

      $("#captain").click(function(){
          cocktailScore = cocktailScore + 10;
          console.log(cocktailScore);
        });

      $("#tikiRoyalty").click(function(){
          cocktailScore = cocktailScore + 0;
          console.log(cocktailScore);
        });

      $("#hulaWinner").click(function(){
          cocktailScore = cocktailScore + 6;
          console.log(cocktailScore);
        });

      $("#plasticLei").click(function(){
          cocktailScore = cocktailScore + 10;
          console.log(cocktailScore);
        });

      $("#umbrella").click(function(){
          cocktailScore = cocktailScore + 0;
          console.log(cocktailScore);
        });

      $("#monkey").click(function(){
          cocktailScore = cocktailScore + 5;
          console.log(cocktailScore);
        });

      $("#dolphin").click(function(){
          cocktailScore = cocktailScore + 10;
          console.log(cocktailScore);
        });

 /*First screen, the landing page is all that shows*/  
  $("section").hide();
  $("#landingPanel").show();

 /*When the user clicks on the tiki figure, you go to the first question page*/ 
  $("img").click(function(){
    $("#landingPanel").fadeOut("slow");
    $("#landingPanel").hide();
    $("#questionPage1").fadeIn("slow");
    $(".answercontainer").selectable();
    });

 /*User selects an answer from the first question*/
   $("input[name=question-one]:radio").click(function(){
      $("#questionPage1").fadeOut("slow");
      $("#questionPage1").hide();
      $("#questionPage2").fadeIn("slow");
      $(".answercontainer").selectable();
   });

 /*User selects an answer from the second question*/
   $("input[name=question-two]:radio").click(function(){
      $("#questionPage2").fadeOut("slow");
      $("#questionPage2").hide();
      $("#questionPage3").fadeIn("slow");
      $(".answercontainer").selectable();
   });

    /*User selects an answer from the third question*/
   $("input[name=question-three]:radio").click(function(){
      $("#questionPage3").fadeOut("slow");
      $("#questionPage3").hide();
      $("#cocktailPage").fadeIn("slow");


    /*From console log, the score is added and the correct drink is shown*/
        if ("cocktailScore" == 0 ) {
          $("#zombie").show();
        }
        else if ("cocktailScore" == 10){
          $("#pinaColada").show();
        }
        else if ("cocktailScore" == 11){
          $("#maiTai").show();
        }
        else if ("cocktailScore" == 15){
          $("#singaporeSling").show();
        }
        else if ("cocktailScore" == 16){
          $("#pineappleHop").show();
        }
        else if ("cocktailScore" == 20){
          $("#hemingwayDaquiri").show();
        }
        else if ("cocktailScore" == 21){
          $("#plantersPunch").show();
        }
        else {
          $("#volcano").show();
        }

      });

  /*End of final function*/
  });




// function question-one(){
//var 1 = 0; var 2 = 0;
//($id1).click(function{
 // var 1 = 5;
//})
// }

