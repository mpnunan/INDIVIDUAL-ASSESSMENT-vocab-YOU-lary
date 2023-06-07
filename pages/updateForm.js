import renderToDOM from '../utils/renderToDom';

const updateForm = (obj) => {
  const updateString = `
        <form id="update-form-${obj.firebaseKey}">
          <div class="form-control mb-3">
            <input type="text" class="form-control" id="update-name" value="${obj.title}">
          </div>
          <div class="form-control mb-3">
            <input type="text" class="form-control" id="update-definition" value="${obj.description}">
          </div>
          <div class="form-control mb-3">
            <input type="text" class="form-control" id="update-langOrTech" value="${obj.langOrTech}"> 
          </div>
          <button type="submit" class="btn btn-success" id="update-entry--${obj.firebaseKey}">Update Vocabulary</button>
        </form>`;
  renderToDOM('#card-container', updateString);
};

export default updateForm;
