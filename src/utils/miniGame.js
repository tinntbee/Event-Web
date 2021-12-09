export function answerInitialization(length = 0) {
  let array = [];
  for (let i = 0; i < length; i++) {
      array.push('')
  }
  return array;
}

export function answersRaw(aBegin, aEnd, answer, gridColumn){
  let answers = [];
  for (let index = 0; index < gridColumn; index++) {
    if (index >= aBegin && index <= aEnd){
      answers.push(answer[index-aBegin]);
    }else{
      answer.push("");
    }
  }
  return answers;
}