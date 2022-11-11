(() => {

    const config = {
        actTabs: []
    }

    var tabs = {};
    var active = [];
    document.querySelectorAll("div.tabgroup").forEach(tabgroup => {
        tabgroup.querySelectorAll("div.tab").forEach(tab => {
            tabs[tabgroup.getAttribute("name")+"/"+tab.getAttribute("name")] = tab;
            tab.setAttribute("hidden", "");
            for (var confTab in config.actTabs) {
                if (confTab == tabgroup.getAttribute("name" + "/" + tab.getAttribute("name"))) {
                    tab.removeAttribute("hidden");
                }
            }
            var _tab = window.location.hash;
            var frag = _tab.split("/");
            var tab = document.querySelector(`div.tabgroup["${_tab.split("/")[0]}"]>div.tab[name="${_tab.split("/")[1]}"]`);
            tab.removeAttribute("hidden");
        });
    });

    console.log(tabs);
})();