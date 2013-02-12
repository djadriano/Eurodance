//= require _app/templates/mp3

EURODANCECOMBR.Mp3View = Backbone.View.extend({

  el           : '.artist_navigation_content'
  , template   : JST[ '_app/templates/mp3' ]
  , initialize : function() {

    var self = this;

    _.bindAll( this, 'render' );

    this.collection.on( 'add', this.render );
    this.collection.fetch({
      data : { query : self.options.artist }
    });

  }

  , render : function( model ) {
    this.$el.html( this.template( { data : model.toJSON() } ) );
  }

});