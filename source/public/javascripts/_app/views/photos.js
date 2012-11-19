//= require _app/templates/photos

EURODANCECOMBR.PhotosView = Backbone.View.extend({

  template     : JST[ '_app/templates/photos' ]
  , initialize : function() {

    var self = this;

    _.bindAll( this, 'render' );

    this.collection.on( 'add', this.render );
    this.collection.fetch({
      data : { 
        name  : self.options.artist
      }
    });

  }

  , render : function( model ) {
    $( '.artists_photos' ).append( this.template( { data : model.toJSON() } ) );
  }

});