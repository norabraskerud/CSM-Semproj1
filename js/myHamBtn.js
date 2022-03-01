function myHamBtn() {
    var menuBtnHideShow = document.getElementById("myTopnav");
    if (menuBtnHideShow.className === "topnav") {
      menuBtnHideShow.className += " responsive";
    } else {
      menuBtnHideShow.className = "topnav";
    }
  }