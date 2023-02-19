import { delay } from '@helpers/libs.js';
// import { delay } from './helpers/sub1/libs.js';

console.log('Hello world, start delay');
await delay(2_000);
console.log('Delay end');
