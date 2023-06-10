import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="nav-bar"></div>
  <div id="main">
    <div id="filter-btns" class="btn-group" role="group" aria-label="Basic radio toggle button group"></div>
    <div id="card-container"></div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
