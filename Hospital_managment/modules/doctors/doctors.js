// Method to make asynchronous call and invoke doctorData.json file and call displayDoctorDetails(XHR) method
function doctorDetails() {
  console.log("hi doctorDetails");
  var XHR;
  if (window.ActiveXObject) {
    //For Microsoft Browsers
    XHR = new ActiveXObject("Microsoft.XMLHTTP");
  } else if (window.XMLHttpRequest) {
    //For Mozilla and Non Microsoft Browsers
    XHR = new XMLHttpRequest();
  }
  XHR.open("GET", "../../data/doctorData.json", true);
  XHR.onreadystatechange = function () {
    displayDoctorDetails(XHR);
  };
  XHR.send();
}
// displayDoctorDetails(XHR) method
function displayDoctorDetails(XHR) {
  console.log("hi displayDoctorDetails");
  document.getElementById("tableMain").style.display = "table";
  if (XHR.readyState == 4) {
    if (XHR.status == 200) {
      var d = JSON.parse(XHR.responseText);
      for (let i = 0; i < 4; i++) {
        // Iterate over 4 items, update this as needed
        document.getElementById("data" + i).innerHTML =
          "<td>" +
          '<img src="' +
          d[i].image +
          '" class="img-fluid rounded mx-auto d-block" alt="Doctor Image" /><br/>' +
          "<strong>Name:</strong> " +
          d[i].Name +
          "<br/>" +
          "<strong>Consultant:</strong> " +
          d[i].Title +
          "<br/>" +
          "<strong>Expertise:</strong> " +
          d[i].spc +
          "</td>";
      }
    } else {
      console.log("Unable to retrieve doctors data");
    }
  }
}
doctorDetails();
