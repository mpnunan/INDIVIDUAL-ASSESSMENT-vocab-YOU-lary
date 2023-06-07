import { getEntries } from '../../api/entryData';
import { showEntries } from '../../pages/entries';

const userSpecificEvents = (user) => {
  document.querySelector('#nav-bar').addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.id.includes('entries-btn--')) {
      getEntries(user.uid).then(showEntries);
    }

    if (e.target.id.includes('home-btn')) {
      getEntries(user.uid).then(showEntries);
    }
  });
};

export default userSpecificEvents;
