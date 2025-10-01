let homeScore = 0
let guestScore = 0

const homeScoreEl = document.getElementById("homescore")
const guestScoreEl = document.getElementById("guestscore")

function sumarHome (puntos) {
   homeScore += puntos 
   homeScoreEl.textContent = homeScore   
  
}

function sumarGuest (puntos) {
   guestScore += puntos 
   guestScoreEl.textContent = guestScore  
    
}



