function sortArrByDate(arr, needReverse) {
  let sortedArr = [];

  if (needReverse) {
    sortedArr = arr.sort(
      (a, b) => new Date(b._createdAt) - new Date(a._createdAt)
    );
  } else {
    sortedArr = arr.sort(
      (a, b) => new Date(a._createdAt) - new Date(b._createdAt)
    );
  }

  return sortedArr;
}

export default sortArrByDate;
