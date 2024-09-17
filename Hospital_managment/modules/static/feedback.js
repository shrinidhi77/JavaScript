// method to check form submission value .
feedbackFlag = false;
function feedback() {
  var inputName = document.getElementById("name").value;
  var inputEmail = document.getElementById("email").value;
  var inputMobile = document.getElementById("mobile").value;
  var inputFeedback = document.getElementById("feedbackMessage").value;
  if (
    inputEmail.length == 0 ||
    inputMobile.length == 0 ||
    inputName.length == 0 ||
    inputFeedback.length == 0
  ) {
    alert("Please enter the details");
  } else {
    feedbackFlag = true;
    document.getElementById("message").innerHTML = "Thanks for your feedback.";
  }
}
// Name validation
function validateName() {
  var length = document.getElementById("name").value.length;
  if (length < 5 || length > 10) {
    document.getElementById("nameMessage").innerHTML =
      "Name should have minimum 5 characters";
  } else {
    firstNameFlag = true;
    document.getElementById("nameMessage").innerHTML = "";
  }
}
//Email validation
function validateEmail() {
  var emailPattern = new RegExp("(?=.*@)(?=.+.com)");
  if (!emailPattern.test(document.getElementById("email").value)) {
    document.getElementById("emailMessage").innerHTML =
      "Email id should contain @ and .com in it";
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
      "Mobile number should be exactly ten digits";
  } else {
    mobileFlag = true;
    document.getElementById("mobileMessage").innerHTML = "";
  }
}
