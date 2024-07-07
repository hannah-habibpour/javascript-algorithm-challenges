function displayLikes(arr) {
  let resultStr = "";
  if (arr.length === 0) {
    resultStr = "no one likes this";
  } else if (arr.length === 1) {
    resultStr = `${arr[0]} likes this`;
  } else if (arr.length === 2) {
    resultStr = `${arr[0]} and ${arr[1]} like this`;
  } else if (arr.length === 3) {
    resultStr = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
  } else if (arr.length > 3) {
    resultStr = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
  }

  return resultStr;
}

module.exports = displayLikes;
