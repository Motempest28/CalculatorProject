//The 4 steps:
    //Initialize State & Display
    //Listen for Inputs 
    //Have Inputs -> change the State
    //When the State is changed -> update display





//********************************************************** */
//Initialize State & Display
    //Create variables to collect the buttons and the displays
    //https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp
    //https://www.w3schools.com/jsref/met_document_queryselectorall.asp
    //https://www.w3schools.com/jsref/met_document_getelementbyid.asp

//Get the old display
const oldDisplay = document.querySelector(".oldDisplay");
//Get the current display
const currentDisplay = document.querySelector(".currentDisplay");
//Get all the buttons with the tag "ButtonNum"
const numButton = document.querySelectorAll(".ButtonNum");
//Get all the buttons with the tag "ButtonOperator"
const operatorButton = document.querySelectorAll(".ButtonOperator");
//Get the button "Clear"
const clearButton = document.getElementById("clear");
//Get the button "delete"
const delButton = document.getElementById("del");
//Get the button "delete"
const negButton = document.getElementById("neg");
//Get the button "delete"
const percentButton = document.getElementById("%");
//Get the button "eval"
const evalButton = document.getElementById("eval");

//Variable to store the old number/history
let oldNum = ''
//Variable to store the current number
let currentNum = ''
//Variable to get the current operator in use
let currentOperator = ''
//Variable to get incoming operator
let incomingOperator = ''
//A variable to confirm if the user has already sent a operator once
var i = 0


//********************************************************** */


//Listen for Inputs 
    //Add a event listener to all buttons
    //https://www.w3schools.com/js/js_htmldom_eventlistener.asp
//import the keyboard to be picked up: https://www.w3schools.com/jsref/obj_keyboardevent.asp
//https://www.toptal.com/developers/keycode/for/1
window.addEventListener('keyup', pressMe, false)


//Create a foreach loop through all the buttons to add a event listener
//https://www.w3schools.com/jsref/jsref_foreach.asp
numButton.forEach(button =>
    button.addEventListener('click', ()=> {
        
        //To avoid the 0 in the front of the number after a clear if the current text just equals 0 turn it into a empty string and continue appending
        if(currentDisplay.innerText === "0"){
            //clear the innertext
            currentDisplay.innerText = ''
            //reference for contains https://www.w3schools.com/jsref/jsref_includes.asp
            if(button.innerText =='.' && currentDisplay.innerText.includes('.')){
                returns
            }
            //update display
    currentDisplay.append(button.innerText)
    //store the current number in a variable so i can use this for later
    currentNum = currentDisplay.innerText
        }
        //If not starting from a recent clear just append
        else{
            //reference for contains https://www.w3schools.com/jsref/jsref_includes.asp
            if(button.innerText =='.' && currentDisplay.innerText.includes('.')){
                returns
            }
            //update display
    currentDisplay.append(button.innerText)
    //store the current number in a variable so i can use this for later
    currentNum = currentDisplay.innerText
        }
    }))

//Create a foreach loop through all the operator buttons to add a event listener
operatorButton.forEach(button =>
    button.addEventListener('click', ()=> {        
        // = vs == vs === reference: https://tinyurl.com/ecvs5wb8
        //working space
        //create a temp varible for hte new operator and check with the current
        incomingOperator = button.innerText
        operatorUpdate()
        //Once they selected a operator this goes up by 1 indicting that the next button press is not their first time
        i++
    }))

//Create a eventlistener for "clear" Button
clearButton.addEventListener('click', ()=>{
    clear()
})

//Create a eventListener for "% Percent" Button
percentButton.addEventListener('click', () =>{
    percent()
})
//Create a eventListener for "neg" Button
negButton.addEventListener('click', ()=>{
    neg()
})
//Create a eventListener for "Eval" Button
evalButton.addEventListener('click', () =>{
    eval()
})

//Create a eventListener for del button
delButton.addEventListener('click', () =>{
    del()
})


//Create a eventListener for keyboard numpad

