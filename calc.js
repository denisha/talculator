
    document.getElementById("calc").onclick = function() {Calculate()}; 

    function Calculate() {
    	var getcostPrice = document.getElementById('CostPrice').value;;
    	//var getcostPrice = 10;

    	var getSellingPrice = document.getElementById('Price').value;
    	//var getSellingPrice = 20.00;
        var discount = 1.19; 

        //add logic for sport discount
        var sportDiscount;
        //need to add marketplace and liquor conditional statements

        staffPrice = (getcostPrice * discount).toFixed(2);
       // staffPriceSport = getcostPrice * sportDiscount;

        document.write ("Staff Discount Price = " + staffPrice);

        document.write ("Original Selling Price = " + getSellingPrice.toFixed(2));


    }