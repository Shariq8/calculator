const add = function(a,b){
    return a + b;
}

const sub = function(a,b){
    return a - b;
}

const mul = function(a,b){
    return a * b;
}

const div = function(a,b){
    return a / b;
}

const pow = function(a){
    return a*a;
}

const operate = function(op, a, b){
    switch(op){
        case 'add':
            return add(a,b);
        case 'sub':
            return sub(a,b);
        case 'mul':
            return mul(a,b);
        case 'div':
            return div(a,b);
    }
}

const btns = document.querySelectorAll('.btn');
const input = document.querySelector('#input');
const ouput = document.querySelector('#output');

btns.forEach(button => button.addEventListener('click', function() {
    input.innerHTML += button.innerHTML;
}));

const del = document.querySelector('#delete');
del.addEventListener('click', function(){
    var str = output.innerHTML;
    output.innerHTML = str.slice(0,-1);
});

const ac = document.querySelector('#clear');
ac.addEventListener('click', function(){
    output.innerHTML = "";
})

const op = document.querySelectorAll('#op');
op.forEach(operate => operate.addEventListener('click', function(){
    const input = document.querySelector('#input');
    output.innerHTML()
}))