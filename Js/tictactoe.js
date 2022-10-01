let playCurrent = document.getElementById('playCurrent')
let reloadPage = document.querySelector('.reloadPage')
let player = document.getElementById('player')
let toStart = document.querySelector('.inVolk')
let toStartx = document.querySelector('.inVolk')
let toStart1 = document.querySelector('.inVolk1')
let toStart1x = document.querySelector('.inVolk1')
let toStart2 = document.querySelector('.inVolk2')
let toStart2x = document.querySelector('.inVolk2')
let toStart3 = document.querySelector('.inVolk3')
let toStart3x = document.querySelector('.inVolk3')
let toStart4 = document.querySelector('.inVolk4')
let toStart4x = document.querySelector('.inVolk4')
let toStart5 = document.querySelector('.inVolk5')
let toStart5x = document.querySelector('.inVolk5')
let toStart6 = document.querySelector('.inVolk6')
let toStart6x = document.querySelector('.inVolk6')
let toStart7 = document.querySelector('.inVolk7')
let toStart7x = document.querySelector('.inVolk7')
let toStart8 = document.querySelector('.inVolk8')
let toStart8x = document.querySelector('.inVolk8')
let x = 'X'
let o = 'O'
let currrent = document.querySelector('.currrent')
// DATE ---- Function
let date = new Date()
currrent.innerText = date.getFullYear();

// <--------------------------------------------------------->
// REFRESH BROWSER
reloadPage.addEventListener('click', function () {
    location.reload()
})
// <--------------------------------------------------------->


// Determines the CURRENT player
// START
function disPlayCurrent() {
    stopPlay()
    if (playCurrent.innerText === x) {
        playCurrent.innerText = o
    } else if (playCurrent.innerText === o) {
        playCurrent.innerText = x
    } else { }
}

// If X wins _____ This Should Run
function xWinClass() {
    if (toStart.value === x && toStart1.value === x && toStart2.value === x) {
        toStartx.classList.add('winclass')
        toStart1x.classList.add('winclass')
        toStart2x.classList.add('winclass')
        player.innerText = `Player ${x} Wins`
    } else if (toStart.value === x && toStart3.value === x && toStart6.value === x) {
        toStartx.classList.add('winclass')
        toStart3x.classList.add('winclass')
        toStart6x.classList.add('winclass')
        player.innerText = `Player ${x} Wins`
    } else if (toStart6.value === x && toStart7.value === x && toStart8.value === x) {
        toStart6x.classList.add('winclass')
        toStart7x.classList.add('winclass')
        toStart8x.classList.add('winclass')
        player.innerText = `Player ${x} Wins`
    } else if (toStart2.value === x && toStart5.value === x && toStart8.value === x) {
        toStart2x.classList.add('winclass')
        toStart5x.classList.add('winclass')
        toStart8x.classList.add('winclass')
        player.innerText = `${x} Wins`
    } else if (toStart3.value === x && toStart4.value === x && toStart5.value === x) {
        toStart3x.classList.add('winclass')
        toStart4x.classList.add('winclass')
        toStart5x.classList.add('winclass')
        player.innerText = `Player ${x} Wins`
    } else if (toStart.value === x && toStart4.value === x && toStart8.value === x) {
        toStartx.classList.add('winclass')
        toStart4x.classList.add('winclass')
        toStart8x.classList.add('winclass')
        player.innerText = `Player ${x} Wins`
    } else if (toStart2.value === x && toStart4.value === x && toStart6.value === x) {
        toStart2x.classList.add('winclass')
        toStart4x.classList.add('winclass')
        toStart6x.classList.add('winclass')
        player.innerText = `Player ${x} Wins`
    } else if (toStart1.value === x && toStart4.value === x && toStart7.value === x) {
        toStart1x.classList.add('winclass')
        toStart4x.classList.add('winclass')
        toStart7x.classList.add('winclass')
        player.innerText = `Player ${x} Wins`
    }
}

xWinClass()


