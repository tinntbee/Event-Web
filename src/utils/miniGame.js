export function answerInitialization(length = 0) {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push("");
  }
  return array;
}

export function answersRaw(aBegin, aEnd, answer, gridColumn) {
  let answers = [];
  for (let index = 0; index < gridColumn; index++) {
    if (index >= aBegin && index <= aEnd) {
      answers.push(answer[index - aBegin]);
    } else {
      answers.push("");
    }
  }
  return answers;
}

export function answerParse(answers, aBegin, aEnd) {
  let answer = "";
  for (let index = aBegin; index <= aEnd; index++) {
    answer = answer + answers[index];
  }
  return answer;
}

export function answerSetParse(listQA) {
  let answers = [];
  listQA.forEach((element) => {
    let i = 0;
    answers.push({
      number: i++,
      answer: answerParse(element.answers, element.aBegin, element.aEnd),
    });
  });
  return answers;
}

export function getKey(listQA, columnKey) {
  let key = "";
  listQA.forEach((element) => {
    key = key + element.answers[parseInt(columnKey)];
  });
  return key;
}
