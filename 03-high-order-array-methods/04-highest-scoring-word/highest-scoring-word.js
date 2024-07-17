function highestScoringWord(str) {
  let highestScore = 0;
  let highestIndex = 0;
  const words = str.split(" ");

  const scores = words.map((word) => {
    let score = 0;

    for (const letter of word) {
      score += letter.charCodeAt(0) - 96;
    }
    return score;
  });

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highestScore) {
      highestScore = scores[i];
      highestIndex = i;
    }
  }

  return words[highestIndex];
}

module.exports = highestScoringWord;
