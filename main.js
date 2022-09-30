function main() {
    let time = prompt("Wann hast du Schluss? (hh:mm)")
    if (time.match(/^(\d){2}:(\d){2}$/) == null) return alert("Bitte gib eine richtige Zeit an.")
    let hours = parseInt(time.split(":")[0])
    let minutes = parseInt(time.split(":")[1])
    setInterval(() => { document.body.innerHTML = "<h1 style='font-family:Helvetica'>" + parseFloat(
         	(new Date().getHours() * 60 * 60 * 1000 + new Date().getMinutes() * 60 * 1000 + new Date().getSeconds() * 1000 + new Date().getMilliseconds() - (8*60*60*1000)) / ((parseInt(time.split(":")[0]) * 60 + parseInt(time.split(":")[1]))*60*1000 - 8*60*60*1000) * 100
        ).toFixed(3) + "%</h1><p style='font-family:Helvetica'>vom Tag fertig.</p>"
    }, 10)
}
