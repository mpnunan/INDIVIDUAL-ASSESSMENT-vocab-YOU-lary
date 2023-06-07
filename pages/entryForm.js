import renderToDOM from '../utils/renderToDom';

const entryForm = () => {
  const formString = `
  <a class="nav-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add to Lexicon</a>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">New Vocabulary Entry</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id="entry-form">
          <div class="form-control mb-3">
            <input type="text" class="form-control" id="input-name" placeholder="Word(s)">
           
          </div>
          <div class="form-control mb-3">
            <input type="text" class="form-control" id="input-definition" placeholder="Definition">
           
          </div>
          <div class="form-control mb-3">
            <input type="text" class="form-control" id="input-langOrTech" placeholder="Language/ Technology">
            
          </div>
          <button type="submit" class="btn btn-success" id="submit-entry" data-bs-dismiss="modal">Expand Vocabulary</button>
        </div>
          <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
      </form>
    </div>
  </div>
</div>`;
  renderToDOM('#entry-form-container', formString);
};

export default entryForm;
