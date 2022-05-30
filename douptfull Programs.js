function smallestCommons(arr) {
  const [min, max] = arr.sort((a,b) => a - b);
  
  while (true) {
    if (min % min == 0 && min % max == 0) {
      return min;
      break;
    } min++;
  }
}

console.log(smallestCommons([24,36]));
