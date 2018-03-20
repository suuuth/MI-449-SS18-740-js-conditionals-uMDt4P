
var a = window.prompt('something happened!  What will you do?')
if (!a) {
  window.alert('Not an option, try again!')
  a = window.prompt('something happened!  What will you do?')
  partOne(a)
} else {
  a = a.toLowerCase().trim()
  partOne(a)
}

function partOne (choice) {
  if (choice === 'something good') {
    PartTwoGood()
  } else if (choice === 'something average') {
    PartTwoAvg()
  } else if (choice === 'something bad') {
    var b = window.confirm('that was a poor choice!  Do you want to try again?')
    _Confirm(b)
  } else {
    window.alert('not an option! Try Again! Try "something good", "something average", or "something bad"')
    b = window.prompt('something happened!  What will you do?')
      partOne(b)
    if (!b) {
      window.alert('Not an option, try again!')
      var a = window.prompt('something happened!  What will you do?')
      partOne(a)
    } else {
      a = a.toLowerCase().trim()
      partOne(a)
    }
  }
}

function PartTwoGood () {
  var b = window.prompt('Something good happened!  What will you do next?')
  if (!b) {
    window.alert('Not an option, try again!')
    b = window.prompt('Something good happened!  What will you do next?')
    PartTwoGood(b)
  } else {
    GameEnding(b)
  }
}

function PartTwoAvg () {
  var b = window.prompt('Something happens, neither good nor bad.  Now what will you do?')
  if (!b) {
    window.alert('Not an option, try again!')
    b = window.prompt('Something happens, neither good nor bad.  Now what will you do?')
    PartTwoAvg(b)
  } else {
    GameEnding()
  }
}

function GameEnding () {
  var c = Math.random()
  var d = window.prompt('The devil himself appears and asks you what number he is thinking of.  He says \'The number is either 1 or 0!  Guess wrong and you can never leave!  Guess right and you may find the way out of this maze of js prompts!\'')
  if (isNaN(d)) {
    window.alert('try again')
    GameEnding()
  } else {
    d = parseInt('' + d)
  }

  if (d !== 0 || d !== 1) {
    var e = window.confirm('that was a poor choice!  Do you want to try again?')
    _Confirm(e)
  } else if (c < 0.5 && d === 0) {
    window.alert('you win the game!')
    e = window.confirm('play again?')
    _Confirm(e)
  } else if (c > 0.5 && c === 1) {
    window.alert('you win the game!')
    e = window.confirm('play again?')
    _Confirm(e)
  } else if (c < 0.5 && c === 1) {
    window.alert('you lose the game!')
    e = window.confirm('play again?')
    _Confirm(e)
  } else if (c > 0.5 && c === 0) {
    window.alert('you lose the game!')
    e = window.confirm('play again?')
    _Confirm(e)
  }
}

function _Confirm (choice) {
  if (choice === true) {
    window.alert('Good Choice')
    var a = window.prompt('something happened!  What will you do?')
    if (!a) {
      window.alert('Not an option, try again!')
      a = window.prompt('something happened!  What will you do?')
      partOne(a)
    } else {
      a = a.toLowerCase().trim()
      partOne(a)
    }
  } else {
    window.alert('Game Over')
    a = window.prompt('something happened!  What will you do?')
    if (!a) {
      window.alert('Not an option, try again!')
      a = window.prompt('something happened!  What will you do?')
      partOne(a)
    } else {
      a = a.toLowerCase().trim()
      partOne(a)
    }
  }
}
