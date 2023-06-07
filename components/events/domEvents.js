import { getSingleEntry } from '../../api/entryData';
import updateForm from '../../pages/updateForm';

const domEvents = () => {
  document.querySelector('#card-container').addEventListener('click', (e) => {
    if (e.target.id.includes('update--')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleEntry(firebaseKey).then((entry) => updateForm(entry));
    }
  });
};

export default domEvents;
