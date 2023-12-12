$(document).ready(function(){
    var bxslider1 = $('#bxslider-1').bxSlider({
        mode: 'horizontal',
        captions: false,
        pagerCustom: '#bx-pager-1',
        responsive: true,
        controls:true,
      
    });

    function updateSliderOptions() {
        var windowWidth = $(window).width();
  
        // Adjust slideWidth based on window width
        var slideWidth = windowWidth < 767 ? 400 : 900;
  
        // Update bxSlider options
        bxslider1.reloadSlider({
          slideWidth: slideWidth
        });



        $('#bx-pager-1 img').css({
            'width': slideWidth / 3, 
            'height': 'auto'
          });


          $('.bx-pager-item').css({
            'display': 'none'
          });
      }
  
      // Call the function on document ready
      updateSliderOptions();
  
      // Bind the function to the window resize event
      $(window).resize(function() {
        updateSliderOptions();
      });


});

$(document).ready(function(){
    var bxslider2 = $('#bxslider-2').bxSlider({
        mode: 'horizontal',
        captions: false,
        pagerCustom: '#bx-pager-2',
        responsive: true,
        controls: true,
        adaptiveHeight: true
    });

    function updateSliderOptions() {
        var windowWidth = $(window).width();
  
        // Adjust slideWidth based on window width
        var slideWidth = windowWidth < 767 ? 400 : 900;
  
        // Update bxSlider options
        bxslider2.reloadSlider({
          slideWidth: slideWidth
        });

        $('#bx-pager-2 img').css({
            'width': slideWidth / 3, 
            'height': 'auto'
          });

          $('.bx-pager-item').css({
            'display': 'none'
          });

      }
  
      // Call the function on document ready
      updateSliderOptions();
  
      // Bind the function to the window resize event
      $(window).resize(function() {
        updateSliderOptions();
      });

    

});

$(document).ready(function(){

    var bxslider3 = $('#bxslider-3').bxSlider({
        mode: 'horizontal',
        captions: false,
        pagerCustom: '#bx-pager-3',
        responsive: true,
        slideWidth: 900,
        controls: true,
       
    });

    function updateSliderOptions() {
        var windowWidth = $(window).width();
  
        // Adjust slideWidth based on window width
        var slideWidth = windowWidth < 767 ? 400 : 900;
  
        // Update bxSlider options
        bxslider3.reloadSlider({
          slideWidth: slideWidth
        });

        
        $('#bx-pager-3 img').css({
            'width': slideWidth / 3, 
            'height': 'auto'
          });
          $('.bx-pager-item').css({
            'display': 'none'
          });
      }
  
      // Call the function on document ready
      updateSliderOptions();
  
      // Bind the function to the window resize event
      $(window).resize(function() {
        updateSliderOptions();
      });

});


