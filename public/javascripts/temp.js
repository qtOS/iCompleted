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
    "right": "-40%"
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
