import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyEntries = () => {
  const domString = '<h1>No Entries</h1>';
  renderToDOM('#card-container', domString);
};

const showEntries = (array) => {
  clearDom();

  const filterBtnRowString = `
  <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>

  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
</div>`;
  renderToDOM('#filter-btns', filterBtnRowString);

  let domString = '';
  array.forEach((entry) => {
    domString += `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${entry.title}</h5>
    <p class="card-text">${entry.description}.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
  });
  renderToDOM('#card-container', domString);
};

export { emptyEntries, showEntries };
