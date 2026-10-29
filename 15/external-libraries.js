import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import  { isWeekend as isSatSun } from './weekend.js'; // 15g ИЛИ ПРОСТО import isSatSun

// 15a-15d

const today = dayjs();
const fiveDaysAfter = today.add(5, 'days');
const monthAfter = today.add(1, 'month');
const monthBefore = today.subtract(1, 'month');
const date4 = today.format('dddd')
const date3 = monthBefore.format('MMMM D');
const date2 = monthAfter.format('MMMM D');
const date1 = fiveDaysAfter.format('MMMM D');
console.log(date1, date2, date3, date4);

// 15e

let date = dayjs();
console.log(date.format('dddd, MMMM D'));
console.log(isSatSun(date));

date = dayjs().add(2, 'day');
console.log(date.format('dddd, MMMM D'));
console.log(isSatSun(date));

date = dayjs().subtract(1, 'month');
console.log(date.format('dddd, MMMM D'));
console.log(isSatSun(date));

date = dayjs().add(10, 'days');
console.log(date.format('dddd, MMMM D'));
console.log(isSatSun(date));
