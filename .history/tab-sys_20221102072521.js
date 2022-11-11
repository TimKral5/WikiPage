(() => {

    const config = {
        actTabs: []
    }

    var tabs = {};
    var active = [];
    document.querySelectorAll("div.tabgroup").forEach(tabgroup => {
        tabgroup.querySelectorAll("div.tab").forEach(tab => {
            tabs[tabgroup.getAttribute("name") + "/" + tab.getAttribute("name")] = tab;
            tab.setAttribute("hidden", "");
            for (var confTab in config.actTabs) {
                if (confTab == tabgroup.getAttribute("name" + "/" + tab.getAttribute("name"))) {
                    tab.removeAttribute("hidden");
                }
            }
        });

    });
    (() => {
        var _tab = window.location.hash;
        var frag = _tab.split("/");
        frag[0] = frag[0].replace("#", "");
        var tab = document.querySelector(`div.tabgroup[name="${frag[0]}"]>div.tab[name="${frag[1]}"]`);
        console.log(tab);
        console.log(window.location.hash);
        tab.removeAttribute("hidden");
    })();
    console.log(tabs);
})();