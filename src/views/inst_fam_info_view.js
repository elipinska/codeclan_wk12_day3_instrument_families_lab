const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamiliesInfoView = function(container) {
  this.container = container;
}

InstrumentFamiliesInfoView.prototype.bindEvents = function() {
  this.receiveInstrumentFamilyDataAndRender();
}

InstrumentFamiliesInfoView.prototype.receiveInstrumentFamilyDataAndRender = function() {
  PubSub.subscribe('InstrumentFamilies:details-ready', (evt) => {
  const instrumentFamilyInfo = evt.detail;
  this.render(instrumentFamilyInfo);
  });
}

InstrumentFamiliesInfoView.prototype.render = function(info) {
  this.container.innerHTML = "";
  const familyName = document.createElement('h2');
  familyName.textContent = info.name;
  const familyDescription = document.createElement('p');
  familyDescription.textContent = info.description;
  const sampleInstrumentsIntro = document.createElement('p');
  sampleInstrumentsIntro.textContent = "Examples of instruments belonging to this family:";
  const sampleInstrumentsList = document.createElement('ul');

  for (instrument of info.instruments) {
    const listItem = document.createElement('li');
    listItem.textContent = instrument;
    sampleInstrumentsList.appendChild(listItem);
  }



  this.container.appendChild(familyName);
  this.container.appendChild(familyDescription);
  this.container.appendChild(sampleInstrumentsIntro);
  this.container.appendChild(sampleInstrumentsList);
}

module.exports = InstrumentFamiliesInfoView;
