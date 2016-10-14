
//layout
var layout = (nav, banner) => {
    return {
        controller: function () { },
        view: () => {
            return m("div",[
                m(nav),
                m(banner)
            ]);
        }
    }
}

var mixinLayout = (layout, nav, banner) => { return layout(nav, banner); };

var app = mixinLayout(layout, sideNav, banner);

m.route(document.body, "/app", {
    "/app": app
});