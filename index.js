let game_state = false
let p1_turn = true
const p1_color = "rgb(88, 224, 64)"
const p2_color = "rgb(11, 178, 184)"
const b1 = document.getElementById("b1")
const b2 = document.getElementById("b2")
const b3 = document.getElementById("b3")
const b4 = document.getElementById("b4")
const b5 = document.getElementById("b5")
const b6 = document.getElementById("b6")
const b7 = document.getElementById("b7")
const b8 = document.getElementById("b8")
const b9 = document.getElementById("b9")
const start = document.getElementById("start")
const msg = document.getElementById("msg")
const record_box = document.getElementById("record_box")
let record = [0, 0, 0, 0, 0, 0, 0, 0, 0]
// player1: 1
// player2: 2

function check_state() {
    let who_win = 0
    // check row
    console.log(record)
    for (let i = 0; i <= 6; i = i + 3) {
        if (record[i] === record[i+1] && record[i] === record[i+2]) {
            if (record[i] === 1) {
                msg.innerHTML = "Player 1 Wins"
                who_win = 1
                game_state = false
            }
            if (record[i] === 2) {
                msg.innerHTML = "Player 2 Wins"
                game_state = false
                who_win = 2
            }
        }
    }


    // check col
    for (let i = 0; i <= 2; i++) {
        if (record[i] === record[i + 3] && record[i] === record[i + 6]) {
            if (record[i] === 1) {
                msg.innerHTML = "Player 1 Wins"
                game_state = false
                who_win = 1
            }
            if (record[i] === 2) {
                msg.innerHTML = "Player 2 Wins"
                game_state = false
                who_win = 2
            }
        }
    }

    // check slash
    if (record[0] === record[4] && record[0] === record[8]) {
        if (record[0] === 1) {
            msg.innerHTML = "Player 1 Wins"
            game_state = false
            who_win = 1
        }
        if (record[0] === 2) {
            msg.innerHTML = "Player 2 Wins"
            game_state = false
            who_win = 2
        }
    }

    if (record[2] === record[4] && record[2] === record[6]) {
        if (record[2] === 1) {
            msg.innerHTML = "Player 1 Wins"
            game_state = false
            who_win = 1
        }
        if (record[2] === 2) {
            msg.innerHTML = "Player 2 Wins"
            game_state = false
            who_win = 2
        }
    }

    let tie = true

    for (let i = 0; i < 9; i++) {
        if (record[i] === 0) {
            tie = false
            break
        }
    }
    if (tie && who_win === 0) {
        game_state = false
        record_box.innerHTML += "<li>Tie</li>"
        msg.textContent = "Tie!!"
    }
    if (game_state === false && !tie) {
        record_box.innerHTML += "<li>" + "Player" +  who_win + "</li>"
    }
}

start.addEventListener("click", function() {
    game_state = true
    record = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    p1_turn = true
    b1.innerHTML = "-"
    b2.innerHTML = "-"
    b3.innerHTML = "-"
    b4.innerHTML = "-"
    b5.innerHTML = "-"
    b6.innerHTML = "-"
    b7.innerHTML = "-"
    b8.innerHTML = "-"
    b9.innerHTML = "-"
    msg.innerHTML = "Player 1 Turns"
})

b9.addEventListener("click", function() {
    if (game_state === true) {
        if (record[8] === 0) {
            if (p1_turn) {
                b9.innerHTML = "X"
                record[8] = 1
                p1_turn = false
                msg.innerHTML = "Player 2 Turns"
            } else {
                b9.innerHTML = "O"
                p1_turn = true
                record[8] = 2
                msg.innerHTML = "Player 1 Turns"
            }
        }
        check_state()
    }
})

b1.addEventListener("click", function() {
    if (game_state === true) {
        if (record[0] === 0) {
            if (p1_turn) {
                b1.innerHTML = "X"
                p1_turn = false
                record[0] = 1
                msg.innerHTML = "Player 2 Turns"
            } else {
                b1.innerHTML = "O"
                p1_turn = true
                record[0] = 2
                msg.innerHTML = "Player 1 Turns"
            }
        }
        check_state()
    }
})

b2.addEventListener("click", function() {
    if (game_state === true) {
        if (record[1] === 0) {
            if (p1_turn) {
                b2.innerHTML = "X"
                p1_turn = false
                record[1] = 1
                msg.innerHTML = "Player 2 Turns"
            } else {
                b2.innerHTML = "O"
                p1_turn = true
                record[1] = 2
                msg.innerHTML = "Player 1 Turns"
            }
        }
        check_state()
    }
})

b3.addEventListener("click", function() {
    if (game_state === true) {
        if (record[2] === 0) {
            if (p1_turn) {
                b3.innerHTML = "X"
                p1_turn = false
                record[2] = 1
                msg.innerHTML = "Player 2 Turns"
            } else {
                b3.innerHTML = "O"
                p1_turn = true
                record[2] = 2
                msg.innerHTML = "Player 1 Turns"
            }
        }
        check_state()
    }
})

b4.addEventListener("click", function() {
    if (game_state === true) {
        if (record[3] === 0) {
            if (p1_turn) {
                b4.innerHTML = "X"
                p1_turn = false
                record[3] = 1
                msg.innerHTML = "Player 2 Turns"
            } else {
                b4.innerHTML = "O"
                p1_turn = true
                record[3] = 2
                msg.innerHTML = "Player 1 Turns"
            }
        }
        check_state()
    }
})

b5.addEventListener("click", function() {
    if (game_state === true) {
        if (record[4] === 0) {
            if (p1_turn) {
                b5.innerHTML = "X"
                p1_turn = false
                record[4] = 1
                msg.innerHTML = "Player 2 Turns"
            } else {
                b5.innerHTML = "O"
                p1_turn = true
                record[4] = 2
                msg.innerHTML = "Player 1 Turns"
            }
        }
        check_state()
    }
})

b6.addEventListener("click", function() {
    if (game_state === true) {
        if (record[5] === 0) {
            if (p1_turn) {
                b6.innerHTML = "X"
                p1_turn = false
                record[5] = 1
                msg.innerHTML = "Player 2 Turns"
            } else {
                b6.innerHTML = "O"
                p1_turn = true
                record[5] = 2
                msg.innerHTML = "Player 1 Turns"
            }
        }
        check_state()
    }
})

b7.addEventListener("click", function() {
    if (game_state === true) {
        if (record[6] === 0) {
            if (p1_turn) {
                b7.innerHTML = "X"
                p1_turn = false
                record[6] = 1
                msg.innerHTML = "Player 2 Turns"
            } else {
                b7.innerHTML = "O"
                p1_turn = true
                record[6] = 2
                msg.innerHTML = "Player 1 Turns"
            }
        }
        check_state()
    }
})

b8.addEventListener("click", function() {
    if (game_state === true) {
        if (record[7] === 0) {
            if (p1_turn) {
                b8.innerHTML = "X"
                p1_turn = false
                record[7] = 1
                msg.innerHTML = "Player 2 Turns"
            } else {
                b8.innerHTML = "O"
                p1_turn = true
                record[7] = 2
                msg.innerHTML = "Player 1 Turns"
            }
        }
        check_state()
    }
})


