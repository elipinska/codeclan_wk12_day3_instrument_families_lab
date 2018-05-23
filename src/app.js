const InstrumentFamilies = require('./models/instrument_families.js');
const InstrumentFamiliesInfoView = require('./views/inst_fam_info_view.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const instrumentDropdown = document.querySelector('select#instrument-families');

  const instrumentSelectView = new SelectView(instrumentDropdown);
  instrumentSelectView.bindEvents();

  const instrumentInfoContainer = document.querySelector('#family-display');
  const instrumentFamiliesInfoView = new InstrumentFamiliesInfoView(instrumentInfoContainer);
  instrumentFamiliesInfoView.bindEvents();

  const instrumentDataSource = new InstrumentFamilies();
  instrumentDataSource.bindEvents();
});
