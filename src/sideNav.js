//this application only has one component: todo
var sideNav = {};

//here's the view
sideNav.view = function (ctrl) {
    return <div id="mySidenav" className="sidenav">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
    </div>
};

sideNav.controller = function(){};