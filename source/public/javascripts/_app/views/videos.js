//= require _app/templates/videos

EURODANCECOMBR.VideosView = Backbone.View.extend({

  template     : JST[ '_app/templates/videos' ]
  , initialize : function() {

    var self = this;

    _.bindAll( this, 'render' );

    this.collection.on( 'add', this.render );
    this.collection.fetch({
      data : { name : self.options.artist }
    });

  }

  , render : function( model ) {
    $( '.artists_videos' ).append( this.template( { data : model.toJSON() } ) );    
  }

});