let report={
  reportMap: {},
  jasmineStarted: function(suiteInfo) {  //jasmine
    // console.log('jsamineStarted', suiteInfo);
    this.reportMap['jsamineStarted'] = 'Running suite with ' + suiteInfo.totalSpecsDefined;
  },
  suiteStarted: function(result) {  //describe
    // console.log('suiteStarted', result);
    this.reportMap.suiteStarted = 'Suite started: ' + result.description + ' whose full description is: ' + result.fullName;
  },
  specStarted: function(result) {  //it
    // console.log('specStarted', result);
    this.reportMap.specStarted = 'Spec started: ' + result.description + ' whose full description is: ' + result.fullName;
  },
  specDone: function(result) {
    // console.log('specDone', result);
    this.reportMap.specDone = 'Spec: ' + result.description + ' was ' + result.status;
  },
  suiteDone: function(result) {
    // console.log('suiteDone', result);
    this.reportMap.suiteDone = 'Suite: ' + result.description + ' was ' + result.status;
  },
  jasmineDone: function(result) {
    // console.log('jasmineDone');
    this.reportMap.jasmineDone = "jasmineDone";
  }
};

module.exports = report;