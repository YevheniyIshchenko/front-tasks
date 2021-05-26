export function createLogger() {
  const memory = [];

  function createText(message, typeOfMessage) {
    memory.push({
      message: message,
      dateTime: new Date(),
      type: typeOfMessage,
    });
  }

  function getRecords(str) {
    const sortMemory = memory.sort((a, b) => b.dateTime - a.dateTime);
    if (str === undefined) {
      return sortMemory;
    } else {
      return sortMemory.filter((el) => el.type === str);
    }
  }

  return {
    warn(message) {
      createText(message, 'warn');
    },
    error(message) {
      createText(message, 'error');
    },
    log(message) {
      createText(message, 'log');
    },
    getRecords,
  };
}

// export function createLogger() {
//   const memory = [];

//   function warn(str) {
//     memory.push({
//       message: str,
//       dateTime: new Date(),
//       type: 'warn',
//     });
//   }

//   function error(str) {
//     memory.push({
//       message: str,
//       dateTime: new Date(),
//       type: 'error',
//     });
//   }

//   function log(str) {
//     memory.push({
//       message: str,
//       dateTime: new Date(),
//       type: 'log',
//     });
//   }

//   function getRecords(str) {
//     const sortMemory = memory.sort((a, b) => b.dateTime - a.dateTime);
//     if (str === undefined) {
//       return sortMemory;
//     } else {
//       return sortMemory.filter((el) => el.type === str);
//     }
//   }

//   return {
//     warn,
//     error,
//     log,
//     getRecords,
//   };
// }

const logger = createLogger();
logger.log('User logged in');
logger.warn('User try to restricted page');
logger.log('User logged out');
logger.error('Unexpected error on the site');
// [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User try to restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
// [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
// [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
// [{ message: 'User try to restricted page', type: 'warn', dateTime: Date }]

console.log(logger.getRecords('log'));
console.log(logger.getRecords('error'));
console.log(logger.getRecords('warn'));
console.log(logger.getRecords());
