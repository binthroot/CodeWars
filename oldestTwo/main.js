return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
  ages.sort((a,b) => (a < b) ? 1 : -1)
  return ages.splice(0, 2).reverse()

}