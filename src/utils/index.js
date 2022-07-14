export function searchItem(objects, toSearch) {
  var results = [];
  for (var i = 0; i < objects.length; i++) {
    // eslint-disable-next-line
    for (let key in objects[i]) {
      // eslint-disable-next-line
      if (key != "amount") {
        if (objects[i][key].toLowerCase().includes(toSearch.toLowerCase())) {
          results.push(objects[i]);
        }
      }
    }
  }
  return results;
}
