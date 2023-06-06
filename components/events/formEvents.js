import { createEntry, getEntries, updateEntry } from '../../api/entryData';
import { showEntries } from '../../pages/entries';

const formEvents = (user) => {
  document.querySelector('#entry-form').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-entry')) {
      const payload = {
        title: document.querySelector('#input-name').value,
        description: document.querySelector('#input-definition').value,
        langOrTech: document.querySelector('#input-langOrTech').value,
        uid: user.uid
      };
      createEntry(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateEntry(patchPayload).then(() => {
          getEntries(user.uid).then(showEntries);
        });
      });
    }

    if (e.target.id.includes('update-entry')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#input-name').value,
        description: document.querySelector('#input-definition').value,
        firebaseKey,
      };
      updateEntry(payload).then(() => {
        getEntries(user.uid).then(showEntries);
      });
    }
  });
  document.querySelector('form').reset();
};

export default formEvents;
