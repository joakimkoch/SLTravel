var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.resrobot.se/trip.json?key=0ed22fec-ce16-41b2-b7c7-3e831ef008bc&originId=7400001&destId=7400002", false);

console.log(xhr.statusText);