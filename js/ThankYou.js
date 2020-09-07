function printMessage(){
    var message = document.getElementById("thankyou")
    message.innerHTML = "Your order has been placed!<br>Your total amount was $" + window.sessionStorage.getItem('totalCheckout');
    window.sessionStorage.clear();
<<<<<<< HEAD
}

function resetCart(){
    window.sessionStorage.setItem('totalCart', 0);
=======
>>>>>>> 2e2d8b91ed82376f6af28c57af69f000bd4e1300
}