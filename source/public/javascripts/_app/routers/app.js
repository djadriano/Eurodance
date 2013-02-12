EURODANCECOMBR.Routes = Backbone.Router.extend({

  routes: {
    "!/:query" : "artist"
  },

  artist : function( name ) {

    // undelegate all events of last view instantiated
    if( window.navigation_view ) {
       window.navigation_view.undelegateEvents();
    }

    window.navigation_view = new EURODANCECOMBR.NavigationView({ artist : name });

    new EURODANCECOMBR.DescriptionView({
      collection : new EURODANCECOMBR.DescriptionCollection(),
      artist     : name
    });

    // undelegate all events of last view instantiated
    if( window.mixes_view ) {
       window.mixes_view.undelegateEvents();
    }

    window.mixes_view = new EURODANCECOMBR.MixesView({
      model        : new EURODANCECOMBR.MixesModel
      , collection : new EURODANCECOMBR.MixesCollection
      , artist     : name
    });

  }

});