export const toObject = (arr) => {
  var rv = {};
  for (var i = 0; i < arr.length; ++i)
    arr[i].data
      ? (rv[arr[i].value] = {title: arr[i].label, ...arr[i].data})
      : (rv[arr[i].value] = {title: arr[i].label});
  return rv;
};

export const toArray = (obj) => {
  let arr = [];
  Object.keys(obj).forEach((key) => {
    arr.push({id: key, ...obj[key]});
  });
  return arr;
};
