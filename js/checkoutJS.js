
var orderSubmittedPrice = 0;

function Loaded(){
    if(document.getElementById("checkoutShopAmnt"))
    {
        var totalCart = parseFloat(window.sessionStorage.getItem('totalCart'), 10);
        document.getElementById("checkoutShopAmnt").innerHTML = totalCart;
        var tax = parseFloat(totalCart * 0.08, 10).toFixed(2);
        var shipping = parseFloat(totalCart * 0.03, 10).toFixed(2);
        var totalCheckout = tax * 1.00;
        totalCheckout += shipping * 1.00;
        totalCheckout += totalCart * 1.00;
        totalCheckout = parseFloat(totalCheckout, 10).toFixed(2);
        orderSubmittedPrice = totalCheckout;
        document.getElementById("tax").innerHTML = tax;
        document.getElementById("shipping").innerHTML = shipping;
        document.getElementById("totalCheckout").innerHTML = totalCheckout;
<<<<<<< HEAD
        document.getElementById("total").value = totalCheckout;
=======
>>>>>>> 2e2d8b91ed82376f6af28c57af69f000bd4e1300
        window.sessionStorage.setItem('totalCheckout', totalCheckout);
    }
}

function checkoutValidation(){
	if(window.sessionStorage.getItem('totalCart') == 0){
        alert("There are no items in your cart. Cannot checkout.");
		return false;
    }
	//check if the credit card number is only digits
	if(/^[0-9]{16,16}$/.test(document.checkoutForm.cardNumberTxt.value) === false){
		alert("Invalid Card Number\nPlease Enter Your Card Number In The Correct Format(1111222233334444)");
		return false;
	}
	//card expiration fomat check.
	if(/^[0-9]{2,2}[/][0-9]{4,4}?$/.test(document.checkoutForm.cardExpirationTxt.value) === false){
		alert("Invalid Expiration\nPlease Enter Your Card's Expiration Date In The Correct Format(MM/YYYY)");
		return false;
    }
    
    var date = document.checkoutForm.cardExpirationTxt.value;
    var res = date.split("/");
    var month = parseInt(res[0]);
    var year = parseInt(res[1]);
    var today = new Date();

    if(today.getFullYear() > year){
        alert("Invalid Card Expiration Year\n");
        return false;
    }
    if(today.getMonth() > month && today.getFullYear() >= year){
        alert("Invalid Card Expiration Month");.0
        return false;
    }
        

	else{
		return true;
	}
}

<<<<<<< HEAD
function previousPage(){
    window.location.href = "../html/shippingInformation.html";
}
=======

>>>>>>> 2e2d8b91ed82376f6af28c57af69f000bd4e1300

