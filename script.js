

convertFahrToCelsius = (Fahr) => {

  if (Fahr == null) {
    return (`${JSON.stringify(Fahr)} is not a valid number but a/an ${typeof Fahr}`)
  }
  else {
    let regex = /[a-zA-Z]/
    regexResult = regex.test(Fahr)
    if (regexResult === true && typeof Fahr !== 'object' && Fahr !== null) {
      return (`${JSON.stringify(Fahr)} is not a valid number but a/an ${typeof Fahr}`)

    }
    else if (Array.isArray(Fahr) === true) {
      return (`${JSON.stringify(Fahr)} is not a valid number but a/an ${typeof Fahr}`)
    }
    else if (typeof Fahr === 'object' && typeof Fahr !== null && !Array.isArray(Fahr)) {
      return (`${JSON.stringify(Fahr)} is not a valid number but a/an ${typeof Fahr}`)
    }
    else {
      let F = Number(Fahr)

      let C = ((F - 32) * 100) / 180
      return (C.toFixed(4));
    }
  }

}
convertFahrToCelsius()


checkYuGiOh = (n) => {

  if (n == null) {
    return `invalid parameter: ${JSON.stringify(n)}`
  }
  else {
    let regex = /[a-zA-Z]/
    regexResult = regex.test(n)
    if (regexResult === true && typeof n !== 'object') {
      return `invalid parameter: ${JSON.stringify(n)} `
    }
    else if (Array.isArray(n) === true) {
      return `invalid parameter: ${JSON.stringify(n)}`
    }
    else if (typeof n === 'object' && typeof n !== null && !Array.isArray(n)) {
      return `invalid  parameter: ${JSON.stringify(n)} `;
    }
    else {

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
      return result;

    }

  }


}
checkYuGiOh('text');
