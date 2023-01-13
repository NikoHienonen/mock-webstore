/**
 * A util for getting only the first sentence of a string
 * @param sentence
 * @returns the string split from the first "."
 */
export function getFirstSentence(sentence: string) {
  return sentence.split(".")[0];
}
