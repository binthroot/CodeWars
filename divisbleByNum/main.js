function divisibleBy(numbers, divisor) {
  return numbers.filter((num) => !((num / divisor) % 1 > 0));
}

// 8kyu
