//layout
var layout = (nav, body) => {
    return {
        controller: function () {},
        view: () => {
            return m("div", [
                m(nav),
                m("div#main", [m(body)])
            ]);
        }
    }
}

var mixinLayout = (layout, nav, body) => {
    return layout(nav, body);
};

var app = mixinLayout(layout, sideNav, banner);

m.route(document.body, "/app", {
    "/app": app
});