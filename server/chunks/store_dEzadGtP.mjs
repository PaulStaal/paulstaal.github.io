globalThis.process ??= {};
globalThis.process.env ??= {};
const store_png = new Proxy({ "src": "/assets/store.B4EDBSRt.png", "width": 1909, "height": 841, "format": "png" }, {
  get(target, name, receiver) {
    if (name === "clone") {
      return structuredClone(target);
    }
    if (name === "fsPath") {
      return "/Users/paul/Documents/wattiv.nl/WattIV-website-dev/src/assets/images/store.png";
    }
    return target[name];
  }
});
export {
  store_png as s
};
