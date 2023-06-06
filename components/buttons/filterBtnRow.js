import { getEntries } from '../../api/entryData';
import renderToDOM from '../../utils/renderToDom';

const filterFunc = (uid) => {
  const btnValueArr = [];
  const stackArr = [];
  getEntries(uid)
    .then((entryArr) => entryArr.forEach((entryObj) => {
      stackArr.push(entryObj.langOrTech);
      stackArr.forEach((element) => {
        if (btnValueArr.indexOf(element) === -1) {
          btnValueArr.push(element);
        }
      });
    }));
  let filterBtnRowString = '';
  for (let i = 0; i < btnValueArr.length; i++) {
    filterBtnRowString += `
    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
      <input type="radio" class="btn-check" name="btnradio" id="btnradio--${btnValueArr[i]}" autocomplete="off" checked>
      <label class="btn btn-outline-primary" for="btnradio--${btnValueArr[i]}">${btnValueArr[i]}</label>
    </div>`;
  }
  renderToDOM('#filter-btns', filterBtnRowString);
};

// this function does not render anything

export default filterFunc;
