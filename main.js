 //SCOPE//

 //let is for block scoping
  let name = "One"
 if (true){
   let name = "Ben"
 }
 console.log(name);

 //CONST//
 const ages = [26, 25, 24];
 
 console.log(ages)
 ages.push(22);
 console.log(ages) 

//HOISTING// 
//we are using var keyword for learning purposes only

 var age;
age = 26;
console.log(age); 
 
 function doIt(){
  age = 26;
}
let age;
doIt()
console.log(age) 

//ARROW FUNCTION//
function fn (){
  console.log("Hi Ben");
} 

/*syntax let fn = () => {} 
**/

let fn = () => console.log("Hi Ben");
fn() 

// const button = document.getElementById('btn');
// let button = document.querySelector('button');
// // regular function
fun = function (){
     document.getElementById('demo').innerHTML = this;
   //[object HTMLButtonElement]
}

// // arrow function
 fun2 = () => {
    document.getElementById('demo').innerHTML = this; 
    //[object Window]
 };

 button.addEventListener('click', fun )

/**
	this refers to what called the function
  with fat functions this does not keep context whereas with a regular function, this keyword keeps its context. This is handled differently when used in arrow functions and oldschool regular function
  
  
 Wth arrow functions there are no binding of this.
In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.
With arrow functions the this keyword always represents the object that defined the arrow function.
*/

//DEFAULT PARAMETERS//
 function isEqualTo(num, compared = 2){
    return num == compared;
 }
 console.log(isEqualTo(2 ));

//OR
 function isEqualTo(num = 2, compared = 2){
     return num == compared;
 }
 console.log(isEqualTo( ));

//OR
 function isEqualTo(num = 2, compared ){
     console.log(num) //3
    console.log(compared) //undefined
     return num == compared;
 }
 console.log(isEqualTo(3 )); //false

/*** JS will not pick the values which dont havwe a default value or the arguments which dont have a default value to assign the values you are passing. It still keeps the ordering. Its the FIRST argument that gets set, that is why the value of num is the arg 3 and not param 2.But it works the other way around if its the 2nd param that is defined while the 1st is not.
 * We can also do some calculations on the parameters   function isEqualTo(num = 2, compared = num / 2) OR as the first param  function isEqualTo(num = 2, compared = num) , we may use the variables defined outside the function
 *   
 */

let val = 10
 function isEqualTo(num = 2, compared = val ){
    console.log(num) //2
    console.log(compared) //10 
    return num == compared; //false
}
console.log(isEqualTo( ));
//cont from Obj Lit