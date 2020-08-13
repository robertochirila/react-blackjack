export function shuffle(deck) {
  let firstDeck = deck;
  let minIndex = 0;
  let maxIndex = deck.length - 1;
  console.log(firstDeck);
  firstDeck.map(function (card, index) {
    let newIndex =
      Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
    if (index != newIndex) {
      let card = firstDeck[index];
      let swapCard = firstDeck[newIndex];
      swapArrayElements(firstDeck, index, newIndex);
    }
  });
}

var swapArrayElements = function (arr, indexA, indexB) {
  var temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
};
