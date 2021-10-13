"use strict";

// 1. Дан большой текст, в котором для оформления прямой речи используются одинарные кавычки. Придумать шаблон, который заменяет одинарные кавычки на двойные.
// 2. Улучшить шаблон так, чтобы в конструкциях типа aren't одинарная кавычка не заменялась на двойную.

let string = "She asked Lucy: 'Are you busy today evening?' Lucy didn't answer. 'Are you?' 'No, I'm not' - Lucy replied with reluctance.";
// string = string.replace(/'/g, '"'); //задание 1
// let reg1 = /\s'|'\s/g;
string = string.replace(/\s'/g, ' "').replace(/'\s/g, '" ');
console.log(string);