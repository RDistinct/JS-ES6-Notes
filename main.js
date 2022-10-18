 /**
  * ###READ ME!!!####
  * -> Please uncomment a block of code to run.
  */
 /**
  *                     ###CONCEPTS###
  *   -->SCOPE
  *   -->HOISTING
  *   -->ARROW FUNCTION
  *   -->DEFAULT PARAMETERS
  *   -->OBJECT LITERALS & OBJECT FIELDS
  *   -->
  */
 
 //SCOPE//
 /**
  * -> Scope is the current context of execution in which values/expressions can be referenced (visible).
  * ->If a Variable is outside the current scope,then its not available for use 
  * ->Scope is hierarchical meaning child scopes have access to parent scope but not the other way round.Parent cant access child scope
  * 
  *       TYPES OF SCOPES IN JAVASCRIPT
  * ->Global scope - default scope for all code running in script mode.
  * ->Module scope - scope for code running in a module
  * ->Function scope - scope created by function
  * ->Block scope - scope created witha pair of currly braces(block).This only scopes LET and CONST declarations.Variables are contained in the block.
  * -> Due to function scope, a variable declared inside a function cannot be accessed from outside the function or with other functions. 
  */


  function fn(){
    const name= "Joe"; //Blocks coped
    console.log(name); 
  }
  console.log(name); //ERROR name is not defined
  
  //correct scope
  const name= "Joe"; //Global
  fn()              //Joe
  function fn(){
  console.log(name);
  }

 //let is for block scoping
  let name = "One"
 if (true){
   let name = "Joe"
 }
 console.log(name);//OUTPUT : One


 if(true){
	let name = "Jane"
}
console.log(name) //ERROR because let is contained in a block
/* ->let can be declared & initialized on different lines.Eg
    let name;    -->declared 
    name = 'Joe'; -->initialized
 * 
 */


//  //CONST//
//  const ages = [26, 25, 24];
 
//  console.log(ages)
//  ages.push(22);
//  console.log(ages) 
/**
 * -> All const declarations must be initialized on same line.Eg const name = 'Joe';
 */


// //HOISTING// 
// //we are using var keyword for learning purposes only

 var age;
age = 26;
console.log(age); 
 
 function doIt(){
  age = 26;
}
let age;
doIt()
console.log(age) 

// //ARROW FUNCTION//
function fn (){
  console.log("Hi Ben");
} 

// /*syntax let fn = () => {} 
// **/

// let fn = () => console.log("Hi Ben");
// fn() 

// const button = document.getElementById('btn');
// let button = document.querySelector('button');
// // regular function
fun = function (){
     document.getElementById('demo').innerHTML = this;
   //[object HTMLButtonElement]
}

// // // arrow function
 fun2 = () => {
    document.getElementById('demo').innerHTML = this; 
    //[object Window]
 };

 button.addEventListener('click', fun )

// /**
// 	this refers to what called the function
//   with fat functions this does not keep context whereas with a regular function, this keyword keeps its context. This is handled differently when used in arrow functions and oldschool regular function
  
  
//  Wth arrow functions there are no binding of this.
// In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.
// With arrow functions the this keyword always represents the object that defined the arrow function.
// */

// //DEFAULT PARAMETERS//
 function isEqualTo(num, compared = 2){
    return num == compared;
 }
 console.log(isEqualTo(2 ));

// //OR
 function isEqualTo(num = 2, compared = 2){
     return num == compared;
 }
 console.log(isEqualTo( ));

// //OR
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
// //cont from Obj Lit

//OBJECT LITERAL
let name = 'Ben';
let age = 25;

