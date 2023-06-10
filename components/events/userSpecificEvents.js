import { getEntries } from '../../api/entryData';
import { showEntries } from '../../pages/entries';
import renderStack from '../../pages/stack';
import stackList from '../buttons/stackList';
import stackBuilder from '../shared/stackBuilder';

const userSpecificEvents = (user) => {
  document.querySelector('#nav-bar').addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.id.includes('entries-btn--')) {
      getEntries(user.uid).then(showEntries);
    }

    if (e.target.id.includes('home-btn')) {
      getEntries(user.uid).then(showEntries);
    }

    if (e.target.id.includes('techOrLang-btn--')) {
      stackBuilder();
      getEntries(user.uid)
        .then(stackList)
        .then(renderStack);
    }
  });
};

export default userSpecificEvents;
