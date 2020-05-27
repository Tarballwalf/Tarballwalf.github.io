setInterval(() => {
    document.getElementById('time').innerHTML = moment.tz('Europe/Bucharest').format('dddd, MMMM Do   HH:mm (hh:mm A) z')
}, 300)