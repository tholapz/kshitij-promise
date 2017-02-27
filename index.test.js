var Promise = require('./index');

var immediateHello = name => {
  return new Promise(resolve => {
    resolve(`hello, ${name}`);
  });
};

var delayHello = name => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`hello, ${name}`);
    }, 100);
  });
};

var badImmediateHello = name => {
  return new Promise((resolve, reject) => {
    reject(new Error('lol'));
  });
};

var badDelayHello = name => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('lol'));
    },100);
  });
};

// immediateHello('World').then(console.log);
// delayHello('Waldo').then(console.log);
// badImmediateHello('Wario').catch(console.log);
// badDelayHello('Bowser').catch(console.log);
var helloIfNotSithLord = name => {
  return new Promise((resolve, reject) => {
    if (['Vader', 'Sidious', 'Maul'].indexOf(name) > -1) {
      reject('go away!');
    }
    resolve(`hello, ${name}`);
  });
};
helloIfNotSithLord('Vader').catch(console.log);
helloIfNotSithLord('Luke').then(console.log);