//= require _app/templates/mixes

EURODANCECOMBR.MixesView = Backbone.View.extend({

  template     : JST[ '_app/templates/mixes' ]
  , initialize : function() {

    var self = this;

    _.bindAll( this, 'render' );

    this.collection.on( 'add', this.render );
    this.collection.fetch({
      data : { q : self.options.artist }
    });

  }

  , render : function( model ) {
    $( '.artist_mixes' ).append( this.template( { data : model.toJSON() } ) );    
  }

});