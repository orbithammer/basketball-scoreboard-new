let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let periodEl = document.getElementById("period-el")
let homeFoulsEl = document.getElementById("home-fouls-el")
let guestFoulsEl = document.getElementById("guest-fouls-el")
let homeScore = 0
let guestScore = 0
let period = 1
let homeFouls = 0
let guestFouls = 0
homeEl.textContent = homeScore
guestEl.textContent = guestScore
periodEl.textContent = period
homeFoulsEl.textContent = homeFouls
guestFoulsEl.textContent = guestFouls

function homePlusOne() {
    homeScore++
    homeEl.textContent = homeScore 
    leaderHighlight()
}

function guestPlusOne() {
    guestScore++
    guestEl.textContent = guestScore  
    leaderHighlight()  
}

function homePlusTwo() {
    homeScore += 2
    homeEl.textContent = homeScore
    leaderHighlight()
}

function guestPlusTwo() {
    guestScore += 2
    guestEl.textContent = guestScore
    leaderHighlight()
}

function homePlusThree() {
    homeScore += 3
    homeEl.textContent = homeScore
    leaderHighlight()
}

function guestPlusThree() {
    guestScore += 3
    guestEl.textContent = guestScore
    leaderHighlight()
}

function periodPlusOne() {
    period++
    if(period > 4) {
        period = 1
    }
    periodEl.textContent = period
}

function homeFoulsPlusOne() {
    homeFouls++
    homeFoulsEl.textContent = homeFouls
}

function guestFoulsPlusOne() {
    guestFouls++
    guestFoulsEl.textContent = guestFouls
}

function reset() {
    homeScore = 0
    guestScore = 0
    period = 1
    homeFouls = 0
    guestFouls = 0
    homeEl.textContent = homeScore
    guestEl.textContent = guestScore
    periodEl.textContent = period
    homeFoulsEl.textContent = homeFouls
    guestFoulsEl.textContent = guestFouls
    document.getElementById("home-back").style.outline = "none"
    document.getElementById("home-back").style.boxShadow = "none"
    document.getElementById("guest-back").style.outline = "none"
    document.getElementById("guest-back").style.boxShadow = "none"
}

function leaderHighlight() {
    if (homeScore > guestScore) {
        document.getElementById("home-back").style.outline = "2px solid orangered"
        document.getElementById("home-back").style.boxShadow = "0 0 8px orangered"
        document.getElementById("guest-back").style.outline = "none"
        document.getElementById("guest-back").style.boxShadow = "none"
    } else if (homeScore < guestScore) {
        document.getElementById("guest-back").style.outline = "2px solid orangered"
        document.getElementById("guest-back").style.boxShadow = "0 0 8px orangered"
        document.getElementById("home-back").style.outline = "none"
        document.getElementById("home-back").style.boxShadow = "none"
    } else if (homeScore === guestScore) {
        document.getElementById("home-back").style.outline = "none"
        document.getElementById("home-back").style.boxShadow = "none"
        document.getElementById("guest-back").style.outline = "none"
        document.getElementById("guest-back").style.boxShadow = "none"
    }
}

