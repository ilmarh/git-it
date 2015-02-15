function test(err, stdout, stdrr) {
  var show = stdout.trim()
console.log("err: " + err)
console.log("stdout: " + stdout)
console.log("stdrr: " + stdrr)
console.log(" ")

  if (show.match("nothing to commit")) {
    console.log("Changes have been committed!")
  }
  else if (show.match("Changes not staged for commit")){
    console.log("Seems there are changes\nto commit still.")
  } else console.log("Hmm, can't find\ncommitted changes.")
}

var exec = require('child_process').exec
exec('git status', test)
console.log("hello");
