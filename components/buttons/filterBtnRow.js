import renderToDOM from '../../utils/renderToDom';

const filterBtn = (array) => {
  let filterBtnRowString = '';
  const firstBtnString = `
  <a href="#" class="card-nav filter-link" id="filter-row-all">Full Stack</a>`;
  let restBtnString = '';
  array.forEach((element) => {
    restBtnString += `
    <a href="#" class="card-nav filter-link" id="filter-row--${element}">${element}</a>`;
  });
  filterBtnRowString = firstBtnString + restBtnString;

  renderToDOM('#filter-btns', filterBtnRowString);
};

export default filterBtn;
