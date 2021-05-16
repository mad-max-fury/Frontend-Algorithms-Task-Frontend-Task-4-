

convertFahrToCelsius = (Fahr) => {
  let regex = /[a-zA-Z]/
  regexResult = regex.test(Fahr)
  if (regexResult === true && typeof Fahr !== 'object') {
    console.log(`'${Fahr}'  is not a valid number but a/an string`)
  }
  else if (Array.isArray(Fahr) === true) {
    console.log(`[${Fahr}]  is not a valid number but a/an array`)
  }
  else if (typeof Fahr === 'object' && typeof Fahr !== null && !Array.isArray(Fahr)) {
    console.log(Fahr, 'is not a valid number but a/an object')
  }
  else {
    let F = Number(Fahr)
    // console.log(typeof F)
    let C = ((F - 32) * 100) / 180
    console.log(C.toFixed(4) + ' ' + 'deg C');
  }
}
convertFahrToCelsius({ temp: 0 })


checkYuGiOh = (n) => {
  let regex = /[a-zA-Z]/
  regexResult = regex.test(n)

  if (regexResult === true && typeof Fahr !== 'object' || Array.isArray(n) === true || typeof n === 'object' && typeof n !== null && !Array.isArray(n)) {
    console.log(`invalid parameter:${n}`);
  } else {

    let num = Number(n)
    let result = []
    for (let i = 1; i <= num; i++) {
      if (i % 2 == 0 && i % 3 !== 0 && i % 5 !== 0) {
        result.push('yu')
      }
      else if (i % 3 == 0 && i % 2 !== 0 && i % 5 !== 0) {
        result.push('gi')
      }
      else if (i % 5 == 0 && i % 3 !== 0 && i % 2 !== 0) {
        result.push('oh')
      }
      else if (i % 5 == 0 && i % 3 == 0 && i % 2 !== 0) {
        result.push('gi-oh')
      }
      else if (i % 5 == 0 && i % 3 !== 0 && i % 2 == 0) {
        result.push('yu-oh')
      }
      else if (i % 5 !== 0 && i % 3 == 0 && i % 2 == 0) {
        result.push('yu-gi')
      }
      else if (i % 5 == 0 && i % 3 == 0 && i % 2 == 0) {
        result.push('yu-gi-oh')
      }
      else {
        result.push(i)
      }

    }
    console.log(result);

  }

}
checkYuGiOh([1, 2, 3]);


