EURODANCECOMBR.Routes = Backbone.Router.extend({

  routes: {
    "!/:query" : "artist"
  },

  artist : function( name ) {
    new EURODANCECOMBR.DescriptionView({
      collection : new EURODANCECOMBR.DescriptionCollection(),
      artist     : name
    });
  }

});