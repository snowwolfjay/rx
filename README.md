# rxv
To be a clearer and simpler SPA framework base on Observable and Many other frameworks' good part 

# Design :

1. Data Flow Use Observale: 
   > base on a rxjs wrapper + Flow System before native Observale usable;
2. Package Inner Component:
   > use wrapped observale dual-pass data;
    + Parent<->Child: Input(Observale) Output(Subject)
    + Shared Source: State(BehaviorSubject) Events(Subject)
3. Between Packages:
    > Global Event System transfer share data: (ObservaleShared)
    > Implements :
      + Node:    global
      + Browser: Window
4. Plugin / Package usage:
    >[(Inspired by requirejs - 
      + declare use a package ,like this
      ```
    const package1 = await use(url:string)
    const package2 = await use(name:string,version:string,baseUrl:string)
    const package3 = await use(name:string)
      ```
      + package resolver privately global tracked
      > 1. loaded and version no conflit -> directly resolve, increase ref counter;
      > 
      > 2. use eval sandbox exec loaded script -> rewrite window and global and module and exports at loader's exec scope : deep proxy global scope for read only, any set will write into a package special global scope

5. Hooks like api for lifecycle and utils - cut vue or svelte

6. Npm package loader -> transfer package to single version special file and so on


# Why
+ vue/angular/react is quite good enough, but still has some history burden, still complex to track changes or hack native js/es running sequence.
+ vdom is good but not so good when you can directly observe data changes and compair the data which build the vdom, angular dont has vdom, but use zone to track changes, which is like black cloud cover your app;
+ and one more, for a realy complex spa, when you use them , although chunk splitted, but there is no way to unimport those codes , especially use assembly module which is so large , 10M each, need keep, and packages not all so pure and closure keep increasing, bad and sad, just like webcomponet, I can regist one when I need, but cant unregist it when I dont need it

#proto

[online proto](https://stackblitz.com/edit/vite-5yargd?file=rxv.ts)
