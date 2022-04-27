function snapCrackle(value) {
    let result = ""
    for (let i = 1; i <= value; i++) {
        if (i % 2 !== 0 && i % 5 === 0) {
           result += `SnapCrackle, `
        }else if (i % 2 !== 0) {
            result += `Snap, `
        }else if (i % 5 === 0) {
            result += `Crackle, `
        }
        if(i % 2 === 0 && i % 5 !== 0){
            result += `${i}, `
        }
}
return result}
console.log(snapCrackle(5))
