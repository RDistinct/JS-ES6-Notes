 /**
  *                     ###CONCEPTS###
  *   -->SCOPE
  *   -->HOISTING
  *   -->ARROW FUNCTION
  *   -->DEFAULT PARAMETERS
  *   -->OBJECT LITERALS & OBJECT FIELDS
  *   -->MODULES
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
   console.log(name); //OUTPUT : One
  
  
   if(true){
    let name = "Jane"
  }
  console.log(name) //ERROR because let is contained in a block
  
  
  /* ->let can be declared & initialized on different lines.Eg
      let name;    -->declared 
      name = 'Joe'; -->initialized
   * 
   */
  
   //CONST//
   /**
    * ->const stands for Constant
    * ->const is block-scoped like let keyword
    */
    const ages = [26, 25, 24];
   
     console.log(ages)
     ages.push(22);
     console.log(ages) 
  /**
   * -> All const declarations must be initialized on same line.Eg const name = 'Joe';
   * -> Javascript initializes a variable's value according to inner scope.The inner scope is concidered first before looking at outer scope of the variable.If the variable is not found inside the scope, then JS looks for it on the outer hierarchy. This concept works even in scopes within a scope.
   */
  
  /* Shift + Alt + A -> block comment */ 
  // Ctrl + / -> one line comment
  
  //Demo to display scope of variables:
  function displayName(){
    let name = "Joe";
    return name;
  }
  displayName(); //Joe
  
  let name = 'Jane';
  function displayName2(){
    return name;          
  }
  displayName2()//Jane bcoz of the outer hierarchy.
  
  let name = "Jessy"
  function displayName3(){
    let name = "Joan";
    return name;
  }
  displayName3()//Joan
  
  function displayName4(){
    let name = "John"
  }
  console.log(name); /* error coz console cant access name variable since its blocked scoped.Name is only declared and accessible inside the displayName4 function */
  
  
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
  
  // let fn = () => console.log("Hi Ben");
  // fn() 
  
  // const button = document.getElementById('btn');
   let button = document.querySelector('button');
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
  
  /*** JS will not pick the values which dont have a default value or the arguments which dont have a default value to assign the values you are passing. It still keeps the ordering. Its the FIRST argument that gets set, that is why the value of num is the arg 3 and not param 2.But it works the other way around if its the 2nd param that is defined while the 1st is not.
   * We can also do some calculations on the parameters   function isEqualTo(num = 2, compared = num / 2) OR as the first param  function isEqualTo(num = 2, compared = num) , we may use the variables defined outside the function
   *   
   */
  
  // let val = 10
   function isEqualTo(num = 2, compared = val ){
      console.log(num) //2
      console.log(compared) //10 
      return num == compared; //false
  }
  console.log(isEqualTo( ));
  
  
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
    let name = 'Ben';
    let age = 25;
   
   let obj = {
     name:'Max',
     age
   }
   console.log(obj);
   /**
    * however you can overwrite the outside values when you declare them inside the object
    */
    let obj2 = {
      'name':'Max',
      age,
      'greet'(){
        console.log(this.name + ' ' + this.age);
      }
    }
    // console.log(obj2.greet());
    obj2["greet"]()
    /**
     * you can also create property strings(property key wrapped in quotation marks) in the object eg property name as a string.Even methods can be declared/called with quotation marks.Advantage of quotation marks is that you are allowed to use words with a gap eg "greet me"
     */
     let obj2 = {
      'name':'Max',
      age,
      'greet me'(){
        console.log(this.name + ' ' + this.age);
      }
    }
    // console.log(obj2.greet());
    obj2["greet me"]()
  
    //OBJECT FIELDS//
  
  
  
  
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
    //  <script type = "module" src = "main.js">./path</script>
  
    //  //Embedding JS code
    // <script type = "module" src = "main.js">
    //   //MODULE CODE
    // </script>
  
    //-> Import & Export are used on modules only and not on regular scripts 