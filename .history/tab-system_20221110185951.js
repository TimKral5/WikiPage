(() => {
    const config = {
        defTab: "main/test",
    };

    var tabs = {};
    function tabHandler() {
        document.querySelectorAll("div.tabgroup").forEach((tabgroup) => {
            tabgroup.querySelectorAll("div.tab").forEach((tab) => {
                tabs[tabgroup.getAttribute("name") + "/" + tab.getAttribute("name")] =
                    tab;
                tab.setAttribute("hidden", "");
            });
        });

        var _tab = window.location.hash;
        if (_tab == "") _tab = config.defTab;
        var frag = _tab.split("/");
        frag[0] = frag[0].replace("#", "");
        var tab = document.querySelector(
            `div.tabgroup[name="${frag[0]}"]>div.tab[name="${frag[1]}"]`
        );
        console.log(tab);
        tab.removeAttribute("hidden");
    }

    tabHandler();
    console.log(tabs);
    window.addEventListener("hashchange", () => parent.location.reload());
})();

document.getElementById('iframe#contents').src = 
window.location.hash.replace("#", "");