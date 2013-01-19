//= require _app/templates/description
//= require _app/templates/similar

EURODANCECOMBR.DescriptionView = Backbone.View.extend({

  template           : JST[ '_app/templates/description' ]
  , similar_template : JST[ '_app/templates/similar'     ]
  , initialize       : function() {

    var self = this;

    _.bindAll( this, 'render' );

    this.collection.on( 'add', this.render );
    this.collection.fetch({
      data : {
        artist : self.options.artist
        , lang : EURODANCECOMBR.config.lang
      }
    });

  }

  , render : function( model ) {
    var similar = model.toJSON().similar;

    $( '.artist_bio' ).html( this.template( { data : model.toJSON() } ) );
    $( '.artist_similar' ).append( this.similar_template( { data : similar.artist } ) );
  }

});