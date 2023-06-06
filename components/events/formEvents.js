import { createEntry, getEntries, updateEntry } from '../../api/entryData';
import { showEntries } from '../../pages/entries';

const formEvents = (user) => {
  document.querySelector('#app').addEventListener('click', (e) => {
    e.preventDefault();
    console.warn('you clicked it');

    if (e.target.id.includes('submit-entry')) {
      const payload = {
        title: document.querySelector('#input-name').value,
        description: document.querySelector('#input-definition').value,
        langOrTech: document.querySelector('#input-langOrTech').value,
        uid: user.uid
      };
      console.warn(payload);
      createEntry(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateEntry(patchPayload).then(() => {
          getEntries(user.uid).then(showEntries);
        });
      });
      document.querySelector('#entry-form').reset();
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
