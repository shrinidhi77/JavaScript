function doctorDetails() {
    var promise = new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        var url = "../../data/doctorData.json";
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(xhr.responseText);
                } else
                    reject(xhr.statusText);
            }
        }
        xhr.open("GET", url);
        xhr.send(null);
    });
    promise.then(function(response) {
        var d = JSON.parse(response);
        console.log(d);
        for (i = 0; i < d.length; i++) {
            document.getElementById("data" + i).innerHTML =
                "<td><br/><img src='" + d[i].image + "'/><br/><br/>" +
                "<b>" + "Name: " + "</b>" + d[i].Name + "<br/>" + 
                "<b>" +"Consultant: " + "</b>" + d[i].Title + "<br/>" +
                "<b>" + "Expertise: " + "</b>" + d[i].spc + " </td>";
        }
    }, function(error) {
        alert(error);
    });
}
doctorDetails();