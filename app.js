/**
 * Created by joelmiller on 7/14/15.
 */
$(document).ready(function() {
var showList = ["red", "cyan", "purple"];

    $.ajax('data.json', {
        success: function(response){
           for(var i=0; i<showList.length; i++) {

           
            $.each(response, function(index, myObj) {
                // var msg = $("<p/>"); //self closing html element
                // msg.append("<p></p> " + myObj.color);
                // msg.append("Qty " + myObj.value);
                // $('.myContainer').append(msg)

              //   var colorDiv ="<div class = 'colorDiv' style='background-color:" + myObj.value + "'>" + "<p> " + myObj.color + "</p> </div>" ;
              // $('.myContainer').append(colorDiv);
             if(showList[i]== myObj.color){
              var colorDiv =$("<div>", {
                  class: "colorDiv", 
                  style: "background-color:" + myObj.value

              });
              var colorP = $("<p/>",{
                text:myObj.color
              });
             colorDiv.append(colorP);
             $('.myContainer').append(colorDiv);
           }
            });
          }



        },
        error: function(request, errorType, errorMessage){
            alert(errorType + " " + errorMessage);
        }
    });

})