// const one = document.getElementById('one')
// const two = document.getElementById('two')
// const add = document.getElementById('add')
// const equal = document.getElementById('equal')

// display input value
let val = "0";
// store the value
let oldval = "0";
// html form
let html = '';
// store the last operation
let op = 0
// display 0 as deafult
html = `<b> ${val}</b>`
list.innerHTML = html

// display function
function display(input){
    if (val == "0"){
        if(input != "." && input != ""){
            val = ""
        } else if (input == "0"){
            val = "0"
        }
    }
    if (val == "-0" && input != "."){
        val = "-"
    }
    val = val + input;
    console.log(val)

    html = `<b> ${val}</b>`
    list.innerHTML = html
}

// function to store the val(input) to oldval(store)
function store(){
    oldval = parseFloat(oldval) + parseFloat(val);
    val = "0"
}
// function that will do the operation and display the answer
function execute(op){
    switch(op){
        case 1:
            oldval = parseFloat(oldval) + parseFloat(val)
            break;
        case 2:
            oldval = parseFloat(oldval) - parseFloat(val)
            break;
        case 3:
            oldval = parseFloat(oldval) * parseFloat(val)
            break;
        case 4:
            oldval = parseFloat(oldval) / parseFloat(val)
            break;
        default :
            break;
    }
    val = "0"
    html = `<b> ${oldval}</b>`
    list.innerHTML = html
    console.log(oldval)

}
// clear function
function clearInput(){
    if (val = "0"){
        oldval = "0";
    }
}

one.addEventListener('click',function(){
    display(one.textContent)
})
two.addEventListener('click',function(){
    display(two.textContent)
})
three.addEventListener('click',function(){
    display(three.textContent)
})
four.addEventListener('click',function(){
    display(four.textContent)
})
five.addEventListener('click',function(){
    display(five.textContent)
})
six.addEventListener('click',function(){
    display(six.textContent)
})
seven.addEventListener('click',function(){
    display(seven.textContent)
})
eight.addEventListener('click',function(){
    display(eight.textContent)
})
nine.addEventListener('click',function(){
    display(nine.textContent)
})
zero.addEventListener('click',function(){
    display(zero.textContent)
})

dot.addEventListener('click',function(){
    // prevent multiple dot
    if(val.includes(".") === false){
        display(dot.textContent)
    }
})

clear.addEventListener('click',function(){
    clearInput()
    val = "0";
    html = `<b> ${val}</b>`
    list.innerHTML = html
})

add.addEventListener('click',function(){
    if (op != 0){
        execute(op)
    }
    op = 1
    store(op)
})
minus.addEventListener('click',function(){
    if (op != 0){
        execute(op)
    }
    op = 2
    store(op)
})
times.addEventListener('click',function(){
    if (op != 0){
        execute(op)
    }
    op = 3
    store(op)
})
div.addEventListener('click',function(){
    if (op != 0){
        execute(op)
    }
    op = 4
    store(op)
})
equal.addEventListener('click',function(){
    execute(op)
    op = 0
    clearInput()
})

negative.addEventListener('click',function(){
    if(val.includes("-")){
        val = val.slice(1)
    } else {
        val = val.replace(/^/,'-')
    }
    display("")
})