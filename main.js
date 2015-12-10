var url = "https://api.resrobot.se/trip.xml?key=0ed22fec-ce16-41b2-b7c7-3e831ef008bc&originId=7400001&destId=7400002";

var url2 = "https://api.resrobot.se/trip?originId=7400001&destId=7400003&format=json&key=0ed22fec-ce16-41b2-b7c7-3e831ef008bc"

var xmlHttp = new XMLHttpRequest();

xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        var myArr = JSON.parse(xmlHttp.responseText);
        myFunction(myArr);
    }
};

xmlHttp.open("GET", url, true);
xmlHttp.send();

console.log(xmlHttp);

