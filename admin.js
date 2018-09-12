  /*-------------------------------------------------------------------------------------------------------
                                                 FUNCTIONS
  ------------------------------------------------------------------------------------------------------------*/ 	

   // SHOW AND HIDE DIALOG 
//    var show_dialog  = function(getdialogId) {
//      $(".zc-overlay").addClass("show-dialog");
//      getdialogId.addClass("show-dialog");
//    }
//
//    var hide_dialog  = function() {
//      $(".zc-overlay").removeClass("show-dialog")
//      $(".zc-dialog").removeClass("show-dialog");
//    }

    // SHOW ERROR FOR TEXTBOX VALIDATION
    var textfield_show_error = function(field, errormsg) {
      $(field).addClass("zc-error");
      $(errormsg).find('.zc-hint').addClass("zc-error-msg"); 
      $(errormsg).css("display","inline-block"); 
    }

    // HIDE ERROR FOR TEXTBOX VALIDATION
    var textfield_hide_error = function(field, errormsg) {
      $(field).removeClass("zc-error");
      $(errormsg).find('.zc-hint').removeClass("zc-error-msg");
      $(errormsg).css("display","none"); 
    }

    // EMAIL VALIDATION

    var mail_errorMessage = function(message) {
      $('#user-mail-required label').empty().append(message); 
      $('#user-mail-required').css("display","inline-block");	
    }

    function isValidEmailAddress(emailAddress) {
      var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
      return pattern.test(emailAddress);
    };


$(document).ready(function (){ 

    $("#user-mail-required").css("display","none");


    /*-----------------------------------------------------------------------------------------------------------
                                                 ADD USER DIALOG
    ------------------------------------------------------------------------------------------------------------*/ 	
    var getUserMailList = [];
    var cardCount = 5;

    $("#add-user").on("click", function() {
      var getUserMail    = $("#user-mail").val(),
          getUserMail    = $.trim(getUserMail),
          getUserName    = getUserMail.split("@"),
          getFirstLetter = getUserMail.slice(0,2),
          getUserProfile =  $('input[name=profile]:checked').val(),
          emailField = $("#user-mail").val(),
          emailField = $.trim(emailField),
          ifcheck =true;

      var newUserData = '<div id="user-card-'+cardCount+'" data-user="new" class="zc-card zc-card-users add-new-user">\
  <div class="zc-card-header">\
  <span class="zc-card-logo"> '+ getFirstLetter +'</span>\
  <span class="zc-card-title">\
  <h2 data-title="Zoho Docs">'+ getUserName[0] +'</h2>\
  <span class="zc-title-desc">'+ getUserMail +'</span>\
  </span>\
  <button class="user-more-btn zc-btn zc-btn-small icon zc-more">\
  <i class="icon">\
  <svg class="zc-black"> <use xlink:href="#svg-verticalMore-icon"> </use> </svg>\
  </i>\
  </button>\
  </div>\
  <div class="zc-card-content">\
  <span class="zc-role"> <span class="zc-permission">'+ getUserProfile +'</span></span>\
  <span class="user-projects"> <span class="zc-red-text">Yet to Accept</span></span>\
  </div>\
  </div>';


      /*  FORM VALIDATION */

      if(emailField=="") {
        textfield_show_error('#user-mail', '#user-mail-required');
        mail_errorMessage('Enter user email address');
        ifcheck=false;
      } else if( !isValidEmailAddress( emailField ) ) {
        textfield_show_error('#user-mail', '#user-mail-required');
        mail_errorMessage('Enter valid email address');
        ifcheck=false;
      } else if  ( $.inArray(getUserMail, getUserMailList) > -1 ) {
        textfield_show_error('#user-mail', '#user-mail-required');
        mail_errorMessage('Email address already exits');
        ifcheck=false;
      } else {
        textfield_hide_error('#user-mail', '#user-mail-required');
      }

      if( ifcheck == true) {
        $(".zc-admin-wrap .zc-card-view").prepend(newUserData);
        //$('body').append(newUsermenu);
        $("#add-user-success").addClass("show-toast-message");
        setTimeout(function() {
          $(".zc-admin-wrap .zc-card-view").find('.add-new-user').removeClass('add-new-user');
        },100);
        setTimeout(function() {
          $("#add-user-success").removeClass("show-toast-message");
        },2000);
        var dialogId = $("#add-user-dialog");
        hide_dialog(dialogId);
        getUserMailList.push(getUserMail);
      }

      cardCount++;
      console.log(cardCount);
    });


    /*-----------------------------------------------------------------------------------------------------------
                                                 CREATE PORTAL
    ------------------------------------------------------------------------------------------------------------*/ 
//
//    $("#create-portal-btn").on("click", function(){
//      window.open("../../portal-owner/", "_self");
//    });


    /*-----------------------------------------------------------------------------------------------------------
                                                SIDEBAR NAVIGATION 
    ------------------------------------------------------------------------------------------------------------*/ 
//
//    $("#admin-new-project").on("click", function(){
//      $("body").removeClass("zc-projects");
//      $("#article-template").load("html-templates/create-project.html", function(){
//     
//      });  
//    });
//
//    $("#admin-project-list").on("click", function(){
//      $("body").addClass("zc-projects");
//      $("#article-template").load("html-templates/projects-list.html", function(){
//         $("#zc-card-data .zc-shared-list ul li").eq(3).append("<span class='more-cd'> +1 </span>");
//         $("#zc-card-data-2 .zc-shared-list ul li").eq(3).append("<span class='more-cd'> +4 </span>");
//         $("#zc-card-data-4 .zc-shared-list ul li").eq(3).append("<span class='more-cd'> +2 </span>");
//      });  
//    });
//    
//    $("#admin-portal-info").on("click", function(){
//      $("body").addClass("zc-projects");
//      $("#article-template").load("html-templates/portal-info.html", function(){
//      });  
//    });
//    
//    $("#admin-users").on("click", function(){
//      $("body").addClass("zc-projects");
//      $("#article-template").load("html-templates/users.html", function(){
//      });  
//    });
//    
//     $("#admin-manage").on("click", function(){
//      $("body").addClass("zc-projects");
//      $("#article-template").load("html-templates/manage.html", function(){
//      });  
//    });
//    
//     $("#admin-reports").on("click", function(){
//      $("body").addClass("zc-projects");
//      $("#article-template").load("html-templates/reports.html", function(){
//      });  
//    });
//    
//    $("#admin-subscriptions").on("click", function(){
//      $("body").addClass("zc-projects");
//      $("#article-template").load("html-templates/subscriptions.html", function(){
//      });  
//    });
//







    /*-----------------------------------------------------------------------------------------------------------
                                                 DOCUMENT CLICK 
    ------------------------------------------------------------------------------------------------------------*/ 
    $(document).on("click", function(){    

    });

  });