// If O wins _____ This Should Run
function oWinClass() {
    if (toStart.value === o && toStart1.value === o && toStart2.value === o) {
        toStartx.classList.add('winclass')
        toStart1x.classList.add('winclass')
        toStart2x.classList.add('winclass')
        player.innerText = ` Player ${o} Wins`
    } else if (toStart.value === o && toStart3.value === o && toStart6.value === o) {
        toStartx.classList.add('winclass')
        toStart3x.classList.add('winclass')
        toStart6x.classList.add('winclass')
        player.innerText = ` Player ${o} Wins`
    } else if (toStart6.value === o && toStart7.value === o && toStart8.value === o) {
        toStart6x.classList.add('winclass')
        toStart7x.classList.add('winclass')
        toStart8x.classList.add('winclass')
        player.innerText = ` Player ${o} Wins`
    } else if (toStart2.value === o && toStart5.value === o && toStart8.value === o) {
        toStart2x.classList.add('winclass')
        toStart5x.classList.add('winclass')
        toStart8x.classList.add('winclass')
        player.innerText = ` Player ${o} Wins`
    } else if (toStart3.value === o && toStart4.value === o && toStart5.value === o) {
        toStart3x.classList.add('winclass')
        toStart4x.classList.add('winclass')
        toStart5x.classList.add('winclass')
        player.innerText = ` Player ${o} Wins`
    } else if (toStart.value === o && toStart4.value === o && toStart8.value === o) {
        toStartx.classList.add('winclass')
        toStart4x.classList.add('winclass')
        toStart8x.classList.add('winclass')
        player.innerText = ` Player ${o} Wins`
    } else if (toStart2.value === o && toStart4.value === o && toStart6.value === o) {
        toStart2x.classList.add('winclass')
        toStart4x.classList.add('winclass')
        toStart6x.classList.add('winclass')
        player.innerText = ` Player ${o} Wins`
    } else if (toStart1.value === o && toStart4.value === o && toStart7.value === o) {
        toStart1x.classList.add('winclass')
        toStart4x.classList.add('winclass')
        toStart7x.classList.add('winclass')
        player.innerText = ` Player ${o} Wins`
    }
}

oWinClass()


// <----------------------//////------------------------>
// Adds the Value of X n O to the Container
toStartx.addEventListener('click', function () {
    if (playCurrent.innerText === x && toStart.value === '') {
        toStartx.classList.add('xbox')
        toStart.value = x
        disPlayCurrent()
    } else if (playCurrent.innerText === o && toStart.value === '') {
        toStart.value = o
        toStartx.classList.add('obox')
        disPlayCurrent()
    } else {

    }
    xWinClass()
    oWinClass()

})

toStart1x.addEventListener('click', function () {
    if (playCurrent.innerText === x && toStart1.value === '') {
        toStart1x.classList.add('xbox')
        toStart1.value = x
        disPlayCurrent()
    } else if (playCurrent.innerText === o && toStart1.value === '') {
        toStart1.value = o
        toStart1x.classList.add('obox')
        disPlayCurrent()
    } else { }
    xWinClass()
    oWinClass()
})

toStart2x.addEventListener('click', function () {
    if (playCurrent.innerText === x && toStart2.value === '') {
        toStart2x.classList.add('xbox')
        toStart2.value = x
        disPlayCurrent()
    } else if (playCurrent.innerText === o && toStart2.value === '') {
        toStart2.value = o
        toStart2x.classList.add('obox')
        disPlayCurrent()
    } else { }
    xWinClass()
    oWinClass()
})

toStart3x.addEventListener('click', function () {
    if (playCurrent.innerText === x && toStart3.value === '') {
        toStart3x.classList.add('xbox')
        toStart3.value = x
        disPlayCurrent()
    } else if (playCurrent.innerText === o && toStart3.value === '') {
        toStart3.value = o
        toStart3x.classList.add('obox')
        disPlayCurrent()
    } else { }

    xWinClass()
    oWinClass()
})

