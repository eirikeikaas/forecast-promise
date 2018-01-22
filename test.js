const Forecast = require('./index');

const accountId = '786841';
const token = '1358322.pt.7-UOInCnlmZPJg-CcnLxoby1Efa8bwfwtWE0KT_DnAwytGvwWkpR7dzKiqljJL7VC38JZA9DeD2HmrAvjoRF4A';

const fc = new Forecast({ accountId, token });

fc.whoAmI().then(response => console.log(response));
