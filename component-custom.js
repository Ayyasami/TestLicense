  /* This file contains UI component customiztions  */

  /*------------------------------------------------------------------------------------------------------                                                        POPOVER
    --------------------------------------------------------------------------------------------------------*/ 

//  function initPopover (popoverArray) {
//    $.each(popoverArray, function(index, lists) {    
//      $(lists.popTarget).zpopover({
//        popOn    : lists.popOn,
//        position : lists.position,
//        content  : lists.popContent,
//        htmlSafe : true,  
//        width    : lists.width,
//        cssClass : lists.cssClass,
//        delay    : {openAfter: 100, closeAfter: 200},
//        closeAction : {
//          button: lists.closeButton
//        }
//      }); 
//    }); 
//  } 


  function initPopover (popoverArray) {
    $.each(popoverArray, function(index, lists) {    
      $(lists.popTarget).zpopover({
        popOn    : lists.popOn,
        position : lists.position,
        content  : lists.popContent,
        isContentHTMLEncoded : true,  
        width    : lists.width,
//        className : lists.cssClass,
        delay    : {openAfter: 100},
        closeAction : {
          button: lists.closeButton
        },
         animation: {
          "open" : {className : lists.cssClass }
        }
      }); 
    }); 
  }


  /* POPOVER ARRAY */
  var popoverWithArrow = [       
    { popOn: "hover", popTarget: "#zc-pconfig-help", popContent: "#zc-project-config-help", cssClass: "animate-fadeup", width: "350", position: "top"},
    { popOn: "hover", popTarget: "#useraccount-help-icon", popContent: "#zc-useraccount-help", cssClass: "animate-fadeup", width: "320", position: "bottom"},
    { popOn: "hover", popTarget: "#zc-cloud-rep-info", popContent: "#zc-rep-info", cssClass: "animate-fadeup", width: "350", position: "top"},
    { popOn: "hover", popTarget: "#zc-rails", popContent: "#zc-popover-rails", cssClass: "animate-fadeup", width: "170", position: "top"},
    { popOn: "hover", popTarget: "#zc-django", popContent: "#zc-popover-django", cssClass: "animate-fadeup", width: "170", position: "top"},
    { popOn: "hover", popTarget: "#zc-tomcat", popContent: "#zc-popover-tomcat", cssClass: "animate-fadeup", width: "170", position: "top"},
    { popOn: "hover", popTarget: "#zc-java", popContent: "#zc-popover-java", cssClass: "animate-fadeup", width: "170", position: "top"},
    { popOn: "hover", popTarget: "#zc-ruby", popContent: "#zc-popover-ruby", cssClass: "animate-fadeup", width: "170", position: "top"},
    { popOn: "hover", popTarget: "#zc-go", popContent: "#zc-popover-go", cssClass: "animate-fadeup", width: "170", position: "top"},
    { popOn: "hover", popTarget: "#zc-python", popContent: "#zc-popover-python", cssClass: "animate-fadeup", width: "170", position: "top"},
    { popOn: "click", popTarget: "#post-preview-icon", popContent: "#zc-post-info", cssClass: "animate-fadeup", width: 450, position: "top"},
    { popOn: "click", popTarget: "#code-notification", popContent: "#zc-notification-popover", cssClass: "animate-fadedown zc-notification", width: 400, position: "top"},
    { popOn: "click", popTarget: "#ide-notification-list", popContent: "#zc-idenotification-popover", cssClass: "animate-fadedown zc-notification", width: 400, position: "top"},
    { popOn: "click", popTarget: "#zc-my-projects .zc-shared-list li:nth-child(4)", popContent: "#zc-more-cd-popover", cssClass: "animate-fadedown zc-mcd", width: 400, position: "top"},
    { popOn: "click", popTarget: "#zc-shared-with-me .zc-shared-list li:nth-child(4)", popContent: "#zc-more-cd-popover", cssClass: "animate-fadedown zc-mcd", width: 400, position: "top"},
    { popOn: "hover", popTarget: "#portalAddUserInfo", popContent: "#portalAddUserInfo-popover", cssClass: "animate-fadeup", width: 400, position: "top"},
    { popOn: "click", popTarget: "#zc-moreSharedUser", popContent: "#zc-moreShareUserList", cssClass: "animate-fadedown zc-mcd", width: 400, position: "top"},
    { popOn: "click", popTarget: "#all-Project-filter", popContent: "#allProjectFilter-popover", cssClass: "animate-fadedown", width: 400, position: "top"},
    { popOn: "click", popTarget: "#all-Project-filter2", popContent: "#allProjectFilter2-popover", cssClass: "animate-fadedown", width: 340, position: "top"},
    { popOn: "click", popTarget: "#zc-guestPostInfo", popContent: "#zc-guestComment-popover", cssClass: "animate-zoomOut animate-fadedown", width: 420, position: "top"},
    { popOn: "click", popTarget: ".duplicateCss", popContent: "#zc-duplicationInfo-popover", cssClass: "animate-fadeleft", width: "auto", position: "left"},
    { popOn: "click", popTarget: ".duplicateJs", popContent: "#zc-duplicationInfoJs-popover", cssClass: "animate-fadeleft", width: "auto", position: "left"},
     { popOn: "click", popTarget: ".duplicateJs-2", popContent: "#zc-duplicationInfoJs2-popover", cssClass: "animate-fadeleft", width: "auto", position: "left"},
     { popOn: "click", popTarget: ".duplicateJs-3", popContent: "#zc-duplicationInfoJs3-popover", cssClass: "animate-fadeleft", width: "auto", position: "left"},
    { popOn: "click", popTarget: ".duplicateCss-2", popContent: "#zc-duplicationInfo-1-popover", cssClass: "animate-fadeleft", width: "auto", position: "left"},
    { popOn: "click", popTarget: ".duplicateCss-3", popContent: "#zc-duplicationInfo-2-popover", cssClass: "animate-fadeleft", width: "auto", position: "left"},
    { popOn: "click", popTarget: "#all-issues-filter", popContent: "#allIssuesFilter-popover", cssClass: "animate-fadedown", width: "auto", position: "top"},
    { popOn: "click", popTarget: "#all-complexity-filter", popContent: "#complexityFilter-popover", cssClass: "animate-fadedown", width: "300", position: "top"},
    { popOn: "click", popTarget: "#ca-dashboard-filter", popContent: "#caDashboardFilter-popover", cssClass: "animate-fadedown", width: "300", position: "top"},
    { popOn: "hover", popTarget: "#zc-complexityHelp", popContent: "#zc-complexityHelp-popover", cssClass: "animate-fadeup", width: "350", position: "top"}

  ];

  var connectpostPopver = [
    { popOn: "click", popTarget: ".zc-source-code #connect-post-count", popContent: "#view-post-list", cssClass: "animate-fadeup zc-Connectposts", width: 680, position: "top" }
  ];

  $(document).ready(function(){

    /* INIT POPOVER WITH ARROW */
    initPopover(popoverWithArrow);

    /* NOTIFICATION BUTTON  ADD AND REMOVE "ACTIVE" CLASS */
    $("#code-notification, #ide-notification-list").on("zpopoverbeforeopen",function(){
      $(this).addClass("active");
      $(this).find(".zc-notifi-count").addClass("zc-hide");
    });

    $("#code-notification, #ide-notification-list").on("zpopoverbeforeclose",function(){
      $(this).removeClass("active");
      $(this).find(".zc-notifi-count").addClass("zc-hide"); 
    });

  });

