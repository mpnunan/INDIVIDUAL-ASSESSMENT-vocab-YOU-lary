import renderToDOM from '../../utils/renderToDom';

const filterBtn = (array) => {
  let filterBtnRowString = '';
  const firstBtnString = `
      <input type="radio" class="btn-check" name="btnradio" id="filter-row-all" autocomplete="off" value="filter-row-all" checked>
      <label class="btn btn-outline-primary" for="filter-row-all">Full Stack</label>`;
  let restBtnString = '';
  array.forEach((element) => {
    restBtnString += `
      <input type="radio" class="btn-check" name="btnradio" id="filter-row--${element}" value="filter-row--${element}" autocomplete="off">
      <label class="btn btn-outline-primary" for="filter-row--${element}">${element}</label>`;
  });
  filterBtnRowString = firstBtnString + restBtnString;

  renderToDOM('#filter-btns', filterBtnRowString);
};

export default filterBtn;
