const countOccurrences = (text = '', str) => {
  // put your code here
  if (str === '') {
    return null;
  } else {
    let count = 0;
    let pos = -1;
    while ((pos = text.indexOf(str, pos + 1)) != -1) {
      count++;
    }
    return count;
  }
};

console.log(countOccurrences('erfartfatgfa', 'fa'));
console.log(countOccurrences('dfalihcukghdfjkafabakjhglfaachbgv', ''));
