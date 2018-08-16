var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      beers: new BeersCollection(),

      current_beer: null,

      // either true or false
      show_reviews: false
    }
  }
});
