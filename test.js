const _ = require("lodash");

const date = new Date('1553356800000');
const y = date.getFullYear();
const m = date.getMonth() + 1;
const d = date.getDate();

const v = y + '/' + (m < 10 ? '0' + m : m) + '/' + (d < 10 ? '0' + d : d);


console.log('pain.xie:', 15.6 + 8.5 + 5.3);