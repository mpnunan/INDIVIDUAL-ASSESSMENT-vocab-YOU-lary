import renderToDOM from '../../utils/renderToDom';

const navbarOnDom = (user) => {
  const navString = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Vocab Schmocab</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" id="home-btn" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown" id="profile-dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ${user.displayName}
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" id="entries-btn--${user.uid}"href="#">Your Entries</a></li>
            <li><a class="dropdown-item" id="techOrLang-btn--${user.uid}" href="#">Your Tech Stack</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" id="communities--${user.uid}" href="#">Your Communities</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="entry-form-container"></a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div id="logout-form-container"></div>
    </div>
  </div>
</nav>`;
  renderToDOM('#nav-bar', navString);
};

export default navbarOnDom;
