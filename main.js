// let button = document.getElementById ("btn");


// button.addEventListener ("click", function() {
// console.log("button is clicked");

// })
// console.log(button);






// let header = document.getElementById ("head");


// header.addEventListener ("click", function () {
// console.log("header is Clicked");

// })
// console.log(header);






// let div = document.getElementById ("divon");


// div.addEventListener("click", function () {
// console.log("div is clicked");

// })
// console.log(div);


// let mySection = document.getElementsByClassName("secs");

// console.log(mySection);

// for(let i = 0 ; i < mySection.length ; i ++){

//     console.log(mySection[i]);
// }
// const text = button.innerText
// console.log(text);
// console.log(divon.innerText);
// console.log(header.innerText);

// divon.innerText = "new Divon text"
// console.log(divon.innerText);

const input1 = document.getElementById ("firstinput")
// console.log(input1);

const input2 = document.getElementById ("secondinput")
// console.log(input2);

const button1 = document.getElementById ("firstbutton")
// console.log(button1);

button1.addEventListener("click" , function () {
    // console.log(Number(input1.value));
    // console.log(Number(input2.value));
    //     let minus = Number (input1.value) - Number(input2.value) ;
    //     console.log(minus);
    //     let multiply = Number (input1.value) * Number(input2.value) ;
    //     console.log(multiply);
    //     let divided = Number (input1.value) /  Number(input2.value) ;
    //     console.log(divided);
    const sum = Number (input1.value) + Number(input2.value) ;
    console.log(sum)
});

const minbtn = document.getElementById("minus")
minbtn.addEventListener ("click" , function (){
    const minus = Number (input1.value) - Number(input2.value) ;
    console.log(minus)      
}) ;

const divbth = document.getElementById ("divided")
divbth.addEventListener("click" , function () {
    const divided = Number (input1.value) / Number(input2.value) ;
    console.log(divided)    
}) ;

const mulbth = document.getElementById ("multiply");
mulbth.addEventListener("click" , function (){
    const mul = Number (input1.value) * Number(input2.value) ;
    console.log(mul)    
}) ;

numbersButton = document.getElementsByClassName ("numbers");
console.log(numbersButton);

for (let i = 0 ; i < numbersButton.length; i++){
    console.log(numbersButton[i].innerText);
}