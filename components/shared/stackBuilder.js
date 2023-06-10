import renderToDOM from '../../utils/renderToDom';

const stackBuilder = () => {
  const stackContainerString = `
  <div class="stack-container">
    <ul id="stack-list"></ul>
  </div>`;

  renderToDOM('#card-container', stackContainerString);
};

export default stackBuilder;
