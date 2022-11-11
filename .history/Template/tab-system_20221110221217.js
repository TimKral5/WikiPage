(() => {
    document.getElementById('contents').src =
    window.location.hash == "" ? "pages/home.htm" : window.location.hash.replace("#", "");
    window.addEventListener("hashchange", () => parent.location.reload());
})();