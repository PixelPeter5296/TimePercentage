let interval

window.onkeydown = (event) => {
    if (event.key == "Enter") {
        var match = document.getElementById("startinput").value.match(/^(\d)+:(\d)+$/g) && document.getElementById("endinput").value.match(/^(\d)+:(\d)+$/g)
        if (!match) return
        toggleView(true)
        loadTime()
    } else if (event.key == "Escape") {
        toggleView(false)
    }
}

window.onload = () => {
    document.getElementById("startinput").value = localStorage.start ? localStorage.start : ""
    document.getElementById("endinput").value = localStorage.end ? localStorage.end : ""
}

function toggleView(bool) {
    if (bool == null) {
        console.log("No.")
    }
    let start = document.getElementById("start")
    toggleVisible(start, bool)
}

function toggleVisible(element, visible) {
    if (visible == null) {
        console.log("No #2")
        let visible = (element.style.opacity == 1)
    }
    if (visible) {
        element.style.opacity = 0
        setTimeout(() => {
            element.style.display = "none"
        }, 300)
    } else {
        element.style.display = "flex"
        setTimeout(() => {
            element.style.opacity = 1
        }, 0)
    }
}

function millis(timestamp) {
    let hours = parseInt(timestamp.split(":")[0])
    let minutes = parseInt(timestamp.split(":")[1])
    return hours * 3600000 + minutes * 60000
}

function dayMillis() {
    let date = new Date()
    return date.getHours() * 3600000 + date.getMinutes() * 60000 + date.getSeconds() * 1000 + date.getMilliseconds()
}

function time() {
    let date = new Date()
    return formatInt(date.getHours()) + ":" + formatInt(date.getMinutes()) + ":" + formatInt(date.getSeconds())
}

function formatInt(int) {
    if (int.toString().length == 1) {
        return "0" + int
    }
    return int
}

function html(id, content) {
    document.getElementById(id).innerHTML = content
}
function loadTime() {
    let start = document.getElementById("startinput").value
    let end = document.getElementById("endinput").value
    localStorage.start = start
    localStorage.end = end

    html("schoolstart", start)
    html("schoolend", end)

    clearInterval(interval)
    interval = setInterval(() => {
        let percentage = ((dayMillis() - millis(start)) / (millis(end) - millis(start)) * 100).toFixed(3)
        html("percentage", percentage + "%")
        html("time", time())
    }, 100)
}