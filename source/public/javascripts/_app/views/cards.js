//= require _app/templates/cards

EURODANCECOMBR.CardsView = Backbone.View.extend({

  el : 'body'

  , template: JST[ '_app/templates/cards' ]

  , events : {
    'click .next' : 'see_more'
  }

  , initialize : function() {

    _.bindAll( this, 'render', 'see_more' );

    this.collection.on( 'add', this.render );
    this.collection.fetch({
      data : { 
        page    : Math.floor( ( Math.random()*100 ) +1 )
        , limit : 20
      }
    });

  },

  render : function( model ) {
    $( '.artists_preview' ).append( this.template( { data : model.toJSON() } ) );
  },

  see_more : function() {
    console.log('aaaa');
    this.collection.fetch({
      data : { 
        page    : 2
        , limit : 20
      }
    });
  }

});