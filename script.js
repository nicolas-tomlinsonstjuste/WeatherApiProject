
      $("#find-movie").on("click", function(event) {

        event.preventDefault();
        var movie = $("#movie-input").val();
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + movie + "&appid=22264cd8ffa0acb5f7bc6bf7887505fe";
        var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + movie + "&appid=22264cd8ffa0acb5f7bc6bf7887505fe";


       $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          $("#movie-view").text(JSON.stringify(response));
          console.log(response.weather[0].icon)
          var weatherIcon= $("img").attr("src",`http://openweathermap.org/img/wn/${(response.weather[0].icon)}@2x.png`)
          $("#movie-view").prepend(weatherIcon)
          var chimichangas = response.coord.lon;
          var tamales = response.coord.lat;
          var queryURL3 = "https://api.openweathermap.org/data/2.5/uvi?lat="+ tamales + "&lon=" + chimichangas + "&appid=22264cd8ffa0acb5f7bc6bf7887505fe";
          $.ajax({
          url: queryURL3,
          method: "GET"
        }).then(function(response) {
          $("#your-mom-ishot-bro").text(JSON.stringify(response));

        });

        });

        $.ajax({
          url: queryURL2,
          method: "GET"        
        }).then(function(response) {
          $("#movie-view2").text(JSON.stringify(response))
        });

      });
    


