module.exports = function (config) {
   config.set({
     basePath: '',
     frameworks: ['jasmine', '@angular-devkit/build-angular'],
     plugins: [
       require('karma-jasmine'),
       require('karma-chrome-launcher'),
       require('karma-jasmine-html-reporter'),
       require('karma-coverage'),
       require('@angular-devkit/build-angular/plugins/karma')
     ],
     client: {
       clearContext: false // deixa o output de testes visível no navegador
     },
     jasmineHtmlReporter: {
       suppressAll: true // remove mensagens duplicadas no terminal
     },
     coverageReporter: {
       dir: require('path').join(__dirname, './coverage/your-project-name'),
       subdir: '.',
       reporters: [
         { type: 'html' },
         { type: 'text-summary' }
       ]
     },
     reporters: ['progress', 'kjhtml'],
     port: 9876,
     colors: true,
     logLevel: config.LOG_INFO,
     autoWatch: true,
     browsers: ['Chrome'],
     singleRun: false,
     restartOnFileChange: true
   });
 };
 