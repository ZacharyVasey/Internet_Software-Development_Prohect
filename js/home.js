<<<<<<< HEAD
function load(){
    window.sessionStorage.setItem('totalCart', 0);
=======
window.addEventListener('load',Loaded,false);

function Loaded(){
    if(document.getElementById("newOrderBtn"))
    {
        document.getElementById("newOrderBtn").addEventListener("click", newOrder);
    }
}

function newOrder(){
    document.getElementById('bodyFrame').src = "UserInformation.html";
    window.sessionStorage.setItem('totalCart', 0);

>>>>>>> 2e2d8b91ed82376f6af28c57af69f000bd4e1300
}