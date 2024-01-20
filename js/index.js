console.log("Your index.js is loaded correctly!")

$(document).ready(function(){
    $("#button1").hover(function(){
      $(this).css({"background-color": "#001B2E", "color": "#FFF38B"});
      }, function(){
      $(this).css({"background-color": "#075978", "color": "#FFFFFF"});
    });
  });

  $(document).ready(function(){
    $("#button2").hover(function(){
      $(this).css({"background-color": "#001B2E", "color": "#E5D6EC"});
      }, function(){
      $(this).css({"background-color": "#FFFFFF", "color": "#000"});
    });
  });

  $(document).ready(function(){
    $(".hoverCS").hover(function(){
      $(this).css("color", "#E5D6EC");
      }, function(){
      $(this).css("color", "#F8E00A");
    });
  });

  $(document).ready(function(){
    $("#hoverAllprojects").hover(function(){
      $(this).css("color", "#9E7B9B");
      }, function(){
      $(this).css("color", "#000000");
    });
  });

  $(document).ready(function(){
    $("#buttonUp").hover(function(){
      $(this).css("background-color", "#E5D6EC");
      }, function(){
      $(this).css("background-color", "#075978");
    });
  });

  $("#buttonUp").click (function () {
    $("html, head"). animate ({scrollTop: 0}, 1000);
  });



//   $(".inline-block").hover(function(){
//     $(this).css("color", "#9E7B9B");
// }, function(){
// $(this).css("color", "#00000");
// });




