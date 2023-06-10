const stackList = (array) => {
  const stackArr = [];
  array.forEach((obj) => {
    if (stackArr.indexOf(obj.langOrTech) === -1) {
      stackArr.push(obj.langOrTech);
    }
  });
  return stackArr;
};

export default stackList;
