import { Module, RXV } from "./rxv.type";
const modules: Array<{
  name: string;
  raw: Module;
  exports: any;
  ref: number;
  version: string;
}> = [];
export const rxv: RXV = {
  async use<T = any>(name: string) {
    let mod = modules.find((el) => el.name === name);
    if (mod) {
      mod.ref++;
      console.log("use exist module " + name);
      return mod.exports as T;
    }
    const global = {};
    const window = global;
    const module = {} as any;
    const exports = {};
    mod = {
      raw: module,
      exports,
      ref: 1,
      name,
      version: "",
    };
    const clear = () => {
      mod.ref--;
      if (!mod.ref) {
        console.log(`unmount module`);
        let i = modules.findIndex((el) => el === mod);
        modules.splice(i, 1);
        mod = null;
      }
    };
    const res = await fetch(name + ".js");
    const v = await res.text();
    eval(v);
    mod.version = module.meta.version;
    Object.assign(exports, module.meta, module?.exports, { clear });
    Object.freeze(exports);
    console.log(window);
    modules.push(mod);
    console.log(modules);
    return exports as T;
  },
};
// @ts-ignore
window.rxv = rxv;
