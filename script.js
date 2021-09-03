var input1, input2, operator, clearFlag = false;

const add = function(a,b){return a + b;}

const sub = function(a,b){return a - b;}

const mul = function(a,b){return a * b;}

const div = function(a,b){return a / b;}

const pow = function(a){ return a*a;}

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
const topScr = document.querySelector('#input'); //Top part
const botScr = document.querySelector('#output'); //Bottom part

btns.forEach(button => button.addEventListener('click', function() {
    if(clearFlag){
        clear();
        clearFlag = false
    } 
    botScr.innerHTML += button.innerHTML;
})); //Adds the value to the bottom screen

const del = document.querySelector('#delete'); //Deletes the most recent number
del.addEventListener('click', function(){
    var str = botScr.innerHTML;
    botScr.innerHTML = str.slice(0,-1);
});

const ac = document.querySelector('#clear'); //Clears the text on screen
ac.addEventListener('click', function(){
    clear();
})

function clear(){
    botScr.innerHTML = topScr.innerHTML = "";
    input1 = undefined, input2 = undefined, operator = undefined;
}

const op = document.querySelectorAll('.op');
op.forEach(operate => operate.addEventListener('click', function(){
    operations(botScr.innerHTML, operate.id, operate.innerHTML);
}))

function operations(val, opCode, opVal){ //Takes the number, the id value and the sign value for scr
    if(opVal == '.'){
        if(botScr.innerHTML.includes('.')) return;
        botScr.innerHTML += ".";
    }else if(opVal == '(-)'){
        var str = "-"
        botScr.innerHTML = str.concat(botScr.innerHTML);
    }else if(input1 == undefined){ //Means there needs to be input1 and op (initial)
        if(opVal == '=') return;
        input1 = val;
        operator = opCode;
        topScr.innerHTML = input1 + ' ' + opVal;
        botScr.innerHTML = '';
    }else if(operator == undefined){
        operator = opCode;
        topScr.innerHTML = input1 + ' ' + opVal;
        botScr.innerHTML = '';
    }else if(input2 == undefined){ //Means there's an input1 but not input2 
        if(val == '' && botScr.innerHTML === ''){
            operator = opCode;
            topScr.innerHTML = input1 + ' ' + opVal;
            return;
        }else{
            input2 = val; //Calcuate
            input1 = operate(operator, parseFloat(input1),parseFloat(input2)); //Makes input1 the new value
            if(input2 == 0){
                botScr.innerHTML = "Divide by 0 error";
                clearFlag = true;
            }else{
                if(opVal == '='){
                    topScr.innerHTML += ' ' + input2 + ' =' 
                    botScr.innerHTML = input1;
                    input2 = operator = undefined;
                }else{
                    topScr.innerHTML = input1 + ' ' + opVal;
                    botScr.innerHTML = '';
                    input2 = undefined;
                    operator = opCode;
                }
            }
        }
    }
}