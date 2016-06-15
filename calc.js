
    document.getElementById("calcBtn").onclick = function() {Calculate()}; 

    function Calculate() {
    	//var getcostPrice = document.getElementById('CostPrice').value;;
    	var getcostPrice = 10;

    	//var getSellingPrice = document.getElementById('Price').value;
    	var getSellingPrice = 20.00;
        var discount = 1.19; 

        //add logic for sport discount
        var sportDiscount;
        //need to add marketplace and liquor conditional statements

        staffPrice = (getcostPrice * discount).toFixed(2);
       // staffPriceSport = getcostPrice * sportDiscount;


     //   document.write ("Original Selling Price = " + getSellingPrice.toFixed(2));

        //var staffdiscount = document.createElement('div');
        var staffdiscount = document.createElement("div"); 
        var staffdiscountContent = document.createTextNode("Staff Discount Price = " + staffPrice); 
        staffdiscount.appendChild(staffdiscountContent); //add the text node to the newly created div. 

        var currentDiv = document.getElementById("text1"); 
        document.body.insertBefore(staffdiscount, currentDiv); 


    }