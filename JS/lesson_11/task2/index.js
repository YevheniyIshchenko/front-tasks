//put your code here
function sortContacts(arr, bool = true) {
  if (!Array.isArray(arr)) {
    return null;
  } else {
    if (bool === true) {
      const result = arr.sort((a, b) => a.name.localeCompare(b.name));
      return result;
    } else {
      const result = arr.sort((a, b) => b.name.localeCompare(a.name));
      return result;
    }
  }
}

console.log(sortContacts());
