var BeerView = Backbone.View.extend({
  // tagName:  'div', // the default for tagName is 'div'

  template: Handlebars.compile($('#beer-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this
  }
});


// TodoView = Backbone.View.extend({
//   //... is a list tag.
//   tagName:  'li',
//
//   // Cache the template function for a single item.
//   template: Handlebars.compile($('#item-template').html()),
//
//   render: function () {
//     this.$el.html(this.template(this.model.toJSON()));
//
//     return this;
