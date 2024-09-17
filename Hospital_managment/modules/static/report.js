// to count number of attempts.
var attempt = 3;
reportFlag = false;
function report() {
  var inputEmail = document.getElementById("email").value;
  var inputPatientId = document.getElementById("patientId").value;
  var emailSaved = localStorage.getItem("Email");
  console.log("Email saved",emailSaved);
  if (inputEmail.length == 0 || inputPatientId.length == 0) {
    attempt--; // Decrementing by one.
    alert(
      "Please enter user name and password! You have left " +
        attempt +
        " attempt;"
    );
    //Disabling fields after 3 attempts.
    if (attempt == 0) {
      document.getElementById("email").disabled = true;
      document.getElementById("patientId").disabled = true;
      document.getElementById("submit").disabled = true;
    }
  } else {
    if (
      inputPatientId ==
        (1001 || 1002 || 1003 || 1004 || 1005 || 1006 || 1007) &&
      inputEmail == emailSaved
    ) {
      reportFlag = true;
      document.getElementById("message").innerHTML =
        "Lab report has been sent to your registered email ID!";
    } else {
      alert("Oops! Wrong credentials! Please try again");
    }
  }
}
