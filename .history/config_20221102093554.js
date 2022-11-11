((func) => {
    globalThis["kingsoft"] = globalThis["kingsoft"] || {};
    func(globalThis["kingsoft"]["config"]);
})