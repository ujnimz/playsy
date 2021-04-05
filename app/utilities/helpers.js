export const toObject = (arr) => {
  var rv = {};
  for (var i = 0; i < arr.length; ++i)
    arr[i].data
      ? (rv[arr[i].value] = {title: arr[i].label, ...arr[i].data})
      : (rv[arr[i].value] = {title: arr[i].label});
  return rv;
};

export const toArray = (obj) => {
  //console.log(obj);
  let arr = [];
  Object.keys(obj).forEach((key) => {
    //console.log(key);
    arr.push({id: key, ...obj[key]});
  });
  //console.log(arr);
  return arr;
};
