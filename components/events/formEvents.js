import { createEntry, getEntries, updateEntry } from '../../api/entryData';
import { showEntries } from '../../pages/entries';

const formEvents = (user) => {
  document.querySelector('#app').addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-entry')) {
      const date = new Date();
      const dateTime = date.toLocaleString();
      const payload = {
        title: document.querySelector('#input-name').value,
        description: document.querySelector('#input-definition').value,
        langOrTech: document.querySelector('#input-langOrTech').value,
        timestamp: dateTime,
        uid: user.uid
      };
      createEntry(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateEntry(patchPayload).then(() => {
          getEntries(user.uid).then(showEntries);
        });
      });
      document.querySelector('#entry-form').reset();
    }

    if (e.target.id.includes('update-entry--')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#update-name').value,
        description: document.querySelector('#update-definition').value,
        langOrTech: document.querySelector('#update-langOrTech').value,
        firebaseKey,
      };
      updateEntry(payload).then(() => {
        getEntries(user.uid).then(showEntries);
        document.querySelector('form').reset();
      });
    }
  });
};

export default formEvents;
