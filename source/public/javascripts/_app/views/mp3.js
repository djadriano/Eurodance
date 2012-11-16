//= require _app/templates/mp3

EURODANCECOMBR.Mp3View = Backbone.View.extend({

  template     : JST[ '_app/templates/mp3' ]
  , initialize : function() {

    var self = this;

    _.bindAll( this, 'render' );

    this.collection.on( 'add', this.render );
    this.collection.fetch({
      data : { query : self.options.artist }
    });

  }

  , render : function( model ) {
    $( '.artists_mp3' ).append( this.template( { data : model.toJSON() } ) );    
  }

});