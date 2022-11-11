((func) => {
    var ns = "kingsoft";
    globalThis["kingsoft"] = globalThis["kingsoft"] || {};
    func(globalThis["kingsoft"]);
})