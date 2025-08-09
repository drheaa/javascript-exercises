const fibonacci = function(n) {
  if (n <= 0) return "Input must be a positive integer";
  if (n === 1 || n === 2) return 1; 

  let a = 1, b = 1;
  
  for (let i = 3; i <= n; i++) {
    let next = a + b; 
    a = b; 
    b = next; 
  }

  return b; 
}

// Do not edit below this line
module.exports = fibonacci;
