*/Pangram Challenge/*

function pangram(s) {

  let res = []
  let i = 97
  while (String.fromCharCode(i) <= String.fromCharCode(122)) {
    res.push(String.fromCharCode(i))
    i++
  }

  s = s.toLowerCase()

  let my_check = true

  for (let j in res) {
    if (!s.includes(res[j])) {
      my_check = false
      break
    }
  }

  if (my_check == false) {
    return "not pangram"
  } else {
    return "pangram"
  }
}
