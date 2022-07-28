let coinFlip
let playTimes = Number(prompt("How many time do you want to play coin flip game? "))
for (let i = 1; i <= playTimes; i++) {
    coinFlip = Math.round(Math.random())
    if (coinFlip === 0) {
        console.log("Heads")
    } else if (coinFlip === 1) {
        console.log("Tails")
    }
}