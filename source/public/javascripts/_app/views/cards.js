//= require _app/templates/cards

EURODANCECOMBR.CardsView = Backbone.View.extend({

  template: JST[ '_app/templates/cards' ]

  , initialize : function() {

    _.bindAll( this, 'render' );

    this.collection.on( 'add', this.render );
    this.collection.fetch();

  },

  render : function( model ) {
    $( '.artists_preview' ).append( this.template( { data : model.toJSON() } ) );
  }

});