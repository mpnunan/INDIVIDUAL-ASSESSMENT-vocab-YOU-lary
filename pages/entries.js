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
    <div class="card">
      <div class"card-title-container">
        <h5 class="card-title">${entry.title}</h5>
        <hr>
      </div>
      <div class="card-body">
        <p class="card-text">${entry.description}.</p>
        <a href="#" class="card-nav filter-link" id="filter-entry--${entry.langOrTech}">${entry.langOrTech}</a>
      </div>
      <div class="card-btn-container" id="btn-container-${entry.firebaseKey}">
        <a href="#" class="card-nav update-link" id ="update--${entry.firebaseKey}">Update Entry</a>
        <a href="#" class=" card-nav delete-link" id ="delete--${entry.firebaseKey}">Delete Entry</a>
      </div>
    </div>`;
  });
  renderToDOM('#card-container', domString);
};

export { emptyEntries, showEntries };
