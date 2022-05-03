
export default function sortPerson(arr) {
  return arr.sort((prev, next) => prev.health - next.health).reverse();;
}
