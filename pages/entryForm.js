import renderToDOM from '../utils/renderToDom';

const entryForm = () => {
  const formString = `
  <button type="button" class="nav-item" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Add to Lexicon
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">New Vocabulary Entry</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form id="entry-form">
        <div class="modal-body">
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="input-name" placeholder="Word(s)">
            <label for="floatingInput">Word(s)</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="input-definition" placeholder="Definition">
            <label for="floatingInput">Definition</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="input-langOrTech" placeholder="Language/ Technology">
            <label for="floatingInput">Language/ Technology</label>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-success" id="submit-entry" data-bs-dismiss="modal">Expand Vocabulary</button>
        </div>
      </form>
      </div>
  </div>
</div>`;
  renderToDOM('#entry-form', formString);
};

export default entryForm;
