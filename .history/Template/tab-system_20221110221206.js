(() => {
    document.getElementById('contents').src =
    window.location.hash == "" ? "pages/index.htm" : window.location.hash.replace("#", "");
    window.addEventListener("hashchange", () => parent.location.reload());
})();