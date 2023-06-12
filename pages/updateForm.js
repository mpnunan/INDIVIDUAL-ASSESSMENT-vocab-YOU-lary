import renderToDOM from '../utils/renderToDom';

const updateForm = (obj) => {
  const updateString = `
        <form class="create-update-entry-form" id="update-form-${obj.firebaseKey}">
          <input type="text" class="create-update-entries form-control" name="update-name" id="update-name" minlength="1" value="${obj.title}" required>
          <input type="text" class="create-update-entries form-control" name="update-definition" id="update-definition" minlength="1" value="${obj.description}" required>
          <input type="text" class="create-update-entries form-control" name="update-langOrTech" id="update-langOrTech" minlength="1" value="${obj.langOrTech}" required>
          <button type="submit" class="create-update-btn" id="update-entry--${obj.firebaseKey}">Update Vocabulary</button>
        </form>`;
  renderToDOM('#card-container', updateString);
};

export default updateForm;
