const PubSub = require('../helpers/pub_sub.js')

const SelectView = function(element) {
  this.element = element;

}

SelectView.prototype.bindEvents = function() {
  this.receiveData();
  this.setUpListenerForUserChange();
}

SelectView.prototype.receiveData = function() {
  PubSub.subscribe('InstrumentFamilies:all-data-ready', (evt) => {
    const instrumentFamilyData = evt.detail;
    this.populateDropdown(instrumentFamilyData);
  });
}

SelectView.prototype.populateDropdown = function(instrumentData) {
  instrumentData.forEach((instrumentFamily, index) => {
    const newOption = document.createElement('option');
    newOption.textContent = instrumentFamily.name;
    newOption.value = index;
    this.element.appendChild(newOption);
  });
};

SelectView.prototype.setUpListenerForUserChange = function() {
  this.element.addEventListener('change', (evt) => {
  const userChoiceIndex = evt.target.value;
  PubSub.publish('SelectView:user-choice-changed', userChoiceIndex);
  });
};

module.exports = SelectView;
