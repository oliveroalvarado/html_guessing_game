
// let whiskey = getElementById('whiskey')
//     console.log("HELLO WHISKEY PLATOON!")

CorrectNum = () => {
    let random = Math.floor(Math.random() * 10) + 1
    console.log(random)
    let user = document.getElementById('user').value
    console.log(user)
    if (user === random) {
        document.getElementById('results').innerHTML = 'Correct'
    } else {
        document.getElementById('results').innerHTML = 'Try again'
    }
}