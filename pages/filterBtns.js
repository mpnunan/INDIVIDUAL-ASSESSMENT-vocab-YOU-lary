import { getEntries } from '../api/entryData';
import filterBtn from '../components/buttons/filterBtnRow';
import stackList from '../components/buttons/stackList';

const filterBtns = (user) => {
  getEntries(user.uid)
    .then(stackList)
    .then(filterBtn);
};

export default filterBtns;
