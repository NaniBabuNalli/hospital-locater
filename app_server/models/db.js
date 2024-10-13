// const mongoose = require('mongoose');
// const dbURI = 'mongodb://localhost/PharmaLoc8r';
// //const dbURI = 'mongodb+srv://nanibabunalli:123456au@cluster0.yzl5k.mongodb.net/Loc8r';

// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose.connection.on('connected', () => {
//   console.log(`Mongoose connected to ${dbURI}`);
// });

// mongoose.connection.on('error', err => {
//   console.log(`Mongoose connection error: ${err}`);
// });

// mongoose.connection.on('disconnected', () => {
//   console.log('Mongoose disconnected');
// });

// const gracefulShutdown = (msg, callback) => {
//   mongoose.connection.close(() => {
//     console.log(`Mongoose disconnected through ${msg}`);
//     callback();
//   });
// };
// require('./locations');

// // For nodemon restarts
// process.once('SIGUSR2', () => {
//   gracefulShutdown('nodemon restart', () => {
//     process.kill(process.pid, 'SIGUSR2');
//   });
// });

// // For app termination
// process.on('SIGINT', () => {
//   gracefulShutdown('app termination', () => {
//     process.exit(0);
//   });
// });

const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://nanibabunalli:123456au@cluster0.yzl5k.mongodb.net/Pharma-locater';
//const dbURI = 'mongodb://localhost/pharma-locator'; // Your MongoDB connection URI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', err => {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Close connection on process termination
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});
