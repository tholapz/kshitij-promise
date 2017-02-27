var PENDING = 0;
var RESOLVED = 1;
var REJECTED = 2;

function Promise(executor) {
  var state = PENDING;
  var value = null;
  var handle = null;

  try {
    executor(_val => {
      state = RESOLVED;
      value = _val;
      if (handle) {
        handle(_val);
      }
    }, _reason => {
      state = REJECTED;
      value = _reason.message;
    });
  } catch(error) {
    state = REJECTED;
    value = error.message;
  }

  return {
    then: fn => {
      if (state === PENDING) {
        handle = fn;
      } else if (state === RESOLVED) {
        fn(value);
      }
    },
    catch: fn => {
      if (state === PENDING) {
        // handle = fn;
      } else if (state === REJECTED) {
        fn(value);
      }
    }
  };

//   try {
//     executor(_value => {
//       value = _value;
//       state = RESOLVED;
//     }, _reason => {
//       value = _reason;
//       state = REJECTED;
//     });
//   } catch (err) {
//     value = err;
//     state = REJECTED;
//   }

//   return {
//     then: fn => {
//       switch (state) {
//         case PENDING:
//         // TODO
//         case RESOLVED:
//         fn(value);
//         break;
//         case REJECTED:
//         // TODO
//       }
//     }
//   }
}

module.exports = Promise;