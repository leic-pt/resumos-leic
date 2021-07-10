exports.onRouteUpdate = () => {
  const tabGroups = [...document.querySelectorAll(`.tab-group`)];

  tabGroups.forEach((tabGroup) => {
    const tabButtons = [...tabGroup.querySelectorAll(`.tab-group--btn`)];
    const tabContents = [...tabGroup.querySelectorAll(`.tab-group--tab`)];

    tabButtons.forEach((button, i) => {
      button.addEventListener('click', () => {
        tabButtons.forEach((btn) => btn.classList.remove('tab-group--btn__active'));
        tabContents.forEach((content) => content.classList.remove('tab-group--tab__active'));

        button.classList.add('tab-group--btn__active');
        tabContents[i].classList.add('tab-group--tab__active');
      });
    });
  });
};
