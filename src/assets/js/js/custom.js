$( function() {
    $( "#formDatedatepicker" ).datepicker({
      showOn: "button",
      buttonImage: "assets/img/calendar.svg",
      buttonImageOnly: true,
      buttonText: "Select date"
    });

    $( "#formTodatepicker" ).datepicker({
        showOn: "button",
        buttonImage: "assets/img/calendar.svg",
        buttonImageOnly: true,
        buttonText: "Select date"
      });



      
      /*  Slide Toggle  ======= */
      $(".sidebar-toggle").click(function(){

        $(".sidebar-toggle a").toggleClass("toggled-active");
        $(".sidebar").toggleClass("toggled");
        $(".main-section").toggleClass("toggled-left");
        
      });


  } );