var ReviewsCollection = Backbone.Collection.extend({
  url: 'https://beer-review-api.herokuapp.com/beers',
  model: ReviewModel
});
