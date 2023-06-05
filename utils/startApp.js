import getEntries from '../api/entryData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import { showEntries } from '../pages/entries';

const startApp = (user) => {
  domBuilder(user);
  logoutButton();
  getEntries(user.uid).then((arr) => showEntries(arr, user));
};

export default startApp;
