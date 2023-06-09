import renderToDOM from '../utils/renderToDom';

const entryForm = () => {
  const formString = `
        <form class="create-update-entry-form" id="entry-form">
          <input type="text" class="create-update-entries form-control" name="input-name" id="input-name" placeholder="Word(s)" minlength="1" required />
          <input type="text" class="create-update-entries form-control" name="input-definition" id="input-definition" placeholder="Definition" minlength="1" required />
          <input type="text" class="create-update-entries form-control" name="input-langOrTech" id="input-langOrTech" placeholder="Language or Technology" minlength="1" required /> 
          <button type="submit" class="create-update-btn" id="submit-entry">Expand Vocabulary</button>
        </form>`;
  renderToDOM('#card-container', formString);
};

export default entryForm;
