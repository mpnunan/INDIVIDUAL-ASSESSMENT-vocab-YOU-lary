import getEntries from '../../api/entryData';
import renderToDOM from '../../utils/renderToDom';

const filterFunc = (uid) => {
  const btnValueArr = [];
  const filterBtnRow = () => {
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
    console.warn(btnValueArr);
    return btnValueArr;
  };

  const filterBtnValues = () => {
    console.warn(btnValueArr);
    let filterBtnRowString = '';
    for (let i = 0; i < btnValueArr.length; i++) {
      filterBtnRowString += `
      <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
      <input type="radio" class="btn-check" name="btnradio" id="btnradio${i}" autocomplete="off" checked>
      <label class="btn btn-outline-primary" for="btnradio1">${btnValueArr[i]}</label>
      </div>`;
    }
    renderToDOM('#filter-btns', filterBtnRowString);
    console.warn(filterBtnRowString);
  };
  filterBtnRow();
  filterBtnValues();
};

// this function does not render anything

export default filterFunc;
