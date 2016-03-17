var queryStub = {
  "Ween":{
    "id":"ween",
    "name":"Ween"
  }
};

export default DS.Adapter.extend({
  namespace:'/artist',
  findRecord() {

  },
  createRecord() {

  },
  updateRecord() {

  },
  deleteRecord() {

  },
  findAll() {

  },
  queryRecord(store, type, query, recordArray) {
    return new Ember.RSVP.Promise(function(resolve, reject){
      resolve(queryStub[query.query]);
    });
  }
});
