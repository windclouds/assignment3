let counts = Number(prompt("Please enter a number"))
do { 
    if (isNaN(counts)) {
   counts = Number(prompt("Must be a number!"))
    } 
} while (isNaN(counts) !== true)
while (counts >= 0) {
  console.log(counts)
  counts --
}
