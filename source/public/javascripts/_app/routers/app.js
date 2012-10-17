EURODANCECOMBR.Routes = Backbone.Router.extend({

  routes: {
    "!/artist/:query" : "artist"
  },

  artist : function(a) {
    console.log(a);
  }

});