import getEntries from '../api/entryData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navbarOnDom from '../components/shared/navBar';
import { showEntries } from '../pages/entries';
import entryForm from '../pages/entryForm';

const startApp = (user) => {
  domBuilder(user);
  navbarOnDom(user);
  entryForm();
  logoutButton();
  getEntries(user.uid).then((arr) => showEntries(arr, user));
};

export default startApp;
