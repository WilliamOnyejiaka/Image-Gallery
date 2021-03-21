
export default function shuffleArray(array) {
  let [currentIndex, tempoaryValue, randomIndex] = [array.length, null, null];
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [tempoaryValue, array[currentIndex]] = [
      array[currentIndex],
      array[randomIndex],
    ];
    array[randomIndex] = tempoaryValue;
  }
  return array;
}
