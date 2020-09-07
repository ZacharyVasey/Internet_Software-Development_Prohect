 function loadStates() {
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
            	var x = document.getElementById("stateList");
            	
                for (i = 0; i < obj.length; i++) {
                	  var option = document.createElement("option");
                	  option.value = obj[i].stateCode;
                	  option.text = obj[i].stateName;
                	  x.append(option);
                    }
                    loadUserInfo();

            }
        };
        xmlhttp.open("GET","../php/loadStates.php",true);
        xmlhttp.send();
}

function loadUserInfo() {
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
            var fullname = document.getElementById("fullname");
            var address1 = document.getElementById("address1");
            var address2 = document.getElementById("address2");
            var city = document.getElementById("city");
            var state = document.getElementById("stateList");
            var zip = document.getElementById("zip");
            var phone = document.getElementById("phoneNumberTxt");
            var email = document.getElementById("emailTxt");

            fullname.value = obj[0].fullname;
            address1.value = obj[0].address1;
            address2.value = obj[0].address2;
            city.value = obj[0].city;
            state.value = obj[0].state;
            zip.value = obj[0].zip;
            phone.value = obj[0].phone;
            email.value = obj[0].email;
        }

    };
    xmlhttp.open("GET","../php/loadUserInfo.php",true);
    xmlhttp.send();
}






