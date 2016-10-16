//layout
var layout = (nav, banner, body) => {
    return {
        controller: function () {},
        view: () => {
            return m("div", [
                //sliding nav bar
                m(nav),
                //id=main so banner and body get slid
                m("div#main", [m(banner), m(body)])
            ]);//div
        }
    }
}

// takes a body and applys the banner and sideNav
var mixinLayout = (layout, body) => {
    return layout(sideNav, banner, body);
};

var homePage = mixinLayout(layout, home);
var aboutPage = mixinLayout(layout, about);

m.route(document.body, "/", {
    "/": homePage,
    "/about": aboutPage
});