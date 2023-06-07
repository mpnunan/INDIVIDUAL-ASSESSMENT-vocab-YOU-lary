import { deleteEntry, getEntries, getSingleEntry } from '../../api/entryData';
import { showEntries } from '../../pages/entries';
import updateForm from '../../pages/updateForm';

const domEvents = (user) => {
  document.querySelector('#card-container').addEventListener('click', (e) => {
    if (e.target.id.includes('update--')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleEntry(firebaseKey).then((entry) => updateForm(entry));
    }

    if (e.target.id.includes('delete--')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Not interested in learning this crucial piece of coding knowledge?')) {
        console.warn('DESTROYING ENTRY', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteEntry(firebaseKey).then(() => {
          getEntries(user.uid).then(showEntries);
        });
      }
    }
  });
};

export default domEvents;
