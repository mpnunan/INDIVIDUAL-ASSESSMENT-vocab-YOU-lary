import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyEntries = () => {
  const domString = '<h1>No Entries</h1>';
  renderToDOM('#card-container', domString);
};

const showEntries = (array) => {
  clearDom();

  let domString = '';
  array.forEach((entry) => {
    domString += `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${entry.title}</h5>
    <p class="card-text">${entry.description}.</p>
    <a href="#" class="btn btn-primary" id="filter-entry--${entry.langOrTech}">${entry.langOrTech}</a>
  </div>
  <div id="btn-container-${entry.firebaseKey}">
    <a href="#" class="btn btn-secondary" id ="update--${entry.firebaseKey}">Update Entry</a>
    <a href="#" class="btn btn-secondary" id ="delete--${entry.firebaseKey}">Delete Entry</a>
  </div>
</div>`;
  });
  renderToDOM('#card-container', domString);
};

export { emptyEntries, showEntries };
