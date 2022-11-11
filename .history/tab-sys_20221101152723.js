(() => {

    const config = {
        actTabs: []
    }

    var tabs = {};

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
        });
    });

    console.log(tabs);
})();