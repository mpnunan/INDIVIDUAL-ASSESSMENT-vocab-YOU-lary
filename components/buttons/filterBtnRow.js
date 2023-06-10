import renderToDOM from '../../utils/renderToDom';

const filterBtn = (array) => {
  let filterBtnRowString = '';
  for (let i = 0; i < array.length; i++) {
    filterBtnRowString += `
    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
      <input type="radio" class="btn-check" name="btnradio" id="btnradio--${array[i]}" autocomplete="off" checked>
      <label class="btn btn-outline-primary" for="btnradio--${array[i]}">${array[i]}</label>
    </div>`;
  }
  renderToDOM('#filter-btns', filterBtnRowString);
};

export default filterBtn;
