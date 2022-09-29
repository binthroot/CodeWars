function smallEnough(a, limit) {
  return (
    a.filter((num) => {
      return num <= limit;
    }).length == a.length
  );
}

//7kyu small enough?
