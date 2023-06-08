import { getEntries } from '../api/entryData';
import domEvents from '../components/events/domEvents';
import filterEvents from '../components/events/filterEvents';
import formEvents from '../components/events/formEvents';
import sortEvents from '../components/events/sortEvents';
import userSpecificEvents from '../components/events/userSpecificEvents';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navbarOnDom from '../components/shared/navBar';
import { showEntries } from '../pages/entries';
import entryForm from '../pages/entryForm';

const startApp = (user) => {
  domBuilder(user);
  navbarOnDom(user);
  entryForm();
  formEvents(user);
  domEvents(user);
  filterEvents(user);
  userSpecificEvents(user);
  sortEvents(user);
  logoutButton();
  getEntries(user.uid).then((arr) => showEntries(arr, user));
};

export default startApp;
