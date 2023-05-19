module.exports = {
 extends: [
    "@commitlint/config-conventional"
 ],
 rules: {
    'subject-empty': [0, 'never'],
    'subject-case': [
      2, 
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ]
 },
 parserPreset: {
     parserOpts: {
     // these are samples, add possible prefixes based on your project requirement
          issuePrefixes: ['ITSM-', 'TEST-','DSC-', 'ABC-', 'CO-'] 
        }
    }
     
}