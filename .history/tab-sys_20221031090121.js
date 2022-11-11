(() => {

    const config = {
        defTabs: [
            
        ]
    }

    var tabs = {};

    document.querySelectorAll("div.tabgroup").forEach(tabgroup => {
        tabgroup.querySelectorAll("div.tab").forEach(tab => {
            tabs[tabgroup.getAttribute("name")+"/"+tab.getAttribute("name")] = tab;
        });
    });

})();