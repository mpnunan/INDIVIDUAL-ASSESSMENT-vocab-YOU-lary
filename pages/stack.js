import renderToDOM from '../utils/renderToDom';

const renderStack = (array) => {
  let stackString = '';
  array.forEach((element) => {
    stackString += `
      <li>${element}</li>`;
  });

  renderToDOM('#stack-list', stackString);
};

export default renderStack;
