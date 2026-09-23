//1
// function reversesNum(x) {
//     return (x.toString().split("").reverse().join(""));
// }
function reversesNum(x) {
    for(let i = x.length-1;i>=0;i--){
        document.write(x[i]);
    }
}


let x = prompt("enter the number: ");
reversesNum(x);

// //2
// for(let i = 0;i<=15;i++){
//     if(i%2 == 0){
//         console.log(i + " is even");
//     }else
//         console.log(i +" is odd");
// }

// // 3
// let num=prompt("Enter your number: ");
// let result="";
// document.write(num[0]);
// for(let i=1; i<num.length; i++){
//     if( num[i]%2==0 && num[i-1]%2==0){
//         document.write("-");
//         document.write(num[i]);
//     }
//     else
//         document.write(num[i]);
// }

// // 4
// function Agechecker(x){
//     if(x>= 18){
//         document.write("The user is Adult");
//     }else{
//         document.write("The user is Minor");
//     }
// }
// Agechecker(12);
