function expandedForm(num) {
  let bigString = [];
  let newSum = num;
  for (let i = String(num).length; i >= 0; i--) {
    const tens = 10 ** i;
    const el = newSum / tens;

    if (el > 1) {
      bigString.push(Math.floor(el) * tens);
      newSum = newSum % tens;
    }

    if (el === 1) bigString.push(el);
  }
  return bigString.join(' + ');
}

// works with everything except where the last digit is 1
