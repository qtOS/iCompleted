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
      "width": "10%",
      "height": "10%"
    },
    expandedOl = {
      "width": "15%",
      "height": "100%"
    };

    var clpsd = 0,
        inprog = false;
    $collapsableBtn.click(function(){
      $('#empty-li').remove();
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
    //
    //
    //
    var quotes = ["Computers make excellent and efficient servants, but I have no wish to serve under them.", "The needs of the many outweigh the needs of the few, or the one.", "Change is the essential process of all existence.", "It is curious how often you humans manage to obtain that which you do not want.", "If I seem insensitive to what you’re going through, Captain, understand – it’s the way I am.", "May I say that I have not thoroughly enjoyed serving with Humans? I find their illogic and foolish emotions a constant irritant."],
        grabQuote1 = [],
        grabQuote2 = [],
        dld = false;
    swal.setDefaults({
      confirmButtonColor: 'none'
    });
    $('#pf-title').on('click', function(){
      if(dld == false){
        $('#pf-title > a').removeAttr('id');
        swal({
          title: "You've downloaded my Résumé!",
          text: "Thank you for finding my site, I hope you enjoy it.",
          timer: 3000,
          showConfirmButton: false
        });
        dld = true;
      }else{
        if(dld == true){
          $('#pf-title > a').removeAttr("download").removeAttr('href');
        }
        grabQuote1 = quotes[Math.floor(Math.random() * quotes.length)];
        grabQuote2 = quotes[Math.floor(Math.random() * quotes.length)];
        if(grabQuote1 === grabQuote2){
          console.log('ran');
          grabQuote2 = quotes[Math.floor(Math.random() * quotes.length)];
          if(grabQuote2 === grabQuote1){
            console.log('ran inner');
            grabQuote2 = quotes[Math.floor(Math.random() * quotes.length)];
          }
        }

        swal({
          title: grabQuote1,
          text: grabQuote2,
          showConfirmButton: true
        })
      }
    })

    $('footer').addEventListener('webkitAnimationEnd',function( event ) { $('footer').style.display = 'none'; }, false);
    // $('#portfolio-container ul li:nth-child(2)').mouseover(function(){
    //   $('footer').animate({'opacity': 0}, 2000, function(){
    //       $('footer').remove();
    //   })
    // });
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
