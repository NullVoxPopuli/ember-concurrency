export default Ember.Component.extend({
  queryServer: task(function * () {
    yield timeout(10000);
    return 123;
  }),

  actions: {
    fetchResults() {
      this.get('doStuff').perform().then((results) => {
        this.set('results', results);
      });
    }
  }
});

