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

    window.mixes_view.model.set({ artist : name });
  }

});