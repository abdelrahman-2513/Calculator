
// the selectors of themes
var theme_one = document.getElementById("theme-one");
var theme_two = document.getElementById("theme-two");
var theme_three = document.getElementById("theme-three");

// the screen of the calculator
var screen_ = document.getElementById("screen");
var calc = document.getElementById("calc");
let numeric = document.getElementsByClassName("num");
let fun = document.getElementsByClassName("fun");
var equal= document.getElementById("equal")



// row of themes
var row = document.getElementById("row");
let head = document.getElementById("head-container");

//buttons
let zero = document.getElementById("0");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let reset = document.getElementById("reset");
let del = document.getElementById("del");
let add = document.getElementById("add");
let syb = document.getElementById("sub");
let mul = document.getElementById("mul");
let dev = document.getElementById("dev");
let eq = document.getElementById("equal");


// functions

function themeone() {
    document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
    row.style.backgroundColor = "hsl(223, 31%, 20%)";
    screen_.style.backgroundColor = "hsl(224, 36%, 15%)";
    screen_.style.color = "white";
    theme_one.style.backgroundColor = "hsl(6, 63%, 50%)";
    theme_two.style.backgroundColor = "transparent";
    theme_three.style.backgroundColor = "transparent";
    head.style.color = "white";
    calc.style.backgroundColor = "hsl(223, 31%, 20%)";
    for (i = 0; i < numeric.length;i++){
        
        numeric[i].style.backgroundColor = "hsl(30, 25%, 89%)";
        numeric[i].style.boxShadow = "1px 0px 1px 2px hsl(28, 16%, 65%)";
        numeric[i].style.color = "hsl(221, 14%, 31%)";
    }
    for ( j = 0; j< fun.length; j++){
        
        fun[j].style.backgroundColor = "hsl(225, 21%, 49%)";
        fun[j].style.boxShadow = "1px 0px 1px 2px  hsl(224, 28%, 35%)";
        fun[j].style.color = "white";
    }
    equal.style.backgroundColor = "hsl(6, 63%, 50%)";
    equal.style.boxShadow = "1px 0px 1px 2px  hsl(6, 70%, 34%)";
    alert("$ Theme one choosed $");
}
function themetwo() {
    document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
    row.style.backgroundColor = "hsl(0, 5%, 81%)";
    screen_.style.backgroundColor = "hsl(0, 0%, 93%)";
    screen_.style.color = "hsl(60, 10%, 19%)";
    theme_one.style.backgroundColor = "transparent";
    head.style.color = "hsl(60, 10%, 19%)";
    theme_two.style.backgroundColor = "hsl(25, 98%, 40%)";
    theme_three.style.backgroundColor = "transparent";
    calc.style.backgroundColor = "hsl(0, 5%, 81%)";
    for (i = 0; i < numeric.length;i++){
        
        numeric[i].style.backgroundColor = "hsl(45, 7%, 89%)";
        numeric[i].style.boxShadow = "1px 0px 1px 2px hsl(35, 11%, 61%)";
        numeric[i].style.color = "hsl(60, 10%, 19%)";
    }
    for ( j = 0; j< fun.length; j++){
        
        fun[j].style.backgroundColor = "hsl(185, 42%, 37%)";
        fun[j].style.boxShadow = "1px 0px 1px 2px  hsl(185, 58%, 25%)";
        fun[j].style.color = "white";
    }
    equal.style.backgroundColor = "hsl(25, 98%, 40%)";
    equal.style.boxShadow = "1px 0px 1px 2px  hsl(25, 99%, 27%)";
    alert("$ Theme two choosed $");
}
function themethree() {
    document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
    row.style.backgroundColor = "hsl(268, 71%, 12%)";
    screen_.style.backgroundColor = "hsl(268, 71%, 12%)";
    screen_.style.color = "hsl(52, 100%, 62%)";
    theme_one.style.backgroundColor = "transparent";
    head.style.color = "hsl(52, 100%, 62%)";
    theme_two.style.backgroundColor = "transparent";
    theme_three.style.backgroundColor = "hsl(176, 100%, 44%)";
    calc.style.backgroundColor = "hsl(268, 71%, 12%)";
    for (i = 0; i < numeric.length;i++){
        
        numeric[i].style.backgroundColor = "hsl(268, 47%, 21%)";
        numeric[i].style.boxShadow = "1px 0px 1px 2px hsl(290, 70%, 36%)";
        numeric[i].style.color = "hsl(52, 100%, 62%)";
    }
    for ( j = 0; j< fun.length; j++){
        
        fun[j].style.backgroundColor = "hsl(281, 89%, 26%)";
        fun[j].style.boxShadow = "1px 0px 1px 2px  hsl(285, 91%, 52%)";
        fun[j].style.color = "white";
    }
    equal.style.backgroundColor = "hsl(176, 100%, 44%)";
    equal.style.boxShadow = "1px 0px 1px 2px  hsl(177, 92%, 70%)";
    equal.style.color = "hsl(198, 20%, 13%)";
    alert("$ Theme three choosed $");
}

function seven_() {
    screen_.innerHTML += "7";
}
function eight_() {
    screen_.innerHTML += "8";
}
function nine_() {
    screen_.innerHTML += "9";
}
function three_() {
    screen_.innerHTML += "3";
}
function four_() {
    screen_.innerHTML += "4";
}
function six_() {
    screen_.innerHTML += "6";
}
function five_() {
    screen_.innerHTML += "5";
}
function one_() {
    screen_.innerHTML += "1";
}
function two_() {
    screen_.innerHTML += "2";
}
function zero_() {
    screen_.innerHTML += "0";
}
function del_() {
    let text = screen_.innerHTML;
    screen_.innerHTML = screen_.innerHTML.slice(0,text.length-1);
}
function add_() {
    screen_.innerHTML += "+";
}
function sub_() {
    screen_.innerHTML += "-";
}
function mul_() {
    screen_.innerHTML += "x";
}
function dev_() {
    screen_.innerHTML += "/";
}
function reset_() {
    screen_.innerHTML = "";
}
function dot_() {
    screen_.innerHTML += ".";
}
function equal_() {
    let text = screen_.innerHTML;
    var result;
    var nums=new Array;


   
    if (text.includes("/"))
    {
        
        nums = text.split("/");
        result = nums[0];
        for (i = 1; i < nums.length; i++){
            result =result/parseInt(nums[i]) ;
        }
        screen_.innerHTML = result;
    }
    if (text.includes("x"))
    {
        
        nums = text.split("x");
        result = 1;
        for (i = 0; i < nums.length; i++){
            result *=parseInt(nums[i]) ;
        }
        screen_.innerHTML = result;
    }
    if (text.includes("-"))
    {
        
        nums = text.split("-");
        result = nums[0];
        for (i = 1; i < nums.length; i++){
            result =result-parseInt(nums[i]) ;
        }
        screen_.innerHTML = result;
    }
    if (text.includes("+"))
    {
        result = 0;
        nums = text.split("+");
        for (i = 0; i < nums.length; i++){
            result += parseInt(nums[i]);
        }
        screen_.innerHTML = result;
    }
    
    
    
}