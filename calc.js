
    document.getElementById("calcBtn").onclick = function() {Calculate()}; 

    function Calculate() {
    	//var getcostPrice = document.getElementById('CostPrice').value;
    	var getCostPrice = 10;

    	//var getSellingPrice = document.getElementById('Price').value;
    	var getSellingPrice = 20.00;
        var discount = 1.19; 

        //add logic for sport discount
        var sportDiscount;
        //need to add marketplace and liquor conditional statements

        sellingPrice = getSellingPrice.toFixed(2);
        costPrice = getCostPrice.toFixed(2);

        staffPrice = (getCostPrice * discount).toFixed(2);
        savings = (getSellingPrice - staffPrice).toFixed(2);
       // staffPriceSport = getcostPrice * sportDiscount;


        document.getElementById("staffdiv").innerHTML = "  Staff Price : R " + staffPrice; 
        document.getElementById("sellingdiv").innerHTML = "Original Price : R " + sellingPrice; 
        document.getElementById("costdiv").innerHTML = "   Cost Price : R " + costPrice;
        document.getElementById("savediv").innerHTML = "   YOU SAVE : R " + savings;


    }