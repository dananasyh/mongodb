var rect=require('./rectangle');
function solveRect(l,b){
    console.log("Values" +l+ " and " +b);
	if(l<=0||b<=0)
	{
	  console.log("rectangle dimentions are negative");
	}
	else
	{
	console.log("area:"+rect.area(l,b));
	console.log("per:"+rect.perimeter(l,b));
	}
}
solveRect(2,4);
solveRect(5,4);
solveRect(6,4);
solveRect(-3,4);