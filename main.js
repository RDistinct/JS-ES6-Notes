 //SCOPE//

 //let is for block scoping
//   let name = "One"
//  if (true){
//    let name = "Ben"
//  }
//  console.log(name);

//  //CONST//
//  const ages = [26, 25, 24];
 
//  console.log(ages)
//  ages.push(22);
//  console.log(ages) 

// //HOISTING// 
// //we are using var keyword for learning purposes only

//  var age;
// age = 26;
// console.log(age); 
 
//  function doIt(){
//   age = 26;
// }
// let age;
// doIt()
// console.log(age) 

// //ARROW FUNCTION//
// function fn (){
//   console.log("Hi Ben");
// } 

// /*syntax let fn = () => {} 
// **/

// let fn = () => console.log("Hi Ben");
// fn() 

// // const button = document.getElementById('btn');
// // let button = document.querySelector('button');
// // // regular function
// fun = function (){
//      document.getElementById('demo').innerHTML = this;
//    //[object HTMLButtonElement]
// }

// // // arrow function
//  fun2 = () => {
//     document.getElementById('demo').innerHTML = this; 
//     //[object Window]
//  };

//  button.addEventListener('click', fun )

// /**
// 	this refers to what called the function
//   with fat functions this does not keep context whereas with a regular function, this keyword keeps its context. This is handled differently when used in arrow functions and oldschool regular function
  
  
//  Wth arrow functions there are no binding of this.
// In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.
// With arrow functions the this keyword always represents the object that defined the arrow function.
// */

// //DEFAULT PARAMETERS//
//  function isEqualTo(num, compared = 2){
//     return num == compared;
//  }
//  console.log(isEqualTo(2 ));

// //OR
//  function isEqualTo(num = 2, compared = 2){
//      return num == compared;
//  }
//  console.log(isEqualTo( ));

// //OR
//  function isEqualTo(num = 2, compared ){
//      console.log(num) //3
//     console.log(compared) //undefined
//      return num == compared;
//  }
//  console.log(isEqualTo(3 )); //false

/*** JS will not pick the values which dont havwe a default value or the arguments which dont have a default value to assign the values you are passing. It still keeps the ordering. Its the FIRST argument that gets set, that is why the value of num is the arg 3 and not param 2.But it works the other way around if its the 2nd param that is defined while the 1st is not.
 * We can also do some calculations on the parameters   function isEqualTo(num = 2, compared = num / 2) OR as the first param  function isEqualTo(num = 2, compared = num) , we may use the variables defined outside the function
 *   
 */

// let val = 10
//  function isEqualTo(num = 2, compared = val ){
//     console.log(num) //2
//     console.log(compared) //10 
//     return num == compared; //false
// }
// console.log(isEqualTo( ));
// //cont from Obj Lit

//OBJECT LITERAL
// let name = 'Ben';
// let age = 25;

// let obj = {
//   name,
//   age
// }
// console.log(obj); //OUTPUT {name:'Ben' age:25}
/***
 * this is because the object will take the valuesfrom the surrounding variables when we dont specify values to be initialized inside the object. It will look for variables declared before the declaration of the object which match the property name & age  
 */
//  let name = 'Ben';
//let age = 25;
 
//  let obj = {
//    name:'Max',
//    age
//  }
//  console.log(obj); //OUTPUT {name:Max, age:25 }
 /**
  * however you can overwrite the outside values when you declare them inside the object
  */
  // let obj2 = {
  //   'name':'Max',
  //   age,
  //   'greet'(){
  //     console.log(this.name + ' ' + this.age);
  //   }
  // }
  // // console.log(obj2.greet());
  // obj2["greet"]()
  /**
   * you can also create property strings(property key wrapped in quotation marks) in the object eg property name as a string, but the parenthesis must stay outside coz they are not part of the name.Even methods can be declared/called with quotation marks.If you want to call the function wrapped in quotation marks, you have to use bracket notation since the name in quotes is now a string.Eg obj2['greet']() Advantage of quotation marks is that you are allowed to use words with a gap eg "greet me"
   */
  //  let obj2 = {
  //   'name':'Max',
  //   age,
  //   'greet me'(){
  //     console.log(this.name + ' ' + this.age);
  //   }
  // }
  //console.log(obj2.greet());
  //obj2["greet me"]() //OUTPUT is: Max 25. this is same as obj2.greet me but because the function "greet me" has space, we use brackets and quotes.When greet me is called it logs the message in it.But when we call obj2.name, nothing happens coz there is no function to it.So we must console.log obj2.name.   
  /*console.log(obj2['greet me'])  OUTPUT this prints the function greet me ==> ƒ 'greet me'(){
    console.log(this.name + ' ' + this.age);
  }

  console.log(obj2['greet me']()) //OUTPUT is Max 25 & undefined 
  */


  //OBJECT DYNAMIC FIELDS/Values //
  /**
   * DYNAMIC VARIABLE - is a variable that doesnt have any specific name in the code base, without accessing the object.
   * JS allows you to have dynamic variable names and object names which can be changed in the future, without accessing array or object. 
   * 1. Create a variable and initialize it with a value
   * 2.In the array,use square brackets & variable's name inside the square brackets when declaring a variable.Its syntax is:
   *  const name = "KeyName";
   *  const obj = { ['name'] = "Ben"}; 
   */

      //EXAMPLE 
    // const name = "NAME";
    // const age = "AGE";
    // const user = { 
    //   [name] : "Ben",
    //   [age] : 25
    // };
    // console.log(user) //OUTPUT: {NAME:"Ben" AGE:25 }
    /**
     * so we can change the variable names ie age & name and the info will be updated in the user object.
     */

    
     const name = "NAMEVALUE";
     const  age = "AGEVALUE";
     const user = { 
       [name] : "Ben",
       [age] : 25
     };
     console.log(user) //OUTPUT: {NAME:25 AGE:"Ben" }
     //to access individual properties
     console.log(user["NAMEVALUE"]) //OUTPUT: 25
     console.log(user["AGEVALUE"]) //OUTPUT: Ben
     console.log(user[age]) //OUTPUT: 25 this is the proerty that holds the value's name.

     //REST OPERATOR