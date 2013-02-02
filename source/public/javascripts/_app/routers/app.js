EURODANCECOMBR.Routes = Backbone.Router.extend({

  routes: {
    "!/:query" : "artist"
  },

  artist : function( name ) {
    new EURODANCECOMBR.NavigationView({ artist : name });

    new EURODANCECOMBR.DescriptionView({
      collection : new EURODANCECOMBR.DescriptionCollection(),
      artist     : name
    });

    new EURODANCECOMBR.MixesView({
      collection : new EURODANCECOMBR.MixesCollection
      , artist   : name
    });
  }

});