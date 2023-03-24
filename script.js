function ValidateForm(){
	var email = document.forms.SurveyForm.email.value;
	var phone_number = document.forms.SurveyForm.number.value;


	var regeXEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; //Javascript reGex for Email Validation.
	var regeXPhone=/^\d{10}$/;									 // Javascript reGex for Phone Number validation. // Javascript reGex for Name validation

	
	if (email == "" || !regeXEmail.test(email)) {
		window.alert("Please enter a valid e-mail address!!!!");
		email.focus();
		return false;
	}
	

	if (phone_number == "" || !regeXPhone.test(phone_number)) {
		alert("Please enter valid phone number.");
		phone_number.focus();
		return false;
	}

	function isTrue(){
		var container = document.getElementsByClassName('.container')
		container.innerHTML = 'Your value has been submitted'
	}

	return istrue();

} 

