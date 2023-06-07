import { entryLangOrTech } from '../../api/entryData';
import { showEntries } from '../../pages/entries';

const filterEvents = (user) => {
  document.querySelector('#card-container').addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.id.includes('filter-entry--')) {
      const [, btn] = e.target.id.split('--');
      entryLangOrTech(user.uid, btn).then(showEntries);
    }
  });
};

export default filterEvents;
