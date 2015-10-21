//linking to jquery
$(document).ready(function(){

  //$('#submit-btn').click(function(){
  //  event.preventDefault();

//making the words all lowercase and trimmign extra spaces
    var city = $('#city-type').val();
    $('#city-type').val('');
    city = city.toLowerCase().trim();


//if user enters nyc, picture changes to 
    if(city == 'nyc' || city == 'new york city' || city == 'new york') {
      $('body').attr('class','nyc');
    } 

//if user enters sf, picture changes to sf
    else if(city == 'sf' || city == 'san francisco') {
      $('body').attr('class','sf');
    }

//if user enters austin, picture changes to austin
   else if(city == 'austin' || city == 'atx') {
     $('body').attr('class','austin');
    }


//if user enters la, picture changes to la
    else if(city == 'la' || city == 'los angeles'){
      $('body').attr('class','la');
   } 

//if user enters sydney, picture changes to sydney
    else if(city == 'sydney'){
      $('body').attr('class','sydney');
    }
  });
});