import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="nav-bar"></div>
  <div id="main">
    <div id="filter-btns"></div>
    <div id="card-container"></div>
    <div id="entry-form"></div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
