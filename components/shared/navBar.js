import renderToDOM from '../../utils/renderToDom';

const navbarOnDom = (user) => {
  const navString = `
  <nav class="navbar navbar-expand-lg" id="navbar-nav">
  <div class="container-fluid" id="navbar-container">
    <h1 class="navbar-brand">Vocab Schmocab</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" id="home-btn" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="sort-dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Sort Entries
          </a>
          <ul class="dropdown-menu" id="sort-drop-down">
            <li><a class="drop-down nav-link active" id="newest-entries-btn--${user.uid}" href="#">Newest</a></li>
            <li><a class="drop-down nav-link active" id="oldest-entries-btn--${user.uid}" href="#">Oldest</a></li>
            <li><a class="drop-down nav-link active" id="alphabetical-entries-btn--${user.uid}" href="#">Alphabetically</a></li>
            <li><a class="drop-down nav-link active" id="reverse-alphabetical-entries-btn--${user.uid}" href="#">Reverse Alphabetically</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown" id="profile-dropdown">
          <a class="nav-link dropdown-toggle" id="profile-dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ${user.displayName}
          </a>
          <ul class="dropdown-menu" id="profile-drop-down">
            <li><a class="drop-down nav-link active" id="entries-btn--${user.uid}" href="#">Your Entries</a></li>
            <li><a class="drop-down nav-link active" id="techOrLang-btn--${user.uid}" href="#">Your Tech Stack</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="drop-down nav-link active" id="communities--${user.uid}" href="#">Your Communities</a></li>
          </ul>
        </li>
        <li class="nav-item" id="entry-form-container">
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" id="search-bar" type="search" placeholder="Search" aria-label="Search">
        <button class="nav-link" id="search-btn" type="submit">Search</button>
      </form>
      <div id="logout-form-container"></div>
    </div>
  </div>
</nav>`;
  renderToDOM('#nav-bar', navString);
};

export default navbarOnDom;
