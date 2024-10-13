import _ from "lodash";
import numRef from "./ref.json";

export function numToWord(num) {
  return _.find(numRef, (item) => item.num === num)?.word;
}

export function wordToNum(word) {
  return _.find(numRef, (item) => item.word === word)?.num;
}

