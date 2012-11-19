//= require _app/templates/tweets

EURODANCECOMBR.TweetsView = Backbone.View.extend({

  template     : JST[ '_app/templates/tweets' ]
  , initialize : function() {

    var self = this;

    _.bindAll( this, 'render' );

    this.collection.on( 'add', this.render );
    this.collection.fetch({
      data : { 
        q  : '&#34;' + self.options.artist + '&#34;'
      }
    });

  }

  , render : function( model ) {
    $( '.artists_tweets' ).append( this.template( { data : model.toJSON() } ) );
  }

});