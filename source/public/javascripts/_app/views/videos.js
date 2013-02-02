//= require _app/templates/videos

EURODANCECOMBR.VideosView = Backbone.View.extend({

  // set the variables
  el           : '.artist_navigation_content'
  , template   : JST[ '_app/templates/videos' ]
  , initialize : function() {

    var self = this;

    _.bindAll( this, 'render' );

    this.collection.on( 'add', this.render );
    this.collection.fetch({
      data : { name : self.options.artist }
    });

  }

  , render : function( model ) {
    this.$el.html( this.template( { data : model.toJSON() } ) );
  }

});