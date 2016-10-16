//declare component
var banner = {};

// here's the view
banner.view = function(ctrl) {
  //todo add main to app.js layout function
  return <div>
           <ul>

             <li><img src="res/menu_icon.svg" alt="Menu" onclick={ctrl.toggleSideNav}/></li>
           </ul>
         </div>
};
 //<li><a onclick={ctrl.toggleSideNav}>Menu</a></li>

banner.controller = function() {
  return {
    toggleSideNav: function() {
      // console.log("toggleSideNav");
      if (document.getElementById("mySidenav").style.width == "0px" || 
          document.getElementById("mySidenav").style.width == 0) {
           document.getElementById("mySidenav").style.width = "150px";
           document.getElementById("main").style.marginLeft = "150px";
       } else {
         document.getElementById("mySidenav").style.width = "0px";
         document.getElementById("main").style.marginLeft = "0px";
      }
    }
  };
};
