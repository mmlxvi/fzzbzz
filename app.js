$(document).ready(function() {

var counter=1;
var limit;
	
$('#button').click(function() {

		$('#listonumbers').empty();

	   //if(e.keyCode == 13) {
		
    	limit = document.getElementById("numberInput").value;
    	$('#numberInput').val('');

    	if (limit < 1 || limit > 100) {
    		alert("Please enter a number between 1 and 100.");
    	}
    	
    	else if (isNaN(limit)) {
    		alert("\"" + limit + "\"" + " is not a number. Please enter a number between 1 and 100.");
    	}

    	else {

			for (counter = 1; counter <= limit; counter++) {
    		if ((counter % 3 === 0) && (counter % 5 === 0)) {
        	//console.log("fizzbuzz");
        	$("#listonumbers").append('<div id="fizzbuzz">' + "fizzbuzz" + '</div>');
    		}
    
    		else if (counter % 3 === 0) {
        	//console.log("fizz");
        	$("#listonumbers").append('<div id="fizz">' + "fizz" + '</div>');
    		}
    
    		else if (counter % 5 === 0) {
        	//console.log("buzz");
        	$("#listonumbers").append('<div id="buzz">' + "buzz" + '</div>');
   			}
    		else {
        	//console.log(counter);
        	$("#listonumbers").append('<div id="square">' + counter + '</div>');
    		}
    	}
}
	
})




/* this works below... now connect it with form input and change
   console.logs to html adds*/

/*var counter;
var limit=15;


for (counter = 1; counter < limit; counter++) {
    if ((counter % 3 === 0) && (counter % 5 === 0)) {
        console.log("fizzbuzz");
    }
    
    else if (counter % 3 === 0) {
        console.log("fizz");
    }
    
    else if (counter % 5 === 0) {
        console.log("buzz");
    }
    else {
        console.log(counter);
    }
*/

})