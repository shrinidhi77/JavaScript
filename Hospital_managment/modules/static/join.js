joinFlag = false;
function join() {
  var inputName = document.getElementById("name").value;
  var inputEmail = document.getElementById("email").value;
  var inputMobNumber = document.getElementById("mobile").value;
  if (
    inputEmail.length == 0 ||
    inputMobNumber.length == 0 ||
    inputName.length == 0
  ) {
    alert("Please enter the details");
  } else {
    joinFlag = true;
    document.getElementById("message").innerHTML =
      "We will get back to you shortly. Thank you.";
  }
}

//Email validation
function validateEmail() {
  var emailPattern = new RegExp("(?=.*@)(?=.+.com)");
  if (!emailPattern.test(document.getElementById("email").value)) {
    document.getElementById("emailMessage").innerHTML =
      "Email id should contain @ and .com in it!!";
  } else {
    emailFlag = true;
    document.getElementById("emailMessage").innerHTML = "";
  }
}

//Mobile validation
function validateMobile() {
  var phonePattern = new RegExp("(?=[0-9]{10})");
  if (!phonePattern.test(document.getElementById("mobile").value)) {
    document.getElementById("mobileMessage").innerHTML =
      "Mobile number should be exactly ten digits!!";
  } else {
    mobileFlag = true;
    document.getElementById("mobileMessage").innerHTML = "";
  }
}
