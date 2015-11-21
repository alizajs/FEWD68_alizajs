$(document).ready(function(){
  var cities = ['NYC', 'SF', 'LA', 'SYD', 'ATX'];
  for (var i = 0; i < cities.length; i++){
    $('#city-type').append('<option>'+cities[i]+'</option>');
  }

  $('#city-type').change(function() {
    /*act on the event*/
      var city = $('#city-type').val();
      
      if(city == 'NYC'){
        $('body').attr('class','nyc');
      } else if(city == 'SF'){
        $('body').attr('class','sf');
      } else if(city == 'LA'){
       $('body').attr('class','la');
      } else if(city == 'ATX'){
        $('body').attr('class','atx');
      } else if(city == 'SF'){
        $('body').attr('class','sf');
      } else if (city == 'SYD'){
        $('body').attr('class','syd');
      }
  });

});