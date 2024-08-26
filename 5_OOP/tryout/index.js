window.onload = function () {
  // Object literal implementation
  const courseScheduled = {
    day1: ["01-03-2021", "Javascript"],
    day2: ["02-03-2021", "HTML5"],
    day3: ["03-03-2021", "CSS"],
    day4: ["04-03-2021", "Bootstrap"],
    day5: ["05-03-2021", "Angular JS"],
    day6: ["08-03-2021", "Angular JS"],
    day7: ["09-03-2021", "Angular JS"],
    day7: ["09-03-2021", "Angular JS"],
  };

  // Get the tbody element
  const tbody = document.querySelector("tbody");

  // Clear existing rows (if any)
  tbody.innerHTML = `
        <tr>
            <th>Date</th>
            <th>Course</th>
        </tr>
    `;

  // Iterate over the courseScheduled object
  Object.values(courseScheduled).forEach((day, index) => {
    // Create a new row
    const row = document.createElement("tr");

    // Create cells for date and course
    const dateCell = document.createElement("td");
    const courseCell = document.createElement("td");

    // Populate the cells with data
    dateCell.textContent = day[0];
    courseCell.textContent = day[1];

    // Append cells to the row
    row.appendChild(dateCell);
    row.appendChild(courseCell);

    // Append the row to the tbody
    tbody.appendChild(row);
  });

  //constructor pattern implementation
  function Address(
    roomNo,
    floor,
    doorNo,
    buildingName,
    street,
    area,
    city,
    pin,
    state
  ) {
    this.roomNo = roomNo;
    this.floor = floor;
    this.doorNo = doorNo;
    this.buildingName = buildingName;
    this.street = street;
    this.area = area;
    this.city = city;
    this.pin = pin;
    this.state = state;
  }

  var address = new Address(
    "GCR04",
    "1st Floor, A-wing, Library Block",
    "TP 1/1",
    "Techno Park SEZ",
    "Central Avenue, Mahindra World City, Natham Sub Post",
    "Chengalpattu",
    "chennai",
    603002,
    "Tamil Nadu"
  );

  document.getElementById("address").textContent =
    "Room number" +
    address.roomNo +
    " " +
    address.floor +
    " " +
    address.doorNo +
    " " +
    address.buildingName +
    " " +
    address.street +
    " " +
    address.area +
    " " +
    address.city +
    " " +
    address.pin +
    " " +
    address.state;
};

document.getElementById("registrationForm").onsubmit = function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Retrieve the Employee ID
  const employeeId = document.getElementById("employeeId").value;

  // Display the success message
  const successMessageDiv = document.getElementById("successMessage");
  successMessageDiv.textContent = `Employee ID ${employeeId} has been successfully registered.`;
  successMessageDiv.style.display = "block";
};
