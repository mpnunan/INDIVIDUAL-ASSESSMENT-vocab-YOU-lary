import { getEntries } from '../../api/entryData';
import { showEntries } from '../../pages/entries';
import searchEntries from '../buttons/searchEntries';

const searchEvents = (user) => {
  document.querySelector('#nav-bar').addEventListener('click', (e) => {
    e.preventDefault();

    const searchValue = document.querySelector('#search-bar').value;

    if (e.target.id.includes('search-btn')) {
      getEntries(user.uid)
        .then((entries) => searchEntries(entries, searchValue))
        .then(showEntries);
    }
  });
};

export default searchEvents;
