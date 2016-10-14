//this application only has one component: todo
var banner = {};

//here's the view
banner.view = function (ctrl) {
    return <div id="main" >
    <ul>
        <li><a onclick={ctrl.toggleSideNav}>Menu</a></li>
    </ul>
    </div>
};

banner.controller = function () {
    return {
        toggleSideNav: function () {
            console.log("toggleSideNav");
            if (document.getElementById("mySidenav").style.width == 0 ||
            document.getElementById("mySidenav").style.width == "0px") {
                document.getElementById("mySidenav").style.width = "250px";
                document.getElementById("main").style.marginLeft = "250px";
            } else {
                document.getElementById("mySidenav").style.width = "0";
                document.getElementById("main").style.marginLeft = "0";
            }
        }
    }
};