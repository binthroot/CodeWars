function feat(beast, dish) {
  let firstLetter = beast[0];
  let lastLetter = beast.slice(-1)
  return (firstLetter === dish[0] && lastLetter === dish.slice(-1))
}

// 8kyu string feast of many beasts
