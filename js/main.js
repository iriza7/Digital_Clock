function getElement(id) {
    return document.getElementById(id);
}

setInterval(function () {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (seconds < 10) {
        seconds = "0" + date.getSeconds();
    }
    if (minutes < 10) {
        minutes = "0" + date.getMinutes();
    }
    if (hours < 10) {
        hours = "0" + date.getHours();
    }

    getElement('clock-time').innerHTML = hours + ":" + minutes + ":" + seconds;

}, 100)
