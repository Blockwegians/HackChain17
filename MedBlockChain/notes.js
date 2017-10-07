console.log('Starting App.');

const fs = require('fs');

var patientRef = "0251"

var getPatRecords = (patientRef) => {
    var allRecords = fs.readFileSync('patientRecords.json');
    var allRecords = JSON.parse(allRecords)
    var patientRecordsFiltered = allRecords.filter((allRecords) => allRecords.Ref === patientRef);
    return patientRecordsFiltered;
};

var getMedRecords = (patientRef) => {
  var allRecords = fs.readFileSync('medicalRecords.json');
  var allRecords = JSON.parse(allRecords)
  var medicalRecordsFiltered = allRecords.filter((allRecords) => allRecords.Ref === patientRef);
  return medicalRecordsFiltered;
};

var PatRec = getPatRecords(patientRef);
var MedRec = getMedRecords(patientRef);
var output = PatRec.concat(MedRec);
// console.log(PatRec);
console.log(output);
