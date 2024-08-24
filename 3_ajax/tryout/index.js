// Method to make asynchronous call and invoke winners.json file and call displayWinnersDetails(XHR) method
function loadWinners() {
  var XHR = new XMLHttpRequest();
  XHR.open("GET", "data/student.json", true);
  XHR.onreadystatechange = function () {
    if (XHR.readyState === 4 && XHR.status === 200) {
      displayWinnersDetails(XHR);
    } else if (XHR.readyState === 4 && XHR.status !== 200) {
      console.error("Failed to load winners data.");
    }
  };
  XHR.send();
}

// displayWinnersDetails(XHR) method
function displayWinnersDetails(XHR) {
  var winners = JSON.parse(XHR.responseText);
  var winnersList = document.getElementById("winnersList");

  winners.forEach(function (winner) {
    var winnerCard = document.createElement("div");
    winnerCard.classList.add("col-md-4", "winner-card");

    winnerCard.innerHTML = `
      <div class="card text-center">
        <div class="card-body">
          <h3>${winner.place} Place</h3>
          <p><span>Name:</span> ${winner.name}</p>
          <p><span>Category:</span> ${winner.category}</p>
        </div>
      </div>
    `;

    winnersList.appendChild(winnerCard);
  });
}
