var fn1 = value => {
  return value;
};

var fn2 = (value, callback = () => {}) => {
  setTimeout(() => {
    callback(value);
  },100);
};

// console.log(fn1('hello'));  // print "hello" as expected
// console.log(fn2('hello'));  // print "undefined"

var promisifiedFn2 = value => {
  return new Promise((resolve, reject) => {
    fn2(value, resolve);
  });
};

Promise.resolve(promisifiedFn2('hello')).then(console.log);