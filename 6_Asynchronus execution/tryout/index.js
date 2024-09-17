// Method to make asynchronous call and invoke winners.json file and call displayWinnersDetails(XHR) method
function loadWinners() {
  var promise = new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    var url = "data/student.json";
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 400) {
          resolve(xhr.responseText);
        } else reject(xhr.statusText);
      }
    };
    xhr.open("GET", url);
    xhr.send(null);
  });

  promise
    .then(
      function (response) {
        var winners = JSON.parse(response);
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
      },
      function (error) {
        alert(error);
      }
    )
    .catch((error) => {
      console.error("Errordddddd:", error);
    });
}
