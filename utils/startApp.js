import { getEntries } from '../api/entryData';
import domEvents from '../components/events/domEvents';
import filterEvents from '../components/events/filterEvents';
import filterRowEvents from '../components/events/filterRowEvents';
import formEvents from '../components/events/formEvents';
import searchEvents from '../components/events/searchEvents';
import sortEvents from '../components/events/sortEvents';
import userSpecificEvents from '../components/events/userSpecificEvents';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navbarOnDom from '../components/shared/navBar';
import { showEntries } from '../pages/entries';
import entryForm from '../pages/entryForm';
import filterBtns from '../pages/filterBtns';

const startApp = (user) => {
  domBuilder(user);
  navbarOnDom(user);
  entryForm();
  formEvents(user);
  domEvents(user);
  filterBtns(user);
  filterEvents(user);
  filterRowEvents(user);
  userSpecificEvents(user);
  sortEvents(user);
  searchEvents(user);
  logoutButton();
  getEntries(user.uid).then(showEntries);
};

export default startApp;
