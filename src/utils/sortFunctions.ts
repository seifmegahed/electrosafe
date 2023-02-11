export const descendingSortObjectArray = (array: any[], field: string) => {
  return array.sort(function (a, b) {
    if (a[field] > b[field]) {
      return 1;
    }
    if (b[field] > a[field]) {
      return -1;
    }
    return 0;
  });
};

export const descendingSortArray = (array: string[] | number[]) => {
  return array.sort(function (a, b) {
    if (a > b) {
      return 1;
    }
    if (b > a) {
      return -1;
    }
    return 0;
  });
};
