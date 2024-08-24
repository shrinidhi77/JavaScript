function retriveData() {
  if (typeof Storage !== "undefined") {
    console.log("Values in retriveData Function");
    console.log(localStorage.getItem("Email"));
    console.log(localStorage.getItem("Password"));
  } else {
    alert("not working");
  }
}
attempt = 4;
function login() {
  event.preventDefault();
  var email = document.getElementById("inputEmail").value;
  var password = document.getElementById("inputPassword").value;
  var emailSaved = localStorage.getItem("Email");
  var pwdSaved = localStorage.getItem("Password");
  console.log("attempt" + attempt);
  console.log("password" + password);
  console.log("email" + email);
  if (email.length == 0 || password.length == 0) {
    attempt--; // Decrementing by one.
    alert(
      "Please enter user name and password! You have left " +
        attempt +
        " attempt;"
    );
    //Disabling fields after 3 attempts.
    if (attempt == 0) {
      document.getElementById("inputEmail").disabled = true;
      document.getElementById("inputPassword").disabled = true;
      document.getElementById("submit").disabled = true;
    }
  } else {
    if (email == emailSaved && password == pwdSaved) {
      alert("Credentials validated!");
      location.assign("../home/home.html");
    } else {
      alert("Oops! Wrong credentials! Please try again");
    }
  }
}
