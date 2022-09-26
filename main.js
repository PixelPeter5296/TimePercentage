function main() {
    setInterval(() => { document.body.innerHTML = "<h1 style='font-family:Helvetica'>" + parseFloat(
         	(new Date().getHours() * 60 * 60 * 1000 + new Date().getMinutes() * 60 * 1000 + new Date().getSeconds() * 1000 + new Date().getMilliseconds() - (8*60*60*1000)) / (270*60*1000) * 100
        ).toFixed(4) + "%</h1><p style='font-family:Helvetica'>vom Tag fertig.</p>"
    }, 1)
}