function pressMe(key){

    //if a clear has been hit or when it is the first launch of the calculator clear out the 0
    // if(currentDisplay.innerText === '0'){
    //     currentDisplay.innerText = ''
    //     keyNumCodes(key)
    // }
    // else{
        
    // }
    keyNumCodes(key)
   
    
    if((key.shiftKey && key.keyCode == '187') || key.keyCode === 107){
        //numpad and keyboardNum = +
        incomingOperator = '+'
        operatorUpdate()
        //Once they selected a operator this goes up by 1 indicting that the next button press is not their first time
        i++
    }
    

    if(key.keyCode == '173'|| key.keyCode == '109' || key.keyCode == '189'){
        //numpad and keyboardNum = -
        incomingOperator = '-'
        operatorUpdate()
        //Once they selected a operator this goes up by 1 indicting that the next button press is not their first time
        i++
    }

    if((key.shiftKey && key.keyCode == "56") || key.keyCode == '106'){
        //numpad and keyboardNum = *
        incomingOperator = '*'
        operatorUpdate()
        //Once they selected a operator this goes up by 1 indicting that the next button press is not their first time
        i++
    }

    if(key.keyCode == '111' || key.keyCode == '191'){
        //numpad and keyboardNum = ÷
        incomingOperator = '÷'
        operatorUpdate()
        //Once they selected a operator this goes up by 1 indicting that the next button press is not their first time
        i++
    }

    if(key.key == '='){
        eval()
    }


}    







//********************************************************** */


//methods

function keyNumCodes(key){
    if(key.keyCode == '48' || key.keyCode == '96'){
        //numpad and keyboardNum = 0
        let num = '0'
        currentDisplay.append(num)
        currentNum = currentDisplay.innerText
    }

    if(key.keyCode == '49' || key.keyCode == '97'){
        //numpad and keyboardNum = 1
        currentDisplay.append('1')
        currentNum = currentDisplay.innerText
    }

    if(key.keyCode == '50' || key.keyCode == '98'){
        //numpad and keyboardNum = 2
        currentDisplay.append('2')
        currentNum = currentDisplay.innerText
    }

    if(key.keyCode == '51' || key.keyCode == '99'){
        //numpad and keyboardNum = 3
        currentDisplay.append('3')
        currentNum = currentDisplay.innerText
    }

    if(key.keyCode == '52' || key.keyCode == '100'){
        //numpad and keyboardNum = 4
        currentDisplay.append('4')
        currentNum = currentDisplay.innerText
    }

    //bug fix when doing shift 5 it would input 5 and run precent doing the shift function first prevents the 5 being
    //appended
    if((key.shiftKey && key.keyCode == "53")){
        //keybaord precent button
        percent()
    }
    else if(key.keyCode == '53' || key.keyCode == '101'){
        //numpad and keyboardNum = 5
        currentDisplay.append('5')
        currentNum = currentDisplay.innerText
    }

    if(key.keyCode == '54' || key.keyCode == '102'){
        //numpad and keyboardNum = 6
        currentDisplay.append('6')
        currentNum = currentDisplay.innerText
    }

    if(key.keyCode == '55' || key.keyCode == '103'){
        //numpad and keyboardNum = 7
        currentDisplay.append('7')
        currentNum = currentDisplay.innerText
    }

    if(key.keyCode == '56' || key.keyCode == '104'){
        //numpad and keyboardNum = 8
        currentDisplay.append('8')
        currentNum = currentDisplay.innerText
    }

    if(key.keyCode == '57' || key.keyCode == '105'){
        //numpad and keyboardNum = 9
        currentDisplay.append('9')
        currentNum = currentDisplay.innerText
    }

    if(key.key== '.'){
        //numpad and keyboardNum = .
            //reference for contains https://www.w3schools.com/jsref/jsref_includes.asp
            if(currentDisplay.innerText.includes('.')){
                returns
            }
        currentDisplay.append('.')
        currentNum = currentDisplay.innerText
    }

    if(key.keyCode == '46'){
        del()
    }

    if(key.keyCode == '8'){
        
        del()
    }

    
}

