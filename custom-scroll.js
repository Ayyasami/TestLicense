$(document).ready(function(){ 
  
  // ZSCROLL SIDEBAR 
     $("#sidebar-scroll").zscroll({setHeight: true});
  
  // ZSCROLL PROJECT VIEW  
     $("#project-listtab-content").zscroll({setHeight: true, setWidth: true});
     $("#project-info-scroll").zscroll({setHeight: true, setWidth: true});
     $("#project-source-file").zscroll({setHeight: true, setWidth: true});
     $("#project-files-scroll").zscroll({setHeight: true, setWidth: true});

  // ZSCROLL REPOSITORY VIEW
      $("#my-rep-scroll").zscroll({setHeight: true, setWidth: true});
      $("#public-rep-scroll").zscroll({setHeight: true, setWidth: true});
      $("#fav-rep-scroll").zscroll({setHeight: true, setWidth: true});
      $("#rep-files-scroll").zscroll({setHeight: true, setWidth: true});
      $("#rep-discussion-scroll").zscroll({setHeight: true, setWidth: true});
  
  // ZSCROLL NEW PROJECT VIEW 
     $("#createproject-tab-content").zscroll({setHeight: true, setWidth: true});
  
  
  // ZSCROLL WINDOW RESIZE
     $(window).on("resize", function() {
    // ZSCROLL SIDEBAR 
       $("#sidebar-scroll").zscroll("refresh");
    // ZSCROLL PROJECT VIEW  
       $("#project-listtab-content").zscroll("refresh");
       $("#project-info-scroll").zscroll("refresh");
       $("#project-source-file").zscroll("refresh");
       $("#project-files-scroll").zscroll("refresh");
    // ZSCROLL REPOSITORY VIEW
        $("#my-rep-scroll").zscroll("refresh");
        $("#public-rep-scroll").zscroll("refresh");
        $("#fav-rep-scroll").zscroll("refresh");
        $("#rep-files-scroll").zscroll("refresh");
        $("#rep-discussion-scroll").zscroll("refresh");
    // ZSCROLL NEW PROJECT VIEW 
       $("#createproject-tab-content").zscroll("refresh");
	 });
  
   
});