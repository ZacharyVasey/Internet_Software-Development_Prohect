
function userInfoValidation(){
	//check phone number
	if(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(document.userInformationForm.phoneNumberTxt.value) == false){
		alert("Invalid Phone Number\nPlease Enter Your Phone Number In The Correct Format(111-222-3333)");
		document.userInformationForm.phoneNumberTxt.focus();
		return false;
	}
	//email expiration fomat check
	if(/^\w+@\w+\.\w+$/.test(document.userInformationForm.emailTxt.value) == false){
		alert("Invalid Email\nPlease Enter Your Email In The Correct Format(abcd@email.net)");
		document.userInformationForm.emailTxt.focus();
		return false;
	}
	return(true);

}
