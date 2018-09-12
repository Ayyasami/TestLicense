  /*--------------------------------------- GLOBAL VARIABLES  ------------------------------------*/

  var urlTimeout;


  /*--------------------------------- CHART FUNCTION FOR USER ACTIVITY ------------------------------*/

  var projectActivityChart = function(){
    Highcharts.chart('container-highchart', {
      chart: {
        type: 'areaspline'

      },
      title: {
        text: ''
      },
      legend: {
        itemDistance: 50,
        itemMarginTop: 8,
        itemStyle: {
          color: '#111',
          fontSize: '14px',
          fontWeight: 'normal',
          lineHeight: '18px'
        }
      },
      colors: ['#5db4ee', '#fed777', '#f88779', '#f7a35c', '#8085e9', 
               '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'],
      xAxis: {
        categories: [
          'Sun',
          'Mon',
          'Tue',
          'Wed',
          'Thu',
          'Fri',
          'Sat',
        ],
        labels: {
          style: {
            color: '#777',
            fontSize: '13px'
          }
        }
      },
      yAxis: {
        title: {
          text: ''
        },
        labels: {
          style: {
            color: '#777',
            fontSize: '13px'
          }
        }
      },
      tooltip: {
        shared: true,
        useHTML: true,
        headerFormat: '<div class="chartTooltipHeader"> {point.key}</div>',
        pointFormat: '<div class="chartTooltipContent"><span class="chartIcon" style="background:{series.color}"> &nbsp; </span> <span class="chartActivityText"> {series.name} </span><span class="chartActivityCount">{point.y}</span> </div>',
        backgroundColor: '#fff',
        borderColor: '#d9d9d9',
        shadow: false,
        padding: 15,
        borderRadius: 5
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        areaspline: {
          fillOpacity: 0.8
        },
        series: {
          lineColor: 'none'
        }
      },
      series: [{
        name: 'Creates',
        //          data: [10, 40, 20, 65, 30, 35, 20], 
        data: [10, 15, 20, 25, 0, 35, 40],
        marker: {
          enabled: false,
          symbol: 'circle'
        }
      }, {
        name: 'Commits',
        data: [4, 20, 60, 40, 80, 30, 20],
        marker: {
          enabled: false,
          symbol: 'circle'
        }
      }, {
        name: 'Deletes',
        data: [20, 12, 24, 32, 8, 24, 4],
        marker: {
          enabled: false,
          symbol: 'circle'
        }
      }]
    });
  }

  /*--------------------------------- CHART FUNCTION FOR  FOR USER ACTIVITY - SHARED ------------------------------*/
  var projectActivityChartShared = function(){
    Highcharts.chart('container-highchart-shared', {
      chart: {
        type: 'areaspline'

      },
      title: {
        text: ''
      },
      legend: {
        itemDistance: 50,
        itemMarginTop: 8,
        itemStyle: {
          color: '#111',
          fontSize: '14px',
          fontWeight: 'normal',
          lineHeight: '18px'
        }
      },
      colors: ['#5db4ee', '#fed777', '#f88779', '#f7a35c', '#8085e9', 
               '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'],
      xAxis: {
        categories: [
          'Sun',
          'Mon',
          'Tue',
          'Wed',
          'Thu',
          'Fri',
          'Sat',
        ],
        labels: {
          style: {
            color: '#777',
            fontSize: '13px'
          }
        }
      },
      yAxis: {
        title: {
          text: ''
        },
        labels: {
          style: {
            color: '#777',
            fontSize: '13px'
          }
        }
      },
      tooltip: {
        shared: true,
        useHTML: true,
        headerFormat: '<div class="chartTooltipHeader"> {point.key}</div>',
        pointFormat: '<div class="chartTooltipContent"><span class="chartIcon" style="background:{series.color}"> &nbsp; </span> <span class="chartActivityText"> {series.name} </span><span class="chartActivityCount">{point.y}</span> </div>',
        backgroundColor: '#fff',
        borderColor: '#d9d9d9',
        shadow: false,
        padding: 15
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        areaspline: {
          fillOpacity: 0.8
        },
        series: {
          lineColor: 'none'
        }
      },
      series: [{
        name: 'Creates',
        //          data: [10, 40, 20, 65, 30, 35, 20], 
        data: [10, 15, 20, 25, 0, 35, 40],
        marker: {
          enabled: false,
          symbol: 'circle'
        }
      }, {
        name: 'Commits',
        data: [4, 20, 60, 40, 80, 30, 20],
        marker: {
          enabled: false,
          symbol: 'circle'
        }
      }, {
        name: 'Deletes',
        data: [20, 12, 24, 32, 8, 24, 4],
        marker: {
          enabled: false,
          symbol: 'circle'
        }
      }]
    });
  }




  /*--------------------------------- CHART FUNCTION FOR CODE ANALSIS ------------------------------*/

  // Create the chart
  var codeAnalysisChart = function(){
    Highcharts.chart('codeAnalysis-highchart', {
      chart: {
        type: 'column'
      },
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
        type: 'category',
        labels: {
          style: {
            color: '#777',
            fontSize: '13px'
          }
        }
      },
      yAxis: {
        title: {
          text: ''
        },
        labels: {
          style: {
            color: '#777',
            fontSize: '13px'
          }
        }     

      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          pointWidth: 40,
          dataLabels: {
            enabled: true,
            style: {
              fontSize: '24px',
              color: "#111",
              fontWeight: 'normal'
            }
          },
        }
      },
//      colors: ['#ce4245', '#d86769', '#eca055', '#e1c258', 
//               '#47a0d8', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'],
      colors: ['#47a0d8', '#47a0d8', '#47a0d8', '#47a0d8', 
              '#47a0d8', '#47a0d8', '#47a0d8', '#47a0d8', '#47a0d8'],
      tooltip: {
        headerFormat: '<span style="font-size:11px">{point.name}</span><br>',
        pointFormat: '<div>\
        <span><b>{point.name}</b></span>: <b>{point.y:.f}</b></span><br/>\
        <span>  </span><br/>\
        <span>Potential Bugs: <b>{point.bugs}</b></span><br/>\
        <span>Vulnerabilities: <b>{point.vulnerabilities}</b> </span><br/>\
        <span>Code Smells: <b>{point.codesmell}</b></span><br/>\
        <span>  </span><br/>\
        <span><a href="#">Click for more details</a></span>\
        </div>',
        backgroundColor: '#fff',
        borderColor: '#d9d9d9',
        shadow: false,
        padding: 15
      },

      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'Blocker',
          y: 04,
          bugs: 2,
          vulnerabilities: 1,
          codesmell: 1,
          drilldown: 'Blocker'
        }, {
          name: 'Critical',
          y: 09,
          bugs: 4,
          vulnerabilities: 5,
          codesmell: 0,
          drilldown: 'Critical'
        }, {
          name: 'Major',
          y: 15,
          bugs: 6,
          vulnerabilities: 3,
          codesmell: 2,
          drilldown: 'Major'
        }, {
          name: 'Minor',
          y: 11,
          bugs: 8,
          vulnerabilities: 2,
          codesmell: 7,
          drilldown: 'Minor'
        }, {
          name: 'Info',
          y: 06,
          bugs: 0,
          vulnerabilities: 0,
          codesmell: 6,
          drilldown: 'Info'
        }]
      }],

    });
  }



  /*--------------------------------------- HOVERCARD FUNCTION ------------------------------------*/

  function hover_card (_this){
    var popoverOffset  = _this.offset(),
        popoverOffsetTop = popoverOffset.top,
        popoverOffsetLeft = popoverOffset.left,
        getpopoverHeight  = $('.zc-hovercard').height()+12,
        getpopoverWidth  = $('.zc-hovercard').width() / 2,
        gethoverItemWidth = _this.width(),
        gethoverItemWidth = gethoverItemWidth/2,
        getpopoverWidth =  getpopoverWidth - gethoverItemWidth,
        getName = _this.attr("data-name"),
        getEmail = _this.attr("data-mail"),
        getPermission = _this.attr("data-permission"),
        getIssue = _this.attr("data-issue"),
        getCommits = _this.attr("data-commits"),
        getImage = _this.find('img').attr('src');

    $('.zc-hovercard').delay(100).stop(true, false).fadeIn();
    $('.zc-hovercard').css('top', popoverOffsetTop-getpopoverHeight);
    $('.zc-hovercard').css('left', popoverOffsetLeft-getpopoverWidth);

    $('.zc-hovercard').find('.zc-hovercard-header h1').empty().append(getName);
    $('.zc-hovercard').find('.zc-hovercard-header .zc-email').empty().append(getEmail);
    $('.zc-hovercard').find('.zc-hovercard-header .zc-permission').empty().append(getPermission);
    $('.zc-hovercard').find('.zc-user-image').attr('src',getImage);
    $('.zc-hovercard').find('.zc-hovercard-footer .zc-details').eq(0).find('.zc-count').empty().append(getIssue);
    $('.zc-hovercard').find('.zc-hovercard-footer .zc-details').eq(1).find('.zc-count').empty().append(getCommits);
  }

  /* NAME HOVER CARD FUNCTION */

  function name_hover_card (_this){
    var popoverOffset  = _this.offset(),
        popoverOffsetTop = popoverOffset.top,
        popoverOffsetLeft = popoverOffset.left,
        getpopoverHeight  = $('.zc-hovercard').height()+12,
        getpopoverWidth  = $('.zc-hovercard').width() / 2,
        gethoverItemWidth = _this.width(),
        gethoverItemWidth = gethoverItemWidth/2,
        getpopoverWidth =  getpopoverWidth - gethoverItemWidth,
        getName = _this.attr("data-name"),
        getEmail = _this.attr("data-mail"),
        getPermission = _this.attr("data-permission"),
        getImage = _this.attr("data-image");
    console.log(getName);
    $('.zc-hovercard').delay(100).stop(true, false).fadeIn();
    $('.zc-hovercard').css('top', popoverOffsetTop-getpopoverHeight);
    $('.zc-hovercard').css('left', popoverOffsetLeft-getpopoverWidth);
    $('.zc-hovercard').find('.zc-hovercard-header h1').empty().append(getName);
    $('.zc-hovercard').find('.zc-hovercard-header .zc-email').empty().append(getEmail);
    $('.zc-hovercard').find('.zc-user-image').attr('src',getImage);
    $('.zc-hovercard').find('.zc-hovercard-header .zc-permission').remove();
  }

  /*---------------------------------------  LINE PROGRESS BAR---------------------------------------*/

  var animateLineBar = function(percentage){
    $('#Lineprogressbar').css("width", percentage+"%");
  }

  /*--------------- URL VIEW CHANGE FUNCTION ----------------*/
  var viewChange = function(getId, getContent, setPageTitle, setTitle,  setClass){
    clearTimeout(urlTimeout);
    $("#article-template").fadeOut(1000, function() {
      if(!($("#article-template").is(':visible'))) {
        $("#article-template").load(getContent);
        $(".sidebar-nav li").removeClass("selected");
        getId.parent("li").addClass("selected");
        $("body").addClass(setClass);      
        $("#zc-pageTitle").empty().append(setPageTitle);
        $('title').empty().append("Zoho Code - " + setTitle);
      }
    });
  }

  var showViewChange = function(){
    $("#Lineprogressbar").css({"display":"none", "width":"0"});
    $("#article-template").fadeIn();
  }


  /*--------------------------------------- SHOW AND HIDE DIALOG ---------------------------------------*/

  var show_dialog  = function(getdialogId) {
    if(getdialogId.is("#zc-deleteUser-dialog")) {
      $(getdialogId).addClass("zc-showDialog")
      $("#zc-overlay-black").addClass("zc-isVisible");
    } else {
      $(getdialogId).addClass("zc-showDialog")
      $("#zc-overlay-white").addClass("zc-isVisible");
    } 
  }

  var hide_dialog  = function() {
    $(".zc-overlay").removeClass("zc-isVisible");
    $(".zc-dialog").removeClass("zc-showDialog")
  }

  var show_Confirmdialog  = function(getdialogId) {
    $(".zc-confirm-overlay").addClass("zc-isVisible");
    getdialogId.addClass("zc-showDialog");
  }

  var hide_Confirmdialog  = function(getdialogId) {
    $(".zc-confirm-overlay").removeClass("zc-isVisible");
    getdialogId.removeClass("zc-showDialog");
  }

  // RENAME DIALOG
  var rename_dialog = function(getcardId, getdialogId) {
    var getProjectName = getcardId.find(".zc-card-header .zc-card-title h2").attr("data-title");
    getdialogId.find(".zc-input").val(getProjectName);
    getdialogId.find(".zc-input").select().focus();
  }

  //TOAST MESSAGE POSITION 
  var toast_Position = function() {
    var toastWidth = $(".show-toast-message").outerWidth();
    toastWidth = -(toastWidth/2);
    $(".show-toast-message").css("margin-left",toastWidth);
  }


  /*--------------------------------------- SET ACE EDITOR FUNCTION ---------------------------------------*/
  var aceEditor = function(getEditorID, getHighlightStart, getHighlightEnd){
    var editor = ace.edit(getEditorID);
    editor.setTheme("ace/theme/chrome");
    editor.session.setMode("ace/mode/javascript");
    editor.session.setUseWrapMode(true); // LINE WRAP MODE
    editor.setShowPrintMargin(false);
    editor.setOption("highlightActiveLine", false);
    editor.setOptions({
      fontSize: "14px"
    });
    var Range = ace.require('ace/range').Range;
    editor.setReadOnly(true);
    editor.getSession().setMode("ace/mode/javascript");
    setTimeout(function() {
      editor.session.addMarker(new Range(getHighlightStart, 0,  getHighlightEnd, 0), "foo", "line");
    }, 100);
  }

  /*--------------------------------------- DATE FIXED ---------------------------------------*/

  var dateHighlight = function() {
    $(".zc-timelineWrap").each(function() {
      var el = $(this),
          offset       = el.offset(),
          offset       = offset.top - 10;
      scrollTop      = $('#article-template').scrollTop(),
        floatingHeader = $(".fixed-dateHeader", this);
      if((0 > offset))  {
        floatingHeader.css({
          "visibility": "visible"
        });
      } else {
        floatingHeader.css({
          "visibility": "hidden"
        });      
      };
    });
  } 

  // TIMLINE SCROLL FIXED HEADER
  setTimeout(function() {
    $(".zc-timelineWrap").each(function() {
      clonedDateRow = $(".zc-dateHeader", this);
      clonedDateRow.before(clonedDateRow.clone()).addClass("fixed-dateHeader");
    });
  },400);

  $(document).ready(function () { 

//    /* INIT ZOHO COMPONENTS */
//    ZComponents.init();

    /* TOOLTIP */

    $("body").ztooltip({
      pointer  : false
    });

    /* SHOW TAB */
    $("#myTab li:eq(0) a").tab('show');
    $("#chooseCloud li:eq(0) a").tab('show');

    /*------------------------------------------------------------------------------------------------------                   SIDEBAR URL REDIRECTION
      --------------------------------------------------------------------------------------------------------*/
    $(document).on('click', '#zc-new-project',function() {
      clearTimeout(urlTimeout);
      animateLineBar(100);
      urlTimeout = setTimeout(function() {
      //  window.location.href = 'http://mani-2491:8081/code/light/dashboard/code.html';   
           window.location.href = 'http://zohocode/dashboard/code.html'; 
        // window.location.href = 'http://zohocode/demo/dashboard/code.html'; 
      }, 1000);

    });

    $(document).on('click', '#zc-projects', function() {
      clearTimeout(urlTimeout); 
      animateLineBar(100);
      urlTimeout = setTimeout(function() {
      //  window.location.href = 'http://mani-2491:8081/code/light/dashboard/index.html';
       window.location.href = 'http://zohocode/dashboard/index.html'; 
        //window.location.href = 'http://zohocode/demo/dashboard/code.html'; 
      }, 1000);
    });

    $(document).on('click', '#zc-repositories', function() {
      clearTimeout(urlTimeout);
      animateLineBar(100);
      urlTimeout = setTimeout(function() {
        // window.location.href = 'http://mani-2491:8081/code/light/dashboard/repositories.html?page=codeAnalysisVariation';
         window.location.href = 'http://zohocode/dashboard/repositories.html?page=codeAnalysisVariation';
        // window.location.href = 'http://zohocode/demo/dashboard/code.html'; 
      }, 1000);
    });

    // SET URL FUNCTION 
    var setURL = function(getURL) {
          //var myURL  = 'http://mani-2491:8081/code/light/portal-owner-view/index.html',
           var myURL  = 'http://zohocode/portal-owner-view/index.html',
          //  var myURL  = 'http://zohocode/demo/portal-owner-view/index.html',
          currentURL = myURL + '?page='+getURL+'';
          window.open(currentURL, "_self");
    }

    $('#admin-portal-info').on('click', function() {
      clearTimeout(urlTimeout);
      animateLineBar(100);
      urlTimeout = setTimeout(function() {
        setURL('portalInfo');
      }, 1000);
    });

    $('#admin-users').on('click', function() {
      clearTimeout(urlTimeout);
      animateLineBar(100);
      urlTimeout = setTimeout(function() {
        setURL('users');
      }, 1000);
    });
    
    // GET QUERY STRING FROM URL ( REPOSITORIES DEMO )
    var pageQueries = {};
    $.each(document.location.search.substr(1).split('&'),function(c,q){
      var i = q.split('=');
      if(!(i == "" || i == null))  {
        pageQueries[i[0].toString()] = i[1].toString();
      } 
    });

    // SHOW THE CONTENT BASED ON PAGE 
    // NEW PROJECT CONTENT 
    if(pageQueries.page == "codeAnalysisVariation") {
       $(".zc-caDashboard-variation-1").remove();
      $(".zc-caDashboard-variation-2").show();
    } 


    /*------------------------------------------------------------------------------------------------------                    FIXED TIMLINE IN PROJECT INFO
    --------------------------------------------------------------------------------------------------------*/

    /* PROJECT INFO FIXED TIMELINE */  
    $(".article").scroll(function(){
      var sticky = $('#zc-article'),
          scroll = $("#zc-article").scrollTop();
      if (scroll >= 566) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    });

    /* MY PROJECT */
    $(document).on("click","#zc-timelineAccordion .zc-accordionHeader", function(){
      $("#zc-timelineAccordion .zc-accordionContent").addClass("zc-accordionCollapse");
      $(this).next(".zc-accordionContent").removeClass("zc-accordionCollapse");

      $("#zc-timelineAccordion .zc-accordionPanel").removeClass("active");
      $(this).parent(".zc-accordionPanel").addClass("active");
    });

    $(document).on("click","#zc-timelineAccordion .zc-monthsList a", function(){
      $("#zc-timelineAccordion .zc-monthsList a").removeClass("active");
      $(this).addClass("active");
    });

    $(document).on("click", "#zc-projectTimeline-2017", function(){
      $("#zc-projectTimeline-2017").next(".zc-accordionContent").find(".zc-monthsList li:eq(0) a").addClass("active");
    });

    $(document).on("click", "#zc-projectTimeline-2016", function(){
      $("#zc-projectTimeline-2016").next(".zc-accordionContent").find(".zc-monthsList li:eq(0) a").addClass("active");
    });

    $(document).on("click", "#zc-projectTimeline-2015", function(){
      $("#zc-projectTimeline-2015").next(".zc-accordionContent").find(".zc-monthsList li:eq(0) a").addClass("active");
    });

    /* SHARED WITH ME */ 
    $(document).on("click","#zc-share-timelineAccordion .zc-accordionHeader", function(){
      $("#zc-share-timelineAccordion .zc-accordionContent").addClass("zc-accordionCollapse");
      $(this).next(".zc-accordionContent").removeClass("zc-accordionCollapse");

      $("#zc-share-timelineAccordion .zc-accordionPanel").removeClass("active");
      $(this).parent(".zc-accordionPanel").addClass("active");
    });

    $(document).on("click","#zc-share-timelineAccordion .zc-monthsList a", function(){
      $("#zc-share-timelineAccordion .zc-monthsList a").removeClass("active");
      $(this).addClass("active");
    });

    /* TIMELINE SHARED WITH ME */    
    $(document).on("click", "#zc-share-projectTimeline-2017", function(){
      $("#zc-share-projectTimeline-2017").next(".zc-accordionContent").find(".zc-monthsList li:eq(0) a").addClass("active");
    });

    $(document).on("click", "#zc-share-projectTimeline-2016", function(){
      $("#zc-share-projectTimeline-2016").next(".zc-accordionContent").find(".zc-monthsList li:eq(0) a").addClass("active");
    });

    $(document).on("click", "#zc-share-projectTimeline-2015", function(){
      $("#zc-share-projectTimeline-2015").next(".zc-accordionContent").find(".zc-monthsList li:eq(0) a").addClass("active");
    });

    /* BACK TO TOP */

    //SCROLL TO TOP 
    $(document).on("click", "#backtoTop-Btn", function(){
      $("#zc-article").animate({ scrollTop: 0 }, "slow");
    });



    $('#zc-article').scroll(dateHighlight).trigger("scroll");



    /*----------------------------------------------------------------------------------------------------                                                      ADD TOOLTIP FOR CHOSEN
   -------------------------------------------------------------------------------------------------------*/

    $("body").on("click", ".chosen-container .chosen-single", function(){
      $(".chosen-container .chosen-results li" ).each(function( index ) {
        var getlistText = $(this).text(),
            getlistText = $.trim(getlistText);
        $(this).prop('title', getlistText);
      });
    });

    $("body").on("click", ".chosen-container .chosen-results li", function(){
      var getlistText =  $(this).text(),
          getlistText = $.trim(getlistText);
      $(this).closest(".chosen-container").find('.chosen-single span').prop('title', getlistText);
    });



    /*--------------------------------------------------------------------------------------------------                                                     LOADER
    ----------------------------------------------------------------------------------------------------*/
    var progressbar = $('#zc-progress-bar'),
        max = progressbar.attr('max'),
        time = (1000/max)*10,    
        value = progressbar.val();


    var loading = function() {
      value += 1;
      var tooltipValue = value-8;
      addValue = progressbar.val(value);
      $('.progress-value').html(value + '%');
      $('.zc-load-value').empty().append(value + '%');
      $(".zc-load-value").css("left", tooltipValue + '%');
      if (value == max) {
        clearInterval(animate);                    
      } 

      if(value == 10){
        $('.zc-load-msg').empty().append("Creating project setup").hide().fadeIn(400);
      } 

      if(value == 20) {
        $('.zc-load-msg').empty().append("Cloning the repository");
      }

      if(value == 40) {
        $('.zc-load-msg').empty().append("Initializing development environment");
      }

      if(value == 60) {
        $('.zc-load-msg').empty().append("Setting up the Zoho code check");
      }

      if(value == 80) {
        $('.zc-load-msg').empty().append("Setting up deployment");
      }

      if(value == 100) {
        $('.zc-load-msg').empty();
      }

    };

    var animate = setInterval(function() {
      loading();
    }, time);






    /*-----------------------------------------------------------------------------------------------------------
                       ON DOCUMENT LOAD CHANGES 
    -----------------------------------------------------------------------------------------------------------*/

    $('#zc-required-build').prop('disabled', true).trigger("chosen:updated"); 
    $('#zc-required-branch').prop('disabled', true).trigger("chosen:updated"); 

    // APPEND CREATE NEW ENVIRONMENT BUTTON ON DOCUMENT LOADING
    $("#zc-selected-enviro").css("display", "none");

    //APPEND CHOOSEN SELECT ARROW 
    $(".chosen-container-single .chosen-single div b").append('<svg> <use xlink:href="#svg-selectarrow-icon"> </use> </svg>');

    // ACTIVE 
    $('#zc-required-service').trigger('chosen:activate');



    /*-------------------------------------------------------------------------------------------------------
                     GLOBAL VARIABLES
                   ---------------------------------------------------------------------------------------------------------*/

    var windowHeight = $( window ).height(); 


    /*------------------------------------------------------------------------------------------------                                                            GLOBAL FUNCTIONS
   -------------------------------------------------------------------------------------------------*/

    // SHOW POPUP
    var showPopup = function() {
      $('.zc-overlay, .zc-popup-wrap').show();  
    }

    // HIDE POPUP
    var hidePopup =  function() {
      $('.zc-overlay, .zc-popup-wrap').hide();  
    }

    // SHOW ERROR FOR SELECTBOX
    var show_error = function show_error(field) {
      field.addClass('zc-error');
      field.addClass('zc-error');
    }

    // HIDE ERROR FOR SELECTBOX
    var hide_error = function(field) {
      field.removeClass('zc-error');
    }

    // PROJECT NAME FIELD VALIDATION
    var project_name_validation = function (errorId, _this) {
      $(errorId).find('.zc-hint').removeClass("zc-error-msg");
      var inputVal = _this.val();
      var characterReg = /^([a-zA-Z0-9-_\s]{3,100})$/;
      if(!characterReg.test(inputVal)) {
        $(errorId).find('.zc-hint').addClass("zc-error-msg");
      }
    }


    // SHOW ERROR FOR RENAME TEXTBOX VALIDATION
    var field_empty_error = function(field) {
      $(field).addClass("zc-error");
    }

    var field_empty_error_clear = function(field) {
      $(field).removeClass("zc-error");
    }

    // PROJECT RENAME FIELD VALIDATION 
    var project_rename_validation = function ( _this) {
      _this.next('.zc-hint').removeClass("zc-error-msg");
      _this.next('.zc-hint').empty().append("Can contain alphabets, numbers, hyphens (-), and underscores (_).");
      field_empty_error_clear(_this);
      var inputVal = _this.val();
      var characterReg = /^([a-zA-Z0-9-_\s]{0,100})$/;
      if(!characterReg.test(inputVal)) {
        _this.next('.zc-hint').addClass("zc-error-msg");
        _this.next('.zc-hint').empty().append("Project name has invalid characters. It can contain alphabets, numbers, hyphens (-), and underscores (_).");
        field_empty_error(_this);
      }
    }


    // SHOW ERROR FOR RENAME TEXTBOX VALIDATION
    var renametextfield_show_error = function(field) {
      $(field).addClass("zc-error");
      $(field).next('.zc-hint').addClass("zc-error-msg"); 
      //  $(errormsg).css("display","inline-block"); 
    }

    // HIDE ERROR FOR RENAME TEXTBOX VALIDATION
    var renametextfield_hide_error = function(field) {
      $(field).removeClass("zc-error");
      $(field).next('.zc-hint').removeClass("zc-error-msg");
      //$(errormsg).css("display","none"); 
    }


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

    // USERNAME AND PASSWORD FIELD VALIDATION
    var repository_errorMessage = function(message, position) {
      $('#zc-error-msg label').empty().append(message); 
      $('#zc-error-msg').css("display","inline-block");
      $('#zc-error-msg label').css("margin-left",position);
    }

    // TEXT BOX FIELD VALIDATION
    var zoho_repository_errorMessage = function(message, position) {
      $('#zr-credentials-error-msg label').empty().append(message); 
      $('#zr-credentials-error-msg').css("display","inline-block");
      $('#zr-credentials-error-msg label').css("margin-left",position);
    }

    // SHOW AVATAR LIST 
    var change_avatar = function(getListId, _this) {
      var listLeft = _this.offset().left;
      var listTop = _this.offset().top;
      var avatarPos =   windowHeight - listTop;
      if(avatarPos <= 300){
        $(".zc-avatar-list").css({"left":listLeft-80, "top":listTop-240});  
      } else {
        $(".zc-avatar-list").css({"left":listLeft-80, "top":listTop+60,"box-shadow":"0 4px 5px rgba(101, 101, 101, 0.15)"});  
      }

      $(getListId).fadeToggle();
      $(getListId).focus();
      $(getListId).find('li.selected').first().focus();
    }

    //CHOOSE AVATAR
    var select_avatar = function(getListId, _this){
      $('.zc-avatar-list li').removeClass('selected');
      _this.addClass('selected');
      var imagesrc = _this.find('span').attr('class'),
          getSvgAvatar =  _this.find('span').html();
      $(getListId).empty().append('<span class="'+imagesrc+'">'+ getSvgAvatar +'</span> <span class="zc-avatar-change">Change...</span> ');
      $(".zc-avatar-list").hide();
    }

    // ENVIRONMENT DESCRIPTION
    var environment_message = function(logo, name, decription) {
      $("#zc-enviro-name").empty().append(name); 
      $("#zc-enviro-desc").empty().append(decription); 
      $("#zc-selected-enviro .zc-enviro-logo span").removeClass().addClass(logo);
    }

    // SEARCH FUNCTIONS

    // SHOW & HIDE CLEAR SEARCH X ICON BASED ON CONTENT ENTER

    var show_clearSearch = function(getInputboxId, getClearSearchId) {
      var hasSearchText = getInputboxId.val().length;
      if(hasSearchText > 0 ) {
        getClearSearchId.css("display","block");
      } else {
        getClearSearchId.css("display","none");
      }
    }

    // SHOW SEARCH RESULT BASED ON THE SEARCH
    var show_searchResult = function(getCurrentValue, getInputboxId, getSearchList, getSearchElement, getNoResultElement, getTableId)     {
      if (getCurrentValue.value.length > 0) {
        getSearchList.css("display", "table-row").filter(function () {
          return $(this).find(getSearchElement).text().toLowerCase().indexOf(getInputboxId.val().toLowerCase()) == -1;
        }).hide();
      } else {
        getSearchList.css("display", "table-row");
      }
      var gridRowLength =  getTableId.find(".zc-grid-row:visible").length;
      if(gridRowLength <= 0) {
        getNoResultElement.css("display", "block");
      } else {
        getNoResultElement.css("display", "none");
      }   
    }
    
    


    // ALL PROJECT LIST SEARCH
    $(document).on("keyup click input", "#zc-allProjectSearch-input", function () {
      var _this      = this,
          setInputboxId      = $("#zc-allProjectSearch-input"),
          setSearchList      = $("#zc-allprojectList-tableWrap .zc-grid-row"),
          setSearchElement   = '.zc-projectName',
          setNoResultElement = $("#no-ProjectFound"),
          setTableId         = $("#zc-allprojectList-tableWrap");
      show_searchResult(_this,setInputboxId,setSearchList, setSearchElement, setNoResultElement, setTableId);
    });

    // SEARCH CLEAR LIST CLOSE ICON
    $(document).on("keyup", "#zc-allProjectSearch-input", function(){
      var setInputboxId    = $("#zc-allProjectSearch-input"),
          setClearSearchId = $("#zc-allProjectSearch-clear");
      show_clearSearch(setInputboxId, setClearSearchId);
    });

    // CLEAR RESULT
    $(document).on("click", "#zc-allProjectSearch-clear", function() {
      $("#zc-allProjectSearch-input").val("");
      $("#zc-allProjectList-table .zc-grid-row").show();
      $(this).css("display","none");
      $("#no-ProjectFound").hide();
    });
    
    
    // ALL USER LIST SEARCH
    $(document).on("keyup click input", "#zc-user-search", function () {
          var _this = this,
          setInputboxId      = $("#zc-user-search"),
          setSearchList      = $("#zc-userList .zc-grid-row"),
          setSearchElement   = '.zc-user-name',
          setNoResultElement = $("#no-userFound"),
          setTableId         = $("#zc-userList");
          show_searchResult(_this,setInputboxId,setSearchList, setSearchElement, setNoResultElement, setTableId);
    });

    // SEARCH CLEAR LIST CLOSE ICON
    $(document).on("keyup", "#zc-user-search", function(){
      var setInputboxId    = $("#zc-user-search"),
          setClearSearchId = $("#zc-userclearSearch");
          show_clearSearch(setInputboxId, setClearSearchId);
    });

    // CLEAR RESULT
    $(document).on("click", "#zc-userclearSearch", function() {
      $("#zc-user-search").val("");
      $("#zc-userList .zc-grid-row").show();
      $(this).css("display","none");
      $("#no-userFound").hide();
    });



    /*-------------------------------------------------------------------------------------------------------------
                        DEVELOP AN EXISTING ZOHO SERVICE  [ CREATE BUTTON CLICK ]
                    -----------------------------------------------------------------------------------------------------------------*/

    $('#create-project-btn').on('click',function() {

      var repositoryUsername = $('#rep-username').val(),
          repositoryPassword     = $('#rep-password').val(),
          schemaName             = $('#zc-schema-name').val(),
          iamserviceName         = $("#zc-service-name").val(),
          iamserviceUrl          = $("#zc-service-url").val(),
          projectName            = $('#zc-project-name').val(),
          zsService              = $('#zc-required-service'),
          zsBuild                = $('#zc-required-build'),
          zsBranch               = $('#zc-required-branch'),
          characterReg           = /^([a-zA-Z0-9-_\s]{3,100})$/,
          inputVal               = projectName,
          ifcheck                = true;   

      if(zsService.prop('selectedIndex') == 0){
        show_error(zsService);
        ifcheck=false;
      } else {
        hide_error(zsService);
      }

      if(zsBuild.prop('selectedIndex') == 0){
        show_error(zsBuild);
        ifcheck=false;  
      } else {
        hide_error(zsBuild);
      }

      if(zsBranch.prop('selectedIndex') == 0){
        show_error(zsBranch); 
        ifcheck=false;
      } else {
        hide_error(zsBranch);
      }

      if(schemaName=="") {
        textfield_show_error('#zc-schema-name', '#zc-schema-required');
        ifcheck=false;
      } else {
        textfield_hide_error('#zc-schema-name', '#zc-schema-required');
      }

      if(iamserviceName =="") {
        textfield_show_error('#zc-service-name', '#zc-servicename-required');
        ifcheck=false;
      } else {
        textfield_hide_error('#zc-schema-name', '#zc-schema-required');
      }

      if(iamserviceUrl =="") {
        textfield_show_error('#zc-service-url', '#zc-serviceurl-required');
        ifcheck=false;
      } else {
        textfield_hide_error('#zc-service-url', '#zc-serviceurl-required');
      }

      if(repositoryUsername=="admin" && repositoryPassword=="1234") {
        $('#rep-username, #rep-password').removeClass("zc-error");
        $('#zc-error-msg').css("display","none");
        $('#zc-error-msg label').empty("");
        $('#zc-error-msg label').css("margin-left","212px");
      }  else if (repositoryUsername=="" && repositoryPassword=="") {
        $('#rep-username, #rep-password').addClass("zc-error");
        repository_errorMessage('Enter user name and password','212px');
        ifcheck=false;
      }  else if(repositoryUsername=="") {
        $('#rep-username').addClass("zc-error");
        $('#rep-password').removeClass("zc-error");
        repository_errorMessage('Enter user name','212px');
        ifcheck=false;
      }  else if( repositoryPassword=="") {
        $('#rep-password').addClass("zc-error");
        $('#rep-username').removeClass("zc-error");
        repository_errorMessage('Enter a password','460px');
        ifcheck=false;
      }  else if(repositoryUsername!="admin" || repositoryPassword!="1234"){
        $('#rep-username, #rep-password').addClass("zc-error");
        repository_errorMessage('You entered an incorrect user name or password.','212px');
        ifcheck=false;
      }   


      if( projectName=="" ) {
        textfield_show_error('#zc-project-name', '#zc-project-error');
        ifcheck=false;
      } else if(!characterReg.test(inputVal)) {
        textfield_show_error('#zc-project-name', '#zc-project-error');
        ifcheck=false;     
      } else {
        textfield_hide_error('#zc-project-name', '#zc-project-error');
      }


      if( ifcheck == true) {
        var getAvatar = $('#zc-change-avatar').find('.zc-avatar').attr('class'),
            getSvgAvatar = $('#zc-change-avatar').find('.zc-avatar').html();
        $('.zc-loading-title h1').empty().append('Creating '+ '"' + projectName + '"' );
        $('.zc-loading-avatar span').removeClass('').addClass(getAvatar );
        $('.zc-loading-avatar span').append(getSvgAvatar);


        $('.zc-loader-overlay').fadeIn();
        var animate = setInterval(function() {
          loading();
        }, time);

        setTimeout(function() {
          window.location.href = '../ide/';
        }, 10000);

      } 

      // LOCAL STORAGE        
      var localprojectName    =  $('#zc-project-name').val();
      var localprojectDesc    = $('#ezs-description').val();  
      var localprojectAvatar  = $('#zc-change-avatar').children('img').attr('src');  
      var localprojectDetails = { name: localprojectName, desc: localprojectDesc, avatar: localprojectAvatar  };     
      localStorage.setItem("localprojectDetails", JSON.stringify(localprojectDetails));    

    });


    /*----------------------------------------------------------------------------------------------------------------------------------------
                                                                                                                                     DEVELOP AN EXISTING ZOHO SERVICE  [ ON SELECT BOX CHANGE AND KEY UP CHANGES ]
                                                                                                        ----------------------------------------------------------------------------------------------------------------------------------------*/   

    $('#zc-required-service').on('change', function(){
      if($('#zc-required-service').prop('selectedIndex') == 0){
        $('#zc-required-service').addClass('zc-error');
      } else {

        var getServicevalue = $("#zc-required-service").chosen().val();
        getServicevalue = getServicevalue.toLowerCase();

        $('#zc-required-service').removeClass('zc-error');
        $('#zc-required-build').prop('disabled', false).trigger("chosen:updated"); 
        $('#zc-required-branch').prop('disabled', false).trigger("chosen:updated"); 
        $("#zc-schema-name").val(getServicevalue +  '_ jbossdb');
        $("#zc-project-name").val(getServicevalue);

      }
    });


    $('#zc-required-build').on('change', function(){
      if($('#zc-required-build').prop('selectedIndex') == 0){
        $('#zc-required-build').addClass('zc-error');
      } else {
        $('#zc-required-build').removeClass('zc-error');
      }
    });


    $('#zc-required-branch').on('change', function(){
      if($('#zc-required-branch').prop('selectedIndex') == 0){
        $('#zc-required-branch').addClass('zc-error');
      } else {
        $('#zc-required-branch').removeClass('zc-error');
      }
    });


    $("#rep-password").on("focus", function() {
      var repUsername = $('#rep-username').val(),
          repPassword = $('#rep-password').val();

      if(repUsername !='' && repPassword =='')  {
        $('#rep-username').removeClass("zc-error");
        $('#zc-error-msg label').empty().append('Enter a password');
        $('#zc-error-msg label').css("margin-left","460px");
      }  else if(repUsername !='' && repPassword !='')  {
        $('#rep-username').removeClass("zc-error");
        $('#zc-error-msg label').empty();
        $('#zc-error-msg label').css("margin-left","460px");
      }
    });


    $("#zc-project-name").on("focus", function() {
      var repPassword = $('#rep-password').val();
      if(repPassword !='') {
        $('#rep-password').removeClass("zc-error");
        $('#zc-error-msg').css("display","none");
        $('#zc-error-msg label').empty("");
        $('#zc-error-msg label').css("margin-left","212px");
      }
    });


    $('#zc-project-name').keydown(function() {
      project_name_validation ('#zc-project-error', $(this));
    });


    $('#ezs-description').on("focus", function() {
      var zesProjectname =$('#zc-project-name').val();
      if(zesProjectname !='') {
        $('#zc-project-name').removeClass("zc-error");
      }
    });   


    /*-------------------------------------------------------------------------------------------------------
                    DEVELOP AN EXISTING ZOHO SERVICE  [ CANCEL BUTTON ], Create New Project  [ Cancel Button ]
                 -------------------------------------------------------------------------------------------------------*/ 

    $('#cancel-ezs-project-btn, #cancel-new-project-btn').on('click', function() {
      window.location.href = 'index.html';
    });

    /*----------------------------------------------------------------------------------------------
                            CREATE NEW PROJECT  [ CREATE BUTTON CLICK ]
                -------------------------------------------------------------------------------------------------*/

    $('#create-new-project-btn').on('click', function(){   
      var projectName     = $('#zc-create-project-name').val(),
          devlopmentEnvironment =$('#development-environment-list'),
          ifcheck =true;   

      if( projectName=="" ) {
        textfield_show_error('#zc-create-project-name', '#zc-create-project-error');
        ifcheck=false;
      } else {
        textfield_hide_error('#zc-create-project-name', '#zc-create-project-error');
      }

      var characterReg = /^([a-zA-Z0-9\s]{3,100})$/;
      var inputVal = projectName;
      if(!characterReg.test(inputVal)) {
        $('#zc-create-project-name').addClass("zc-error");
        $('#zc-create-project-error .zc-hint').addClass("zc-error-msg");
        ifcheck=false;     
      }

      //        if(devlopmentEnvironment.val() == ''){
      //            show_error(devlopmentEnvironment);
      //            ifcheck=false;
      //        } else {
      //            hide_error(devlopmentEnvironment);
      //        }

      if($('#zc-selected-enviro').css('display') == 'none')
      {
        ifcheck=false;
        $('#zc-newenviro-error-msg').css("display","block");
      }

      else {

      }


      if( ifcheck == true) {

        var getAvatar = $('#zc-new-change-avatar').find('.zc-avatar').attr('class'),
            getSvgAvatar = $('#zc-change-avatar').find('.zc-avatar').html();
        //$('.zc-loading-title h1').empty().append(projectName);
        $('.zc-loading-title h1').empty().append('Creating '+ '"' + projectName + '"' );
        $('.zc-loading-avatar span').removeClass('').addClass(getAvatar);
        $('.zc-loading-avatar span').append(getSvgAvatar);
        $('.zc-loader-overlay').fadeIn();
        var animate = setInterval(function() {
          loading();
        }, time);
        setTimeout(function() {
          window.location.href = '../ide/';
        }, 10000);
      } 
    });

    /*----------------------------------------------------------------------------------------------------------
                                                              CREATE NEW PROJECT  [TAB CLICK ]
                         ---------------------------------------------------------------------------------------------------------*/ 

    $('#zc-create-new-project > a').on('click', function() {
      setTimeout(function() {
        $('#zc-create-project-name').focus();
      },100);
    });    

    /*----------------------------------------------------------------------------------------------------------------------------------------
                                                                                                                                     CREATE NEW PROJECT  [ ON SELECT BOX CHANGE AND KEY UP CHANGES ]
                                                                                                        ----------------------------------------------------------------------------------------------------------------------------------------*/    

    $('#development-environment-list').on('change', function(){
      if($('#development-environment-list').val() == ''){
        $('#development-environment-list').addClass('zc-error');
      } else {
        $('#development-environment-list').removeClass('zc-error');
      }
    });

    $('#zc-create-project-name').keyup(function() {
      project_name_validation ('#zc-create-project-error', $(this));
    });

    /*------------------------------------------------------------------------------------------- 
                                                                CHANGE AVATAR
                              ---------------------------------------------------------------------------------------------*/ 

    $('#zc-change-avatar').on('click',function(event) {
      event.stopPropagation();
      change_avatar('#zc-avatar-list',$(this));
    });

    $('#zc-change-avatar').on('keyup',function(event) {
      event.stopPropagation();
      if (event.keyCode == 40 ||  event.keyCode == 32) {
        change_avatar('#zc-avatar-list',$(this));
      }
    });

    $('#zc-avatar-list li').on('click', function() {
      select_avatar('#zc-change-avatar', $(this));
      $('#create-project-btn').focus();
    });


    $('#zc-new-change-avatar').on('click',function(event) {
      event.stopPropagation(); 
      change_avatar('#zc-new-avatar-list',$(this));
    });


    $('#zc-new-change-avatar').on('keyup',function(event) {
      event.stopPropagation(); 
      if (event.keyCode == 40 || event.keyCode == 32) {
        change_avatar('#zc-new-avatar-list',$(this));
      }
    });

    $('#zc-new-avatar-list li').on('click', function() {
      select_avatar('#zc-new-change-avatar', $(this));
      $('#create-new-environment').focus();
    });


    /*----------------------------------------------------------------------------------------------------
                                                                    CHOOSE ENVIRONMENT BUTTON ACTIONS
                              ------------------------------------------------------------------------------------------------------*/   

    $('#choose-environment').on('click', function() {
      showPopup();
      $(".zc-environment-list .zc-environment").removeClass("selected");
      $("#zc-django").addClass("selected");
      $("#environment-name").val('Django Projects').select();
    });    

    /*-------------------------------------------------------------------------------------------------
                                                                       CHOOSE DEVELOPMENT TEMPLATE
                              -------------------------------------------------------------------------------------------------*/ 

    $(".zc-environment-list .zc-environment").on("click", function() {
      $(".zc-environment-list > .zc-environment").removeClass("selected");
      $(this).addClass("selected");
    });

    /*----------------------------------------------------------------------------------------------------
                                                                   CHOOSE DEVELOPMENT TEMPLATE - HOVER
                              -----------------------------------------------------------------------------------------------------*/ 
    $('.zc-popover').on('click',function(event) {
      event.stopPropagation();
    });

    /*----------------------------------------------------------------------------------------------------
                                                               POP HOVER CARD FOR PROJECTS CO DEVELOPERES
                              --------------------------------------------------------------------------------------------------------*/

    $('.zc-hovercard').on('click',function(event) {
      event.stopPropagation();
    });

    //      $('.zc-hovercard').hover(function() {
    //        $(this).stop(true, false).show();
    //      }, function() {
    //        $('.zc-hovercard').hide();
    //      });


    $("#zc-my-projects .zc-shared-list li, #zc-shared-with-me .zc-shared-list li").not("#zc-my-projects .zc-shared-list li:nth-child(4), #zc-shared-with-me .zc-shared-list li:nth-child(4)").mouseenter( function(event) {
      hover_card ($(this));
    }).mouseleave(function() {
      $('.zc-hovercard').delay(100).stop(true, false).fadeOut('fast');
    });

    // PORTAL INFO CHANGE OWNER (ADMIN)
    $(document).on("mouseenter", ".adminUser-card .zc-adminUser-pic", function(event) {
      hover_card ($(this));
    });

    $(document).on("mouseleave", ".adminUser-card .zc-adminUser-pic", function(event) {
      $('.zc-hovercard').delay(100).stop(true, false).fadeOut('fast');
    });

    $(document).on("mouseenter", ".zc-hovercard", function() {
      $(this).stop(true, false).show();
    });

    $(document).on("mouseleave", ".zc-hovercard", function() {
      $('.zc-hovercard').hide();
    });

    // USER ACTIVITY SHARED USERS

    $(document).on("mouseenter", ".zc-activitySharedUsers > .zc-user-pic", function(event) {
      hover_card ($(this));
    });

    $(document).on("mouseleave", ".zc-activitySharedUsers > .zc-user-pic", function(event) {
      $('.zc-hovercard').delay(100).stop(true, false).fadeOut('fast');
    });

    // USER ACTIVITY USERS NAME HOVER CARD 

    $(document).on("mouseenter", ".zc-showNameCard", function(event) {
      name_hover_card ($(this));
    });

    $(document).on("mouseleave", ".zc-showNameCard", function(event) {
      $('.zc-hovercard').delay(100).stop(true, false).fadeOut('fast');
    });


    $("#zc-card-data .zc-shared-list ul li").eq(3).append("<span class='more-cd'> +1 </span>");

    $("#zc-card-data-2 .zc-shared-list ul li").eq(3).append("<span class='more-cd'> +4 </span>");

    $("#zc-card-data-4 .zc-shared-list ul li").eq(3).append("<span class='more-cd'> +2 </span>");





    /*------------------------------------------------------------------------------------------------------------ 
                                                               CHOOSE DEVELOPMENT TEMPLATE [DONE BUTTON CLICK]
                                     -------------------------------------------------------------------------------------------------------------*/         
    $('#create-environment').on('click', function() {
      $("#create-new-environment, #zc-newenviro-error-msg").css("display","none");
      $("#zc-selected-enviro").css("display", "inline-block");
      $("#zc-selected-enviro").parent(".zc-field").addClass("valign-top");
      //			hidePopup();
      var dialogId = $("#choose-environment-popup");
      hide_dialog(dialogId);

      var environmentId = $('.zc-environment.selected').attr("id");

      if(environmentId=="zc-rails") {
        environment_message("enviro-logo rails-logo", "Rails", "Ruby 2.1, Apache Ant 1.8.1.");
      } 
      else if(environmentId=="zc-django") {
        environment_message('enviro-logo django-logo', "Django", "Python 3, Pip and Virtualenv 15.0.0.");
      }

      else if(environmentId=="zc-tomcat") {
        environment_message("enviro-logo tomcat-logo", "Tomcat", "Pip and Virtualenv 15.0.0.");
      } 

      else if(environmentId=="zc-python") {
        environment_message("enviro-logo python-logo", "Python", "Pip and Virtualenv 15.0.0.");
      } 
      else if(environmentId=="zc-java") {
        environment_message("enviro-logo java-logo", "Java", "Open JDK7, Open JDE7 and Tomcat7");
      } 
      else if(environmentId=="zc-ruby") {
        environment_message("enviro-logo ruby-logo", "Ruby", "RVM and Ruby.");
      } 
      else if(environmentId=="zc-go") {
        environment_message("enviro-logo go-logo", "Go", "Go development language");
      }
    });  

    /*----------------------------------------------------------------------------------------------------------------------------------------
                                                                                                                                                   CREATE NEW ENVIRONMENT BUTTON CLICK
                                                                                                        ----------------------------------------------------------------------------------------------------------------------------------------*/

    $('#create-new-environment, #zc-change-enviro').on('click', function() {

      var dialogId = $("#choose-environment-popup");
      show_dialog(dialogId);
      //	$("#choose-environment-popup").css("display","block");
      //	$("#choose-repository-popup").css("display", "none");
    });



    /*----------------------------------------------------------------------------------------------------------------------------------------
                                                                                                                                                  ENVIRONMENT CANCEL, CLOSE BUTTON ACTIONS 
                                                                                                        ----------------------------------------------------------------------------------------------------------------------------------------*/ 

    $('#cancel-environement, #close-popup').on('click', function() {
      var dialogId = $("#choose-environment-popup");
      $('.zc-popup-wrap input').val('');
      hide_dialog(dialogId);
    });


    /*----------------------------------------------------------------------------------------------------------------------------------------
                                                                                                                                                    DEVELOP FROM SCRACH
                                                                                                        ----------------------------------------------------------------------------------------------------------------------------------------*/    
    $('#develop-from-scrach').on('click', function() {
      $('#choose-repository').css("display","none");
      if($('#zc-repository-url').hasClass("show-url"))
      {
        $('#zc-repository-url').css("display","none");
      }
    });       


    /*----------------------------------------------------------------------------------------------------------------------------------------
                                                                                                                                                    USE CLOUD REPOSITAORY 
                                                                                                        ----------------------------------------------------------------------------------------------------------------------------------------*/

    $('#cloud-repository').on('click', function() {

      $('#choose-repository').css("display","inline-block");

      if($('#zc-repository-url').hasClass("show-url"))
      {     
        $('#choose-repository').css("display","none");
        $('#zc-repository-url').css("display","inline-block");
      }
    });



    /*----------------------------------------------------------------------------------------------------------------------------------------
                                                                                                                                                    CHOOSE REPOSITAORY BUTTON CLICK
                                                                                                        ----------------------------------------------------------------------------------------------------------------------------------------*/ 

    $('#choose-repository').on('click', function() {

      var dialogId = $("#choose-repository-popup");
      show_dialog(dialogId);

      if($('#zc-repository-url').hasClass("show-url"))
      {   
        $('#zc-repository-url').css("display","inline-block");
      }
      $("#github-project-list").css("display","none");
      $("#github-authenticate").css("display", "block");
    });



    /*----------------------------------------------------------------------------------------------------------------------------------------
                                                                                                                                                    Change REPOSITAORY URL CLICK
                                                                                                        ----------------------------------------------------------------------------------------------------------------------------------------*/    
    $('#zc-change-url').on('click', function() {
      var dialogId = $("#choose-repository-popup");
      show_dialog(dialogId);
      $("#github-project-list").css("display","none");
      $("#github-authenticate").css("display", "block");
    });




    /*----------------------------------------------------------------------------------------------------------------------------------------
                                                                                                                                                    GITHUB AUTHENTICATE BUTTON CLICK
                                                                                                        ----------------------------------------------------------------------------------------------------------------------------------------*/
    $('#github-authenticate-btn').on("click", function() {
      $('#github-authenticate').hide();
      $('#github-project-list').show();
    });


    /*----------------------------------------------------------------------------------------------------------------------------------------
                                                                                                                                                    GITHUB AUTHENTICATE ONSCROLL
                                                                                                    ----------------------------------------------------------------------------------------------------------------------------------------*/
    $('.zc-project-list').scroll(function() {

      var getscrollPos =  $(".zc-project-list").scrollTop();
      if(getscrollPos > 0) {
        $(this).css("box-shadow", "inset 0 20px 20px -28px rgba(0, 0, 0, 0.91)");
      } else {
        $(this).css("box-shadow", "none");
      }

    });

    /*----------------------------------------------------------------------------------------------------------------------------------------
                                                                                                                                                    ZOHO REPOSITORY CLONE BUTTON ACTIONS
                                                                                                        ----------------------------------------------------------------------------------------------------------------------------------------*/   

    $('#clone-zoho-repository').on('click', function() {
      var zrCloneurl = $('#zr-clone-url').val(),
          repositoryUsername = $('#zr-credentials-username').val(),
          repositoryPassword = $('#zr-credentials-password').val(),
          dialogId = $("#choose-repository-popup"),
          ifcheck=true; 

      if(zrCloneurl =='') {
        textfield_show_error('#zr-clone-url', '#zr-cloneurl-error');
        ifcheck=false;
      } else {
        textfield_hide_error('#zr-clone-url', '#zr-cloneurl-error');
      }

      if($('#zc-zoho-use-author').is(":checked"))
      {

        if(repositoryUsername=="admin" && repositoryPassword=="1234") {
          $('#zr-credentials-username, #zr-credentials-password').removeClass("zc-error");
          $('#zr-credentials-error-msg').css("display","none");
          $('#zr-credentials-error-msg label').empty("");
          $('#zr-credentials-error-msg label').css("margin-left","212px");
        } else if (repositoryUsername=="" && repositoryPassword=="") {
          $('#zr-credentials-username, #zr-credentials-password').addClass("zc-error");
          zoho_repository_errorMessage('Enter user name and password','212px');
          ifcheck=false;
        }  else if(repositoryUsername=="") {
          $('#zr-credentials-username').addClass("zc-error");
          $('#zr-credentials-password').removeClass("zc-error");
          zoho_repository_errorMessage('Enter user name','212px');
          ifcheck=false;
        }  else if( repositoryPassword=="") {
          $('#zr-credentials-password').addClass("zc-error");
          $('#zr-credentials-username').removeClass("zc-error");
          zoho_repository_errorMessage('Enter a password','460px');
          ifcheck=false;
        }  else if(repositoryUsername!="admin" || repositoryPassword!="1234"){
          $('#zr-credentials-username, #zr-credentials-password').addClass("zc-error");
          zoho_repository_errorMessage('You entered an incorrect user name or password.','212px');
          ifcheck=false;
        } 
      }

      if( ifcheck == true) {
        $('#zr-credentials-username').val('');
        $('#zr-credentials-password').val('');
        $('#zr-clone-url').val('');
        hide_dialog(dialogId);
        $('.zc-loader-overlay').fadeOut();
        $('#zc-repository-url').css("display","inline-block"); 
        $('#zc-repository-url').addClass("show-url");
        $('#zc-repository-url').find('.zc-repos-url a').empty().append(zrCloneurl);
        //$('#zc-remove-url').hide();
        //$("#zc-repository-url .zc-repos-url a").prop("href", zrCloneurl)
      } 

    });    

    $("#zr-credentials-password").on("focus", function() {
      var repUsername = $('#zr-credentials-username').val(),
          repPassword =  $('#zr-credentials-password').val();
      if(repUsername !='' && repPassword =='') {
        $('#zr-credentials-username').removeClass("zc-error");
        $('#zr-credentials-error-msg label').empty().append('Enter a password');
        $('#zr-credentials-error-msg label').css("margin-left","460px");
      }  else if(repUsername !='' && repPassword !='')  {
        $('#zr-credentials-username').removeClass("zc-error");
        $('#zr-credentials-error-msg label').empty();
        $('#zr-credentials-error-msglabel').css("margin-left","460px");
      }
    });



    /*------------------------------------------------------------------------------------------------------------------------------
                                                                                                                              USE AUTHORIZATION
                                                                                    ------------------------------------------------------------------------------------------------------------------------------*/       
    $("#zc-zoho-use-author").click(function() {
      if($(this).is(":checked"))
      {
        $("#zc-rep-cred").css("display","block"); 
        $("#zr-credentials-username").focus();
      } else {
        $("#zc-rep-cred").css("display","none"); 
        $("#zr-credentials-username").blur();
      }
    });





    /*----------------------------------------------------------------------------------------------------------------------------------------
                                                                                                                                                    ZOHO REPOSITORY CANCEL BUTTON ACTIONS
                                                                                                        ----------------------------------------------------------------------------------------------------------------------------------------*/

    $('#cancel-zoho-repository').on('click', function() {
      var dialogId = $("#choose-repository-popup");
      hide_dialog(dialogId); 

      if($('#zc-repository-url').hasClass("show-url"))
      { 
        $("#develop-from-scrach").prop("checked", false); 
        $("#choose-repository").prop("checked", true); 
      } else {
        $("#develop-from-scrach").prop("checked", true); 
        $("#choose-repository").prop("checked", false); 
      }
    });


    /*----------------------------------------------------------------------------------------------------------------------------------------
                                                                                                                                                    GITHUB CLONE PUBLIC URL BUTTON CLICK
                                                                                                        ----------------------------------------------------------------------------------------------------------------------------------------*/
    $('#zc-github-clone-btn').on('click',function() {
      var githubPublic = $('#github-public').val();    
      var dialogId = $("#choose-repository-popup");
      if(githubPublic=='') {
        textfield_show_error('#github-public', '#zc-github-clone-error');
      } else {
        textfield_hide_error('#github-public', '#zc-github-clone-error');

        hide_dialog(dialogId); 
        $('#choose-repository').css("display","none");
        $('#zc-repository-url').css("display","inline-block"); 
        $('#zc-repository-url').addClass("show-url");
        $('#zc-repository-url').find('.zc-repos-url a').empty().append(githubPublic);
        // $("#zc-repository-url .zc-repos-url  a").prop("href", githubPublic);
        //$('#zc-remove-url').hide();

      }
    });


    $('#zc-github-clone-btn-1').on('click',function() {
      var githubPublic = $('#github-public-1').val();    
      if(githubPublic=='') {
        textfield_show_error('#github-public-1', '#zc-github-clone-error-1');
      } else {
        textfield_hide_error('#github-public-1', '#zc-github-clone-error-1');


        hide_dialog(dialogId); 
        $('#choose-repository').css("display","none"); 
        $('#zc-repository-url').css("display","inline-block"); 
        $('#zc-repository-url').addClass("show-url");
        $('#zc-repository-url').find('.zc-repos-url a').empty().append(githubPublic);
        // $("#zc-repository-url .zc-repos-url  a").prop("href", githubPublic);
        //$('#zc-remove-url').hide();


      }
    });


    /*----------------------------------------------------------------------------------------------------------------------------------------
                                                                                                                                                    GITHUB CLONE  BUTTON CLICK
                                                                                                        ----------------------------------------------------------------------------------------------------------------------------------------*/

    var get_clone_url = function(geturl, getname) {
      var cloneName = $(getname).text();
      var cloneUrl = $(geturl).text();
      var dialogId = $("#choose-repository-popup");
      hide_dialog(dialogId); 
      $('#choose-repository').css("display","none");
      $('#zc-repository-url').css("display","inline-block"); 
      $('#zc-repository-url').addClass("show-url");
      $('#zc-repository-url').find('.zc-repos-url a').empty().append(cloneUrl);
      $("#zc-clone-name").empty().append(cloneName);

      // $("#zc-repository-url .zc-repos-url a").prop("href", cloneUrl);
      //$('#zc-remove-url').hide();
    }

    $('#zc-clone-btn-1').on('click', function() {
      get_clone_url('#zc-clone-url-1','#zc-project-name-1');
    });

    $('#zc-clone-btn-2').on('click', function() {
      get_clone_url('#zc-clone-url-2','#zc-project-name-2');
    });

    $('#zc-clone-btn-3').on('click', function() {
      get_clone_url('#zc-clone-url-3','#zc-project-name-3');
    });




    /*--------------------------------------------------------------------------------------------------------                  NEW PROJECTS BUTTON CLICK 
                --------------------------------------------------------------------------------------------------------*/     
    //    $('#zc-new-project').on('click', function() {
    //      window.location.href = 'code.html';
    //    });


    $('#go-to-project').on('click', function() {
      window.location.href = 'index.html';
    });

    /*---------------------------------------------------------------------------------------------------------
                    ESCAPE KEY UP
                -----------------------------------------------------------------------------------------------------------*/ 

    $(document).on('keyup',function(event) {
      if (event.keyCode == 27) {
        $('.zc-popup-wrap input').val('');
        //hidePopup(); 
        $("#zc-avatar-list, #zc-new-avatar-list").hide();
        $('#zc-change-avatar').focus();
        $("#zc-more-cd").removeClass("show-dialog");
        if($(".zc-delete-close").is("#post-connect-cancel")){
          show_Confirmdialog($("#cancel-connect-post"));
          $("#zc-useravatar_zpopover").hide();
        }  else {
          hide_dialog();
          hide_Confirmdialog();
        }
      }
    });


    /*------------------------------------------------------------------------------------------------------
                   ENVIRONMENT LIST KEY NAVIGATION 
                ------------------------------------------------------------------------------------------------------*/    
    $(document).on('keydown', function (event) {
      var listItem = $( ".selected");
      var selList = $('.zc-environment').index(listItem);
      var el = $('.zc-environment').length;
      $('.zc-environment').removeClass('selected');

      if ( event.keyCode == 40) {

        if (selList == 0)  {
          $('.zc-environment-list').find( ".zc-environment" ).eq(3).addClass('selected');
        }  else if (selList == 3 || selList == 6 || selList == 4 || selList == 5 )  {
          $('.zc-environment-list').find( ".zc-environment" ).eq(6).addClass('selected');
        }  else if (selList == 1)  {
          $('.zc-environment-list').find( ".zc-environment" ).eq(4).addClass('selected');
        } else if (selList == 2)  {
          $('.zc-environment-list').find( ".zc-environment" ).eq(5).addClass('selected');
        }
      }

      else if ( event.keyCode == 38) {

        if (selList == 6)  {
          $('.zc-environment-list').find( ".zc-environment" ).eq(3).addClass('selected');
        }  else if (selList == 0 || selList == 3 )  {
          $('.zc-environment-list').find( ".zc-environment" ).eq(0).addClass('selected');
        }  else if (selList == 1 || selList == 4 )  {
          $('.zc-environment-list').find( ".zc-environment" ).eq(1).addClass('selected');
        }  else if (selList == 2 || selList == 5 )  {
          $('.zc-environment-list').find( ".zc-environment" ).eq(2).addClass('selected');
        } 
      }  

      else if ( event.keyCode == 39) {

        if (selList == 6)  {
          $('.zc-environment-list').find( ".zc-environment" ).eq(6).addClass('selected');
        } else {
          $('.zc-environment-list').find( ".zc-environment" ).eq(selList).nextAll('.zc-environment').not('.zc-enviro-lang').first('.zc-environment').addClass('selected');
        }

      }

      else if ( event.keyCode == 37) {

        if (selList == 0)  {
          $('.zc-environment-list').find( ".zc-environment" ).eq(0).addClass('selected');
        } else {
          $('.zc-environment-list').find( ".zc-environment" ).eq(selList).prevAll('.zc-environment').not('.zc-enviro-lang').first('.zc-environment').addClass('selected');
        }
      }


      else {
        $('.zc-environment-list').find( ".zc-environment" ).eq(selList).addClass('selected');
      }

    }); 



    /*-------------------------------------------------------------------------------------------------------------
                   AVATAR LIST KEY NAVIGATION 
                ---------------------------------------------------------------------------------------------------------------*/  
    // AVATAR SELECTION FUNCTION 
    var Avatar_navigate = function(getavatarIndex){
      $('#zc-avatar-list ul').find( "li" ).eq(getavatarIndex).addClass('selected');
    }

    $('#zc-avatar-list').bind('keydown', function(event) {
      var listItem = $( ".zc-avatar-list li.selected");
      var selList = $('.zc-avatar-list li').index(listItem);

      if ( event.keyCode == 40) {
        $('#zc-avatar-list li').removeClass('selected');
        if (selList == 0)  {
          Avatar_navigate(4);
        }  else if (selList == 4 )  {
          Avatar_navigate(8);
        }  else if (selList == 8 || selList == 12 || selList == 9 || selList == 10 || selList == 11 )  {
          Avatar_navigate(12);
        } else if (selList == 1)  {
          Avatar_navigate(5);
        }   else if (selList == 5)  {
          Avatar_navigate(9);
        }  else if (selList == 2)  {
          Avatar_navigate(6);
        }  else if (selList == 6)  {
          Avatar_navigate(10);
        } else if (selList == 3)  {
          Avatar_navigate(7);
        } else if (selList == 7)  {
          Avatar_navigate(11);
        }
      }

      else if ( event.keyCode == 38) {
        $('#zc-avatar-list li').removeClass('selected');
        if (selList == 0 || selList == 4)  {
          Avatar_navigate(0);
        }  else if (selList == 8 )  {
          Avatar_navigate(4);
        }  else if (selList == 12 )  {
          Avatar_navigate(8);
        } else if (selList == 1 || selList == 5)  {
          Avatar_navigate(1);
        }   else if (selList == 9)  {
          Avatar_navigate(5);
        }  else if (selList == 2 || selList == 6)  {
          Avatar_navigate(2);
        }  else if (selList == 10)  {
          Avatar_navigate(6);
        } else if (selList == 3 ||selList == 7)  {
          Avatar_navigate(3);
        } else if (selList == 11)  {
          Avatar_navigate(7);
        }
      }

      else if ( event.keyCode == 39) {
        $('#zc-avatar-list li').removeClass('selected');
        if (selList == 12)  {
          Avatar_navigate(12);
        } else {
          $('.zc-avatar-list ul').find( "li" ).eq(selList).nextAll('li').first('li').addClass('selected');
        }

      }

      else if ( event.keyCode == 37) {
        $('#zc-avatar-list li').removeClass('selected');
        if (selList == 0)  {
          Avatar_navigate(0);
        } else {
          $('#zc-avatar-list ul').find( "li" ).eq(selList).prevAll('li').first('li').addClass('selected');
        }
      }  else if (event.keyCode == 13) {

        var imagesrc = $('#zc-avatar-list ul li.selected').find('span').attr('class');  
        $('#zc-change-avatar').empty().append('<span class="'+imagesrc+'"> </span> <span class="zc-avatar-change">Change...</span> ');
        $("#zc-avatar-list").hide();
        $('#create-project-btn').focus();
      }

      else {
        $('#zc-avatar-listul').find( "li" ).eq(selList).removeClass().addClass('selected');
      }

    });


    /*----------------------------------------------------------------------------------------------------------------------------------------
                                                                                                                                                       NEW PROJECT  AVATAR LIST KEY NAVIGATION 
                                                                                                ----------------------------------------------------------------------------------------------------------------------------------------*/    

    // AVATAR SELECTION FUNCTION 
    var New_Avatar_navigate = function(getavatarIndex){
      $('#zc-new-avatar-list ul').find( "li" ).eq(getavatarIndex).addClass('selected');
    }
    $('#zc-new-avatar-list').bind('keydown', function(event) {
      var listItem = $( "#zc-new-avatar-list li.selected");
      var selList = $('#zc-new-avatar-list li').index(listItem);
      console.log(selList);
      if ( event.keyCode == 40) {
        $('#zc-new-avatar-list li').removeClass('selected');
        if (selList == 0)  {
          New_Avatar_navigate(4);
        }  else if (selList == 4 )  {
          New_Avatar_navigate(8);
        }  else if (selList == 8 || selList == 12 || selList == 9 || selList == 10 || selList == 11 )  {
          New_Avatar_navigate(12);
        } else if (selList == 1)  {
          New_Avatar_navigate(5);
        }   else if (selList == 5)  {
          New_Avatar_navigate(9);
        }  else if (selList == 2)  {
          New_Avatar_navigate(6);
        }  else if (selList == 6)  {
          New_Avatar_navigate(10);
        } else if (selList == 3)  {
          New_Avatar_navigate(7);
        } else if (selList == 7)  {
          New_Avatar_navigate(11);
        }
      }

      else if ( event.keyCode == 38) {
        $('#zc-new-avatar-list li').removeClass('selected');
        if (selList == 0 || selList == 4)  {
          New_Avatar_navigate(0);
        }  else if (selList == 8 )  {
          New_Avatar_navigate(4);
        }  else if (selList == 12 )  {
          New_Avatar_navigate(8);
        } else if (selList == 1 || selList == 5)  {
          New_Avatar_navigate(1);
        }   else if (selList == 9)  {
          New_Avatar_navigate(5);
        }  else if (selList == 2 || selList == 6)  {
          New_Avatar_navigate(2);
        }  else if (selList == 10)  {
          New_Avatar_navigate(6);
        } else if (selList == 3 ||selList == 7)  {
          New_Avatar_navigate(3);
        } else if (selList == 11)  {
          New_Avatar_navigate(7);
        }
      }

      else if ( event.keyCode == 39) {
        $('#zc-new-avatar-list li').removeClass('selected');
        if (selList == 12)  {
          New_Avatar_navigate(12);
        } else {
          $('#zc-new-avatar-list ul').find( "li" ).eq(selList).nextAll('li').first('li').addClass('selected');
        }

      }

      else if ( event.keyCode == 37) {
        $('#zc-new-avatar-list li').removeClass('selected');
        if (selList == 0)  {
          New_Avatar_navigate(0);
        } else {
          $('#zc-new-avatar-list ul').find( "li" ).eq(selList).prevAll('li').first('li').addClass('selected');
        }
      }  else if (event.keyCode == 13) {
        var imagesrc = $('#zc-new-avatar-list ul li.selected').find('span').attr('class');  
        $('#zc-new-change-avatar').empty().append('<span class="'+imagesrc+'"> </span> <span class="zc-avatar-change">Change</span> ');
        $("#zc-new-avatar-list").hide();
        //$('#create-new-environment').focus();
      }

      else {
        $('#zc-new-avatar-list ul').find( "li" ).eq(selList).removeClass().addClass('selected');
      }

    });


    /*-- PROJECT LIST FLOW --*/

    var project_action = function(_this, projectId, sourceId) {

      if(_this.is(projectId)){
        $("body").removeClass("zc-greyBg");
        $('.zc-project-tab, #project-listtab-content').hide();
        $("#project-info-tabs").show();
        $("#zc-article").removeClass().addClass("article zc-projectInfo-view");
        $("#zc-projectInfo-title, #zc-open-project").css("display","block");
        $('#project-info-tabs .zc-tab').removeClass('active');
        $('#project-info-tabs .project-info').addClass('active');
        $(".zc-project-info").addClass("zc-tab-active fade-in");
        $(".zc-source-wrap").removeClass("zc-tab-active fade-in");
        $("#zc-viewBreadcrumbWrap-Project").css("display","block");
        $("#project-infotab-content").css("display","block");

        setTimeout(function() {
          $("#project-infotab-content").removeClass("page-transition").addClass("page-transition");
        },100);
      }   
      else if(_this.is(sourceId)){
        $("body").removeClass("zc-greyBg");
        $('.zc-project-tab, #project-listtab-content').hide();
        $("#project-info-tabs").show();
        $("#zc-article").removeClass().addClass("article zc-projectSource-view");
        $("#zc-projectInfo-title, #zc-open-project").css("display","none");
        $('#project-info-tabs .zc-tab').removeClass('active');
        $('#project-info-tabs .source-code').addClass('active');
        $(".zc-project-info").removeClass("zc-tab-active fade-in");
        $(".zc-source-wrap").addClass("zc-tab-active fade-in");
        $("#zc-viewBreadcrumbWrap-Project").css("display","block");
        $("#project-infotab-content").css("display","block");
        setTimeout(function() {
          $("#project-infotab-content").removeClass("page-transition").addClass("page-transition");
        },100);		
      }  
    }

    var more_action = function(_this, menuId, event) {
      event.stopPropagation();
      $(".zc-user-account").css({"opacity":"0", "margin-top":"0px", "visibility":"hidden"}); 
    }

    var update_data = function(cardId){

      var getTitle = cardId.find(".zc-card-title h2").attr("data-title");
      var getLogo = cardId.find('.zc-card-logo .zc-avatar').attr('class');
      var getDesc = cardId.find('.zc-card-desc p').text();

      if(!(getDesc.trim().length)) {
        getDesc = "Add project description here...";
        $(".zc-project-info").find('.zc-project-desc span').empty().append('<span class="zc-info-text"> '+ getDesc +'</span>');
      } else {
        getDesc = cardId.find('.zc-card-desc p').text();
        $(".zc-project-info").find('.zc-project-desc span').empty().append(getDesc);
      }
      $('.zc-project-info .p-desc-wrap').addClass("add-desc");
      var getuserList = cardId.find('.zc-shared-list').html();
      $(".zc-pinfo-header .zc-project-title").find('.zc-title-text').empty().append(getTitle);
      $("#zc-repository-list #folder-root").find(".root-folder").empty().append(getTitle);
      $(".zc-pinfo-header .zc-project-title").find('.zc-avatar').removeClass().addClass(getLogo);


      $(".zc-project-info").find('.zc-shared-list').empty().append(getuserList);


      var dataUsername =  $(".zc-project-info").find('.zc-shared-list li').map(function() {
        return $(this).attr("data-name");
      }).get();

      var dataMail =  $(".zc-project-info").find('.zc-shared-list li').map(function() {
        return $(this).attr("data-mail");
      }).get();

      var dataPermission =  $(".zc-project-info").find('.zc-shared-list li').map(function() {
        return $(this).attr("data-permission");
      }).get();

      $(".zc-project-info").find('.zc-shared-list li').append('<span class="zc-user-info"><span class="zc-user-name">James Anderson </span><span class="zc-user-mail">jamesanderson@gmail.com</span> <span class="zc-user-permission">Can Write</span> </span>');

      $(".zc-project-info").find('.zc-shared-list li').each(function (index) {
        $(this).find('.zc-user-name').empty().text(dataUsername[index]);
        $(this).find('.zc-user-mail').empty().text(dataMail[index]);
        $(this).find('.zc-user-permission').empty().text(dataPermission[index]);
      });


      if(cardId.is('#zc-card-data')) {
        $('#other-envir, #other-rep, .zc-enviro-wrap, .zc-selected-repos').css("display","none");
        $('#zc-build, #zc-build-url,#zc-work-branch, #zc-work, #dependent-rep').css("display","block");
      } else {
        var getName = cardId.find(".zc-card-title .zc-title-desc").text(); 
        getName  = $.trim(getName);
        $(".zc-project-info .zc-envir-desc").find('#zc-enviro-name').empty().append(getName);



        console.log(getName);


        if(getName=="Go") {
          $(".zc-project-info .zc-enviro-logo").find(".enviro-logo").removeClass().addClass('enviro-logo go-logo');
          $(".zc-project-info .zc-package-desc").find('#zc-enviro-desc').empty().append("Go development language");
          $(".zc-project-info #other-rep").next(".zc-selected-repos").find('.zc-selected-url a').empty().append(" https://github.com/ayyasami/hmi.git");

        } if(getName=="Ruby") {
          $(".zc-project-info .zc-enviro-logo").find(".enviro-logo").removeClass().addClass('enviro-logo ruby-logo');
          $(".zc-project-info .zc-package-desc").find('#zc-enviro-desc').empty().append("RVM and Ruby");
          $(".zc-project-info #other-rep").next(".zc-selected-repos").find('.zc-selected-url a').empty().append(" https://github.com/ayyasami/invoice.git");

        } if(getName=="Tomcat") {
          $(".zc-project-info .zc-enviro-logo").find(".enviro-logo").removeClass().addClass('enviro-logo tomcat-logo');
          $(".zc-project-info .zc-package-desc").find('#zc-enviro-desc').empty().append("Pip and Virtualenv 15.0.0.");
          $(".zc-project-info #other-rep").next(".zc-selected-repos").find('.zc-selected-url a').empty().append(" https://github.com/ayyasami/GPS-soln.git");

        }

        $('#other-envir, #other-rep, .zc-enviro-wrap, .zc-selected-repos').css("display","block");
        $("#zc-build, #zc-build-url,#zc-work-branch, #zc-work").css("display","none");
        $('.zc-enviro-wrap, .zc-selected-repos').css("display","table");

      }
    }

    $("#project-action").on("click", 'li:not("#zc-rename, #delete-project")', function() {
      project_action($(this) ,'#zc-project-info', '#zc-source-code');
      update_data($("#zc-card-data"));
      $("#sharedProjectActivity").css("display","none");
      $("#myProjectActivity").css("display","block");
      $("body").removeClass("zc-sharedInfoView"); 
      $("#zc-viewBreadcrumbWrap-Project #set-projectId").empty().append("My Projects");
    });

    $("#project-action-1").on("click", 'li:not("#zc-rename-1, #delete-project-1")', function() {
      project_action($(this) ,'#zc-project-info-1', '#zc-source-code-1');
      update_data($("#zc-card-data-1"));
      $("#sharedProjectActivity").css("display","none");
      $("#myProjectActivity").css("display","block");
      $("body").removeClass("zc-sharedInfoView"); 
      $("#zc-viewBreadcrumbWrap-Project #set-projectId").empty().append("My Projects");
    });

    $("#project-action-2").on("click", 'li:not("#zc-rename-2, #delete-project-2")', function() {
      project_action($(this) ,'#zc-project-info-2', '#zc-source-code-2');
      update_data($("#zc-card-data-2"));
      $("#sharedProjectActivity").css("display","none");
      $("#myProjectActivity").css("display","block");
      $("body").removeClass("zc-sharedInfoView"); 
      $("#zc-viewBreadcrumbWrap-Project #set-projectId").empty().append("My Projects");
    });

    $("#project-action-3").on("click", 'li:not("#zc-rename-3, #delete-project-3")', function() {
      project_action($(this) ,'#zc-project-info-3', '#zc-source-code-3');
      update_data($("#zc-card-data-3"));
      $("#sharedProjectActivity").css("display","none");
      $("#myProjectActivity").css("display","block");
      $("body").removeClass("zc-sharedInfoView"); 
      $("#zc-viewBreadcrumbWrap-Project #set-projectId").empty().append("My Projects");
    });

    $("#project-action-4").on("click", 'li:not("#zc-rename-4, #delete-project-4")', function() {
      project_action($(this) ,'#zc-project-info-4', '#zc-source-code-4');
      update_data($("#zc-card-data-4"));
      $("#myProjectActivity").css("display","none");
      $("#sharedProjectActivity").css("display","block");
      $("body").addClass("zc-sharedInfoView");
      $("#zc-viewBreadcrumbWrap-Project #set-projectId").empty().append("Shared with Me");
    });

    $("#project-action-5").on("click", 'li:not("#zc-rename-5, #delete-project-5")', function() {
      project_action($(this) ,'#zc-project-info-5', '#zc-source-code-5');
      update_data($("#zc-card-data-5"));
      $("#myProjectActivity").css("display","none");
      $("#sharedProjectActivity").css("display","block");
      $("body").addClass("zc-sharedInfoView");
      $("#zc-viewBreadcrumbWrap-Project #set-projectId").empty().append("Shared with Me");
    });

    $("#project-action-6").on("click", 'li:not("#zc-rename-6, #delete-project-6")', function() {
      project_action($(this) ,'#zc-project-info-6', '#zc-source-code-6');
      update_data($("#zc-card-data-6"));
      $("#myProjectActivity").css("display","none");
      $("#sharedProjectActivity").css("display","block");
      $("body").addClass("zc-sharedInfoView");
      $("#zc-viewBreadcrumbWrap-Project #set-projectId").empty().append("Shared with Me");
    });



    /*---- PROJECT INFO TAB CLICK ----*/

    $(document).on("click", ".zc-tabs .zc-tab", function(){
      var hasFilecount = $("#zc-breadcrumb .zc-filename").length;
      $(".zc-tabs .zc-tab").removeClass('active');
      $(this).addClass('active');
      if($(this).hasClass('project-info')) {
        $('.zc-source-wrap').removeClass("zc-tab-active");
        $('.zc-projectactivitiy-content').removeClass("zc-tab-active");
        $('.zc-project-info').addClass("zc-tab-active");
        $("#zc-article").removeClass().addClass("article zc-projectInfo-view");
      } 

      else if ($(this).hasClass('source-code')) {
        $('.zc-project-info').removeClass("zc-tab-active");
        $('.zc-projectactivitiy-content').removeClass("zc-tab-active");
        $('.zc-source-wrap').addClass("zc-tab-active");
        $("#zc-article").removeClass().addClass("article zc-projectSource-view");
        if(hasFilecount != 0) {
          $("#zc-preview-file").css("display","block");
        }
      } 
      else if($(this).hasClass('userView-projectActivity')) {
        $('.zc-source-wrap').removeClass("zc-tab-active");
        $('.zc-project-info').removeClass("zc-tab-active");
        $('.zc-projectactivitiy-content').addClass("zc-tab-active");
        $("#zc-article").removeClass().addClass("article zc-projectInfoActivity-view");
        if($("body").hasClass("zc-sharedInfoView")){
          projectActivityChartShared();
        } else {
          projectActivityChart();
        }
      }
      else if($(this).is('#rep-files-tab')) {
        $('#zc-rep-files').addClass("zc-tab-active");
        $('#zc-rep-discussion, #zc-rep-commits, #zc-rep-codeAnalysis').removeClass("zc-tab-active");
        if ((hasFilecount != 0) && ($("#file-view-code").hasClass('active'))){
          $("#zc-preview-file").css("display","block");
        }
      } 
      else if($(this).is('#rep-discuss-tab')) {
        $('#zc-rep-discussion').addClass("zc-tab-active");
        $('#zc-rep-files, #zc-rep-commits, #zc-rep-codeAnalysis').removeClass("zc-tab-active");
        $("#zc-preview-file").css("display","none");
      } 
      else if($(this).is('#rep-codeAnalysis-tab')) {
        $('#zc-rep-codeAnalysis').addClass("zc-tab-active");
        $('#zc-rep-files, #zc-rep-discussion').removeClass("zc-tab-active");
        $("#zc-preview-file").css("display","none");
        codeAnalysisChart();
      }  
      else if($(this).is('#rep-commits-tab')) {
        $('#zc-rep-commits').addClass("zc-tab-active");
        $('#zc-rep-files, #zc-rep-discussion').removeClass("zc-tab-active");
        $("#zc-preview-file").css("display","none");
      } 
      else if($(this).is('#zc-userActivityTab')) {
        $("#zc-useractivityTab-content").addClass("zc-tab-active");
        $("#zc-userProjectTab-content").removeClass("zc-tab-active");
        projectActivityChart();
      }
      else if($(this).is('#zc-userProjectsTab')) {
        $("#zc-userProjectTab-content").addClass("zc-tab-active");
        $("#zc-useractivityTab-content").removeClass("zc-tab-active");
      }
      else if($(this).is('#zc-projectsInfoTab')) {
        $("#zc-projectInfoTab-content").addClass("zc-tab-active");
        $("#zc-projectactivityTab-content").removeClass("zc-tab-active");
      }
      else if($(this).is('#zc-projectActivityTab')) {
        $("#zc-projectactivityTab-content").addClass("zc-tab-active");
        $("#zc-projectInfoTab-content").removeClass("zc-tab-active");
        projectActivityChart();
      }


    });  


    /*---- SORT MENU  ----*/

    $('.zc-sort-menu li').on("click", function(){
      $('.zc-sort-menu').find('zc-list-icon').removeClass('zc-tick-icon');
      $(this).find('zc-list-icon').addClass('zc-tick-icon');
    })



    /*--------------- URL REDIRECTION ---------------*/

    $(".zc-card").on('click', function(event) {
      var target = $(event.target),
          isTargetLastUser = "#zc-my-projects .zc-shared-list li:nth-child(4)",
          isTargetLastSharedUser = "#zc-shared-with-me .zc-shared-list li:nth-child(4)";

      if((!target.closest(".zc-more").length) && (!target.closest(isTargetLastUser).length) && (!target.closest(isTargetLastSharedUser).length) )
      {
        window.open('../ide/index.html', '_blank');
      }
    });


    /*--------------------- INFO  ---------------*/

    var getprojectDesc;

    $(".zc-project-desc").on("click", function() {
      if($(".zc-project-desc span").hasClass("zc-info-text")){
        getprojectDesc = $(".zc-project-desc .zc-info-text").text();
        getprojectDesc = $.trim(getprojectDesc);	 
      } else {
        getprojectDesc = $(".zc-project-desc span").text();
        getprojectDesc = $.trim(getprojectDesc);				 
      }
      $(".p-desc-wrap").prepend('<textarea >'+getprojectDesc+'</textarea>').hide().fadeIn('2000');
      $(".p-desc-wrap").find("textarea").focus().select();
      $(".zc-project-desc").hide();
      $('.desc-btn-wrap').addClass("show-btn");
      $('.p-desc-wrap').removeClass("add-desc");

    });

    $(".desc-btn-wrap").on("click","#add-desc", function() {
      var newprojectDesc = $(".p-desc-wrap textarea").val(),
          newprojectDesc = $.trim(newprojectDesc);
      $(".zc-project-desc span").empty().append(newprojectDesc);
      $(".zc-project-desc").fadeIn();
      $(".p-desc-wrap textarea").hide().remove();
      $('.p-desc-wrap').addClass("add-desc");

      $('.desc-btn-wrap').removeClass("show-btn");
    });

    $(".desc-btn-wrap").on("click","#cancel-desc", function() {
      var gettextareaval = $(".p-desc-wrap .zc-info-text").text(),
          gettextareaval = $.trim(gettextareaval);
      if(gettextareaval =="Add project description here...") {
        $(".zc-project-desc span").empty().append('<span class="zc-info-text">'+gettextareaval+'</span>');
      } else {
        $(".zc-project-desc span").empty().append(getprojectDesc);
      }
      $(".p-desc-wrap textarea").remove();
      $('.p-desc-wrap').addClass("add-desc");
      $(".zc-project-desc").fadeIn();
      $('.desc-btn-wrap').removeClass("show-btn");
    });

    $('.p-desc-wrap').on('keyup',' textarea', function(event) {
      if (event.keyCode == 27) {
        $(".zc-project-desc").append('<span> '+ getprojectDesc +' </span>');
        $(".p-desc-wrap textarea").remove();
        $('.p-desc-wrap').addClass("add-desc");
        $(".zc-project-desc").fadeIn();
        $('.desc-btn-wrap').removeClass("show-btn");
      }
    });




    /*-------------------------------- REPOSITORIES VIEW -----------------------------*/

    // SOURCE CODE LIST FLOW 
    var setrootlist  = '\
  <div class="zc-grid-heading">\
  <div class="zc-grid-col  zc-grid-md"> Name</div>\
  <div class="zc-grid-col zc-grid-sm"> Date Committed </div>\
  <div class="zc-grid-col  zc-grid-lg"> </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div id="folder-webapps" data-id="webapps" class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-folder-icon"> </use>  </svg>\
  </span> webapps\
  </div>\
  <div class="zc-grid-col zc-grey-text"> Feb 23 </div>\
  <div class="zc-grid-col zc-grey-text"> Update comparison page</div>\
  <div class="zc-grid-col">  </div>\
  </div>\
  <div id="folder-resource" data-id="resources" class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-folder-icon"> </use> </svg>\
  </span> resources\
  </div>\
  <div class="zc-grid-col zc-grey-text"> Feb 4 </div>\
  <div class="zc-grid-col zc-grey-text"> Merge branch "master" into "master"</div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div id="folder-source" data-id="source" class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-folder-icon"> </use>  </svg>\
  </span> source\
  </div>\
  <div class="zc-grid-col zc-grey-text"> Jan 21</div>\
  <div class="zc-grid-col zc-grey-text"> Add the HTML lang attribute </div>\
  <div class="zc-grid-col">\
  </div>\
  </div>\
  <div id="folder-product" data-id="product_package" class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-folder-icon"> </use>  </svg>\
  </span>\
  product_package </div>\
  <div class="zc-grid-col zc-grey-text"> Dec 29, 2015 </div>\
  <div class="zc-grid-col zc-grey-text">  Identify the language of text content </div>\
  <div class="zc-grid-col">\
  </div>\
  </div>\
  <div id="folder-build" data-id="build_doc" class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-folder-icon"> </use>  </svg>\
  </span> build_doc\
  </div>\
  <div class="zc-grid-col zc-grey-text"> Dec 12, 2015 </div>\
  <div class="zc-grid-col zc-grey-text"> Help screen reader to switch language profiles to provide the...</div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div id="file-hgtag" class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use>  </svg>\
  </span> .hgtags </div>\
  <div class="zc-grid-col zc-grey-text"> Nov 19, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">   Correct accent and pronunciation </div>\
  <div class="zc-grid-col">\
  <span class="ca-issuesCount"> 45 Issues </span>\
  <span id="connect-post-count" class="connect-postCount"> 3 Discussions </span>\
  </div>\
  </div>\
  <div id="file-context"  class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use>  </svg>\
  </span>  context.js  </div>\
  <div class="zc-grid-col zc-grey-text">Nov 19, 2015 </div>\
  <div class="zc-grid-col zc-grey-text">    bafed11e - Syntax updates. </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  ';

    var setWebapps =  '\
  <div class="zc-grid-heading">\
  <div class="zc-grid-col  zc-grid-md"> Name</div>\
  <div class="zc-grid-col zc-grid-sm"> Date Committed </div>\
  <div class="zc-grid-col  zc-grid-lg"></div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div id="folder-jsp" data-id="jsp" class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-folder-icon"> </use></svg>\
  </span> jsp\
  </div>\
  <div class="zc-grid-col zc-grey-text"> Dec 19, 2015  </div>\
  <div class="zc-grid-col zc-grey-text"> Make mail_room idle_timeout option configurable. </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use>  </svg>\
  </span> mailcontent.jsp \
  </div>  \
  <div class="zc-grid-col zc-grey-text"> Nov 19, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">   adds impersonator variable and makes sudo usage overall more clear </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use>  </svg>\
  </span> NewEmailTemplateFolder.jsp \
  </div>  \
  <div class="zc-grid-col zc-grey-text"> Feb 23 </div>\
  <div class="zc-grid-col zc-grey-text">   Update comparison page </div>\
  <div class="zc-grid-col"><span class="ca-issuesCount"> 3 Issues </span>\
  <span id="connect-post-count" class="connect-postCount"> 3 Discussions </span> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use>  </svg>\
  </span> ZMailLogin.jspf \
  </div>  \
  <div class="zc-grid-col zc-grey-text"> Jan 02  </div>\
  <div class="zc-grid-col zc-grey-text">   Add missing group policy spec </div>\
  <div class="zc-grid-col"> <span class="ca-issuesCount"> 2 Issues </span>\
  </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use>  </svg>\
  </span> ShowRecentMails.jsp \
  </div>  \
  <div class="zc-grid-col zc-grey-text"> Oct 02, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">   Replace wording for slash command confirmation message  </div>\
  <div class="zc-grid-col"> <span id="connect-post-count" class="connect-postCount">1 Discussions </span>  </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use>  </svg>\
  </span> NewEmailTemplate.jsp\
  </div>  \
  <div class="zc-grid-col zc-grey-text"> Aug 15, 2015  </div>\
  <div class="zc-grid-col zc-grey-text"> adds second batch of tests changed to active tense</div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  ';

    var setResource  =  '\
  <div class="zc-grid-heading">\
  <div class="zc-grid-col  zc-grid-md"> Name</div>\
  <div class="zc-grid-col zc-grid-sm"> Date Committed </div>\
  <div class="zc-grid-col  zc-grid-lg"></div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use></svg>\
  </span> svg4everybody.min.js\
  </div>\
  <div class="zc-grid-col zc-grey-text"> Aug 04, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">  added go back anchor on error pages </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use>  </svg>\
  </span> svg4everybody.js \
  </div>  \
  <div class="zc-grid-col zc-grey-text"> Feb 4  </div>\
  <div class="zc-grid-col zc-grey-text">  Merge branch "master" into "master" </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use>  </svg>\
  </span> svg4everybody.legacy.min.js \
  </div>  \
  <div class="zc-grid-col zc-grey-text"> Nov 28, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">  Replace old logo with new one </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  ';

    var setSource  =  '\
  <div class="zc-grid-heading">\
  <div class="zc-grid-col  zc-grid-md"> Name</div>\
  <div class="zc-grid-col zc-grid-sm"> Date Committed </div>\
  <div class="zc-grid-col  zc-grid-lg"></div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use></svg>\
  </span> context.js\
  </div>\
  <div class="zc-grid-col zc-grey-text"> Nov 9, 2015  </div>\
  <div class="zc-grid-col zc-grey-text"> Allow to use Dockerfile templates</div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use>  </svg>\
  </span> web.xml \
  </div>  \
  <div class="zc-grid-col zc-grey-text"> Oct 24, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">   Added Autodeploy script for OpenShift </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use>  </svg>\
  </span> tomcat.css\
  </div>  \
  <div class="zc-grid-col zc-grey-text"> Jan 21  </div>\
  <div class="zc-grid-col zc-grey-text">  Add the HTML lang attribute </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  ';

    var setProduct  =  '\
  <div class="zc-grid-heading">\
  <div class="zc-grid-col  zc-grid-md"> Name</div>\
  <div class="zc-grid-col zc-grid-sm"> Date Committed </div>\
  <div class="zc-grid-col  zc-grid-lg"></div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use></svg>\
  </span> notice.html\
  </div>\
  <div class="zc-grid-col zc-grey-text"> Dec 29, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">  Identify the language of text content </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use>  </svg>\
  </span> plugins.xml \
  </div>  \
  <div class="zc-grid-col zc-grey-text"> Nov 2, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">  Perform best practice of cleaning up</div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use>  </svg>\
  </span> feature.css\
  </div>  \
  <div class="zc-grid-col zc-grey-text"> Nov 1, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">  Update documentation </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  ';

    var setBuild  =  '\
  <div class="zc-grid-heading">\
  <div class="zc-grid-col  zc-grid-md"> Name</div>\
  <div class="zc-grid-col zc-grid-sm"> Date Committed </div>\
  <div class="zc-grid-col  zc-grid-lg"></div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div id="folder-js" data-id="js" class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-folder-icon"> </use></svg>\
  </span> JavaScript plugins\
  </div>\
  <div class="zc-grid-col zc-grey-text"> Nov 15, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">   Cache registry </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use></svg>\
  </span> animate.html\
  </div>\
  <div class="zc-grid-col zc-grey-text"> Dec 19, 2015  </div>\
  <div class="zc-grid-col zc-grey-text"> Make mail_room idle_timeout option configurable. </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use>  </svg>\
  </span> config.xml \
  </div>  \
  <div class="zc-grid-col zc-grey-text"> Nov 13, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">  Expanding documentation </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use>  </svg>\
  </span> normalize.css\
  </div>  \
  <div class="zc-grid-col zc-grey-text"> Nov 11, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">   update links to GitLab documentation site </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  ';

    var setJs  =  '\
  <div class="zc-grid-heading">\
  <div class="zc-grid-col  zc-grid-md"> Name</div>\
  <div class="zc-grid-col zc-grid-sm"> Date Committed </div>\
  <div class="zc-grid-col  zc-grid-lg"></div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div id="folder-jquery" data-id="jquery" class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-folder-icon"> </use></svg>\
  </span> jQuery Media Objects\
  </div>\
  <div class="zc-grid-col zc-grey-text"> Oct 19, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">   Separate imports </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use></svg>\
  </span> theme.css\
  </div>\
  <div class="zc-grid-col zc-grey-text"> Aug 1, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">   Handle environments/:id/terminal.ws </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use>  </svg>\
  </span> lighttheme.js \
  </div>  \
  <div class="zc-grid-col zc-grey-text"> Jun 29, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">  	Put archive tests in their own file </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use>  </svg>\
  </span> sprite.css\
  </div>  \
  <div class="zc-grid-col zc-grey-text"> Nov 15, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">   Cache registry </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  ';

    var setJquery  = '\
  <div class="zc-grid-heading">\
  <div class="zc-grid-col  zc-grid-md"> Name</div>\
  <div class="zc-grid-col zc-grid-sm"> Date Committed </div>\
  <div class="zc-grid-col  zc-grid-lg"></div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div id="folder-bootsrap" data-id="bootstrap" class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-folder-icon"> </use></svg>\
  </span> Bootstrap Progress Bars\
  </div>\
  <div class="zc-grid-col zc-grey-text"> Jan 19, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">   	Fix backend URL parsing </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use></svg>\
  </span> include.css\
  </div>\
  <div class="zc-grid-col zc-grey-text"> Oct 19, 2015  </div>\
  <div class="zc-grid-col zc-grey-text"> Separate imports </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use>  </svg>\
  </span> variables.js \
  </div>  \
  <div class="zc-grid-col zc-grey-text"> Oct 9, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">   Put archive tests in their own file </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use>  </svg>\
  </span> packages.js\
  </div>  \
  <div class="zc-grid-col zc-grey-text"> Nov 24, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">   Use base64 and 32 bytes for secret </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  ';

    var setBootstrap  =  '\
  <div class="zc-grid-heading">\
  <div class="zc-grid-col  zc-grid-md"> Name</div>\
  <div class="zc-grid-col zc-grid-sm"> Date Committed </div>\
  <div class="zc-grid-col  zc-grid-lg"></div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div id="folder-animated" data-id="animated" class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-folder-icon"> </use></svg>\
  </span> Animated Progress Bars\
  </div>\
  <div class="zc-grid-col zc-grey-text"> Sep 12, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">  Remove all unused extlibs </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use></svg>\
  </span> Override.css\
  </div>\
  <div class="zc-grid-col zc-grey-text"> Jan 19, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">   	Fix backend URL parsing </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use>  </svg>\
  </span> Component.js \
  </div>  \
  <div class="zc-grid-col zc-grey-text"> May 23, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">   Update the repo icon  </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use>  </svg>\
  </span> static.css\
  </div>  \
  <div class="zc-grid-col zc-grey-text"> Dec 26, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">   Monitor subcommands executed </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  ';

    var setAnimated  =  '\
  <div class="zc-grid-heading">\
  <div class="zc-grid-col  zc-grid-md"> Name</div>\
  <div class="zc-grid-col zc-grid-sm"> Date Committed </div>\
  <div class="zc-grid-col  zc-grid-lg"></div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div id="folder-ui" data-id="ui" class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-folder-icon"> </use></svg>\
  </span>  User Interface Animations\
  </div>\
  <div class="zc-grid-col zc-grey-text"> Feb 19, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">   Just build everything in ./cmd </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use></svg>\
  </span> integration.js\
  </div>\
  <div class="zc-grid-col zc-grey-text"> Mar 3, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">  Add license </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use>  </svg>\
  </span> Importing.js \
  </div>  \
  <div class="zc-grid-col zc-grey-text"> Sep 12, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">  Remove all unused extlibs </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use>  </svg>\
  </span> Prototyping.html\
  </div>  \
  <div class="zc-grid-col zc-grey-text"> Nov 1, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">   Delete the no longer relevant parts of the design and upadte the readme with the latest status. </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  ';

    var setUi  =  '\
  <div class="zc-grid-heading">\
  <div class="zc-grid-col  zc-grid-md"> Name</div>\
  <div class="zc-grid-col zc-grid-sm"> Date Committed </div>\
  <div class="zc-grid-col  zc-grid-lg"></div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div id="folder-concept" data-id="concept" class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-folder-icon"> </use></svg>\
  </span>  Conceptual Ui Animation\
  </div>\
  <div class="zc-grid-col zc-grey-text"> Oct 16, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">   	Add info for packagers </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use></svg>\
  </span> theme.css\
  </div>\
  <div class="zc-grid-col zc-grey-text"> Feb 19, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">   Just build everything in ./cmd </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use>  </svg>\
  </span> Distribution.js \
  </div>  \
  <div class="zc-grid-col zc-grey-text"> Nov 28, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">  Move some doc to Docs/ and apply folder naming scheme </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use>  </svg>\
  </span> serverConfig.js\
  </div>\
  <div class="zc-grid-col zc-grey-text"> Oct 6, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">   Merge branch into master </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  ';

    var setConcept  =  '\
  <div class="zc-grid-heading">\
  <div class="zc-grid-col  zc-grid-md"> Name</div>\
  <div class="zc-grid-col zc-grid-sm"> Date Committed </div>\
  <div class="zc-grid-col  zc-grid-lg"></div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use></svg>\
  </span> Interaction.css\
  </div>\
  <div class="zc-grid-col zc-grey-text"> Oct 19, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">  Run fewer things on branches </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use>  </svg>\
  </span> responsive.js \
  </div>  \
  <div class="zc-grid-col zc-grey-text"> Oct 16, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">   Add info for packagers </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  <div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon">\
  <svg class="zc-blue"> <use xlink:href="#svg-file-icon"> </use>  </svg>\
  </span> chart.css\
  </div>  \
  <div class="zc-grid-col zc-grey-text"> Nov 21, 2015  </div>\
  <div class="zc-grid-col zc-grey-text">   Forgot to close a line. ;] </div>\
  <div class="zc-grid-col"> </div>\
  </div>\
  ';

    /*----------------------- FAVORITES REPOSITORIES -----------------------*/

    var favoriteCollection = [];
    var getrepository;  

    $("#rep-tab-content .zc-repository-list").on("click", ".zc-grid-row", function() {
      $("#zc-article").removeClass().addClass("article zc-repSourceFiles");
      $("#zc-viewBreadcrumbWrap").css("display","block");
      $("#zc-repositoryTab-wrap, #zc-rep-list").css("display","none");
      $("#rep-inner-tabs").css("display","block")
      $("#zc-rep-source").css("display","block");
      $("#zc-projectInfo-title").css("display","block");
      $("#file-action-btnset, #discuss-btn").addClass("zc-hide");
      $("#zc-file-discusssion, .zc-file-history").addClass("zc-hide");


      var getrootfolder = $(this).find(".root-folder").text(),
          getrootfolder = $.trim(getrootfolder);

      $("#zc-breadcrumb a").not("#zc-rootfile").remove();
      $("#zc-breadcrumb .zc-title-text").empty().append(getrootfolder).addClass("active");
      $("#zc-rep-name").empty().append(getrootfolder);
      $('.zc-source-wrap').find('.zc-source-code').empty().append(setrootlist);
      /* INIT CONNECT LISTING POPOVER */
      initPopover(connectpostPopver);
    });


    /* PROJECT VIEW REPOSITORIES LIST */
    $("#project-infotab-content .zc-repository-list").on("click", ".zc-grid-row", function() {
      $("#zc-repository-list").css("display","none");
      $("#zc-source-files").css("display","block");
      var getrootfolder = $(this).find(".root-folder").text(),
          getrootfolder = $.trim(getrootfolder);
      $("#zc-breadcrumb a").not("#zc-rootfile").remove();
      $("#zc-breadcrumb .zc-title-text").empty().append(getrootfolder).addClass("active");
      //$("#zc-rep-name").empty().append(getrootfolder);
      $('.zc-source-wrap').find('.zc-source-code').empty().append(setrootlist);
      /* INIT CONNECT LISTING POPOVER */
      initPopover(connectpostPopver);
    });

    /* BACK TO MY PROJECT VIEW FROM TITLE BREADCRUMB */

    $("#zc-viewBreadcrumbWrap-Project #set-projectId").on("click", function(){
      var getTitleText = $("#set-projectId").text(),
          getTitleText = $.trim(getTitleText);
      console.log(getTitleText);
      $("#zc-viewBreadcrumbWrap-Project").css("display","none");
      $("#project-listtab-content").css("display","block");
      $("#project-infotab-content").css("display","none");
      $("#project-info-tabs, #zc-open-project").css("display","none");
      $("body").addClass("zc-greyBg");
      $(".zc-project-tab").css("display","block");
      $("#zc-article").removeClass().addClass("article  zc-projectList-view");

      if(getTitleText == "My Projects") {
        $("#project-list-tab li").removeClass("active");
        $("#project-list-tab li:first-child").addClass("active");
        $("#project-listtab-content .tab-pane").removeClass("active");
        $("#zc-my-projects").addClass("active");
        $("#zc-shared-with-me .zc-card-view").addClass("fade-in");
        $("#zc-my-projects .zc-card-view").addClass("fade-in");
      }

      //      if(getTitleText == "My Projects") {
      //        $("#project-list-tab li").removeClass("active");
      //        $("#project-list-tab li:first-child").addClass("active");
      //        $("#project-listtab-content .tab-pane").removeClass("active");
      //        $("#zc-my-projects").addClass("active");
      //        $("#zc-shared-with-me .zc-card-view").addClass("fade-in");
      //        $("#zc-my-projects .zc-card-view").addClass("fade-in");
      //      }

    });


    /*--  My Repositories list - When user click on My Repositories list show the list --*/
    $("#zc-all-rep .zc-grid-row").on("click", function(){
      var getrepName     = $(this).find('.root-folder').text(),
          getrepName     = $.trim(getrepName),
          getParentDir   = "My Repositories";
      $(".zc-project-title").css("display","block");
      $("#set-parentDir").empty().append("My Repositories");
      $("#set-parentDir").removeClass("is-publicRepositories is-Favorites").addClass("is-myRepositories");
      getrepository  = $(this).find('.zc-hint').text();
      var filtered       = $(favoriteCollection).filter(function(){
        return this.favtitle == getrepName;
      });
      if(filtered.length > 0){
        $("#zc-favorite-search").addClass("favorited");
      } else {
        $("#zc-favorite-search").removeClass("favorited");
      }
    });

    /*--  Public Repositories list - When user click on Public Repositories list show the list --*/
    $("#zc-public-rep .zc-grid-row").on("click", function(){
      var getrepName     = $(this).find('.root-folder').text(),
          getrepName     = $.trim(getrepName),
          getParentDir   = "Public Repositories";
      $("#set-parentDir").empty().append("Public Repositories");
      $("#set-parentDir").removeClass("is-myRepositories is-Favorites").addClass("is-publicRepositories");
      getrepository  =  $(this).find('.zc-hint').text();
      var filtered       = $(favoriteCollection).filter(function(){
        return this.favtitle == getrepName;
      });
      if(filtered.length > 0){
        $("#zc-favorite-search").addClass("favorited");
      } else {
        $("#zc-favorite-search").removeClass("favorited");
      }
    });

    /*--  Favorite Repositories list - When user click on Favorite Repositories list show the list --*/
    $("#zc-private-rep .zc-repository-list").on("click", ".zc-grid-row", function(event){
      event.stopPropagation();
      var getrepName      = $(this).find('.root-folder').text(),
          getrepName      = $.trim(getrepName),
          getParentDir    = "Favorites";
      $("#set-parentDir").empty().append("Favorites");
      $("#set-parentDir").removeClass("is-myRepositories is-publicRepositories").addClass("is-Favorites");
      getrepository   =  $(this).find('.zc-hint').text();
      var filtered     = $(favoriteCollection).filter(function(){
        return this.favtitle == getrepName;
      });
      if(filtered.length > 0){
        $("#zc-favorite-search").addClass("favorited");
      } else {
        $("#zc-favorite-search").removeClass("favorited");
      }
    });

    /*--------------- GET & SET LOCAL STORAGE RECENT SEARCH RESULT  -----------------*/
    var setFavoriteList     = function () {
      var getfavoritedlist  = JSON.parse(localStorage.getItem("localfavoritedlist")),
          getfavoritedName  = "",
          grid  = "";
      if(getfavoritedlist  != null) {
        favoriteCollection  = JSON.parse(localStorage.getItem("localfavoritedlist"));
        $.each( getfavoritedlist, function( index, value ) {
          getfavoritedName += '<div class="zc-grid-row">\
  <div class="zc-grid-col">\
  <span class="icon"> <svg class="zc-blue"> <use xlink:href="#svg-rep-icon"> </use>  </svg> </span>\
  <span class="root-folder">'+value.favtitle+'</span>\
  </div>\
  <div class="zc-grid-col zc-hint">'+value.favkind+'</div>\
  <div class="zc-grid-col">\
  <span id="zc-favorited" class="icon-20 zc-rep-fav favorited" title="Unfavorite">\
  <svg class="zc-black">\
  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-unfavorite-icon"> </use>\
  </svg>\
  </span>\
  </div>\
  </div>';
        });

        var gridHeading = '<div class="zc-grid-heading">\
  <div class="zc-grid-col zc-grid-xxmd zc-grid-sort is-active-sort"> Name <span id="sort-by-name" class="icon-10 sort-icon">\
  <svg> <use  xlink:href="#svg-sort-icon"> </use> </svg>\
  </span></div>\
  <div class="zc-grid-col zc-grid-sort zc-grid-sm"> Type    <span id="sort-by-tpe" class="icon-10 sort-icon">\
  <svg> <use  xlink:href="#svg-sort-icon"> </use> </svg>\
  </span> </div>\
  <div class="zc-grid-col">\
  <div class="zc-search-wrap">\
  <div id="zc-rep-header" class="zc-search zc-search-expand">\
  <button id="fav-clear-search" class="zc-btn zc-btn-small icon clear-search" title="Clear Search">\
  <i class="icon-9"><svg class="zc-black"> <use xlink:href="#svg-close-icon"> </use> </svg> </i>\
  </button>\
  <input id="zc-fav-rep-list" type="text" class="zc-input" placeholder="Search Repository">\
  <i class="icon-18">\
  <svg class="zc-black"> <use xlink:href="#svg-search-icon"> </use> </svg>\
  </i>\
  </div>\
  </div>\
  </div>\
  </div>'

  $('#zc-private-rep .zc-repository-list').empty();
        $('#zc-private-rep .zc-repository-list').append(gridHeading);
        $('#zc-private-rep .zc-repository-list').append(getfavoritedName);
      }
    }

    setFavoriteList();
    var favoriteCount = $("#zc-private-rep .zc-repository-list .zc-grid-row").length;
    if(favoriteCount < 1) {
      $("#zc-private-rep").find(".zc-repository-list").css("display","none");
      $("#zc-private-rep").find(".zc-favorites-empty").css("display","block");
    } else {
      $("#zc-private-rep").find(".zc-repository-list").css("display","table");
      $("#zc-private-rep").find(".zc-favorites-empty").css("display","none");
    }

    $("#zc-favorites-tab a").on("click", function(){
      setFavoriteList();
      var favoriteCount = $("#zc-private-rep .zc-repository-list .zc-grid-row").length;
      if( favoriteCount < 1) {
        $("#zc-private-rep").find(".zc-repository-list").css("display","none");
        $("#zc-private-rep").find(".zc-favorites-empty").css("display","block");
      } else {
        $("#zc-private-rep").find(".zc-repository-list").css("display","table");
        $("#zc-private-rep").find(".zc-favorites-empty").css("display","none");
      }
    });

    $("#zc-favorite-search").on("click", function() {
      var getFavRep = $("#zc-rep-name").text(),
          getFavRep = $.trim(getFavRep);
      $(this).toggleClass("favorited");
      if($(this).hasClass("favorited")) {
        $(this).attr("title","Unfavorite");
        $("#zc-private-rep").find(".zc-favorites-empty").css("display","none");
        $("#zc-private-rep").find(".zc-repository-list").css("display","table");
        var filtered = $(favoriteCollection).filter(function(){
          return this.favtitle == getFavRep;
        });
        if(!filtered.length){
          favoriteCollection.unshift({favtitle:getFavRep, favkind:getrepository});
        }
      } else {   
        $(this).attr("title","Set as Favorite");
        var favoriteCount = $("#zc-private-rep .zc-repository-list .zc-grid-row").length;
        if( favoriteCount < 2) {
          $("#zc-private-rep").find(".zc-repository-list").css("display","none");
          $("#zc-private-rep").find(".zc-favorites-empty").css("display","block");
        } else  {
          $("#zc-private-rep").find(".zc-repository-list").css("display","table");
          $("#zc-private-rep").find(".zc-favorites-empty").css("display","none");
        }
        $.each(favoriteCollection, function(i) {
          if(favoriteCollection[i].favtitle == getFavRep) {
            favoriteCollection.splice(i,1);
            return false;
          }
        });
      }
      localStorage.setItem("localfavoritedlist", JSON.stringify(favoriteCollection));
      setFavoriteList();
    });

    $(".zc-repository-list").on("click","#zc-favorited", function(event) {
      event.stopPropagation();
      $(this).attr("title","Unfavorite");
      $(this).parent(".zc-grid-col").parent(".zc-grid-row").remove();
      var favoriteCount = $("#zc-private-rep .zc-repository-list .zc-grid-row").length;
      if( favoriteCount < 1) {
        $("#zc-private-rep").find(".zc-repository-list").css("display","none");
        $("#zc-private-rep").find(".zc-favorites-empty").css("display","block");
        $("#favrep-no-result").css("display", "none");
        favoriteCollection =[];   
      } else {
        $("#zc-private-rep").find(".zc-repository-list").css("display","table");
        $("#zc-private-rep").find(".zc-favorites-empty").css("display","none");
      }
      var getFavRep = $(this).parent(".zc-grid-col").parent(".zc-grid-row").find('.root-folder').text();
      $.each(favoriteCollection, function(i){
        if(favoriteCollection[i].favtitle == getFavRep) {
          favoriteCollection.splice(i,1);
          return false;
        }
      }); 
      localStorage.setItem("localfavoritedlist", JSON.stringify(favoriteCollection));  
    });


    /*--  GET BREADCRUMB CONTENT WIDTH AND TRIM THE CONTENT AND MOVE IT MORE --*/  
    var trim_breadcrumb = function () {
      var breadcrumbWidth    = $("#zc-breadcrumb").offsetParent().width(),
          getmorebreadLength = (".zc-breadcrumb-more a").length,
          totalWidth = 0;
      $('#zc-breadcrumb a').each(function(){
        totalWidth  += 100*($(this).outerWidth(true))/breadcrumbWidth;
      });
      if (totalWidth >= 80 ){
        $(".zc-breadcrumb-more a").removeClass("active");
        var getBread = $("#zc-breadcrumb a:eq(-1)").not('.breadcrumb-more-icon').get();
        $(".zc-breadcrumb-more").append(getBread);
        $(".breadcrumb-more-icon").remove();
        $("#zc-breadcrumb > a:eq(-1)").after("<a class='breadcrumb-more-icon'> <svg class='zc-black'> <use  xlink:href='#svg-more-icon'> </use> </svg> </a>");
      } 
    }


    /*-- GO TO BACK BREADCRUMB NAV FUNCTION --*/      
    var goback_breadcrumb = function () { 
      var getmoreactiveId,
          getPreviousId,
          getmorebreadLength = $(".zc-breadcrumb-more a.active").prevAll('a').length;
      $("#zc-sourceRepFiles").each(function() {
        if(getmorebreadLength >= 1) {
          getmoreactiveId = $('.breadcrumb-nav.active').attr('id');
          $("#"+getmoreactiveId).removeClass('active').prev('.breadcrumb-nav').addClass("active").nextAll('.breadcrumb-nav').remove();
          getPreviousId = $("#"+getmoreactiveId).prev('.breadcrumb-nav').attr("id");
        } else if (getmorebreadLength < 1)  {
          if($(".zc-breadcrumb-more a").length == 0) {
            getmoreactiveId = $('.breadcrumb-nav.active').attr('id');
            $("#"+getmoreactiveId).removeClass('active').prev('.breadcrumb-nav').addClass("active").nextAll('.breadcrumb-nav').remove();
            getPreviousId = $("#"+getmoreactiveId).prev('.breadcrumb-nav').attr("id");
          }
          else {
            $(".breadcrumb-more-icon").remove();
            $(".zc-breadcrumb-more").empty();
            $("#zc-breadcrumb a:eq(-1)").addClass("active");
          }
        }
      });
    }


    /*-- CHANGE THE GRID TABLE DATA ON FOLDER CLICK  AND NAVIGATION TO LIST (FUNCTION) --*/ 
    var settable_data = function(gettabledata, _this) {
      $("#connect-post-count").zpopover("close");
      $('.zc-source-wrap').find('.zc-source-code').empty().append(gettabledata);
      var setbreadcrumb =  _this.find('.zc-grid-col').eq(0).text(),
          setbreadcrumb =  $.trim(setbreadcrumb),
          setdataId = _this.attr('data-id');
      $('.zc-breadcrumb').find('a').removeClass('active');
      $('.zc-breadcrumb').append('<a id="zc-'+setdataId +'" class="breadcrumb-nav active">'+ setbreadcrumb +'</a>');
      $('.zc-breadcrumb a.zc-filename').remove();
      $("#source-sort-btn").removeClass("disabled");
      $("#fileFolders-search").removeClass("zc-hide");
      $("#file-action-btnset, #discuss-btn").addClass("zc-hide");
      $("#source-nav-back").removeClass("zc-hide");
      $("#zc-Breadcrumb").removeClass("zc-hide");
      $(".zc-rep-source .zc-breadcrumb-wrap").css("left","278px");    
    }

    $(".zc-source-code").on('click', '.zc-grid-row', function() {
      if($(this).is('#folder-webapps')) {
        settable_data(setWebapps, $(this));
      } else if($(this).is('#folder-resource')) {
        settable_data(setResource, $(this));
      }  else if($(this).is('#folder-source')) {
        settable_data(setSource, $(this));
      }  else if($(this).is('#folder-product')) {
        settable_data(setProduct, $(this));
      }   else if($(this).is('#folder-build')) {
        settable_data(setBuild, $(this)); 
      } else if($(this).is('#folder-jsp')) {
        settable_data(setBuild, $(this)); 
      } else if($(this).is('#folder-js')) {
        settable_data(setJs, $(this)); 
      } else if($(this).is('#folder-jquery')) {
        settable_data(setJquery, $(this)); 
      } else if($(this).is('#folder-bootsrap')) {
        settable_data(setBootstrap, $(this)); 
      } else if($(this).is('#folder-animated')) {
        settable_data(setAnimated, $(this)); 
      } else if($(this).is('#folder-ui')) {
        settable_data(setUi, $(this)); 
      } else if($(this).is('#folder-concept')) {
        settable_data(setConcept, $(this)); 
      }  else {
        var lastsetbreadcrumb =  $(this).find('.zc-grid-col').eq(0).text(),
            lastsetbreadcrumb = $.trim(lastsetbreadcrumb);
        $('.zc-breadcrumb a').removeClass('active');
        $('.zc-breadcrumb a.zc-filename').last().remove();
        $('.zc-breadcrumb'). append('<a id="zc-filename"class="zc-filename breadcrumb-nav active">'+ lastsetbreadcrumb +'</a>');
        $(".zc-source-code").hide();
        $("#source-sort-btn").addClass("disabled");
        $("#fileFolders-search").addClass("zc-hide");
        $("#file-action-btnset, #discuss-btn").removeClass("zc-hide")
        $("#file-action-btnset .zc-btn").removeClass("active");
        $("#file-action-btnset #file-view-code").addClass("active");
        $("#Lineprogressbar").show();
        animateLineBar(100);
        aceEditor("editor", 8, 12 );
        setTimeout(function() {
          $("#Lineprogressbar").css({"display":"none", "width":"0"});
          $("#zc-preview-file").fadeIn();
        }, 1000);
      }

      $('.zc-breadcrumb .zc-title-text').addClass("zc-rootfile");
      $(".zc-rep-source .zc-breadcrumb-wrap").css("left","278px");
      $("#source-nav-back").removeClass("zc-hide");
      $("#zc-go-back").removeClass("disabled");
      trim_breadcrumb();
    });

    var setbreadcrumb_data  = function(getbreadcrumb, _this) {
      $('.zc-source-wrap').find('.zc-source-code').empty().append(getbreadcrumb);
      _this.nextAll('a').remove();
      _this.addClass('active');
      $("#source-sort-btn").removeClass("disabled");
      $("#fileFolders-search").removeClass("zc-hide");
      $("#file-action-btnset, #discuss-btn").addClass("zc-hide");
      $("#zc-file-discusssion, .zc-file-history").addClass("zc-hide");
      $(".zc-source-code").css("display", "table");
      $("#zc-preview-file").css("display","none");
    }

    $(".zc-breadcrumb").on('click', '.breadcrumb-nav:not(.breadcrumb-more-icon)', function() {
      if($(this).is('#zc-webapps')) {
        setbreadcrumb_data(setWebapps, $(this));
      } else if ($(this).is('#zc-jsp')) {
        setbreadcrumb_data(setBuild, $(this));
      } else if ($(this).is('#zc-resources')) {
        setbreadcrumb_data(setResource, $(this));
      } else if ($(this).is('#zc-source')) {
        setbreadcrumb_data(setSource, $(this));
      } else if ($(this).is('#zc-product_package')) {
        setbreadcrumb_data(setProduct, $(this));
      } else if ($(this).is('#zc-build_doc')) {
        setbreadcrumb_data(setBuild, $(this));
      } else if ($(this).is('#zc-js')) {
        setbreadcrumb_data(setJs, $(this));
      } else if ($(this).is('#zc-jquery')) {
        setbreadcrumb_data(setJquery, $(this));
      }else if ($(this).is('#zc-bootstrap')) {
        setbreadcrumb_data(setBootstrap, $(this));
      }else if ($(this).is('#zc-animated')) {
        setbreadcrumb_data(setAnimated, $(this));
      }else if ($(this).is('#zc-ui')) {
        setbreadcrumb_data(setUi, $(this));
      }else if ($(this).is('#zc-concept')) {
        setbreadcrumb_data(setConcept, $(this));
      } else {
        setbreadcrumb_data(setrootlist, $(this));
        $("#source-nav-back").addClass("zc-hide");
        $(".zc-rep-source .zc-breadcrumb-wrap").css("left","240px");
      }
      $(".zc-breadcrumb-more").empty();
    });

    $(".zc-breadcrumb-more").on('click', '.breadcrumb-nav', function() {
      if($(this).is('#zc-webapps')) {
        setbreadcrumb_data(setWebapps, $(this));
      } else if ($(this).is('#zc-jsp')) {
        setbreadcrumb_data(setBuild, $(this));
      } else if ($(this).is('#zc-resources')) {
        setbreadcrumb_data(setResource, $(this));
      } else if ($(this).is('#zc-source')) {
        setbreadcrumb_data(setSource, $(this));
      } else if ($(this).is('#zc-product_package')) {
        setbreadcrumb_data(setProduct, $(this));
      } else if ($(this).is('#zc-build_doc')) {
        setbreadcrumb_data(setBuild, $(this));
      } else if ($(this).is('#zc-js')) {
        setbreadcrumb_data(setJs, $(this));
      } else if ($(this).is('#zc-jquery')) {
        setbreadcrumb_data(setJquery, $(this));
      }else if ($(this).is('#zc-bootstrap')) {
        setbreadcrumb_data(setBootstrap, $(this));
      }else if ($(this).is('#zc-animated')) {
        setbreadcrumb_data(setAnimated, $(this));
      }else if ($(this).is('#zc-ui')) {
        setbreadcrumb_data(setUi, $(this));
      }else if ($(this).is('#zc-concept')) {
        setbreadcrumb_data(setConcept, $(this));
      }
      $(".zc-breadcrumb-more").hide();
    });

    // SHOW AND HIDE ( SEARCH AND DISCUSS IN CONNENCT AND BUTTONSET)
    var showFilesearch = function() {
      $(".zc-source-code").css("display","table");
      $("#zc-preview-file").css("display","none");
      $("#fileFolders-search").removeClass("zc-hide");
      $("#file-action-btnset, #discuss-btn").addClass("zc-hide");
      $("#zc-file-discusssion, .zc-file-history").addClass("zc-hide");
    }

    var hideFilesearch = function() {
      $("#fileFolders-search").addClass("zc-hide");
      $("#file-action-btnset, #discuss-btn").removeClass("zc-hide");
    }

    $("#zc-go-back").on("click", function() {
      goback_breadcrumb();
      var getactiveId = $('.zc-breadcrumb-wrap .breadcrumb-nav.active').attr('id');
      if(getactiveId == "zc-webapps") {
        $('.zc-source-wrap').find('.zc-source-code').empty().append(setWebapps);
        showFilesearch();
      } else if(getactiveId == "zc-resources") {
        $('.zc-source-wrap').find('.zc-source-code').empty().append(setResource);
        showFilesearch();
      }  else if(getactiveId == "zc-source") {
        $('.zc-source-wrap').find('.zc-source-code').empty().append(setSource);
        showFilesearch();
      }  else if(getactiveId == "zc-product_package") {
        $('.zc-source-wrap').find('.zc-source-code').empty().append(setProduct);
        showFilesearch();
      } else if(getactiveId == "zc-build_doc" || getactiveId == "zc-jsp") {
        $('.zc-source-wrap').find('.zc-source-code').empty().append(setBuild);
        showFilesearch();
      } else if(getactiveId == "zc-js") {
        $('.zc-source-wrap').find('.zc-source-code').empty().append(setJs);
        showFilesearch();
      } else if(getactiveId == "zc-jquery") {
        $('.zc-source-wrap').find('.zc-source-code').empty().append(setJquery);
        showFilesearch();
      }  else if(getactiveId == "zc-bootstrap") {
        $('.zc-source-wrap').find('.zc-source-code').empty().append(setBootstrap);
        showFilesearch();
      } else if(getactiveId == "zc-animated") {
        $('.zc-source-wrap').find('.zc-source-code').empty().append(setAnimated);
        showFilesearch();
      } else if(getactiveId == "zc-ui") {
        $('.zc-source-wrap').find('.zc-source-code').empty().append(setUi);
        showFilesearch();
      } else if(getactiveId == "zc-concept") {
        $('.zc-source-wrap').find('.zc-source-code').empty().append(setConcept);
        showFilesearch();
      }  else if(getactiveId == "zc-rootfile") {
        $('.zc-source-wrap').find('.zc-source-code').empty().append(setrootlist);
        /* INIT CONNECT LISTING POPOVER */
        initPopover(connectpostPopver);
        //DISABLE GO BACK BUTTON
        $("#source-nav-back").addClass("zc-hide");
        $(".zc-rep-source .zc-breadcrumb-wrap").css("left","240px");
        showFilesearch();
      } else {
        $("#zc-preview-file").css("display","none");
        $("#zc-source-files, #zc-rep-source").hide();
        $("#zc-repository-list, #zc-rep-list, #zc-rep-header").show();
        hideFilesearch();
      }
      $("#source-sort-btn").removeClass("disabled");
      $(this).blur();

    });

    $("#zc-breadcrumb").on('click','.breadcrumb-more-icon', function(event){
      event.stopPropagation();
      var getMoreOffset     = $('.breadcrumb-more-icon').offset(),
          getMoreOffsetleft = getMoreOffset.left-630,
          getMoreOffsetTop  = getMoreOffset.top;
      $(".zc-breadcrumb-more").css({"left":getMoreOffsetleft,"top":"30px", "opacity":"1"} );
      $(".zc-breadcrumb-more").show();
    });


    /*------ REPOSITORIES BACK TO PARENT REPOSITORIES  -------*/


    $("#set-parentDir").on("click", function(){
      var _this = $(this);
      $("#zc-preview-file").css("display","none");
      $("#rep-inner-tabs").css("display","none");
      $("#zc-repositoryTab-wrap").css("display","block");
      $("#zc-rep-source").hide();
      $("#zc-rep-list").show();
      $("#zc-viewBreadcrumbWrap").css("display","none");
      $("#zc-article").removeClass("zc-repSourceFiles").addClass("zc-repositories");
      hideFilesearch();

      if(_this.hasClass("is-myRepositories")){
        $("#rep-tabs li").removeClass("active");
        $("#rep-tabs li").eq(0).addClass("active");
      } else if(_this.hasClass("is-publicRepositories")){
        $("#rep-tabs li").removeClass("active");
        $("#rep-tabs li").eq(1).addClass("active");
      } else if(_this.hasClass("is-Favorites")){
        $("#rep-tabs li").removeClass("active");
        $("#rep-tabs li").eq(2).addClass("active");
      } else {
        $(".zc-info-wrap").removeClass("page-transition");
        $(".zc-project-tab").css("display", "block");
        $(".zc-topbar").removeClass("t-float");
        $(".article").removeClass("zc-project-wrap");
      }

    });






    /*-- PROJECT RENAME --*/
    $("#zc-rename").on("click", function() {
      var cardId = $("#zc-card-data"),
          dialogId = $("#zc-project-rename");
      show_dialog(dialogId);
      rename_dialog (cardId, dialogId);
      renametextfield_hide_error('#project-rename');
    });

    $("#zc-rename-1").on("click", function() {
      var cardId = $("#zc-card-data-1"),
          dialogId = $("#zc-project-rename-1");
      show_dialog(dialogId);
      rename_dialog (cardId, dialogId);
      renametextfield_hide_error('#project-rename-1');
    });

    $("#zc-rename-2").on("click", function() {
      var cardId = $("#zc-card-data-2"),
          dialogId = $("#zc-project-rename-2");
      show_dialog(dialogId);
      rename_dialog (cardId, dialogId);
      renametextfield_hide_error('#project-rename-2');
    });

    $("#zc-rename-3").on("click", function() {
      var cardId = $("#zc-card-data-3"),
          dialogId = $("#zc-project-rename-3");
      show_dialog(dialogId);
      rename_dialog (cardId, dialogId);
      renametextfield_hide_error('#project-rename-3');
    });

    $(".zc-rename-cancel, .zc-rename-close").on("click", function() {
      hide_dialog();
    });

    $("#zc-project-rename .zc-rename-ok").on("click", function() {
      var projectRename = $("#project-rename").val(),
          inputVal = projectRename,
          characterReg   = /^([a-zA-Z0-9-_\s]{3,100})$/,
          ifcheck = true; 
      if( projectRename =="" ) {
        field_empty_error('#project-rename');
        ifcheck=false;
      }   else if(!characterReg.test(inputVal)) {
        renametextfield_show_error('#project-rename');
        ifcheck=false;     
      }   else {
        renametextfield_hide_error('#project-rename');
      }

      if( ifcheck == true) {
        var localnewProjectname = $("#zc-project-rename").find(".zc-input").val(),
            localnewProjectname = $.trim(localnewProjectname);
        $("#zc-card-data").find(".zc-card-header .zc-card-title h2").empty().append(localnewProjectname);
        $("#zc-card-data").find(".zc-card-header .zc-card-title h2").attr('data-title',localnewProjectname);
        hide_dialog();
        // LOCAL STORAGE        
        var localrenameprojectDetails = { name: localnewProjectname };     
        localStorage.setItem("localrenameprojectDetails", JSON.stringify(localrenameprojectDetails));
      }
    });

    $("#zc-project-rename-1 .zc-rename-ok").on("click", function() {

      var projectRename = $("#project-rename-1").val(),
          inputVal = projectRename,
          characterReg   = /^([a-zA-Z0-9-_\s]{3,100})$/,
          ifcheck = true; 
      if( projectRename =="" ) {
        field_empty_error('#project-rename-1');
        ifcheck=false;
      }   else if(!characterReg.test(inputVal)) {
        renametextfield_show_error('#project-rename-1');
        ifcheck=false;     
      }   else {
        renametextfield_hide_error('#project-rename-1');
      }
      if( ifcheck == true) {
        var localnewProjectname1 = $("#zc-project-rename-1").find(".zc-input").val(),
            localnewProjectname1 = $.trim(localnewProjectname1);
        $("#zc-card-data-1").find(".zc-card-header .zc-card-title h2").empty().append(localnewProjectname1);
        $("#zc-card-data-1").find(".zc-card-header .zc-card-title h2").attr('data-title',localnewProjectname1);
        hide_dialog();
        // LOCAL STORAGE        
        var localrenameprojectDetails1 = { name: localnewProjectname1 };     
        localStorage.setItem("localrenameprojectDetails1", JSON.stringify(localrenameprojectDetails1));
      }
    });

    $("#zc-project-rename-2 .zc-rename-ok").on("click", function() {

      var projectRename = $("#project-rename-2").val(),
          inputVal = projectRename,
          characterReg   = /^([a-zA-Z0-9-_\s]{3,100})$/,
          ifcheck = true; 
      if( projectRename =="" ) {
        field_empty_error('#project-rename-2');
        ifcheck=false;
      }   else if(!characterReg.test(inputVal)) {
        renametextfield_show_error('#project-rename-2');
        ifcheck=false;     
      }   else {
        renametextfield_hide_error('#project-rename-2');
      }
      if( ifcheck == true) {
        var localnewProjectname2 = $("#zc-project-rename-2").find(".zc-input").val(),
            localnewProjectname2 = $.trim(localnewProjectname2);
        $("#zc-card-data-2").find(".zc-card-header .zc-card-title h2").empty().append(localnewProjectname2);
        $("#zc-card-data-2").find(".zc-card-header .zc-card-title h2").attr('data-title',localnewProjectname2);
        hide_dialog();
        // LOCAL STORAGE        
        var localrenameprojectDetails2 = { name: localnewProjectname2 };     
        localStorage.setItem("localrenameprojectDetails2", JSON.stringify(localrenameprojectDetails2));
      }
    });


    $("#zc-project-rename-3 .zc-rename-ok").on("click", function() {
      var projectRename = $("#project-rename-3").val(),
          inputVal = projectRename,
          characterReg   = /^([a-zA-Z0-9-_\s]{3,100})$/,
          ifcheck = true; 
      if( projectRename =="" ) {
        field_empty_error('#project-rename-3');
        ifcheck=false;
      }   else if(!characterReg.test(inputVal)) {
        renametextfield_show_error('#project-rename-3');
        ifcheck=false;     
      }   else {
        renametextfield_hide_error('#project-rename-3');
      }

      if( ifcheck == true) {
        var localnewProjectname3 = $("#zc-project-rename-3").find(".zc-input").val(),
            localnewProjectname3 = $.trim(localnewProjectname3);
        $("#zc-card-data-3").find(".zc-card-header .zc-card-title h2").empty().append(localnewProjectname3);
        $("#zc-card-data-3").find(".zc-card-header .zc-card-title h2").attr('data-title',localnewProjectname3);
        hide_dialog();
        // LOCAL STORAGE        
        var localrenameprojectDetails3 = { name: localnewProjectname3 };     
        localStorage.setItem("localrenameprojectDetails3", JSON.stringify(localrenameprojectDetails3));
      }
    });

    //* KEYDOWN VALIDATION 

    $('#project-rename').keyup(function() {
      project_rename_validation ($(this));
    });

    $('#project-rename-1').keyup(function() {
      project_rename_validation ($(this));
    });

    $('#project-rename-2').keyup(function() {
      project_rename_validation ($(this));
    });

    $('#project-rename-3').keyup(function() {
      project_rename_validation ($(this));
    });


    /*----------------------------------------------------------------------------------------------------------------------------------------
                                                                                                                                                         DELETE PROJECT
                                                                                                ----------------------------------------------------------------------------------------------------------------------------------------*/     

    $("#delete-project").on("click", function() {
      var dialogId = $("#zc-project-delete"),
          setcaptchaText = $("#zc-card-data .zc-card-title h2").attr('data-title');
      $("#zc-project-delete").find('.zc-captcha-text').empty().append(setcaptchaText);
      $("#captchafield").val("");
      $("#captchafield").next('.zc-hint').addClass("zc-hide");
      $("#confirm-delete").addClass("disabled");
      renametextfield_hide_error('#captchafield');
      show_dialog(dialogId);
    });

    $("#confirm-delete").on("click", function() {
      var getfield = $("#captchafield").val(),
          getcaptchaText  =  $("#zc-project-delete").find('.zc-captcha-text').text(),
          getcaptchaText = $.trim(getcaptchaText);
      ifcheck = true;
      if( getfield =="" ) {
        renametextfield_show_error('#captchafield');
        $("#captchafield").next('.zc-hint').removeClass("zc-hide");
        ifcheck=false;
      }

      if( getfield != getcaptchaText ) {
        renametextfield_show_error('#captchafield');
        $("#captchafield").next('.zc-hint').removeClass("zc-hide");
        ifcheck=false;
      }



      if( ifcheck == true) {

        $("#zc-card-data").remove();
        hide_dialog();
      }
    });





    $("#delete-project-1").on("click", function() {
      var dialogId = $("#zc-project-delete-1"),
          setcaptchaText = $("#zc-card-data-1 .zc-card-title h2").attr('data-title');
      $("#zc-project-delete-1").find('.zc-captcha-text').empty().append(setcaptchaText);
      $("#captchafield-1").val("");
      $("#captchafield-1").next('.zc-hint').addClass("zc-hide");
      $("#confirm-delete-1").addClass("disabled");
      renametextfield_hide_error('#captchafield-1');
      show_dialog(dialogId);
    });

    $("#confirm-delete-1").on("click", function() {
      var getfield = $("#captchafield-1").val(),
          getcaptchaText  =  $("#zc-project-delete-1").find('.zc-captcha-text').text(),
          getcaptchaText = $.trim(getcaptchaText);
      ifcheck = true;
      if( getfield =="" ) {
        renametextfield_show_error('#captchafield-1');
        $("#captchafield-1").next('.zc-hint').removeClass("zc-hide");
        ifcheck=false;
      }

      if( getfield != getcaptchaText ) {
        renametextfield_show_error('#captchafield-1');
        $("#captchafield-1").next('.zc-hint').removeClass("zc-hide");
        ifcheck=false;
      }

      if( ifcheck == true) {
        $("#zc-card-data-1").remove();
        hide_dialog();
      }
    });


    $("#delete-project-2").on("click", function() {
      var dialogId = $("#zc-project-delete-2"),
          setcaptchaText = $("#zc-card-data-2 .zc-card-title h2").attr('data-title');
      $("#zc-project-delete-2").find('.zc-captcha-text').empty().append(setcaptchaText);
      $("#captchafield-2").val("");
      $("#captchafield-2").next('.zc-hint').addClass("zc-hide");
      $("#confirm-delete-2").addClass("disabled");
      renametextfield_hide_error('#captchafield-2');
      show_dialog(dialogId);
    });

    $("#confirm-delete-2").on("click", function() {
      var getfield = $("#captchafield-2").val(),
          getcaptchaText  =  $("#zc-project-delete-2").find('.zc-captcha-text').text(),
          getcaptchaText = $.trim(getcaptchaText);
      ifcheck = true;
      if( getfield =="" ) {
        renametextfield_show_error('#captchafield-2');
        $("#captchafield-2").next('.zc-hint').removeClass("zc-hide");
        ifcheck=false;
      }

      if( getfield != getcaptchaText ) {
        renametextfield_show_error('#captchafield-2');
        $("#captchafield-2").next('.zc-hint').removeClass("zc-hide");
        ifcheck=false;
      }

      if( ifcheck == true) {
        $("#zc-card-data-2").remove();
        hide_dialog();
      }
    });


    $("#delete-project-3").on("click", function() {
      var dialogId = $("#zc-project-delete-3"),
          setcaptchaText = $("#zc-card-data-3 .zc-card-title h2").attr('data-title');
      $("#zc-project-delete-3").find('.zc-captcha-text').empty().append(setcaptchaText);
      $("#captchafield-3").val("");
      $("#captchafield-3").next('.zc-hint').addClass("zc-hide");
      $("#confirm-delete-3").addClass("disabled");
      renametextfield_hide_error('#captchafield-3');
      show_dialog(dialogId);
    });

    $("#confirm-delete-3").on("click", function() {
      var getfield = $("#captchafield-3").val(),
          getcaptchaText  =  $("#zc-project-delete-3").find('.zc-captcha-text').text(),
          getcaptchaText = $.trim(getcaptchaText);
      ifcheck = true;
      if( getfield =="" ) {
        renametextfield_show_error('#captchafield-3');
        $("#captchafield-3").next('.zc-hint').removeClass("zc-hide");
        ifcheck=false;
      }

      if( getfield != getcaptchaText ) {
        renametextfield_show_error('#captchafield-3');
        $("#captchafield-3").next('.zc-hint').removeClass("zc-hide");
        ifcheck=false;
      }

      if( ifcheck == true) {
        $("#zc-card-data-3").remove();
        hide_dialog();
      }
    });



    $('#captchafield').keyup(function() {
      var getfield = $("#captchafield").val(),
          getcaptchaText  =  $("#zc-project-delete").find('.zc-captcha-text').text();
      if( getfield == getcaptchaText ) {
        $("#confirm-delete").removeClass("disabled");
      } else {
        $("#confirm-delete").addClass("disabled");
      }
    });

    $('#captchafield-1').keyup(function() {
      var getfield = $("#captchafield-1").val(),
          getcaptchaText  =  $("#zc-project-delete-1").find('.zc-captcha-text').text();
      if( getfield == getcaptchaText ) {
        $("#confirm-delete-1").removeClass("disabled");
      } else {
        $("#confirm-delete-1").addClass("disabled");
      }
    });

    $('#captchafield-2').keyup(function() {
      var getfield = $("#captchafield-2").val(),
          getcaptchaText  =  $("#zc-project-delete-2").find('.zc-captcha-text').text();
      if( getfield == getcaptchaText ) {
        $("#confirm-delete-2").removeClass("disabled");
      } else {
        $("#confirm-delete-2").addClass("disabled");
      }
    });

    $('#captchafield-3').keyup(function() {
      var getfield = $("#captchafield-3").val(),
          getcaptchaText  =  $("#zc-project-delete-3").find('.zc-captcha-text').text();
      if( getfield == getcaptchaText ) {
        $("#confirm-delete-3").removeClass("disabled");
      } else {
        $("#confirm-delete-3").addClass("disabled");
      }
    });


    //    $(document).on("click", "#post-connect-cancel",  function() {
    //      show_Confirmdialog($("#remove-share-confirm"));
    //    });

    $(".zc-delete-cancel, .zc-delete-close").on("click", function() {
      if($(this).is("#post-connect-cancel")){
        show_Confirmdialog($("#cancel-connect-post"));
        $("#zc-useravatar_zpopover").hide();
      } else {
        hide_dialog();
      }
    });



    /*------------------------------------------------------------------------------
                                                                                                                  SHARE PROJECTS
                                                                                    -------------------------------------------------------------------------------*/

    $("#zc-share").on("click", function() {
      var dialogId = $("#zc-project-share");
      show_dialog(dialogId);
      $("#sharedUserName").ztokenfield('removeTokens');
      textfield_hide_error('#sharedUserName-ztokenfield-container', '#add-cd-required');
      $("#manage-cd-list").removeClass("show-dialog");
      $(".zc-share-wrap").removeClass("zc-hide-dialog");
      $("#sharedUserName_suggest_input").focus();

      //reset
      $("#zc-share-btn").removeClass("zc-loading");
      $('#zc-share-btn').empty().append('Share');
      $(".zc-action-overlay").removeClass('show-action-overlay');
      $(".zc-overlay .zc-dialog-close").removeClass("disabled");
    });


    /*-------------------------------------- SHARE BUTTON CLICK ----------------------------------*/

    $('#zc-share-btn').on("click", function() {
      var allTokens = $('#sharedUserName').ztokenfield("getAllValues");
      console.log(allTokens);
      var ifcheck =true;
      var getEmail,
          getImage,
          getName;
      $.each(allTokens, function(index){
          getEmail = this.email,
          getImage = this.imageURL,
          getName  = this.name;
        
        $("#manage-cd-list .shared-list-wrap").append('<div class="manage-shared-list">\
  <span class="scd-pic"> <img src='+getImage+'> </span>\
  <span class="scd-info">\
  <span class="scd-name">	'+getName+' </span>\
  <span class="scd-mail">'+getEmail+'</span>\
  </span>\
  <span class="scd-permission">\
  <select id="zc-share-permission-1" class="chosen-select-no-single zc-share-permission-1" style="width:120px;"><option value=""></option>\
  <option value="Write" selected="selected">Write</option>\
  <option value="Read Only">Read Only</option>\
  </select>\
  </span>\
  <span class="scd-remove zc-fright">\
  <button class="zc-btn icon" title="Remove Share">\
  <i class="icon-12">\
  <svg class="zc-black"> <use xlink:href="#svg-close-icon"> </use> </svg>\
  </i>\
  </button>\
  </span>\
  </div>');


        $(".shared-list-wrap-1").append('<div class="shared-user">\
  <span class="scd-pic"> <img src='+getImage+'> </span>\
  <span class="scd-info">\
  <span class="scd-name">	'+getName+' </span>\
  </span>\
  </div>');

      });

      var config = {
        '.chosen-select'           : {},
        '.chosen-select-deselect'  : {allow_single_deselect:true},
        '.chosen-select-no-single' : {disable_search_threshold:10},
        '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
        '.chosen-select-width'     : {width:"95%"}
      }
      for (var selector in config) {
        $(selector).chosen(config[selector]);
      }

      $(".scd-permission .chosen-single div b").empty().append('<svg> <use xlink:href="#svg-selectarrow-icon"> </use> </svg>');   

      var getPermission = $("#zc-share-permission").chosen().val(),
          getPermission = $.trim(getPermission);

      if(getPermission == "Write") {
        $(".zc-share-permission-1").val("Write");
        $('.zc-share-permission-1').trigger("chosen:updated");
      } else if (getPermission == "Read Only") {
        $(".zc-share-permission-1").val("Read Only");
        $('.zc-share-permission-1').trigger("chosen:updated");
      } 

      if(allTokens<=0){
        textfield_show_error('#sharedUserName-ztokenfield-container', '#add-cd-required');
        ifcheck =false;

      } else {
        ifcheck =true;
        $(".zc-action-overlay").addClass('show-action-overlay');
        $(".zc-overlay .zc-dialog-close").addClass("disabled");
        $('#zc-share-btn').addClass("zc-loading");
        $('#zc-share-btn').empty().append('<span class="zc-loader"> </span> Sharing');
        $('#zc-share-btn').blur();
        setTimeout(function() {
          hide_dialog();
          $("#project-share-success").addClass("show-toast-message");
          $(".zc-action-overlay").removeClass('show-action-overlay');
          toast_Position();
          $("#add-codeveloper, .shared-list-wrap-1").removeClass("zc-hide");		
        },2500);

        setTimeout(function() {
          $("#project-share-success").removeClass("show-toast-message");
        },5500);

        textfield_hide_error('#sharedUserName-ztokenfield-container', '#add-cd-required');
      } 
    });

    /*-------------------------------------- MANAGE SHARED USERS  ----------------------------------*/

    $("#manage-developer").on("click", function() {
      $(".zc-share-wrap").addClass("zc-hide-dialog")
      $("#manage-cd-list").addClass("show-dialog");
      $("#manage-back-btn").removeClass("zc-hide")
    });

    $("#manage-back-btn").on("click", function() {
      $(".zc-share-wrap").removeClass("zc-hide-dialog")
      $("#manage-cd-list").removeClass("show-dialog");
      $("#manage-back-btn").addClass("zc-hide")
    });


    /*----------------------- CANCEL SHARE -----------------------------*/

    $("#zc-cancel-share").on("click", function() {
      hide_dialog();
      $("#manage-cd-list").removeClass("show-dialog");
      $(".zc-share-wrap").removeClass("zc-hide-dialog");
    });

    /*----------------------- REMOVE CO-DEVELOPERS -----------------------------*/

    var selectedUser,
        getIndex ;
    $("#manage-cd-list").on("click", ".scd-remove", function() {
      show_Confirmdialog($("#remove-share-confirm"));
      selectedUser     =  $(this).parent('.manage-shared-list');
      getIndex         =  selectedUser.index();
      var getUserName      =  selectedUser.find('.scd-name').text(),
          getUserName      =  $.trim(getUserName);

      $("#remove-share-confirm").find('.zc-dialog-msg').empty().append('Are you sure you want to remove sharing for <span class="zc-font-bold">'+ getUserName+'</span>?');
    });


    /*----------------- CONFIRM DIALOG ---------------*/

    $("#rs-confirm-yes").on("click", function() {
      var dialogId = $("#remove-share-confirm");
      hide_Confirmdialog(dialogId);
      selectedUser.fadeOut("normal", function() {
        selectedUser.remove();
      });
      $('.shared-list-wrap-1 .shared-user').eq(getIndex).remove();
      var getShareCount  =  $('.shared-list-wrap .manage-shared-list').length;

      if(getShareCount == 1){
        $("#add-codeveloper").addClass("zc-hide");
        $("#manage-cd-list").removeClass("show-dialog");
        $(".zc-share-wrap").removeClass("zc-hide-dialog");
      } 
    });

    $("#rs-confirm-no").on("click", function() {
      var dialogId = $("#remove-share-confirm");
      hide_Confirmdialog(dialogId);
    });





    var gridRowLength = $("#zc-public-rep .zc-repository-list").find(".zc-grid-row:visible").length;

    $("#zc-other-rep-list").on("keyup click input", function () {
      if (this.value.length > 0) {
        $("#zc-public-rep .zc-repository-list .zc-grid-row").show().filter(function () {
          return $(this).find('.root-folder').text().toLowerCase().indexOf($("#zc-other-rep-list").val().toLowerCase()) == -1;  }).hide();
      }
      else {
        $("#zc-public-rep .zc-repository-list .zc-grid-row").show();
        // highlight(this.value);

      }

      var gridRowLength = $("#zc-public-rep .zc-repository-list").find(".zc-grid-row:visible").length;
      if(gridRowLength <= 0) {
        $("#otherrep-no-result").css("display", "block");
      } else {
        $("#otherrep-no-result").css("display", "none");
      }

    });

    $("#zc-my-rep-list").on("keyup click input", function () {

      if (this.value.length > 0) {
        $("#zc-all-rep .zc-repository-list .zc-grid-row").show().filter(function () {
          return $(this).find('.root-folder').text().toLowerCase().indexOf($("#zc-my-rep-list").val().toLowerCase()) == -1; }).hide();
      }
      else {
        $("#zc-all-rep .zc-repository-list .zc-grid-row").show();
      }

      var gridRowLength = $("#zc-all-rep .zc-repository-list").find(".zc-grid-row:visible").length;

      if(gridRowLength <= 0) {
        $("#myrep-no-result").css("display", "block");
      } else {
        $("#myrep-no-result").css("display", "none");
      }

    });

    $("#zc-private-rep").on("keyup click input", "#zc-fav-rep-list", function () {

      if (this.value.length > 0) {
        $("#zc-private-rep .zc-repository-list .zc-grid-row").show().filter(function () {
          return $(this).find('.root-folder').text().toLowerCase().indexOf($("#zc-fav-rep-list").val().toLowerCase()) == -1;
        }).hide();
      }
      else {
        $("#zc-private-rep .zc-repository-list .zc-grid-row").show();
      }
      var gridRowLength = $("#zc-private-rep .zc-repository-list").find(".zc-grid-row:visible").length;
      if(gridRowLength <= 0) {
        $("#favrep-no-result").css("display", "block");
      } else {
        $("#favrep-no-result").css("display", "none");
      }

    });


    /*---------------------- CLEAR SEARCH ---------------------*/

    var show_clear = function(getInputID, getClearSearchId) {
      var hasSearchText = $(getInputID).val().length;
      if(hasSearchText > 0 ) {
        $(getClearSearchId).css("display","block");
      } else {
        $(getClearSearchId).css("display","none");
      }
    }

    $("#zc-other-rep-list").on("keyup", function(){
      show_clear("#zc-other-rep-list", "#public-clear-search");
    });

    $("#zc-my-rep-list").on("keyup", function(){
      show_clear("#zc-my-rep-list", "#my-clear-search");    
    });

    $("#zc-private-rep").on("keyup", "#zc-fav-rep-list", function(){
      var hasSearchText = $("#zc-private-rep #zc-fav-rep-list").val().length;
      if(hasSearchText > 0 ) {
        $("#fav-clear-search").css("display","block");
      } else {
        $("#fav-clear-search").css("display","none");
      }
    });

    $("#public-clear-search").on("click", function() {
      $("#zc-other-rep-list").val("");
      $("#zc-public-rep .zc-repository-list .zc-grid-row").show();
      $(this).css("display","none");
      $("#myrep-no-result").hide();
    });

    $("#my-clear-search").on("click", function() {
      $("#zc-my-rep-list").val("");
      $("#zc-all-rep .zc-repository-list .zc-grid-row").show();
      $(this).css("display","none");
      $("#myrep-no-result").hide();
    });

    $("#zc-private-rep").on("click", "#fav-clear-search", function() {
      $("#zc-private-rep #zc-fav-rep-list").val("");
      $("#zc-private-rep .zc-repository-list .zc-grid-row").show();
      $(this).css("display","none");
      $("#myrep-no-result").hide();
    });

    $(".zc-grid-heading .zc-grid-name").on("click", function() {
      $(".zc-grid-heading .zc-grid-col").removeClass("is-active-sort");
      $(this).addClass("is-active-sort");

      $("#sort-by-name").toggleClass("invert");
      $("#p-sort-by-name").toggleClass("invert");
    });

    $(".zc-grid-heading .zc-grid-date").on("click", function() {
      $(".zc-grid-heading .zc-grid-col").removeClass("is-active-sort");
      $(this).addClass("is-active-sort");
      $("#sort-by-type").toggleClass("invert");
      $("#p-sort-by-type").toggleClass("invert");
    });


    $(document).on("click", ".zc-grid-heading .zc-grid-sort",  function() {
      $(".zc-grid-heading .zc-grid-col").removeClass("is-active-sort");
      $(this).addClass("is-active-sort");
      $(this).find(".sort-icon").toggleClass("invert");
    });






    /*-- ANIMATIONS --*/ 

    /*-- TAB SWITCH ANIMATIONS --*/
    $(document).on('click', '#myTab a', function (e) {
      e.preventDefault();
      $('.tab-content').find('.zc-tab-animate').removeClass("fade-in");
      setTimeout(function() {
        $('.tab-content').find(".active").children('.zc-tab-animate').addClass("fade-in");
      }, 100);
    });

    // CREATE PROJECT 
    $(document).on('click', '#createproject-tabs a', function (e) {
      e.preventDefault();
      $('#createproject-tab-content').find('.zc-tab-animate').removeClass("fade-in");
      setTimeout(function() {
        $('#createproject-tab-content').find(".active").children('.zc-tab-animate').addClass("fade-in");
      }, 100);
    });

    // PROJECT LIST 
    $('#project-list-tab a').click(function (e) {
      e.preventDefault();
      $('#project-listtab-content').find('.zc-tab-animate').removeClass("fade-in");
      setTimeout(function() {
        $('#project-listtab-content').find(".active").children('.zc-tab-animate').addClass("fade-in");
      }, 100);
    });

    // PROJECT INFO TABS 
    $('#project-info-tabs .zc-tab').click(function (e) {
      e.preventDefault();
      $('#project-infotab-content').find('.zc-tab-animate').removeClass("fade-in");
      setTimeout(function() {
        $('#project-infotab-content').find(".zc-tab-active").addClass("fade-in");
      }, 100);
    });

    //CLOUD REPOSITORIES TAB
    $('#chooseCloud a').click(function (e) {
      e.preventDefault();
      $('#choose-cloud-content').find('.zc-tab-animate').removeClass("fade-in");
      setTimeout(function() {
        $('#choose-cloud-content').find(".active").children('.zc-tab-animate').addClass("fade-in");
      }, 100);
    });

    // REPOSITORIES TABS 
    $('#rep-tabs a').click(function (e) {
      e.preventDefault();
      $('#rep-tab-content').find('.zc-tab-animate').removeClass("fade-in");
      setTimeout(function() {
        $('#rep-tab-content').find(".active").children('.zc-tab-animate').addClass("fade-in");
      }, 100);
    });

    // REPOSITORIES INNER TABS 
    $('#rep-inner-tabs .zc-tab').click(function (e) {
      e.preventDefault();
      $('#rep-inner-tab-content').find('.zc-tab-animate').removeClass("fade-in");
      setTimeout(function() {
        $('#rep-inner-tab-content').find(".zc-tab-active").addClass("fade-in");
      }, 100);
    });

    //USER INFO TAB 
    $(document).on('click', '#userInfoTab .zc-tab', function (e) {
      e.preventDefault();
      $('#userInfoTab-content').find('.zc-tab-animate').removeClass("fade-in");
      setTimeout(function() {
        $('#userInfoTab-content').find(".zc-tab-active").addClass("fade-in");
      }, 100);
    });

    //PROJECT INFO TAB 
    $(document).on('click', '#projectInfoTab .zc-tab', function (e) {
      e.preventDefault();
      $('#projectInfoTab-content').find('.zc-tab-animate').removeClass("fade-in");
      setTimeout(function() {
        $('#projectInfoTab-content').find(".zc-tab-active").addClass("fade-in");
      }, 100);
    });

    //------------------------- NOTIFICATION ---------------------------//

    $(".zc-notifi-pane a").on("click", function(){
      $(this).removeClass("notify-unread");
    });

    /* ---------  USER PROFILE MENU  --------- */

    $(".ide-user-info").on("click", function (event) {
      event.stopPropagation();
      event.preventDefault();
      $(".ide-user-account").toggleClass("shrink");
    })

    $(document).on("click", "#zc-user-menu", function (event) {
      event.stopPropagation();
      event.preventDefault();
      $('.zmenu').hide();
      $("#ide-help-menu").removeClass("active");
      $(".zc-user-account").toggleClass("zc-show-menu");
      $(".zc-notifi").removeClass("zc-show-menu");

    });

    $(".zc-setting-info #my-portals").on("click", function(event){
      event.stopPropagation();
      event.preventDefault();
      $(".zc-user-menu").addClass('show-sub-nav');
    });

    $("#back-to-info").on("click", function(event){
      event.stopPropagation();
      event.preventDefault();
      $(".zc-user-menu").removeClass('show-sub-nav');
    });


    $(".zc-user-subnav").on("click", 'li:not("#back-to-info")', function(){
      $(".zc-user-subnav li").find('.zc-list-icon').removeClass('zc-tick-icon');
      $(this).find('.zc-list-icon').addClass('zc-tick-icon');
    });

    //    $('#useraccount-help-icon').mouseenter( function() {
    //      var useraccountHelp  = $('#useraccount-help-icon').offset(),
    //          useraccountHelpTop = useraccountHelp.top,
    //          useraccountHelpLeft = useraccountHelp.left;  
    //      $("#zc-useraccount-help").delay(100).stop(true, false).fadeIn();
    //      $("#zc-useraccount-help").css({'top':useraccountHelpTop+25, 'left':useraccountHelpLeft-220});
    //    }).mouseleave(function() {
    //      $("#zc-useraccount-help").delay(100).stop(true, false).fadeOut('fast');
    //    });


    /*-------------------------------------------------------------------------------------------------------------
                                                                                                                                ADMIN  PANEL 
                                                                                    -------------------------------------------------------------------------------------------------------------*/

    /*-------- ADD USER DIALOG ---------*/

    $("#add-user-button").on("click", function() {
      var dialogId = $("#add-user-dialog");
      show_dialog(dialogId);
      $("#user-mail").val("").focus();
    });

    $("#add-user-cancel").on("click", function() {
      hide_dialog();
    });

    /*-------- SHOW USER MORE MENU ---------*/

    //    $(document).on('click',".user-more-btn", function(event) {
    //      var findUser = $(this).closest('.zc-card').attr('data-user'),
    //          findUser = $.trim(findUser);
    //      getUserCardId = $(this).closest('.zc-card').attr('id');
    //      more_action($(this), "#user-menu-list", event);
    //      if(findUser == "new"){
    //        $("#user-menu-list").find('.hide-menuItem').removeClass('hide-menuItem').addClass('show-menuItem');
    //      } else {
    //        $("#user-menu-list").find('.show-menuItem').removeClass('show-menuItem').addClass('hide-menuItem');
    //      }
    //      $(".delete-user").on("click", function() {
    //        var dialogId = $("#zc-user-delete");
    //        show_dialog(dialogId);
    //      });
    //
    //      $(".reinvite").on("click", function() {
    //        $("#reinvite-user-success").addClass("show-toast-message");
    //        toast_Position();
    //        setTimeout(function() {
    //          $("#reinvite-user-success").removeClass("show-toast-message");
    //        },2000);
    //      });

    //      $(".zc-more").removeClass("active");
    //      $(this).addClass("active");
    //
    //    });


    /*-------------------------------------- DELETE USER ----------------------------------*/

    var getUserCardId;	

    $("#zc-user-delete #confirm-delete-btn").on("click", function() {
      $('#'+getUserCardId).addClass('add-new-user');
      $("#delete-user-success").addClass("show-toast-message");
      toast_Position();
      setTimeout(function() {
        $('#'+getUserCardId).remove();	
      },300);
      setTimeout(function() {
        $("#delete-user-success").removeClass("show-toast-message");
      },2000);
      var dialogId = $("#zc-user-delete");
      hide_dialog(dialogId);
    });


    /*-----------------------------------------------------
                                  BUTTON SET ADD CLASS ACTIVE 
                  -----------------------------------------------------*/
//    $(document).on("click", ".zc-btn-set > .zc-btn", function() {
//      $(this).parent('.zc-btn-set').children(".zc-btn").removeClass("active");
//      $(this).addClass("active");
//    });
    
    $(document).on("click", "#file-action-btnset > .zc-btn", function() {
      $(this).parent('.zc-btn-set').children(".zc-btn").removeClass("active");
      $(this).addClass("active");
    });


    /*-----------------------------------------------------
                                            SOCIAL CODING
                  -----------------------------------------------------*/



    $("#discuss-btn").on("click", function(){
      var dialogId = $("#zc-connect-share");
      show_dialog(dialogId);
      // $("#desc-composeField").focus();

      let p = document.getElementById('desc-composeField')
      let s = window.getSelection()
      let r = document.createRange()
      r.setStart(p, p.childElementCount)
      r.setEnd(p, p.childElementCount)
      s.removeAllRanges()
      s.addRange(r)

      $("#desc-composeField").css({"max-height":windowHeight-350, "min-height": windowHeight-400 });

      $("#zc-overlay-white .zc-delete-close").attr('id', 'post-connect-cancel');
    });

    $("#postShare-confirm-yes").on("click", function(){
      var dialogId = $("#cancel-connect-post");
      hide_Confirmdialog(dialogId);
      hide_dialog();
    });

    $("#postShare-confirm-no").on("click", function(){
      var dialogId = $("#cancel-connect-post");
      hide_Confirmdialog(dialogId);
    });


    //    $("#desc-composeField").on("click", function(){
    //      $("#desc-composeField .desc-placeHolder").hide();
    //      $("#content-composeField").focus();
    //    });

    //    $("#content-composeField").on("focus", function(){
    //      $("#desc-composeField .desc-placeHolder").hide();
    //    });

    //    $("#content-composeField").on("focusout", function(){
    //      var getcontentLength = $("#content-composeField").text().length,
    //          getcontentLength = $.trim(getcontentLength);
    //      if(!((getcontentLength == "null")||(getcontentLength == 0))) {
    //        $("#desc-composeField .desc-placeHolder").hide();
    //      } else {
    //        $("#desc-composeField .desc-placeHolder").show();
    //      }
    //    });

    $("#zc-hideIdentity").on("click", function(){
      $("#zc-useravatar").toggleClass("show-maskWand");
      $("#zc-maskWand-Msg").toggle();
      if ($("#choose-postWall").attr("disabled")) {
        $("#choose-postWall").prop('disabled', false).trigger("chosen:updated");
        $("#choose-postWall").val('On Your Wall').trigger("chosen:updated");
        $("#zc-hideIdentity").attr("title", "Hide my Identity");
        $("#choose-postWall").next(".chosen-container-single").attr("title", "On Your Wall");
        $("#zc-useravatar_zpopover").hide();
      } else {
        $("#choose-postWall").prop('disabled', true).trigger("chosen:updated");
        $("#choose-postWall").val('Social Code Review').trigger("chosen:updated");
        $("#zc-hideIdentity").attr("title", "Reveal my Identity");
        $("#zc-guestPostInfo").trigger("click");
        // $("#zc-useravatar_zpopover").show();
        $("#choose-postWall").next(".chosen-container-single").attr("title", "Social Code Review");
      }
    });

    $("#guestCommentHint-btn").on("click", function(){
      $("#zc-guestPostInfo_zpopover").hide();
    });

    $("#connect-share-btn").on("click", function(){
      $(this).empty().append('<span class="zc-loader"> </span> Sharing');
      setTimeout(function() {
        hide_dialog();
        $("#connect-share-btn").empty().append('Share');
        $("#connect-share-success").addClass("show-toast-message");
        toast_Position();
      },2500);
    });

    $("#share-toast-close").on("click", function(){
      $("#connect-share-success").removeClass("show-toast-message");
    });

    $("#view-in-connect").on("click", function(){
      window.open("https://connect.zoho.com/");
      $("#connect-share-success").removeClass("show-toast-message");
    });

    $("#zc-showtitle").on("click", function(){
      $(".zc-compose-title").toggleClass("showTitle");
      $("#zc-showtitle").toggleClass("zc-minimize");
      if($(this).hasClass('zc-minimize')){
        $(this).attr('title',"Remove Title");
      } else {
        $(this).attr('title',"Add Title");
      }
      setTimeout(function() {
        $("#title-composeField").focus();
      },400); 
    });

    $("#remove-file-preview").on("click", function(){
      $(".zc-file-prev").remove();
    });

    $('.zc-source-code').on('click', '#connect-post-count', function(event) {
      event.stopPropagation();
    });

    $("#file-view-code").on("click", function(){
      $(".zc-source-code").css("display","none");
      $("#zc-preview-file").css("display","block");
      $("#discuss-btn").css("display","inline-block");
      $("#zc-file-discusssion, .zc-file-history").addClass("zc-hide");
    });

    $("#file-view-history").on("click", function(){
      $("#discuss-btn").hide();
      $("#zc-preview-file, .zc-source-code").css("display","none");
      $(".zc-file-history").removeClass("zc-hide");
      $("#zc-file-discusssion").addClass("zc-hide");

    });

    $("#file-view-discuss").on("click", function(){
      $("#discuss-btn").hide();
      $("#zc-preview-file, .zc-source-code").css("display","none");
      $("#zc-file-discusssion").removeClass("zc-hide");
      $(".zc-file-history").addClass("zc-hide");
    });

    /*-------- DISCUSSION LINK OPEN------------*/

    $("#zc-rep-discussion .zc-post-list li, #zc-file-discusssion .zc-post-list li, #view-post-list .zc-post-list li ").on("click", function(){
      window.open("https://connect.zoho.com/");
    });



    /*----- COMMIT STATUS -----------*/



    $("body").on("click", "#zselect_changesetIdMenu ul li", function(){
      var _this = $(this),
          getUsername   = _this.find(".zc-userName").text(),
          getUsername   = $.trim(getUsername),
          getCommittime = _this.find(".zc-commitedTime").text(),
          getCommittime = $.trim(getCommittime),
          getUserimg    = _this.find('.zc-user-pic img').attr('src');

      $(".zc-commitDetails").find(".zc-userName").empty().append(getUsername);
      $(".zc-commitDetails").find(".zc-commitDate").empty().append(getCommittime); 
      $(".zc-commitDetails").find(".zc-user-pic img").attr('src',getUserimg);

      $(".ace_editor").hide();  

      if (getUsername == "James Anderson") {
        /*-- CALL ACE EDITOR FUNCTION --*/   
        aceEditor("editor", 8, 12 );
        $("#editor").show();
        $(".zc-commitCmt").empty().append("Fix for set variables date picker on top of topband");
      } else if(getUsername == "Bruce Armstrong") {
        aceEditor("editor-1", 4, 15 );
        $("#editor-1").show();
        $(".zc-commitCmt").empty().append("Can now copy text to the clipboard in most browsers because most browsers have the ability to programmatically copy a selection of text to the clipboard ");
      } else if(getUsername == "Ann Tran") {
        aceEditor("editor-2", 7, 14);
        $("#editor-2").show();
        $(".zc-commitCmt").empty().append("The most common workaround is to use a Flash capability for copying to the clipboard that can only be triggered by a direct user click");
      } else if(getUsername == "Stephen Warren") {
        aceEditor("editor-3", 6, 20);
        $("#editor-3").show();
        $(".zc-commitCmt").empty().append("Copy to clipboard without Flash");
      } else if(getUsername == "Johnny Walker") {
        aceEditor("editor-4", 2, 12);
        $("#editor-4").show();
        $(".zc-commitCmt").empty().append("The main issue is that not all browsers support this feature at the moment");
      } 
    });


    /*---------- Discussion changesset click to open the file  ---------*/

    var setCommitInfo = function(getUsername, getCommittime, getUserimg, getChangesetid) {
      $(".zc-commitDetails").find(".zc-userName").empty().append(getUsername);
      $(".zc-commitDetails").find(".zc-commitDate").empty().append(getCommittime); 
      $(".zc-commitDetails").find(".zc-user-pic img").attr('src',getUserimg);
      $(".zc-changeSetID-info .zc-changeSetID").empty().append(getChangesetid);
    }

    /*-------- REPOSITORY DISCUSSION CHANGESET CODE IN FILE ------------*/
    $("#zc-rep-discussion .zc-post-title a, #zc-file-discusssion .zc-post-title a, #view-post-list .zc-post-list a").on("click", function(event){
      event.stopPropagation();
    });

    $(".zc-version-info").on("mouseenter", ".zc-codeSnippets", function(event){
      event.stopPropagation();
      $(this).closest("li").addClass("snippets-hover");
    }).mouseleave(function() {
      $("#zc-file-discusssion .zc-post-list li").removeClass("snippets-hover");
    });


    $(".zc-version-info").on("click", ".zc-codeSnippets", function(event){
      event.stopPropagation();
      var _this = $(this);
      $("#file-action-btnset .zc-btn").removeClass("active");
      $("#file-view-code").addClass("active");
      $("#zc-file-discusssion").addClass("zc-hide");
      $("#zc-preview-file").css("display","block");
      $(".ace_editor").hide(); 

      if(_this.is("#changeset-1")) {
        setCommitInfo("James Anderson", "Apr 28, 2016", "../images/user-1.png", "2ghd3455833v");
        aceEditor("editor", 8, 12 );
        $(".zc-commitCmt").empty().append("Fix for set variables date picker on top of topband");
        $("#editor").show();      
      } else if(_this.is("#changeset-2")) {
        setCommitInfo("Bruce Armstrong", "Apr 28, 2016", "../images/user-5.png", "1kud327833q");
        aceEditor("editor-1", 4, 15 );
        $(".zc-commitCmt").empty().append("Can now copy text to the clipboard in most browsers because most browsers have the ability to programmatically copy a selection of text to the clipboard ");
        $("#editor-1").show();
      } else if(_this.is("#changeset-3")) {
        setCommitInfo("Ann Tran", "Apr 28, 2016", "../images/user-2.png", "3nghd5833j");
        aceEditor("editor-2", 7, 14);
        $(".zc-commitCmt").empty().append("The most common workaround is to use a Flash capability for copying to the clipboard that can only be triggered by a direct user click");
        $("#editor-2").show();
      } else if(_this.is("#changeset-4")) {
        setCommitInfo("Johnny Walker", "Apr 28, 2016", "../images/user-4.png", "5trd3423583aq");
        $(".zc-commitCmt").empty().append("The main issue is that not all browsers support this feature at the moment");
        aceEditor("editor-4", 2, 12);
        $("#editor-4").show();
      } else if(_this.is("#changeset-5")) {
        setCommitInfo("Stephen Warren", "Apr 28, 2016", "../images/user-3.png", "4ght345433y");
        aceEditor("editor-3", 6, 20);
        $(".zc-commitCmt").empty().append("Copy to clipboard without Flash");
        $("#editor-3").show();
      } 
    });

    /* REPOSITORIES DISCUSSION */

    $(".zc-rep-dicusssion .zc-version-info").on("mouseenter", ".zc-codeSnippets", function(event){
      event.stopPropagation();
      $(this).closest("li").addClass("snippets-hover");
    }).mouseleave(function() {
      $("#zc-rep-discussion .zc-post-list li").removeClass("snippets-hover");
    });

    $(".zc-rep-dicusssion .zc-version-info").on("click", ".zc-codeSnippets", function(event){
      event.stopPropagation();
      var _this = $(this);
      $("#file-action-btnset .zc-btn").removeClass("active");
      $("#file-view-code").addClass("active");
      $("#zc-file-discusssion").addClass("zc-hide");
      $("#zc-preview-file").css("display","block");
      $(".ace_editor").hide(); 

      $("#rep-inner-tabs .zc-tab").removeClass("active");
      $("#rep-files-tab").addClass("active");
      $("#zc-rep-discussion").removeClass("zc-tab-active fade-in");
      $("#zc-rep-files").addClass("zc-tab-active fade-in");

      if(_this.is("#changeset-1")) {
        setCommitInfo("James Anderson", "Apr 28, 2016", "../images/user-1.png", "2ghd3455833v");
        aceEditor("editor", 8, 12 );
        $(".zc-commitCmt").empty().append("Fix for set variables date picker on top of topband");
        $("#editor").show();      
      } else if(_this.is("#changeset-2")) {
        setCommitInfo("Bruce Armstrong", "Apr 28, 2016", "../images/user-5.png", "1kud327833q");
        aceEditor("editor-1", 4, 15 );
        $(".zc-commitCmt").empty().append("Can now copy text to the clipboard in most browsers because most browsers have the ability to programmatically copy a selection of text to the clipboard ");
        $("#editor-1").show();
      } else if(_this.is("#changeset-3")) {
        setCommitInfo("Ann Tran", "Apr 28, 2016", "../images/user-2.png", "3nghd5833j");
        aceEditor("editor-2", 7, 14);
        $(".zc-commitCmt").empty().append("The most common workaround is to use a Flash capability for copying to the clipboard that can only be triggered by a direct user click");
        $("#editor-2").show();
      } else if(_this.is("#changeset-4")) {
        setCommitInfo("Johnny Walker", "Apr 28, 2016", "../images/user-4.png", "5trd3423583aq");
        $(".zc-commitCmt").empty().append("The main issue is that not all browsers support this feature at the moment");
        aceEditor("editor-4", 2, 12);
        $("#editor-4").show();
      } else if(_this.is("#changeset-5")) {
        setCommitInfo("Stephen Warren", "Apr 28, 2016", "../images/user-3.png", "4ght345433y");
        aceEditor("editor-3", 6, 20);
        $(".zc-commitCmt").empty().append("Copy to clipboard without Flash");
        $("#editor-3").show();
      } 
    });  



    $("#view-post-btn").on("click", function() {
      window.open('https://connect.zoho.com/portal/intranet/', '_blank');
    });

    /*------------------------------------------------------------------------------------------------------                                              CODE ANALYSIS 
      --------------------------------------------------------------------------------------------------------*/ 

    $("#zc-codeAnalysisAccordion table thead tr").on("click", function(){
      $(this).find(".file-listExpander").toggleClass("show-fileList");
      $(this).parent("thead").next("tbody").toggleClass("show-IssueList");
     
    });

    $("#zc-issueDescEditor .zc-issueDescHeader").on("click", function(){
      $(this).next(".zc-issueDescContent").slideToggle("fast");
      $(this).find(".file-listExpander").toggleClass("show-fileList")
    });

    $("#expandAllIssues").on("click", function(){
      $("#zc-codeAnalysisAccordion").find(".file-listExpander").addClass("show-fileList");
      $("#zc-codeAnalysisAccordion").find(".zc-issueDetailList").addClass("show-IssueList");
    });

    $("#collapseAllIssues").on("click", function(){
      $("#zc-codeAnalysisAccordion").find(".file-listExpander").removeClass("show-fileList");
      $("#zc-codeAnalysisAccordion").find(".zc-issueDetailList").removeClass("show-IssueList");
    });

    $("#zc-codeAnalysisAccordion .zc-issueDetailList tr").on("click", function(){
      var getTableId = $(this).parent(".zc-issueDetailList").parent(".zc-table").attr('id'),
          getTableId = $.trim(getTableId),
          getFilePath = $(this).parent(".zc-issueDetailList").prev('thead').find(".zc-filePath").text(),
          tableRowCount = $('#zc-codeAnalysisAccordion table tbody tr:visible').length;
          
      $("#ca-RightPaneView .zc-fileContentHeader a").empty().append(getFilePath);
      $("#ca-RightPaneView .zc-cafilesNav h3").empty().append("1 of " + tableRowCount);
      $("#ca-RightPaneView").show();
      if(getTableId == "zc-htmlFiles") {
        $(".zc-fileContentEditor table").css("display","none");
        $("#zc-htmlFilesTable").css("display","table");
      } else if(getTableId == "zc-javaFiles") {
        $(".zc-fileContentEditor table").css("display","none");
        $("#zc-javaFilesTable").css("display","table");
      } else if (getTableId == "zc-cssFiles")  {
        $(".zc-fileContentEditor table").css("display","none");
        $("#zc-cssTable").css("display","table");
      }
      $("#zc-codeAnalysisAccordion .zc-issueDetailList tr").removeClass("active");
      $(this).addClass("active");
    });


    $("#zc-codeAnalysisAccordion .zc-issueDetailList #bugLineNo1").on("click", function(){
      //  window.location.hash = '#gotoline1';
      $("#gotoline37-desc .zc-issueDescContent").hide();
      $("#gotoline1-desc .zc-issueDescContent").show();
      $(".zc-issueDesc").removeClass("zc-activeDesc");
      $("#gotoline1-desc").addClass("zc-activeDesc");
      $('#zc-issueDescEditor').animate({scrollTop: $('#gotoline1').offset().top}, 800);
    });

    $("#zc-codeAnalysisAccordion .zc-issueDetailList #bugLineNo37").on("click", function(){
      // window.location.hash = '#gotoline37';
      $("#gotoline1-desc .zc-issueDescContent").hide();
      $("#gotoline37-desc .zc-issueDescContent").show();
      $(".zc-issueDesc").removeClass("zc-activeDesc");
      $("#gotoline37-desc").addClass("zc-activeDesc");
      $('#zc-issueDescEditor').animate({scrollTop: $('#gotoline37').offset().top}, 800);
    });

    $("#gotoline1-desc").on("click", function() {
      $("#zc-codeAnalysisAccordion tr").removeClass("active");
      $("#bugLineNo1").addClass("active");
      $(".zc-issueDesc").removeClass("zc-activeDesc");
      $("#gotoline1-desc").addClass("zc-activeDesc");
      $("#gotoline37-desc .zc-issueDescContent").hide();
    });

    $("#gotoline37-desc").on("click", function() {
      $("#zc-codeAnalysisAccordion tr").removeClass("active");
      $("#bugLineNo37").addClass("active");
      $(".zc-issueDesc").removeClass("zc-activeDesc");
      $("#gotoline37-desc").addClass("zc-activeDesc");
      $("#gotoline1-desc .zc-issueDescContent").hide();
    });


    $("#gotoline12-java").on("click", function(){
      window.location.hash = '#gotoline12-java-desc';
    //  $('#zc-issueDescEditor').animate({scrollTop: $('#gotoline12-java-desc').offset().top}, 800);
      $(".zc-issueDesc").removeClass("zc-activeDesc");
      $("#gotoline12-java-desc").addClass("zc-activeDesc");
      $("#gotoline29-java-desc .zc-issueDescContent").hide();
      $("#gotoline12-java-desc .zc-issueDescContent").show();
    });

    $("#gotoline29-java").on("click", function(){
      window.location.hash = '#gotoline29-java-desc';
  //    $('#zc-issueDescEditor').animate({scrollTop: $('#gotoline29-java-desc').offset().top}, 800);
      $(".zc-issueDesc").removeClass("zc-activeDesc");
      $("#gotoline29-java-desc").addClass("zc-activeDesc");
      $("#gotoline12-java-desc .zc-issueDescContent").hide();
      $("#gotoline29-java-desc .zc-issueDescContent").show();
    });

    $("#gotoline12-java-desc").on("click", function() {
      $("#zc-codeAnalysisAccordion tr").removeClass("active");
      $("#gotoline12-java").addClass("active");
      $(".zc-issueDesc").removeClass("zc-activeDesc");
      $("#gotoline12-java-desc").addClass("zc-activeDesc");
      $("#gotoline29-java-desc .zc-issueDescContent").hide();
       
    });

    $("#gotoline29-java-desc").on("click", function() {
      $("#zc-codeAnalysisAccordion tr").removeClass("active");
      $("#gotoline29-java").addClass("active");
      $(".zc-issueDesc").removeClass("zc-activeDesc");
      $("#gotoline29-java-desc").addClass("zc-activeDesc");
      $("#gotoline12-java-desc .zc-issueDescContent").hide();
    });


    $("#gotoline23-css").on("click", function(){
      window.location.hash = '#gotoline23-css-desc';
   //   $('#zc-issueDescEditor').animate({scrollTop: $('#gotoline23-css-desc').offset().top}, 800);
      $(".zc-issueDesc").removeClass("zc-activeDesc");
      $("#gotoline23-css-desc").addClass("zc-activeDesc");
      $("#gotoline25-css-desc .zc-issueDescContent").hide();
      $("#gotoline23-css-desc .zc-issueDescContent").show();
    });

    $("#gotoline25-css").on("click", function(){
      window.location.hash = '#gotoline29-css-desc';
  //    $('#zc-issueDescEditor').animate({scrollTop: $('#gotoline29-css-desc').offset().top}, 800);
      $(".zc-issueDesc").removeClass("zc-activeDesc");
      $("#gotoline25-css-desc").addClass("zc-activeDesc");
      $("#gotoline23-css-desc .zc-issueDescContent").hide();
      $("#gotoline25-css-desc .zc-issueDescContent").show();
    });

    $("#gotoline23-css-desc").on("click", function() {
      $("#zc-codeAnalysisAccordion tr").removeClass("active");
      $("#gotoline23-css").addClass("active");
      $(".zc-issueDesc").removeClass("zc-activeDesc");
      $("#gotoline23-css-desc").addClass("zc-activeDesc");
      $("#gotoline25-css-desc .zc-issueDescContent").hide();
    });

    $("#gotoline25-css-desc").on("click", function() {
      $("#zc-codeAnalysisAccordion tr").removeClass("active");
      $("#gotoline25-css").addClass("active");
      $(".zc-issueDesc").removeClass("zc-activeDesc");
      $("#gotoline25-css-desc").addClass("zc-activeDesc");
      $("#gotoline23-css-desc .zc-issueDescContent").hide();
    });


    $("#issueDetailView-close").on("click", function() {
      $("#ca-RightPaneView").hide();
    });
    //OPTION -1 
    //      $("#zc-potentialBug").on("click", function() {
    //        $("#zc-caDashboard-view").fadeOut("fast");
    //        $("#zc-caIssues-view").fadeIn("fast");
    //        $(".zc-issuesFilter #vulnerabilitiesFilter").prop('checked', false);
    //        $(".zc-issuesFilter #csFilter").prop('checked', false);
    //        $(".zc-issuesFilter #potentialFilter").prop('checked', true);
    //        $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues']").hide();
    //        $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell']").hide();
    //        $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues']").css("display", "table-row");
    //      });

    //       $("#zc-vulnerabilitiesBug").on("click", function() {
    //        $("#zc-caDashboard-view").fadeOut("fast");
    //        $("#zc-caIssues-view").fadeIn("fast");
    //        $(".zc-issuesFilter #potentialFilter").prop('checked', false);
    //        $(".zc-issuesFilter #csFilter").prop('checked', false);
    //        $(".zc-issuesFilter #vulnerabilitiesFilter").prop('checked', true);
    //        $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues']").hide();
    //        $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell']").hide();
    //        $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues']").css("display", "table-row");
    //      });

    //     $("#zc-codeSmell").on("click", function() {
    //        $("#zc-caDashboard-view").fadeOut("fast");
    //        $("#zc-caIssues-view").fadeIn("fast");
    //        $(".zc-issuesFilter #potentialFilter").prop('checked', false);
    //        $(".zc-issuesFilter #vulnerabilitiesFilter").prop('checked', false);
    //        $(".zc-issuesFilter #csFilter").prop('checked', true);
    //        $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues']").hide();
    //        $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues']").hide();
    //        $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell']").css("display", "table-row");
    //      });

    // ISSUES FILTER 

    //      $("#potentialFilter").on("click", function(){
    //        var _this = $(this);
    //        if(_this.is(":checked")) {
    //          $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues']").css("display", "table-row");  
    //          $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues']").hide();
    //          $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell']").hide();
    //        } else {
    //          $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues']").hide();
    //        }
    //      });
    //    
    //     $("#vulnerabilitiesFilter").on("click", function(){
    //        var _this = $(this);
    //        if(_this.is(":checked")) {
    //          $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues']").css("display", "table-row");   
    //           $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues']").hide();
    //          $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell']").hide();
    //        } else {
    //          $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues']").hide();
    //        }
    //      });
    //    
    //      $("#csFilter").on("click", function(){
    //        var _this = $(this);
    //        if(_this.is(":checked")) {
    //          $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell']").css("display", "table-row"); 
    //          $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues']").hide();
    //          $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues']").hide();
    //        } else {
    //           $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell']").hide();
    //        }
    //      });
    //    
    //       $("#allIssuesFilter").on("click", function(){
    //        var _this = $(this);
    //        if(_this.is(":checked")) {
    //          $("#zc-codeAnalysisIssuesList tr").css("display", "table-row"); 
    //        } else {
    //          $("#zc-codeAnalysisIssuesList tr").hide();
    //        }
    //      });


    //OPTION-2
    var filterToken = function(issuesValue, getdataId) {
      var filterTokensHtml = '<span class="zc-label zc-labelWhite zc-labelClose" data-id="'+getdataId+'"> '+ issuesValue +' <span class="zc-closeWrap" title="Remove Filter"><i class="icon-8"><svg class="zc-black"> <use xlink:href="#svg-close-icon"> </use> </svg></i></span></span>'
      $("#zc-filterTokenContainer").empty().append(filterTokensHtml);
    }

    var filterTokenOnCheck = function(issuesValue, getdataId) {
      var filterTokensHtml = '<span class="zc-label zc-labelWhite zc-labelClose" data-id="'+getdataId+'"> '+ issuesValue +' <span class="zc-closeWrap" title="Remove Filter"><i class="icon-8"><svg class="zc-black"> <use xlink:href="#svg-close-icon"> </use> </svg></i></span></span>'
      $("#zc-filterTokenContainer").append(filterTokensHtml);
    }

    var complexfilterTokenOnCheck = function(issuesValue, getdataId) {
      var filterTokensHtml = '<span class="zc-label zc-labelWhite zc-labelClose" data-id="'+getdataId+'"> '+ issuesValue +' <span class="zc-closeWrap" title="Remove Filter"><i class="icon-8"><svg class="zc-black"> <use xlink:href="#svg-close-icon"> </use> </svg></i></span></span>'
      $("#zc-complexfilterTokenContainer").append(filterTokensHtml);
    }
    
    var cadashboardfilterTokenOnCheck = function(issuesValue, getdataId) {
      var filterTokensHtml = '<span class="zc-label zc-labelWhite zc-labelClose" data-id="'+getdataId+'"> '+ issuesValue +' <span class="zc-closeWrap" title="Remove Filter"><i class="icon-8"><svg class="zc-black"> <use xlink:href="#svg-close-icon"> </use> </svg></i></span></span>'
      $("#zc-dashboardfilterTokenContainer").append(filterTokensHtml);
    }
    

    $("#issuesTotalCount").on("click", function() {
      $("#zc-caDashboard-view").fadeOut("fast");
      $("#zc-caIssues-view").fadeIn("fast");
      $("#zc-filterTokenContainer").empty();
      $("#zc-codeAnalysisIssuesList tr").css("display", "table-row");
    });  


    $("#zc-potentialBug").on("click", function() {
      $("#zc-caDashboard-view").fadeOut("fast");
      $("#zc-caIssues-view").fadeIn("fast");
      
      $(".zc-caSummaryWrap").hide();
      $("#issuesSummary").css("display", "inline-block");
      
      filterToken("Potential Bugs (23)", "potentialToken");
      $("#allIssuesFilter-popover #issueFilterBugs").prop('checked', true);
      $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues']").hide();
      $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell']").hide();
      $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues']").css("display", "table-row");
    });  

    $("#zc-vulnerabilitiesBug").on("click", function() {
      $("#zc-caDashboard-view").fadeOut("fast");
      $("#zc-caIssues-view").fadeIn("fast");
      
      $(".zc-caSummaryWrap").hide();
      $("#issuesSummary").css("display", "inline-block");
      
      
      filterToken("Vulnerabilities (08)", "VulnerabilToken");
      $("#allIssuesFilter-popover #issueFilterVulnerabilities").prop('checked', true);
      $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues']").hide();
      $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell']").hide();
      $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues']").css("display", "table-row");
    });

    $("#zc-codeSmell").on("click", function() {
      $("#zc-caDashboard-view").fadeOut("fast");
      $("#zc-caIssues-view").fadeIn("fast");
      
      $(".zc-caSummaryWrap").hide();
      $("#issuesSummary").css("display", "inline-block");
      
      filterToken("Code Smells (14)", "codeSmellToken");
      $("#allIssuesFilter-popover #issueFilterCodeSmell").prop('checked', true);
      $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues']").hide();
      $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues']").hide();
      $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell']").css("display", "table-row");
    });


    // ISSUESFILTER OPTION 2 






    $("#issueFilterBugs").on("click", function() {
      var _this = $(this);
      if(_this.is(":checked")) {

        filterTokenOnCheck("Potential Bugs (23)", "potentialToken");
        if($("#issueFilterShowStopper").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-severity='zc-showStopper'][data-id='zc-potIssues']").css("display", "table-row");  
        }  else {
          $("#zc-codeAnalysisIssuesList [data-severity='zc-showStopper'][data-id='zc-potIssues']").hide();
        }

        if($("#issueFilterCritical").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-severity='zc-critical'][data-id='zc-potIssues']").css("display", "table-row");  
        } else {
          $("#zc-codeAnalysisIssuesList [data-severity='zc-critical'][data-id='zc-potIssues']").hide();
        }

        if($("#issueFilterMajor").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-severity='zc-major'][data-id='zc-potIssues']").css("display", "table-row");  
        } else {
          $("#zc-codeAnalysisIssuesList [data-severity='zc-major'][data-id='zc-potIssues']").hide();
        }

        if($("#issueFilterMinor").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-severity='zc-minor'][data-id='zc-potIssues']").css("display", "table-row");  
        } else {
          $("#zc-codeAnalysisIssuesList [data-severity='zc-minor'][data-id='zc-potIssues']").hide();
        }

        if($("#issueFilterInfo").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues'][data-severity='zc-info']").css("display", "table-row");  
        } else {
          $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues'][data-severity='zc-info']").hide();
        }    


        if((!$("#issueFilterShowStopper").is(':checked')) && (!$("#issueFilterCritical").is(':checked')) && (!$("#issueFilterMajor").is(':checked')) && (!$("#issueFilterMinor").is(':checked')) && (!$("#issueFilterInfo").is(':checked'))) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues']").css("display", "table-row");  
        }

        if((!$("#issueFilterVulnerabilities").is(':checked')) && (!$("#issueFilterCodeSmell").is(':checked'))) {
          $("#zc-codeAnalysisIssuesList .zc-issueDetailList tr").hide();
          $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues']").css("display", "table-row");  
        }



      } else {
        $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues']").hide();
        $("#zc-filterTokenContainer [data-id='potentialToken']").remove();
      }

    });

    $("#issueFilterVulnerabilities").on("click", function() {
      var _this = $(this);
      if(_this.is(":checked")) {
        //        $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues']").css("display", "table-row"); 
        //        $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues'][data-severity='zc-showStopper']").css("display", "table-row");
        //        $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues'][data-severity='zc-critical']").css("display", "table-row");  
        //        $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues'][data-severity='zc-major']").css("display", "table-row");  
        //        $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues'][data-severity='zc-minor']").css("display", "table-row");  

        filterTokenOnCheck("Vulnerabilities (08)", "VulnerabilToken");
        if($("#issueFilterShowStopper").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues'][data-severity='zc-showStopper']").css("display", "table-row");  
        } else {
          $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues'][data-severity='zc-showStopper']").css("display", "table-row"); 
          $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues'][data-severity='zc-showStopper']").hide();
        }

        if($("#issueFilterCritical").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues'][data-severity='zc-critical']").css("display", "table-row");  
        } else {
          $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues'][data-severity='zc-critical']").hide();
        }

        if($("#issueFilterMajor").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues'][data-severity='zc-major']").css("display", "table-row");  
        } else {
          $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues'][data-severity='zc-major']").hide();
        }

        if($("#issueFilterMinor").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues'][data-severity='zc-minor']").css("display", "table-row");  
        } else {
          $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues'][data-severity='zc-minor']").hide();
        }

        if($("#issueFilterInfo").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues'][data-severity='zc-info']").css("display", "table-row");  
        } else {
          $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues'][data-severity='zc-info']").hide();
        }


        if((!$("#issueFilterShowStopper").is(':checked')) && (!$("#issueFilterCritical").is(':checked')) && (!$("#issueFilterMajor").is(':checked')) && (!$("#issueFilterMinor").is(':checked')) && (!$("#issueFilterInfo").is(':checked'))) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues']").css("display", "table-row");  
        }

        if((!$("#issueFilterBugs").is(':checked')) && (!$("#issueFilterCodeSmell").is(':checked'))) {
          $("#zc-codeAnalysisIssuesList .zc-issueDetailList tr").hide();
          $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues']").css("display", "table-row");  
        }

      }
      else {
        $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues']").hide();  
        $("#zc-filterTokenContainer [data-id='VulnerabilToken']").remove();
      }


    });

    $("#issueFilterCodeSmell").on("click", function() {
      var _this = $(this);
      if(_this.is(":checked")) {
        filterTokenOnCheck("Code Smells (14)", "codeSmellToken");

        if($("#issueFilterShowStopper").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell'][data-severity='zc-showStopper']").css("display", "table-row");  
        } else {
          $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell'][data-severity='zc-showStopper']").hide();
        }

        if($("#issueFilterCritical").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell'][data-severity='zc-critical']").css("display", "table-row");  
        } else {
          $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell'][data-severity='zc-critical']").hide();
        }

        if($("#issueFilterMajor").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell'][data-severity='zc-major']").css("display", "table-row");  
        } else {
          $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell'][data-severity='zc-major']").hide();
        }

        if($("#issueFilterMinor").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell'][data-severity='zc-minor']").css("display", "table-row");  
        } else {
          $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell'][data-severity='zc-minor']").hide();
        }

        if($("#issueFilterInfo").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell'][data-severity='zc-info']").css("display", "table-row");  
        } else {
          $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell'][data-severity='zc-info']").hide();
        }

        if((!$("#issueFilterShowStopper").is(':checked')) && (!$("#issueFilterCritical").is(':checked')) && (!$("#issueFilterMajor").is(':checked')) && (!$("#issueFilterMinor").is(':checked')) && (!$("#issueFilterInfo").is(':checked'))) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell']").css("display", "table-row");  
        }

        if((!$("#issueFilterBugs").is(':checked')) && (!$("#issueFilterVulnerabilities").is(':checked'))) {
          $("#zc-codeAnalysisIssuesList .zc-issueDetailList tr").hide();
          $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell']").css("display", "table-row");  
        }

      } else {
        $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell']").hide();  
        $("#zc-filterTokenContainer [data-id='codeSmellToken']").remove();
      }


    });


    $("#issueFilterShowStopper").on("click", function() {
      var _this = $(this);
      if(_this.is(":checked")) {
        $("#zc-codeAnalysisIssuesList [data-severity='zc-minor']").hide();
        $("#zc-codeAnalysisIssuesList [data-severity='zc-major']").hide();
        $("#zc-codeAnalysisIssuesList [data-severity='zc-critical']").hide();
        $("#zc-codeAnalysisIssuesList [data-severity='zc-info']").hide();
        filterTokenOnCheck("Show Stopper", "showStopperToken");

        if($("#issueFilterMinor").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-severity='zc-minor']").css("display", "table-row");  
        } 

        if($("#issueFilterMajor").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-severity='zc-major']").css("display", "table-row");  
        } 

        if($("#issueFilterCritical").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-severity='zc-critical']").css("display", "table-row");  
        } 

        if($("#issueFilterInfo").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-severity='zc-info']").css("display", "table-row");  
        } 

        if($("#issueFilterBugs").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues'][data-severity='zc-showStopper']").css("display", "table-row");
        }  else {
          $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues']").hide();
          $("#zc-codeAnalysisIssuesList [data-severity='zc-showStopper']").css("display", "table-row");  

        }

        if($("#issueFilterVulnerabilities").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues'][data-severity='zc-showStopper']").css("display", "table-row");
        }  else {
          $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues']").hide();
          $("#zc-codeAnalysisIssuesList [data-severity='zc-showStopper']").css("display", "table-row");  
        }

        if($("#issueFilterCodeSmell").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell'][data-severity='zc-showStopper']").css("display", "table-row"); 
        }  else {
          $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell']").hide();
          $("#zc-codeAnalysisIssuesList [data-severity='zc-showStopper']").css("display", "table-row");  
        } 

      } else {

        $("#zc-codeAnalysisIssuesList [data-severity='zc-showStopper']").hide();  
        $("#zc-filterTokenContainer [data-id='showStopperToken']").remove();  

        if((!$("#issueFilterShowStopper").is(':checked')) && (!$("#issueFilterCritical").is(':checked')) && (!$("#issueFilterMajor").is(':checked')) && (!$("#issueFilterMinor").is(':checked')) && (!$("#issueFilterInfo").is(':checked'))) {

          if($("#issueFilterBugs").is(":checked")) {
            $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues']").css("display", "table-row");  
          } 

          if($("#issueFilterVulnerabilities").is(":checked")) { 
            $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues']").css("display", "table-row"); 
          }

          if($("#issueFilterCodeSmell").is(":checked")) {
            $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell']").css("display", "table-row"); 
          }

        }

      }




    });


    $("#issueFilterCritical").on("click", function() {
      var _this = $(this);
      if(_this.is(":checked")) {
        $("#zc-codeAnalysisIssuesList [data-severity='zc-minor']").hide();
        $("#zc-codeAnalysisIssuesList [data-severity='zc-major']").hide();
        $("#zc-codeAnalysisIssuesList [data-severity='zc-showStopper']").hide();
        $("#zc-codeAnalysisIssuesList [data-severity='zc-info']").hide();
        filterTokenOnCheck("Critical", "criticalToken");

        if($("#issueFilterShowStopper").is(":checked")) {
          console.log("show stopper");
          $("#zc-codeAnalysisIssuesList [data-severity='zc-showStopper']").css("display", "table-row");  
        } 

        if($("#issueFilterMinor").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-severity='zc-minor']").css("display", "table-row");  
        } 

        if($("#issueFilterMajor").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-severity='zc-major']").css("display", "table-row");  
        } 

        if($("#issueFilterInfo").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-severity='zc-info']").css("display", "table-row");  
        } 

        if($("#issueFilterBugs").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues'][data-severity='zc-critical']").css("display", "table-row");
        }  else {
          $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues']").hide();
          $("#zc-codeAnalysisIssuesList [data-severity='zc-critical']").css("display", "table-row");
        }

        if($("#issueFilterVulnerabilities").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues'][data-severity='zc-critical']").css("display", "table-row");
        }  else {
          $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues']").hide();
          $("#zc-codeAnalysisIssuesList [data-severity='zc-critical']").css("display", "table-row");
        }

        if($("#issueFilterCodeSmell").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell'][data-severity='zc-critical']").css("display", "table-row");
        }  else {
          $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell']").hide();
          $("#zc-codeAnalysisIssuesList [data-severity='zc-critical']").css("display", "table-row");
        } 

      }  

      else {
        $("#zc-codeAnalysisIssuesList [data-severity='zc-critical']").hide();  
        $("#zc-filterTokenContainer [data-id='criticalToken']").remove();

        if((!$("#issueFilterShowStopper").is(':checked')) && (!$("#issueFilterCritical").is(':checked')) && (!$("#issueFilterMajor").is(':checked')) && (!$("#issueFilterMinor").is(':checked')) && (!$("#issueFilterInfo").is(':checked'))) {

          if($("#issueFilterBugs").is(":checked")) {
            $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues']").css("display", "table-row");  
          } 

          if($("#issueFilterVulnerabilities").is(":checked")) { 
            $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues']").css("display", "table-row"); 
          }

          if($("#issueFilterCodeSmell").is(":checked")) {
            $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell']").css("display", "table-row"); 
          }

        }

      }


    });


    $("#issueFilterMajor").on("click", function() {
      var _this = $(this);
      if(_this.is(":checked")) {
        $("#zc-codeAnalysisIssuesList [data-severity='zc-minor']").hide();
        $("#zc-codeAnalysisIssuesList [data-severity='zc-critical']").hide();
        $("#zc-codeAnalysisIssuesList [data-severity='zc-showStopper']").hide();
        $("#zc-codeAnalysisIssuesList [data-severity='zc-info']").hide();
        filterTokenOnCheck("Major", "majorToken");

        if($("#issueFilterShowStopper").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-severity='zc-showStopper']").css("display", "table-row");  
        } 

        if($("#issueFilterMinor").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-severity='zc-minor']").css("display", "table-row");  
        } 

        if($("#issueFilterCritical").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-severity='zc-critical']").css("display", "table-row");  
        } 

        if($("#issueFilterInfo").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-severity='zc-info']").css("display", "table-row");  
        } 

        if($("#issueFilterBugs").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues'][data-severity='zc-major']").css("display", "table-row");
        }  else {
          $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues']").hide();
        }

        if($("#issueFilterVulnerabilities").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues'][data-severity='zc-major']").css("display", "table-row");
        }  else {
          $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues']").hide();
        }

        if($("#issueFilterCodeSmell").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell'][data-severity='zc-major']").css("display", "table-row");
        }  else {
          $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell']").hide();
        } 



      } else {
        $("#zc-codeAnalysisIssuesList [data-severity='zc-major']").hide();  
        $("#zc-filterTokenContainer [data-id='majorToken']").remove();

        if((!$("#issueFilterShowStopper").is(':checked')) && (!$("#issueFilterCritical").is(':checked')) && (!$("#issueFilterMajor").is(':checked')) && (!$("#issueFilterMinor").is(':checked')) && (!$("#issueFilterInfo").is(':checked'))) {

          if($("#issueFilterBugs").is(":checked")) {
            $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues']").css("display", "table-row");  
          } 

          if($("#issueFilterVulnerabilities").is(":checked")) { 
            $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues']").css("display", "table-row"); 
          }

          if($("#issueFilterCodeSmell").is(":checked")) {
            $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell']").css("display", "table-row"); 
          }
        }
      }
      if((!$("#issueFilterBugs").is(':checked')) && (!$("#issueFilterCodeSmell").is(':checked')) && (!$("#issueFilterVulnerabilities").is(':checked'))) {
        $("#zc-codeAnalysisIssuesList [data-severity='zc-major']").css("display", "table-row");  
      }

    });


    $("#issueFilterMinor").on("click", function() {
      var _this = $(this);
      if(_this.is(":checked")) {
        $("#zc-codeAnalysisIssuesList [data-severity='zc-major']").hide();
        $("#zc-codeAnalysisIssuesList [data-severity='zc-critical']").hide();
        $("#zc-codeAnalysisIssuesList [data-severity='zc-showStopper']").hide();
        $("#zc-codeAnalysisIssuesList [data-severity='zc-info']").hide();
        filterTokenOnCheck("Minor", "minorToken");

        if($("#issueFilterShowStopper").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-severity='zc-showStopper']").css("display", "table-row");  
        } 

        if($("#issueFilterMajor").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-severity='zc-major']").css("display", "table-row");  
        } 

        if($("#issueFilterCritical").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-severity='zc-critical']").css("display", "table-row");  
        } 

        if($("#issueFilterInfo").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-severity='zc-info']").css("display", "table-row");  
        } 

        if($("#issueFilterBugs").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues'][data-severity='minor']").css("display", "table-row");
        }  else {
          $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues']").hide();
        }

        if($("#issueFilterVulnerabilities").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues'][data-severity='zc-minor']").css("display", "table-row");
        }  else {
          $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues']").hide();
        }

        if($("#issueFilterCodeSmell").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell'][data-severity='zc-minor']").css("display", "table-row");
        }  else {
          $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell']").hide();
        } 



      } else {
        $("#zc-codeAnalysisIssuesList [data-severity='zc-minor']").hide();  
        $("#zc-filterTokenContainer [data-id='minorToken']").remove();

        if((!$("#issueFilterShowStopper").is(':checked')) && (!$("#issueFilterCritical").is(':checked')) && (!$("#issueFilterMajor").is(':checked')) && (!$("#issueFilterMinor").is(':checked')) && (!$("#issueFilterInfo").is(':checked'))) {

          if($("#issueFilterBugs").is(":checked")) {
            $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues']").css("display", "table-row");  
          } 

          if($("#issueFilterVulnerabilities").is(":checked")) { 
            $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues']").css("display", "table-row"); 
          }

          if($("#issueFilterCodeSmell").is(":checked")) {
            $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell']").css("display", "table-row"); 
          }
        }
      }

      if((!$("#issueFilterBugs").is(':checked')) && (!$("#issueFilterCodeSmell").is(':checked')) && (!$("#issueFilterVulnerabilities").is(':checked'))) {
        $("#zc-codeAnalysisIssuesList [data-severity='zc-minor']").css("display", "table-row");  
      }

    });


    $("#issueFilterInfo").on("click", function() {
      var _this = $(this);
      if(_this.is(":checked")) {
        $("#zc-codeAnalysisIssuesList [data-severity='zc-minor']").hide();
        $("#zc-codeAnalysisIssuesList [data-severity='zc-major']").hide();
        $("#zc-codeAnalysisIssuesList [data-severity='zc-critical']").hide();
        $("#zc-codeAnalysisIssuesList [data-severity='zc-showStopper']").hide();
        filterTokenOnCheck("Info", "infoToken");

        if($("#issueFilterShowStopper").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-severity='zc-showStopper']").css("display", "table-row");  
        } 

        if($("#issueFilterMajor").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-severity='zc-major']").css("display", "table-row");  
        } 

        if($("#issueFilterCritical").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-severity='zc-critical']").css("display", "table-row");  
        } 

        if($("#issueFilterMinor").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-severity='zc-critical']").css("display", "table-row");  
        } 

        if($("#issueFilterBugs").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues'][data-severity='zc-info']").css("display", "table-row");
        }  else {
          $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues']").hide();
        }

        if($("#issueFilterVulnerabilities").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues'][data-severity='zc-info']").css("display", "table-row");
        }  else {
          $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues']").hide();
        }

        if($("#issueFilterCodeSmell").is(":checked")) {
          $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell'][data-severity='zc-info']").css("display", "table-row");
        }  else {
          $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell']").hide();
        } 


      } else {
        $("#zc-codeAnalysisIssuesList [data-severity='zc-info']").hide();  
        $("#zc-filterTokenContainer [data-id='infoToken']").remove();

        if((!$("#issueFilterShowStopper").is(':checked')) && (!$("#issueFilterCritical").is(':checked')) && (!$("#issueFilterMajor").is(':checked')) && (!$("#issueFilterMinor").is(':checked')) && (!$("#issueFilterInfo").is(':checked'))) {

          if($("#issueFilterBugs").is(":checked")) {
            $("#zc-codeAnalysisIssuesList [data-id='zc-potIssues']").css("display", "table-row");  
          } 

          if($("#issueFilterVulnerabilities").is(":checked")) { 
            $("#zc-codeAnalysisIssuesList [data-id='zc-vulIssues']").css("display", "table-row"); 
          }

          if($("#issueFilterCodeSmell").is(":checked")) {
            $("#zc-codeAnalysisIssuesList [data-id='zc-codeSmell']").css("display", "table-row"); 
          }
        }
      }

      if((!$("#issueFilterBugs").is(':checked')) && (!$("#issueFilterCodeSmell").is(':checked')) && (!$("#issueFilterVulnerabilities").is(':checked'))) {
        $("#zc-codeAnalysisIssuesList [data-severity='zc-info']").css("display", "table-row");  
      }
    });


    $("#langFilterJava").on("click", function() {
      var _this = $(this);
      if(_this.is(":checked")) {
        filterTokenOnCheck("Java", "JavaToken");
      } else {
        $("#zc-filterTokenContainer [data-id='JavaToken']").remove();
      }
    });

    $("#langFilterJs").on("click", function() {
      var _this = $(this);
      if(_this.is(":checked")) {
        filterTokenOnCheck("Javascript", "JsToken");
      } else {
        $("#zc-filterTokenContainer [data-id='JsToken']").remove();
      }
    });

    $("#langFilterHtml").on("click", function() {
      var _this = $(this);
      if(_this.is(":checked")) {
        filterTokenOnCheck("HTML", "HtmlToken");
      } else {
        $("#zc-filterTokenContainer [data-id='HtmlToken']").remove();
      }
    });

    $("#langFilterCss").on("click", function() {
      var _this = $(this);
      if(_this.is(":checked")) {
        filterTokenOnCheck("CSS", "CssToken");
      } else {
        $("#zc-filterTokenContainer [data-id='CssToken']").remove();
      }
    });
    
     $("#noFilterResult").on("click", function() {
      var _this = $(this);
      if(_this.is(":checked")) {
          $("#zc-codeAnalysisIssuesList .zc-table").css("display", "none");
          $("#issues-noResultFilter").css("display", "block");
      } else {
          $("#zc-codeAnalysisIssuesList .zc-table").css("display", "table");
          $("#issues-noResultFilter").css("display", "none");
      }
    });



    $("#zc-filterTokenContainer").on("click", ".zc-labelClose .zc-closeWrap", function(){
      $(this).parent(".zc-label").remove();
      var getDataId = $(this).parent(".zc-label").attr("data-id"),
          getDataId = $.trim(getDataId);
      if(getDataId == "potentialToken") {
        $("#issueFilterBugs").trigger("click");
      } else if(getDataId == "VulnerabilToken") {
        $("#issueFilterVulnerabilities").trigger("click");
      } else if(getDataId == "codeSmellToken") {
        $("#issueFilterCodeSmell").trigger("click");
      } else if(getDataId == "showStopperToken") {
        $("#issueFilterShowStopper").trigger("click");
      } else if(getDataId == "criticalToken") {
        $("#issueFilterCritical").trigger("click");
      } else if(getDataId == "majorToken") {
        $("#issueFilterMajor").trigger("click");
      } else if(getDataId == "minorToken") {
        $("#issueFilterMinor").trigger("click");
      } else if(getDataId == "infoToken") {
        $("#issueFilterInfo").trigger("click");
      }       

    });


    $("#allIssuesFilter-popover .zc-checkbox").on("click", function() {
      var checkedCount = $("#allIssuesFilter-popover .zc-checkbox:checked").length;
      var getCssCount  = $("#zc-cssFiles .zc-issueDetailList tr:visible").length;
      var getHtmlCount = $("#zc-htmlFiles .zc-issueDetailList tr:visible").length;  
      var getJavaCount = $("#zc-javaFiles .zc-issueDetailList tr:visible").length;   

      console.log(getCssCount);


      if(getCssCount < 1) {
        $("#zc-cssFiles .zc-headerIssue").hide();
      } else {
        $("#zc-cssFiles .zc-headerIssue").css("display", "table-cell");
      }

      if(getHtmlCount < 1) {
        $("#zc-htmlFiles .zc-headerIssue").hide();
      } else {
        $("#zc-htmlFiles .zc-headerIssue").css("display", "table-cell");
      }

      if(getJavaCount < 1) {
        $("#zc-javaFiles .zc-headerIssue").hide();
      } else {
        $("#zc-javaFiles .zc-headerIssue").css("display", "table-cell");
      }

      if(checkedCount < 1) {
        $(".zc-issueDetailList tr").css("display", "table-row");
        $("#zc-cssFiles .zc-headerIssue").css("display", "table-cell");
        $("#zc-htmlFiles .zc-headerIssue").css("display", "table-cell");
        $("#zc-javaFiles .zc-headerIssue").css("display", "table-cell");
      } 


    });


    $("#zc-allIssuesFilter-done").on("click", function(){
      $("#all-issues-filter_zpopover").hide();
    });

    $("#zc-allIssuesFilter-clear").on("click", function(){
      $("#allIssuesFilter-popover .zc-checkbox").prop('checked', false);
      $("#zc-filterTokenContainer").empty();
      $(".zc-issueDetailList tr").css("display", "table-row");
    });


    $("#back-toDashboard").on("click", function() {
      $("#zc-caIssues-view").fadeOut("fast");
      $("#zc-caDashboard-view").fadeIn("fast");
      $("#ca-RightPaneView").hide();
    });

    $("#zc-reportAlert").on("click", function() {
      $(this).closest('.zc-notes').remove();
    });




    $("#zc-fileDuplication").on("click", function() {
      $("#zc-caDashboard-view").fadeOut("fast");
      $("#zc-caDuplication-view").fadeIn("fast");
      
      $(".zc-caSummaryWrap").hide();
      $("#duplicationSummary").css("display", "inline-block");
    });

    $("#back-duplicationtoDashboard").on("click", function() {
      $("#zc-caDuplication-view").fadeOut("fast");
      $("#zc-caDashboard-view").fadeIn("fast");
      $("#ca-RightPaneView").hide();
    });


    $("#zc-caDuplicationList tbody tr").on("click", function(){
      var getDataId   = $(this).attr("data-id"),
          getDataId   = $.trim(getDataId),
          getFilePath = $(this).find(".zc-filePath").text(),
        tableRowCount = $('#zc-caDuplicationList table tbody tr:visible').length;
       $("#ca-RightPaneView .zc-cafilesNav h3").empty().append("1 of " + tableRowCount);
      $("#ca-RightPaneView .zc-fileContentHeader a").empty().append(getFilePath);
      $("#ca-RightPaneView").show();
      $(".zc-fileContentEditor table").css("display","none");

      if($(this).is("#zc-fileDupJs")){
         $("#zc-fileDupJsTable").css("display","table");
         $("#duplicationSummary .zc-caSummary").eq(0).find("h3").empty().append("23");
         $("#duplicationSummary .zc-caSummary").eq(1).find("h3").empty().append("16");
         $("#ca-RightPaneView .zc-cafilesNav h3").empty().append("1 of 2");
      }

      if($(this).is("#zc-fileDupCss")){
        $("#zc-fileDupCssTable").css("display","table"); 
        $("#duplicationSummary .zc-caSummary").eq(0).find("h3").empty().append("46");
        $("#duplicationSummary .zc-caSummary").eq(1).find("h3").empty().append("9");
        $("#duplicationSummary .zc-caSummary").eq(2).find("h3").empty().append("0");
        $("#ca-RightPaneView .zc-cafilesNav h3").empty().append("2 of 2");
      }
    });


    $("#back-complexitytoDashboard").on("click", function() {
      $("#zc-caComplexity-view").fadeOut("fast");
      $("#zc-caDashboard-view").fadeIn("fast");
      $("#ca-RightPaneView").hide();
      $("#complexityFilter-popover .zc-checkbox").prop('checked', false);
    });

    $("#zc-complexFilter-done").on("click", function() {
      $("#all-complexity-filter_zpopover").hide();
    });

    $("#zc-complexFilter-clear").on("click", function() {
      $("#complexityFilter-popover .zc-checkbox").prop('checked', false);
      $("#zc-complexfilterTokenContainer").empty();
    });


    $("#zc-DashboardveryHigh").on("click", function(){
      $("#zc-caDashboard-view").fadeOut("fast");
      $("#zc-caComplexity-view").fadeIn("fast");
      
      $("#zc-caComplexList .zc-table tbody tr").css("display", "none");
      $("#zc-caComplexList tr[data-complex='veryhigh']").css("display", "table-row");
      
      $(".zc-caSummaryWrap").hide();
      $("#complexitySummary").css("display", "inline-block");
      
      $("#zc-complexfilterTokenContainer").empty();
      complexfilterTokenOnCheck("Very High (09)", "veryHighToken");
      $("#complexityFilter-popover #complexveryHigh").prop('checked', true);
    });

    $("#zc-DashboardHigh").on("click", function(){
      $("#zc-caDashboard-view").fadeOut("fast");
      $("#zc-caComplexity-view").fadeIn("fast");
      
      $("#zc-caComplexList .zc-table tbody tr").css("display", "none");
      $("#zc-caComplexList tr[data-complex='high']").css("display", "table-row");
      
      $(".zc-caSummaryWrap").hide();
      $("#complexitySummary").css("display", "inline-block");
      
      $("#zc-complexfilterTokenContainer").empty();
      complexfilterTokenOnCheck("High (20)", "HighToken");
      $("#complexityFilter-popover #complexhigh").prop('checked', true);
    });

    $("#zc-DashboardModerate").on("click", function(){
      $("#zc-caDashboard-view").fadeOut("fast");
      $("#zc-caComplexity-view").fadeIn("fast");
      
      $("#zc-caComplexList .zc-table tbody tr").css("display", "none");
      $("#zc-caComplexList tr[data-complex='moderate']").css("display", "table-row");
      
      $(".zc-caSummaryWrap").hide();
      $("#complexitySummary").css("display", "inline-block");
      
      
      $("#zc-complexfilterTokenContainer").empty();
      complexfilterTokenOnCheck("Moderate (17)", "moderateToken");
      $("#complexityFilter-popover #complexmoderate").prop('checked', true);
    });

    $("#zc-DashboardLow").on("click", function(){
      $("#zc-caDashboard-view").fadeOut("fast");
      $("#zc-caComplexity-view").fadeIn("fast");
      
      $("#zc-caComplexList .zc-table tbody tr").css("display", "none");
      $("#zc-caComplexList tr[data-complex='low']").css("display", "table-row");
      
      $(".zc-caSummaryWrap").hide();
      $("#complexitySummary").css("display", "inline-block");
      
      $("#zc-complexfilterTokenContainer").empty();
      complexfilterTokenOnCheck("Low (11)", "lowToken");
      $("#complexityFilter-popoverr #complexlow").prop('checked', true);
    });
    
      $("#zc-DashboardNil").on("click", function(){
      $("#zc-caDashboard-view").fadeOut("fast");
      $("#zc-caComplexity-view").fadeIn("fast");
      
      $("#zc-caComplexList thead tr th").eq(1).empty();  
      $("#zc-caComplexList .zc-table tbody tr").css("display", "none");
      $("#zc-caComplexList tr[data-complex='nil']").css("display", "table-row");
                
      $(".zc-caSummaryWrap").hide();
      $("#complexitySummary").css("display", "inline-block");
        
      $("#complexitySummary .zc-caSummary").eq(1).empty();
        
      $("#zc-complexfilterTokenContainer").empty();
      complexfilterTokenOnCheck("Nil (0)", "nilToken");
      $("#complexityFilter-popoverr #complexnil").prop('checked', true);
    });

    $("#complexveryHigh").on("click", function(){
      complexfilterTokenOnCheck("Very High (09)", "veryHighToken");
    });

    $("#complexhigh").on("click", function(){
      complexfilterTokenOnCheck("High (20)", "HighToken");
    });

    $("#complexmoderate").on("click", function(){
      complexfilterTokenOnCheck("Moderate (17)", "moderateToken");
    });

    $("#complexlow").on("click", function(){
      complexfilterTokenOnCheck("Low (11)", "lowToken");
    });

    $("#complexnil").on("click", function(){
      complexfilterTokenOnCheck("Nil (0)", "nilToken");
      $("#all-complexity-filter_zpopover #complexnil").prop('checked', true);
    });
    
     $("#complex-noFilterResult").on("click", function(){
      var _this = $(this);
      if(_this.is(":checked")) {
          $("#zc-caComplexList .zc-table tbody").css("display", "none");
          $("#complex-noResult").css("display", "block");
      } else {
          $("#zc-caComplexList .zc-table tbody").css("display", "table-row");
          $("#complex-noResult").css("display", "none");
      }
    });
    

    $("#zc-complexfilterTokenContainer").on("click", ".zc-labelClose .zc-closeWrap", function(){    
      $(this).parent(".zc-label").remove();
      var getDataId = $(this).parent(".zc-label").attr("data-id"),
          getDataId = $.trim(getDataId);
      if(getDataId == "veryHighToken") {
        $("#all-complexity-filter_zpopover #complexveryHigh").prop('checked', false);
      } else if(getDataId == "HighToken") {
        $("#all-complexity-filter_zpopover #complexhigh").prop('checked', false);
      } else if(getDataId == "moderateToken") {
        $("#all-complexity-filter_zpopover #complexmoderate").prop('checked', false);
      } else if(getDataId == "lowToken") {
        $("#all-complexity-filter_zpopover #complexlow").prop('checked', false);
      } else if(getDataId == "nilToken") {
        $("#all-complexity-filter_zpopover #complexnil").prop('checked', false);
      }   

    });

    $("#zc-caComplexList tbody tr").on("click", function(){ 
      $("#ca-RightPaneView").show();
       var tableRowCount = $('#zc-caComplexList table tbody tr:visible').length;
       $("#ca-RightPaneView .zc-cafilesNav h3").empty().append("1 of " + tableRowCount);
       var _this = $(this),
          getFilePath = $(this).find(".zc-filePath").text();
      $("#ca-RightPaneView .zc-fileContentHeader a").empty().append(getFilePath);
      $(".zc-fileContentEditor table").css("display","none");
      var getComplexCount = $(this).find("td").eq(1).text();
        
      if(_this.is("#zc-complexJava")) {
        $("#zc-complexJavaTable").css("display", "table-row");
        $("#complexitySummary .zc-caSummary").eq(0).find("h3").empty().append("44");
        $("#complexitySummary .zc-caSummary").eq(1).find("h3").empty().append(getComplexCount);
        $("#ca-RightPaneView .zc-cafilesNav h3").empty().append("1 of 4");
        
      } else if(_this.is("#zc-complexHtml")) {
        $("#zc-complexhtmlFilesTable").css("display", "table-row");
        $("#complexitySummary .zc-caSummary").eq(0).find("h3").empty().append("40");
          $("#complexitySummary .zc-caSummary").eq(1).find("h3").empty().append(getComplexCount);
        $("#ca-RightPaneView .zc-cafilesNav h3").empty().append("4 of 4");
      } else if(_this.is("#zc-complexCss")) {
        $("#zc-complexcssTable").css("display", "table-row");
        $("#complexitySummary .zc-caSummary").eq(0).find("h3").empty().append("40");
        $("#complexitySummary .zc-caSummary").eq(1).find("h3").empty().append(getComplexCount);
        $("#ca-RightPaneView .zc-cafilesNav h3").empty().append("2 of 4");
      } else if(_this.is("#zc-complexJs")) {
        $("#zc-complexJsTable").css("display", "table-row");
        $("#complexitySummary .zc-caSummary").eq(0).find("h3").empty().append("23");
        $("#complexitySummary .zc-caSummary").eq(1).find("h3").empty().append(getComplexCount);
        $("#ca-RightPaneView .zc-cafilesNav h3").empty().append("3 of 4");
      } 
    });
    
    
    /*----- DUPLICATION ------*/
    
    $("#zc-caDuplicationList tbody tr").on("click", function(){
      $("#zc-caDuplicationList tbody tr").removeClass("active");
      $(this).addClass("active");
    });

    
    $("#zc-caComplexList tbody tr").on("click", function(){
      $("#zc-caComplexList tbody tr").removeClass("active");
      $(this).addClass("active");
    });
    
    
    
    /*----------- DASHBOARD FILTER ---------------*/
    
    $("#zc-caDashboardFilter-done").on("click", function() {
      $("#ca-dashboard-filter_zpopover").hide();
    });

    $("#zc-caDashboardFilter-clear").on("click", function() {
      $("#ca-dashboard-filter_zpopover .zc-checkbox").prop('checked', false);
      $("#zc-dashboardfilterTokenContainer").empty();
    });
    
    $("#langJava").on("click", function(){
      var _this = $(this);
       if(_this.is(":checked")) {
           cadashboardfilterTokenOnCheck("Java", "langJavaToken");
       } else {
         $("[data-id='langJavaToken']").remove();
       }
    });

    $("#langJs").on("click", function(){
      var _this = $(this);
       if(_this.is(":checked")) {
          cadashboardfilterTokenOnCheck("JavaScript", "langJsToken");
       } else {
         $("[data-id='langJsToken']").remove();
       }
    });

    $("#langLess").on("click", function(){
      var _this = $(this);
      if(_this.is(":checked")) {
         cadashboardfilterTokenOnCheck("CSS", "langLessToken");
      } else {
        $("[data-id='langLessToken']").remove();
      }
     
    });
    
     $("#langHtml").on("click", function(){
       var _this = $(this);
      if(_this.is(":checked")) {
        cadashboardfilterTokenOnCheck("HTML", "langHtmlToken");
      } else {
        $("[data-id='langHtmlToken']").remove();
      }
    });
    
     $("#zc-dashboardfilterTokenContainer").on("click", ".zc-labelClose .zc-closeWrap", function(){    
      $(this).parent(".zc-label").remove();
      var getDataId = $(this).parent(".zc-label").attr("data-id"),
          getDataId = $.trim(getDataId);
      if(getDataId == "langJavaToken") {
        $("#ca-dashboard-filter_zpopover #langJava").prop('checked', false);
      } else if(getDataId == "langJsToken") {
        $("#ca-dashboard-filter_zpopover #langJs").prop('checked', false);
      } else if(getDataId == "langLessToken") {
        $("#ca-dashboard-filter_zpopover #langLess").prop('checked', false);
      } 

    });
    





    /*------------------------------------------------------------------------------------------------------                                              DOCUMENT CLICK 
                   --------------------------------------------------------------------------------------------------------*/ 
    $(document).on("click", function(){  
      $("#post-preview-icon").removeClass("show-post");
      $(".zc-btn").blur();
      $("#zc-avatar-list, #zc-new-avatar-list, .zc-breadcrumb-more").hide();
      // $("#view-post-list").delay(100).stop(true, false).fadeOut('fast');
      $('#connect-post-count').removeClass('show-post');
      setTimeout(function() {
        $(".zc-user-menu").removeClass('show-sub-nav');
      }, 300);
      $(".zc-user-account").removeClass("zc-show-menu");
      //$(".zc-more").removeClass("active");
    });
  });

