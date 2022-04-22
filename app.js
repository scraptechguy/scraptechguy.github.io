function getTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if (hh == 0) {
        hh = 12;
    }

    if (hh > 12) {
        hh = hh - 12;
        session = "PM";
    }
  
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
      
    let currentTime = hh + ":" + mm + ":" + ss + " " + session;
    document.getElementById("time").innerText = currentTime; 
}

function getDate() {
    let date = new Date(); 
    let yy = date.getFullYear();
    let mm = date.getMonth();
    let dd = date.getDate();

    let currentDate = dd + "/" + (mm + 1) + "/" + yy;
    document.getElementById("date").innerHTML = currentDate;
}

function getUNIXtime() {
    let date = new Date(); 

    var timestamp = Math.round(date.getTime() / 1000)
    document.getElementById("UNIXtime").innerHTML = timestamp;
}

function main() {
    getTime();
    getDate();
    getUNIXtime();

    let t = setTimeout(function(){ main() }, 1000);
}

main();