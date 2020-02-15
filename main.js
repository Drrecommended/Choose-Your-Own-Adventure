alert('*Break dancer appears out of nowhere* "YOU TRYIN TO DANCE OR WHAT FOO!?"')
var Chances = 3
var HeHasTheMoves = confirm('Do you have the moves?')
var CanContinue = true
if (HeHasTheMoves) {
    alert('*Break dancer starts bouncing side to side*')
} else {
    alert('Everyone starts laughing at you')
    CanContinue = false
}
if (CanContinue) {
    var name = prompt ('What is your breakdancing nickname')
    alert('"Check this out!"')
    alert('Breaker air chair spins')
    alert('Crowd goes wild')
    var WhatMove1 = confirm('Shuffle(confirm) or bust out the Jackhammer(cancel)')
    if (WhatMove1) {
        alert('Noone shuffles you panzy two more lame moves and you are done')
        Chances--
    } else {
        alert('Oh snap! Home boy gots some moves!')
    }
    alert('"You aint seen nothing yet!"')
    var Comeback1 = prompt('Dont just stand there and let him talk trash!')
    alert('Oh yeah!? round 2!!')
    var WhatMove2 = confirm('Flare to Buddha spin(confirm) or Deadman spin(cancel')
    if (WhatMove2) {
        alert('you are heating up!')
    } else  {
        alert('Homeless man comes out of nowhere and kills you')
        alert('GAMEOVER')
        canContinue = false
    }
}
if (CanContinue) {
    alert('YOU GOT THIS~!')
    var WhatMove3 = confirm('Boomerang(confirm) or 1990s(cancel)')
    if (WhatMove3) {
        alert('You win!')
        alert('Crowd goes wild!')
    } else {
        alert('Game Over')
        Chances--
    }

}
