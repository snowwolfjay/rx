import './style.css';
import { rxv } from './rxv';
document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;

(async () => {
  const mod1 = await rxv.use<{ data: number; exec: () => void }>(
    'packages/test'
  );
  console.log(mod1);
  const mod2 = await rxv.use<{ data: number; exec: () => void }>(
    'packages/test'
  );
  console.log(mod1 === mod2);
  mod1.exec();
  mod2.exec();
})();
