function generateHashtag(str) {
  trimedStr = str.trim();
  if (trimedStr.length > 140 || trimedStr.length === 0) {
    return false;
  }

  const words = str.split(" ");
  const formattedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return `#${formattedWords.join("")}`;
}

module.exports = generateHashtag;
