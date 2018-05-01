var rect = require('./clback');
function solveRect(l, b) {
   // console.log("Values" + l + " and " + b);
   rect(l,b,(err,clback)=>{
      if(err)
      {
          console.log("ERROR:",err.message);
      } 
      else
      {
          console.log("Area of"+l+"And"+b+" is:"+clback.area());
              console.log("parameter of" + l + "And" + b + " is:" + clback.parameter());
      
   }});
    console.log("After call to rect");
solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 4);
solveRect(-3, 5);