//function to update the display and current number
function updateDisplay(){
    //update display
    currentDisplay.append(button.innerText)
    //store the current number in a variable so i can use this for later
    currentNum = currentDisplay.innerText
}
//functionality to the percent button
function percent(){
    //Store the current number on the display
    currentNum = currentDisplay.innerText
    //Create a new variable and compute
    let temp = currentNum / 100
    //Clear the display
    currentDisplay.innerText =''
    //Append the new number after computation
    currentDisplay.append(temp)
    //update the current num
    currentNum = temp
}

//functionality to the negative button
function neg(){
    //Store the current number on the display
    currentNum = currentDisplay.innerText
    //Create a new variable and compute
    let temp = currentNum * -1
    //Clear the display
    currentDisplay.innerText =''
    //update the current num
    currentNum = temp
    //Append the new number after computation
    currentDisplay.append(temp)
}

//functionality to the clear button
function clear(){
    //When Clear is called force the display to display a 0 and clear out the history
    currentDisplay.innerText = ''
    oldDisplay.innerText = ''
    //clear out variables
    currentNum = ''
    oldNum =''
    currentOperator = ''
    incomingOperator = ''
    i = 0
}


//function when a operator button / key is pressed
function operatorUpdate(){
    //if the operator that that the user selects is not a duplicate and its the first time                
    if(currentOperator == ''){
        if(currentDisplay.innerText == '' ||currentNum == ''){
            
          return
        } 
        else{
            
                //if they are not the same operator then make the current the tempOp's operator
        currentOperator = incomingOperator
        //store the current num as the old num
        oldNum = currentNum
        //combine the current num and op to append to the old display
        let temp = currentNum + currentOperator            
        //update the display
        oldDisplay.append(temp)
        //clear the display and current num
        currentDisplay.innerText = ''
        currentNum = '' 
        }

    }
    
    //assuming they clicked the wrong operator or they just want to change it for future calculation       
    if(i > 0){
        if(!currentOperator =='' && incomingOperator == currentOperator){               
            return
        }
        
            //if they are not the same operator then make the current the tempOp's operator
            currentOperator = incomingOperator
            //combine the the current old 'confusing i know' display and append the current operator and throw it in the display
            let temp = oldNum + currentOperator  
            //clear the old display
            oldDisplay.innerText = ''          
            //update the display
            oldDisplay.append(temp)               
    }
}

//function when the eval button/key is pressed
function eval(){
    //switch statement reference
    //https://www.w3schools.com/js/js_switch.asp
    let results
    //store the currdent display into a variable
    currentNum = currentDisplay.innerText
    //if the current display has nothing do nothing
    if(currentNum ==''){
        return
    }
    else{
        //switch statements depending on the current operator

        switch(currentOperator){
            default:
                alert('IM BROKEN')
                break;
            //when the operator is addition
            case '+':
                results = parseFloat(oldNum) + parseFloat(currentNum)
                oldDisplay.innerText = results + currentOperator
                oldNum = results
                currentDisplay.innerText = ''
                currentNum = ''
                break;
            //when the operator is subtraction
            case '-':
                results = parseFloat(oldNum) - parseFloat(currentNum)
                oldDisplay.innerText = results + currentOperator
                oldNum = results
                currentDisplay.innerText = ''
                currentNum = ''
                break;
            //when the operator is multiplication
            case '*':
                results = parseFloat(oldNum) * parseFloat(currentNum)
                oldDisplay.innerText = results + currentOperator
                currentDisplay.innerText = ''
                currentNum = ''
                oldNum = results
                break;
            //when the operator is division
            case '÷':
                results = parseFloat(oldNum) / parseFloat(currentNum)
                oldDisplay.innerText = results + currentOperator
                currentDisplay.innerText = ''
                currentNum = ''
                oldNum = results
                break;               
        }
    }
}

//splice reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
//delete one character in the back
function del(){
    //create a variable to store the innertext
    let string = currentDisplay.innerText
    //create a new variable to store the new cut string
    let temp = string.toString().slice(0, -1)
    //update display and Global variable
    currentDisplay.innerText = temp
    currentNum = currentDisplay.innerText
}
