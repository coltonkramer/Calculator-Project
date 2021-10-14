let numArr = []
let numList = []
let displayArr = []
let symbArr = []
let answer

//Normal clear button on a calculator. Clears the screen and erases anything stored for the equation
function reset(){
    document.getElementById('output').innerHTML = "0"
    numArr.length = 0
    numList.length = 0
    displayArr.length = 0
}
//Gets the number from the button click, stores the number and displays the number in seperate arrays
function insertNum(button){
    if(button){
        a = button.getAttribute("value");
        numArr.push(a)
        displayArr.push(a)
    }
        display = displayArr.join('')
        document.getElementById('output').innerHTML = display        
    }

//Joins the digits of numArr and joins them to create the number typed. This becomes numList
function newNum(){
    b = numArr.join('')
        numList.push(b)
}

// Checks if the symbol is an equal sign. If it is it goes straight to solve 
//If not it will

function calculate(button){
    let equal = false
    if(button.getAttribute("value") == '='){
        equal = true
    }
    else{
        symbol = button.getAttribute("value")
        symbArr.push(symbol)
    }    

    newNum()
    displayArr.push(symbol)
    insertNum()
    numArr.length = 0
    if (numList.length == 2){
        var solver = {
            '+': function(x,y) {return x + y},
            '-': function(x,y) {return x - y},
            '*': function(x,y) {return x * y},
            '/': function(x,y) {return x / y}
        }
        let answer = solver[symbol](parseFloat(numList[0]),parseFloat(numList[1]))
        numList.length = 0
        numList[0] = answer
    }
    solve(answer)
    
}

function solve(){
    answer = numList[0] 
    document.getElementById('output').innerHTML = answer
}
