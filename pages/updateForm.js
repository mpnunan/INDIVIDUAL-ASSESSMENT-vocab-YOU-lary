import renderToDOM from '../utils/renderToDom';

const updateForm = (obj) => {
  const updateString = `
        <form id="update-form-${obj.firebaseKey}">
          <input type="text" class="create-update-entries form-control" id="update-name" value="${obj.title}">
          <input type="text" class="create-update-entries form-control" id="update-definition" value="${obj.description}">
          <input type="text" class="create-update-entries form-control" id="update-langOrTech" value="${obj.langOrTech}">
          <button type="submit" class="create-update-btn" id="update-entry--${obj.firebaseKey}">Update Vocabulary</button>
        </form>`;
  renderToDOM('#card-container', updateString);
};

export default updateForm;
