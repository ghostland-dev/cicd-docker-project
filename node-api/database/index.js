const mongoose = require('mongoose');

if (process.env.NODE_ENV === 'production') {
  mongoose
    .connect(
      '***REMOVED***'
    )
    .then(() => {
      console.info('Connected [DB PROD] !');
    })
    .catch((e) => console.error(e));
} else {
  const { MongoMemoryServer } = require('mongodb-memory-server');

  MongoMemoryServer.create().then(async (mongo) => {
    const uri = mongo.getUri();
    await mongoose.connect(uri);
    console.info('Connected [DB test] !');
  });
}
