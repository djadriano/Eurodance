//= require _app/templates/cards

EURODANCECOMBR.CardsView = Backbone.View.extend({

  el : '.artists_preview'

  , current_page : 1

  , template: JST[ '_app/templates/cards' ]

  , events : {
    'click .next' : 'see_more'
  }

  , initialize : function() {

    _.bindAll( this, 'render', 'see_more' );

    this.collection.on( 'add', this.render );
    this.collection.fetch({
      data : {
        page    : this.current_page
        , limit : 30
      }
    });

  }

  , render : function( model ) {
    $( '.artists_preview_list' ).append( this.template( { data : model.toJSON() } ) );
  }

  , see_more : function( evt ) {

    evt.preventDefault();

    this.current_page++;

    this.collection.fetch({
      data : {
        page    : this.current_page
        , limit : 30
      }
    });

  }

});