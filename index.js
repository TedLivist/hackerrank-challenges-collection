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

function miniMaxSum(arr) {
  arr.sort((a, b) => a - b)
  let minSlice = arr.slice(0, arr.length - 1)
  let maxSlice = arr.slice(1, arr.length)

  console.log(minSlice.reduce((a, b) => a + b), maxSlice.reduce((a, b) => a + b))
}
