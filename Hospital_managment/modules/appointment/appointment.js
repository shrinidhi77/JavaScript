//method to populate registered Email id onto console: retriveData()
function retriveData() {
    if (typeof(Storage) !== "undefined") {
        console.log("Registered Email id is:" + localStorage.getItem("Email"));
    } else {
        alert("local storage is not working");
    }
}
// method validate mobile pattern: validateMobile()
function validateMobile() {
    var phonePattern = new RegExp("(?=[0-9]{10})");
    if (!(phonePattern.test(document.getElementById("mobile").value))) {
        document.getElementById('mobileMessage').innerHTML = 'Mobile number should be exactly ten digits!!';
    } else {
        mobileFlag = true;
        document.getElementById('mobileMessage').innerHTML = '';
    }
}
// method to add consultation fee details and invoke IIFE logic: Closure
function checkDetails() {
    document.getElementById("content").innerHTML = "Consultation fee to be paid at counter: ?" +
        consult();
}
//IIFE function : consult()
var consult = (function() {
    var fee = 0;
    return function() {
        if (document.forms[0].elements[4].checked) {
            var inputEmail = document.getElementById("email").value;
            var userName = document.getElementById("name").value;
            var emailSaved = localStorage.getItem('Email');
            if (inputEmail == emailSaved) {
                alert("Hi " + userName + ", Please carry your previous health records!");
                return fee = 170;
            } else {
                alert("Please enter registered EmailId for fee concession, else default fee will be charged");
                return fee = 280;
            }
        } else {
            return fee = 280;
        }
    }
})();
//method to generate alert dialog box based on patient type value
function confirmDetails() {
    var userName = document.getElementById("name").value;
    if (document.forms[0].elements[4].checked) {
        alert("Hi " + userName + ", Please carry your previous health records!");
    } else {
        alert("Hi " + userName + ", Patient ID has been sent to your registered phone number!");
    }
}

