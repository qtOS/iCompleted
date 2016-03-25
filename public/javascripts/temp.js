$(function(){
  var $navbtn = $('#nav-btn'),
      $userbtn = $('#user-btn'),
      $exitlogin = $('#exit-login'),
      $navcont = $('#navigation-container'),
      $loadingPanel = $('#loading-panel'),
      $logincont = $('#login-container');

  var NavDisOn = {
    "opacity": 1,
    "right": "10%",
  },
  NavDisOff = {
    "opacity": 0,
    "right": "-10%"
  }
  var ctr = 0;
  var processing = false;

  //~~~~~~~~~~ Nav animation
  $navbtn.click(function(){
    if(0 === ctr % 2 && processing == false){
      ctr++;
      processing = true;
      //$loadingPanel.show();
      console.log(ctr + ": even");
      $navbtn.removeClass('not');
      $navbtn.addClass('active');
      $navcont.animate(NavDisOn, 1250, function(){
        console.log("open" + ": "+processing);
        processing = false;
        //$loadingPanel.hide();
      });
    }else if(1 ==ctr % 2 && processing == false){
      ctr++;
      processing = true;
      //$loadingPanel.show();
      $navbtn.removeClass('active');
      $navbtn.addClass('not');
        $navcont.animate(NavDisOff,550, function(){
          console.log('closed'+ ": "+processing);
          processing = false;
          //$loadingPanel.hide();
        });
      console.log(ctr + ": odd")
    }else{
      //$loadingPanel.show()
      processing == true;
      if(processing == false){
        alert('error!');
      }
    }
  })
  //~~~~~~~~ end of Nav animation
  //~~~~~~~~ Beginning userlogin
  var open = false;
  $userbtn.click(function(){
    if(open == false){
      console.log('we got clicks: ')
      $logincont.css({"display": "block"});
      open = true;
      if(open == true){
        $exitlogin.click(function(){
          console.log('clicked')
          $logincont.css({"display": "none"});
          open = false;
        });
      }
    }
  })
  //~~~~~~~ end of userlogin
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //end of navigation
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //Beginning of goal list collapsable
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var $collapsableBtn = $("#activate-nd-list"),
    $fadeIn = $(".fadeIn"),
    $faded = $(".faded"),
    $theLi = $(".refLi"),
    $goalOl =$("#goal-jump-list");

    var collaspedOl = {
      "height": "10%"
    },
    expandedOl = {
      "height": "100%"
    };

    var clpsd = 0,
        inprog = false;
    $collapsableBtn.click(function(){
      if(0 == clpsd % 2 && inprog == false){
        inprog = true;
        console.log('expand');
        $goalOl.children().show();
        $goalOl.animate(expandedOl, 500, function(){
          $goalOl.children().animate({"opacity": 1}, 1000, function(){
            inprog = false;
          });
        });
        clpsd++;
      }else if(1 === clpsd % 2 && inprog == false){
        inprog = true;
        console.log('clicked');
        $goalOl.children().animate({"opacity": 0}, 500, function(){
          $goalOl.children().hide();
          $goalOl.animate(collaspedOl, 500, function(){
          });
          inprog = false;
        });
        clpsd++;
      }else{
        console.log('inprogress, please wait');
      }
    });
    console.log($('.quickRef'));
    // $(".quickRef").click(function(e){
    //   e.preventDefault();
    //   console.log('clicked');
    // });

  // console.log($(".refLi"));
  // function goToByScroll(id){
  //          // Reove "link" from the ID
  //        id = id.replace("link", "");
  //          // Scroll
  //        $('#goals-ul > li').animate({
  //            scrollTop: $("#"+id).offset().top},
  //            'slow');
  //    };
  // $("li > a").click(function() {
  //       // Prevent a page reload when a link is pressed
  //     e.preventDefault();
  //       // Call the scroll function
  //     console.log('clicked');
  //     goToByScroll($(this).attr("href"));
  // });
  // console.log('passed the shit');
});
