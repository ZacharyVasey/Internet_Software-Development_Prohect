window.addEventListener('load',Loaded,false);

var cartIndex = parseInt(1, 10);
var gameTitle = "";
var gamePrice = parseInt(0, 10);
var gameUnits = parseInt(0, 10);
var totalPrice = parseInt(0, 10);


 function showProducts() {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            	var obj = eval(this.responseText);
            	var x = document.getElementById("gameValue");
            	
                for (i = 0; i < obj.length; i++) {
                	  var option = document.createElement("option");
                	  option.value = obj[i].price;
                	  option.text = obj[i].gameName;
                	  x.add(option, x[i]);
                	}
            }
        };
        xmlhttp.open("GET","../php/loadProducts.php",true);
        xmlhttp.send();
   
}

function Loaded(){
    if(document.getElementById("checkoutBtn"))
    {
        document.getElementById("checkoutBtn").disabled = true;
        document.getElementById("checkoutBtn").addEventListener("click", checkout);
    }
   
}

function selectItem(selTag){
    var gameValue = document.getElementById('gameValue');
    gamePrice = gameValue.value * 1;
    gameTitle = selTag.options[selTag.selectedIndex].text; 
    document.getElementById("unitPrice").innerHTML = "";
    document.getElementById("unitPrice").innerHTML = gamePrice; 
}
function selectUnits(units){
    gameUnits = units;
 }
<<<<<<< HEAD
=======
function addItem(){
    if(gameUnits > 0 && gameTitle != ""){
        var table = document.getElementById("cart");
        var row = table.insertRow(cartIndex);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = gameTitle;
        cell2.innerHTML = gameUnits;
        var itemPrice = (gamePrice * gameUnits).toFixed(2);
        cell3.innerHTML = "$" + itemPrice;
        totalPrice += parseFloat(itemPrice, 10);
        printTotalCart(totalPrice);
        cartIndex++;
        document.getElementById("checkoutBtn").disabled = false;
        document.getElementById("emptyCart").disabled = false;
    }
}

function printTotalCart(totalPrice){
    document.getElementById("totalCart").innerHTML = "";
    document.getElementById("totalCart").innerHTML = totalPrice;
}
>>>>>>> 2e2d8b91ed82376f6af28c57af69f000bd4e1300

function checkout(){
    location.href = "shippingInformation.html";
    window.sessionStorage.setItem('totalCart', totalPrice);
}
function checkValues(){
    if(gameUnits > 0 && gameTitle != ""){
        return true;
    }
    else{
        return false;
    }
}

function printCart(){

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var cart = eval(xmlhttp.responseText);
            
            //alert(cart);
            
            var table = document.getElementById("cart");
            for(i = 1; i < Object.keys(cart).length; i++){
                var row = table.insertRow(i);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                cell1.innerHTML = cart[i].gameName;
                cell2.innerHTML = cart[i].units;
                cell3.innerHTML = "$" + cart[i].price;
                totalPrice += cart[i].price;
            }
            document.getElementById("totalCart").innerHTML = "";
            document.getElementById("totalCart").innerHTML = totalPrice;
            document.getElementById("checkoutBtn").disabled = false;

        }
    };
    xmlhttp.open("GET","../php/loadCart.php",true);
    xmlhttp.send();
}

function previousPage(){
    window.location.href = "../html/UserInformation.html";
}