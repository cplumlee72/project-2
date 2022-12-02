// const {google} = require('googleapis');
// const sheets = google.sheets({
//   version: 'v4',
//   auth:process.env.API_KEY 
// });
// const userData = require('./userData.json');
// const params = {
//   spreadsheetId: '1NGZv2rdKNr2xZou2R1WitIrDyx8KT462UFElO68Hz3A'
// };

// function makeApiCall() {
//   var params = {
//     // The spreadsheet to request.
//     spreadsheetId: '1NGZv2rdKNr2xZou2R1WitIrDyx8KT462UFElO68Hz3A',  // TODO: Update placeholder value.

//     // The ranges to retrieve from the spreadsheet.
//     ranges: ['A1:J319'],  // TODO: Update placeholder value.

//     // True if grid data should be returned.
//     // This parameter is ignored if a field mask was set in the request.
//     includeGridData: false,  // TODO: Update placeholder value.
//   };

//   var request = gapi.client.sheets.spreadsheets.get(params);
//   request.then(function(response) {
//     // TODO: Change code below to process the `response` object:
//     console.log(response.result);
//   }, function(reason) {
//     console.error('error: ' + reason.result.error.message);
//   });
// }

// function initClient() {
//   var API_KEY = process.env.API_KEY;  // TODO: Update placeholder with desired API key.

//   var CLIENT_ID = '432519291601-b6t9kmkhju8pt0lim80dp22lst7natj4.apps.googleusercontent.com';  // TODO: Update placeholder with desired client ID.
//   var SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

//   gapi.client.init({
//     'apiKey': API_KEY,
//     'clientId': CLIENT_ID,
//     'scope': SCOPE,
//     'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
//   }).then(function() {
//     gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
//     updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
//   });
// }

// function handleClientLoad() {
//   gapi.load('client:auth2', initClient);
// }

// function updateSignInStatus(isSignedIn) {
//   if (isSignedIn) {
//     makeApiCall();
//   }
// }

// function handleSignInClick(event) {
//   gapi.auth2.getAuthInstance().signIn();
// }

// function handleSignOutClick(event) {
//   gapi.auth2.getAuthInstance().signOut();
// }


const {google} = require('googleapis');
const sheets = google.sheets({
  version: 'v4',
  auth: 'AIzaSyAge0YEgfSyAzHlRzs5z2fqdstVkP86WqQ',
});
const userData = require('./userData.json');
const params = {
  spreadsheetId: '1NGZv2rdKNr2xZou2R1WitIrDyx8KT462UFElO68Hz3A',
  range: ['A1:J319']
};


// get the blog details
sheets.spreadsheets.values.get(params, (err, res) => {
  if (err) {
    console.error(err);
    throw err;
  }
//   console.log(res.data);
  const apiData = res.data
  console.log(apiData[0[1]]);
  return apiData
});

