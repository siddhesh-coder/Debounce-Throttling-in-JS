//Note: don't use lodash in interviews

const button = document.querySelector('#pressing');
const displayClicks = document.querySelector('.display-click-count');
const displayCalls = document.querySelector('.display-calls');

const text = document.querySelector('.searchBar');
const displayText = document.querySelector('#display-text');

let clicks = 0;
let calls = 0;

//debounce polyfill
const debounce = function(fn, t){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
        fn(...args);
        },t);
    }
};

const apiCalls = debounce(()=>{
    displayCalls.innerText = ++calls;
},800);

const search = debounce(()=>{
    displayText.innerText = text.value;
},300);

const clicksFn = ()=>{
    displayClicks.innerText = ++clicks;
    apiCalls();
};

const find = ()=>{
    search();
};

button.addEventListener('click', clicksFn);
text.addEventListener('keyup',find);

const button2 = document.querySelector('#pressing2');
const displayClicks2 = document.querySelector('.display-click-count2');
const displayCalls2 = document.querySelector('.display-calls2');

let pressedCount = 0;
let triggeredCount = 0;

//Throttle polyfill
const throttle = (fn,t)=>{
    let last = 0;
  return function(...args){
     let now = new Date().getTime();
     if(now - last < t) return;
     last = now;
     return fn(...args);
  };
};

const throFn = throttle(()=>{
    displayCalls2.innerText = ++triggeredCount;
},800)

button2.addEventListener('click', ()=>{
    displayClicks2.innerText = ++pressedCount;
    throFn();
})


