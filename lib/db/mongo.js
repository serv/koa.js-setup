var monk = require('monk'),
    wrap = require('co-monk'),
    mongo = {},
    db,
    testData;

mongo = {
  setMongo: function(app) {
    db       = monk(app.config.mongo.url);

    // TODO: Add collections here 1
    testData = wrap(db.get('testData'));
  },

  // TODO: Add collections here 2
  testData: function *() {
    var list = yield testData.find({})
    this.body = list;
  }
};

module.exports = mongo;