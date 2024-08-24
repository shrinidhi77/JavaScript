// Function to fetch and display doctor details
function doctorDetailsFromJSON() {
  var XHR;
  if (window.ActiveXObject) {
    // For older versions of Internet Explorer
    XHR = new ActiveXObject("Microsoft.XMLHTTP");
  } else if (window.XMLHttpRequest) {
    // For modern browsers
    XHR = new XMLHttpRequest();
  }

  // Initialize the GET request for the JSON file
  XHR.open("GET", "./doctorData.json", true);

  // Set the function to execute when the state changes
  XHR.onreadystatechange = function () {
    displayDoctorDetails(XHR);
  };

  // Send the request
  XHR.send();
}

// Function to handle the response and display data
function displayDoctorDetails(XHR) {
  // Check if the request is complete and was successful
  if (XHR.readyState == 4 && XHR.status == 200) {
    // Parse the JSON response
    var doctors = JSON.parse(XHR.responseText);

    // Loop through the doctor data and log details to console
    for (var i = 0; i < doctors.length; i++) {
      console.log(doctors[i].doctorName + " " + doctors[i].hospitalLocation);
    }
  } else if (XHR.readyState == 4) {
    // Log error message if the data cannot be retrieved
    console.log("Unable to retrieve Doctors data");
  }
}

// Call the function to fetch and display doctor details
doctorDetailsFromJSON();
