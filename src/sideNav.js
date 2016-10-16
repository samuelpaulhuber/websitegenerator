//this application only has one component: todo
var sideNav = {};

//here's the view
sideNav.view = function (ctrl) {
    return <div id="mySidenav" className="sidenav">
        <a href="/home" config={m.route}>Home</a>
        <a href="/about" config={m.route}>About</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
    </div>
};

sideNav.controller = function(){};