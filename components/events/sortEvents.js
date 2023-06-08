import { getEntries } from '../../api/entryData';
import { showEntries } from '../../pages/entries';
import {
  sortAlphabetically, sortNewest, sortOldest, sortReverseAlphabetically
} from '../buttons/sortEntries';

const sortEvents = (user) => {
  document.querySelector('#nav-bar').addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.id.includes('alphabetical-entries-btn--')) {
      getEntries(user.uid).then(sortAlphabetically).then(showEntries);
    }

    if (e.target.id.includes('reverse-alphabetical-entries-btn--')) {
      getEntries(user.uid).then(sortReverseAlphabetically).then(showEntries);
    }

    if (e.target.id.includes('newest-entries-btn--')) {
      getEntries(user.uid).then(sortNewest).then(showEntries);
    }

    if (e.target.id.includes('oldest-entries-btn--')) {
      getEntries(user.uid).then(sortOldest).then(showEntries);
    }
  });
};

export default sortEvents;
