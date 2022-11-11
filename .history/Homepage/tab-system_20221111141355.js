(() => {
    document.getElementById('contents').src =
    window.location.hash == "" ? "pages/home.htm" : window.location.hash.replace("#", "");
    document.querySelectorAll('div.nav-side>a[href:"' + window.location.hash + '"]')
    window.addEventListener("hashchange", () => parent.location.reload());
})();