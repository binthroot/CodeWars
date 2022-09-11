function points(games) {
  let totalScore = 0;

  for (const match of games) {
    let [xScore, yScore] = [...match.split(':')];
    if (xScore > yScore) {
      totalScore += 3;
    } else if (xScore === yScore) {
      totalScore += 1;
    }
  }

  return totalScore;
}

// 8kyu total amount of points
