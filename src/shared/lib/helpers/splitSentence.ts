export function splitSentence(sentence: string): [string, string] {
  const words = sentence.split(' ');
  const middleIndex = Math.floor(words.length / 2);

  const firstHalf = words.slice(0, middleIndex).join(' ');
  const secondHalf = words.slice(middleIndex).join(' ');

  return [firstHalf, secondHalf];
}
