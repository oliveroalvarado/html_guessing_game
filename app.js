
// let whiskey = getElementById('whiskey')
//     console.log("HELLO WHISKEY PLATOON!")

CorrectNum = () => {
    getRandom = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let random = getRandom(1, 4)
    console.log(random)
    
    let user = document.getElementById('user').value
    console.log(user)
    if (parseInt(user) === random) {
        document.getElementById('results').innerHTML = 'Correct'
        document.getElementById('wrong').innerHTML = ''
    } else {
        document.getElementById('results').innerHTML = ''
        document.getElementById('wrong').innerHTML = 'Try again'
    }
}