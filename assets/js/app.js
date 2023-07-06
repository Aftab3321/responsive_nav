$(document).ready(function() {
    var toggleBtn = $("#navbar-toggle");
    var toggleArea = $("#navbarSupportedContent");
    var darkdiv = $("#dark-div");
    var closeToggle = $("#cross");
    var htmlTag = $("html");
  
    toggleBtn.on("click", function() {
      toggleArea.addClass("show");
      darkdiv.removeClass("display-none");
      htmlTag.css("overflow", "hidden");
    });
  
    closeToggle.on("click", function() {
      toggleArea.removeClass("show");
      darkdiv.addClass("display-none");
      htmlTag.css("overflow", "");
    });


  });
  