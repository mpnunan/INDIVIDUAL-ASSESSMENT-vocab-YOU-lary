import { entryLangOrTech, getEntries } from '../../api/entryData';
import { showEntries } from '../../pages/entries';

const filterRowEvents = (user) => {
  document.querySelector('#filter-btns').addEventListener('click', (e) => {
    if (e.target.id.includes('filter-row-all')) {
      console.warn('you clicked all entries');
      getEntries(user.uid).then(showEntries);
    }

    if (e.target.id.includes('filter-row--')) {
      const [, rowbtn] = e.target.id.split('--');
      console.warn(`you clicked ${rowbtn}`);
      entryLangOrTech(user.uid, rowbtn).then(showEntries);
    }
  });
};

export default filterRowEvents;
