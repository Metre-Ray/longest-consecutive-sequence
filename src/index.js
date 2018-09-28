module.exports = function longestConsecutiveLength(array) {
  let obj = {};
  let seq_length = 0;
  let max_answer = 0;

  if (array.length === 0) return 0;
  for (let i = 0; i < array.length; i++) {
    obj[array[i]] = 1;
  }

  for (let i = 0; i < array.length; i++) {
    if (obj[array[i] + 1] !== undefined) {
      seq_length += 1;
      obj[array[i] + 1] = undefined;
      let j = 2;

      while(obj[array[i] + j] !== undefined) {
        seq_length += 1;
        obj[array[i] + j] = undefined;
        j += 1;
      }

      j = 1;
      while(obj[array[i] - j] !== undefined) {
        seq_length += 1;
        obj[array[i] - j] = undefined;
        j += 1;
      }

      if (seq_length > max_answer) max_answer = seq_length;
      seq_length = 0;
    }
  }

  return max_answer + 1;
}
