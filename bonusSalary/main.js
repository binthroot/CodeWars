function bonusTime(salary, bonus) {
  // your code here
  const euro = '\u{00A3}';
  return bonus ? `${euro}${salary * 10}` : `${euro}${salary}`;
}
