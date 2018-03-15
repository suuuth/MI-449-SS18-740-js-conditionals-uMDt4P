
var a = window.prompt('something happened!  What will you do?')
if (a === null || a === undefined || a === '') {
  alert('Not an option, try again!')
  var a = window.prompt('something happened!  What will you do?')
  partOne(a)
} else {
  a = a.toLowerCase().trim()
  partOne(a)
}

function partOne(choice) {
  if (choice === 'something good') {
      partTwo_good()
  } else if (choice === 'something average') {
    partTwo_avg(b)
  } else if (choice === 'something bad') {
    var b = confirm('that was a poor choice!  Do you want to try again?')
    _Confirm(b)
  } else {
    window.alert('not an option! Try Again')
    var b = window.prompt('something happened!  What will you do?')
    if (b === null || b === undefined || b === '') {
      alert('Not an option, try again!')
      var a = window.prompt('something happened!  What will you do?')
      partOne(a)
    } else {
      a = a.toLowerCase().trim()
      partOne(a)
    }
  }
}

function partTwo_good() {
  var b = window.prompt('Something good happened!  What will you do next?')
  if (b === null || b === undefined || b === '') {
    alert('Not an option, try again!')
    var b = window.prompt('Something good happened!  What will you do next?')
  } else {
    game_ending(b)
  }
}

function partTwo_avg() {
  var b = window.prompt('Something happens, neither good nor bad.  Now what will you do?')
  if (b === null || b === undefined || b === '') {
    alert('Not an option, try again!')
    var b = window.prompt('Something happens, neither good nor bad.  Now what will you do?')
  } else {
    game_ending()
  }
}

function game_ending() {
  var c = Math.random()
  var d = window.prompt('The devil himself appears and asks you what number he is thinking of.  He says \'The number is either 1 or 0!  Guess wrong and you can never leave!  Guess right and you may find the way out of this maze of js prompts!\'')
  if (isNaN(d)) {
    alert('try again')
    game_ending()
  } else {
    d = parseInt(''+d)
  }

  if (d != 0 || d != 1) {
    var e = confirm('that was a poor choice!  Do you want to try again?')
    _Confirm(e)
  } else if (c < 0.5 && d === 0) {
    alert('you win the game!')
    var e = confirm('play again?')
    _Confirm(e)
  } else if (c > 0.5 && c === 1) {
    alert('you win the game!')
    var e = confirm('play again?')
    _Confirm(e)
  } else if (c < 0.5 && c === 1) {
    alert('you lose the game!')
    var e = confirm('play again?')
    _Confirm(e)
  } else if (c > 0.5 && c === 0) {
    alert('you lose the game!')
    var e = confirm('play again?')
    _Confirm(e)
  }
}

function _Confirm(choice) {
  if (choice == true) {
    alert('Good Choice')
    var a = window.prompt('something happened!  What will you do?')
    if (a === null || a === undefined) {
      alert('Not an option, try again!')
      var a = window.prompt('something happened!  What will you do?')
    } else {
      a = a.toLowerCase().trim()
      partOne(a)
    }
  } else {
    alert('Game Over')
    var a = window.prompt('something happened!  What will you do?')
    if (a === null || a === undefined) {
      alert('Not an option, try again!')
      var a = window.prompt('something happened!  What will you do?')
    } else {
      a = a.toLowerCase().trim()
      partOne(a)
    }
  }
}