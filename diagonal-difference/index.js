function diagonalDifference(arr) {
    let d1 = 0, d2 = 0; 
  
    for (let i = 0; i < arr.length; i++) { 
        d1 += arr[i][i]; 
        d2 += arr[i][arr.length-i-1]; 
    }
  
    return Math.abs(d1 - d2); 
}

module.exports = { diagonalDifference }