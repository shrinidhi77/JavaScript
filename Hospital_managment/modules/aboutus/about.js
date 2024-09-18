//Self-invoking function declaration
window.onload = function () {
  //Declaration of JSON Array Object
  var jsonResponse = [
    { name: "Plastic and Cosmetic Surgery", location: "Delhi" },
    { name: "Radiology Surgery", location: "Mumbai" },
    { name: "Neuro sciences", location: "Hyderabad" },
    { name: "Psychiatry", location: "Delhi" },
    { name: "Oncology", location: "West Bengal" },
    { name: "Pulmonology", location: "Karnataka" },
    { name: "Endocrinology", location: "Kerala" },
    { name: "Stress Management", location: "Chennai..." },
  ];
  // Iteration and DOM appending logic
  jsonResponse.forEach(function (element) {
    document.getElementById("here").innerHTML +=
      "<li>" + element.name + ", " + element.location + "</li>";
  });
};
