function loadShipInfo() {

    
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
            
            var address1 = document.getElementById("address1");
            var address2 = document.getElementById("address2");
            var city = document.getElementById("city");
            var state = document.getElementById("stateList");
            var zip = document.getElementById("zip");
           
            
            address1.value = obj[0].address1;
            address2.value = obj[0].address2;
            city.value = obj[0].city;
            state.value = obj[0].state;
            zip.value = obj[0].zip;
            
        }
    };
    xmlhttp.open("GET","../php/loadShippingInfo.php",true);
    xmlhttp.send();

}
<<<<<<< HEAD
function previousPage(){
    window.location.href = "../html/shoppingCart.html";
}
=======
>>>>>>> 2e2d8b91ed82376f6af28c57af69f000bd4e1300
