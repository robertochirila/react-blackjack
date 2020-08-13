export function shuffle(decks) {
  let firstDeck = decks[0];
  let secondDeck = decks[1];
  let minIndex = 0;
  let maxIndex = decks[0].length - 1;
  firstDeck.map(function (card, index) {
    let newIndex =
      Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
    if (index != newIndex) {
      let card = firstDeck[index];
      let swapCard = firstDeck[newIndex];
      swapArrayElements(firstDeck, index, newIndex);
    }
  });
  secondDeck.map(function (card, index) {
    let newIndex =
      Math.floor(Math.random() * (maxIndex - minIndex + 1)) + minIndex;
    if (index != newIndex) {
      let card = secondDeck[index];
      let swapCard = secondDeck[newIndex];
      swapArrayElements(secondDeck, index, newIndex);
    }
  });
}

var swapArrayElements = function (arr, indexA, indexB) {
  var temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
};
