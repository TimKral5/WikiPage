(() => {
    document.getElementById('iframe#contents').src = 
    window.location.hash.replace("#", "");
    window.addEventListener("hashchange", () => parent.location.reload());
})();