let obj = {
  name,
  age
}
console.log(obj); //OUTPUT {name:'Ben' age:25}
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

    
    //  const name = "NAMEVALUE";
    //  const  age = "AGEVALUE";
    //  const user = { 
    //    [name] : "Ben",
    //    [age] : 25
    //  };
    //  console.log(user) //OUTPUT: {NAME:25 AGE:"Ben" }
    //  //to access individual properties
    //  console.log(user["NAMEVALUE"]) //OUTPUT: 25
    //  console.log(user["AGEVALUE"]) //OUTPUT: Ben
    //  console.log(user[age]) //OUTPUT: 25 this is the proerty that holds the value's name.

     //REST OPERATOR
     //Eg:
    // let numberArr = [2,4,6,8];

     //function to sum numbers
    //  function sumNum(par){
    //   let result = 0;
    //   for(let i = 0; i < par.length; i ++){
    //     result += par[i];
    //   }
    //   return result;
    //  }
    //  console.log(sumNum(numberArr))
    
     /**
      * REST parameter covered by 3 dots ... allows a function to receive indefinite arguments(Could be strings, numbers) and converts them to an array.
      */
      // function sumNum(...par){
      //   console.log(par) // to show that args are converted to array OUTPUT:[5,10,15]
      //   let result = 0;
      //   for(let i = 0; i < par.length; i ++){
      //     result += par[i];
      //   }
      //   return result;
      //  }
      // console.log(sumNum(5,10,15)); //OUTPUT: 30

      //SPREAD OPERATOR
      // let arrNum = [1,2,3,4,5];
      // console.log(Math.max(arrNum));//OUTPUT IS NaN coz the Math function expects a list of numbers and not an array.that is where the spread operator comes in.
      // console.log(...arrNum);//OUTPUT: 12345 - arrNum is spread.
      // console.log(Math.max(...arrNum)) //OUTPUT: 5
      /**
       * it takes an array and spits it up into individual values.Its the oposite of rest operator. Rest is used in args within your function while spread is used to split values in an array.
       */

      //FOR-OF-LOOP
      /**
       * is a short-hand syntax for looping through arrays.It grabs individual elements of an array & can do whatever you want with the grabbed data in the block of the for loop.
       */
      // let testResults = [1.1,2.0,3.5];
      // for(testResult of testResults){
      //   console.log(testResult);    //  OUTPUT: 1.1 2.0 3.5 
      // }

      //TEMPLATE LITERALS - Strings with extra features
      /**
       * They are denoted by backticks (``) & allow us to write multilines of strings. You can also insert a variable in the string without using '+' & spaced quotes. insead use dollar sign and curly braces ${variable name} - value in curly braces chould return a string
       Is very powerful coz it allows you to insert values to html code when doing DOM manipulation*/

      // let firstName = 'Luke';
      // let laststName = 'Skywalker';
      // let fullName = `${firstName} ${laststName}`;
      // let introduction = `hello im ${fullName} & im a jedi `
      // //console.log(fullName) //OUTPUT: Luke Skywalker
      // console.log(introduction); //OUTPUT:HELLO IM LUKE SKYWALKER & IM A JEDI

      // //Can also add string characters to the variable in template string.
      // let description =  `my name is ${fullName + '!!!!'}`
      // console.log(description); //OUTPUT: my name is luke skywalker!!!
      // //To escape template literals, use a back slash \
      // let description2 =  `my name is \${fullName + '!!!!'}`
      // console.log(description2);//OUTPUT: my name is \${fullName + '!!!'}

      //DESTRUCTURING ARRAYS - break down complex objects or arrays into simple form
      //let arrNum = [1,2,3,4,5];
      // let [a,b] = arrNum;
      // console.log(a); // OUTPUT 1
      // console.log(b); // OUTPUT 2
      /**
       * its used to extract values from an array.The original array is not destroyed or changed it persists coz destructuring gets copies of values.If you destructure an index value not present in an array, you get undefined
       */
      //let [a,b,c,d,e,f] = arrNum
      //console.log(f) //OUTPUT: undefined
      //can also use the rest parameter in destructuring to retrieve part of an array
      // let [a, ...b] = arrNum;
      // console.log(b); //OUTPUT:[2,3,4,5] 

      //you can have default values in destructuring.When the value is already defined, eg a & 1, then the default value is ignored. But if the value is not defined, eg d, then the default value is used.
      // let arrNum = [1,2,3];
      // let [a = 'Default', b,c,d = 'Default']  = arrNum;
      // console.log(d); //OUTPUT: Default
      // console.log(a); //OUTPUT: 1


      /**
       * Destructuring can be used to swap values
       * 
       
      let a = 2;
      let b = 4;

      [b, a] = [a, b];
      console.log(b); OUTPUT: 2
      console.log(a); OUTPUT: 4
      */

      /**Destructuring can also be used to ignore values
       * 
       
      let num = [1,2,3]
      let [a, ,c] = num;
      console.log(a,c) //OUTPUT:1 3
      */
      /**OR */
      let [a,b] = [1,2,3]
      console.log(a,b) //OUTPUT: 1,2

      //Destructuring Objects 
      let obj = {
        name:'Jon',
        age:25,
        greet:function(){
          console.log("Hello there")
        }
      }

      // let {name,age,greet} = obj;
      // console.log(name) //OUTPUT: Jon
      // console.log(age) //OUTPUT: 25
      // greet(); //Hello there
      /**
       * we use curly braces unlike array destructuring.
       * Also we cant just skip certain value like in arrays, because we are using value names.
       the names must match for obj destructuring to work*/
       //let {name, ,greet} = obj; //this wont work because we are referencing properties by name & not position like in array destructuring

       //can also use aliases   
       let {name,greet:hello} = obj;
       hello(); //OUTPUT: hello there
       /** if we use greet() it wont work coz the alias is there as hello
        * 
        */
/**
   *            ###MODULES###
   * ->Large Javascript code bases can be split into small packages (modules) that can be imported when needed.
   * -> To get access to modules first you have to export them using the EXPORT statement.
   * ->The easiest way is to place the export keyword infront of any item you want to export out of the model.
   * -> You can export functions, variables var, let, const, & classes.But you cant use export inside a function.
   * 
   * EXPORT FEATURES
   * -> To export all items you need in a single EXPORT statement is to use export at the end of the module file followed by a comma separated list of features you want to export wrapped in curly braces.  
   * Eg 
   */
  //export a single item
  export const name = "Joe";
  export const age = 25;

  export function getVolume (length, width, height){
    return lenght * width * height;
  }

  //export multiple items
  export {name, getVolume, age};

  /**
   * IMPORT FEATURES
   * ->tO USE FEATURES FROM another file you first have to export those features inorder to import them.
   * ->To import, use comma separated list of features you want to import wrapped in curly braces followed by keyword from, followed by the file path to the module(similar to how we link files using paths to html files.) Eg
   *  
   */
  import {name, getVolume, age} from './calculate.js';

  //APPLY A MODULE TO HTML
  /**->Is similar to how we apply regular scripts to a page, but with included type = "module" in the script element 
   * ->You can also embed the module's script directly into HTML by placing the JS code within the body of the script.
   */
  //Applying module to html
   <script type = "module" src = "main.js">./path</script>

   //Embedding JS code
  <script type = "module" src = "main.js">
    //MODULE CODE
  </script>

  //-> Import & Export are used on modules only and not on regular scripts 