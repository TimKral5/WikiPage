((func) => {
    globalThis["kingsoft"] = globalThis["kingsoft"] || {};
    globalThis["kingsoft"]["config"] = globalThis["kingsoft"]["config"] || {};
    func(globalThis["kingsoft"]["config"]);
})