toStart4x.addEventListener('click', function () {
    if (playCurrent.innerText === x && toStart4.value === '') {
        toStart4x.classList.add('xbox')
        toStart4.value = x
        disPlayCurrent()
    } else if (playCurrent.innerText === o && toStart4.value === '') {
        toStart4.value = o
        toStart4x.classList.add('obox')
        disPlayCurrent()
    } else { }
    xWinClass()
    oWinClass()

})

toStart5x.addEventListener('click', function () {
    if (playCurrent.innerText === x && toStart5.value === '') {
        toStart5x.classList.add('xbox')
        toStart5.value = x
        disPlayCurrent()
    } else if (playCurrent.innerText === o && toStart5.value === '') {
        toStart5.value = o
        toStart5x.classList.add('obox')
        disPlayCurrent()
    } else { }
    xWinClass()
    oWinClass()
})

toStart6x.addEventListener('click', function () {
    if (playCurrent.innerText === x && toStart6.value === '') {
        toStart6x.classList.add('xbox')
        toStart6.value = x
        disPlayCurrent()
    } else if (playCurrent.innerText === o && toStart6.value === '') {
        toStart6.value = o
        toStart6x.classList.add('obox')
        disPlayCurrent()
    } else { }
    xWinClass()
    oWinClass()

})

toStart7x.addEventListener('click', function () {
    if (playCurrent.innerText === x && toStart7.value === '') {
        toStart7x.classList.add('xbox')
        toStart7.value = x
        disPlayCurrent()
    } else if (playCurrent.innerText === o && toStart7.value === '') {
        toStart7.value = o
        toStart7x.classList.add('obox')
        disPlayCurrent()
    } else { }
    xWinClass()
    oWinClass()

})

toStart8x.addEventListener('click', function () {
    if (playCurrent.innerText === x && toStart8.value === '') {
        toStart8x.classList.add('xbox')
        toStart8.value = x
        disPlayCurrent()
    } else if (playCurrent.innerText === o && toStart8.value === '') {
        toStart8.value = o
        toStart8x.classList.add('obox')
        disPlayCurrent()
    } else { }
    xWinClass()
    oWinClass()

})


// <--------------------------------------------------------->

//ENd - GAME
// START
function stopPlay() {
    if ((toStart.value === x && toStart1.value === x && toStart2.value === x) || (toStart.value === o && toStart1.value === o && toStart2.value === o)) {
        playCurrent.innerText = `Game Won`
    } else if ((toStart.value === x && toStart3.value === x && toStart6.value === x) || (toStart.value === o && toStart3.value === o && toStart6.value === o)) {
        playCurrent.innerText = `Game Won`
    } else if ((toStart6.value === x && toStart7.value === x && toStart8.value === x) || (toStart6.value === o && toStart7.value === o && toStart8.value === o)) {
        playCurrent.innerText = `Game Won`
    } else if ((toStart2.value === x && toStart5.value === x && toStart8.value === x) || (toStart2.value === o && toStart5.value === o && toStart8.value === o)) {
        playCurrent.innerText = `Game Won`
    } else if ((toStart3.value === x && toStart4.value === x && toStart5.value === x) || (toStart3.value === o && toStart4.value === o && toStart5.value === o)) {
        playCurrent.innerText = `Game Won`
    } else if ((toStart.value === x && toStart4.value === x && toStart8.value === x) || (toStart.value === o && toStart4.value === o && toStart8.value === o)) {
        playCurrent.innerText = `Game Won`
    } else if ((toStart2.value === x && toStart4.value === x && toStart6.value === x) || (toStart2.value === o && toStart4.value === o && toStart6.value === o)) {
        playCurrent.innerText = `Game Won`
    } else if ((toStart1.value === x && toStart4.value === x && toStart7.value === x) || (toStart1.value === o && toStart4.value === o && toStart7.value === o)) {
        playCurrent.innerText = `Game Won`
    } else { }
}