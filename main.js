import "./style.css";
import "./index.css";
import { addMonths } from "https://cdn.jsdelivr.net/npm/date-fns/+esm";

/*
 * document.querySelector('#app').innerHTML = `
 *  <h1>Hello Vite!</h1>
 *  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
 *`
 */

const nextMonth = addMonths(new Date(), 1);
console.log(`Next month is ${nextMonth}`);
