var ReviewModel = Backbone.Model.extend({
  idAttribute: '_id',

  defaults: function () {
    return {
      _id: '',
      text: '',
      note: '',
      name: ''
    }
  }
});
