//= require _app/templates/mixes

EURODANCECOMBR.MixesView = Backbone.View.extend({

  el          : '.artist_mixes'
  , next_href : ''
  , template  : JST[ '_app/templates/mixes' ]

  , events : {
    'click .next' : 'see_more'
  }

  , initialize : function() {

    _.bindAll( this, 'render', 'see_more' );

    this.collection.on( 'add', this.render );
    this.collection.fetch({
      data : { q : this.options.artist }
    });

  }

  , render : function( model ) {

    var data_to_template = model.toJSON();

    typeof data_to_template.next_href != 'undefined' ? this.next_href = data_to_template.next_href : this.$( '.next' ).hide();

    $( '.artist_mixes_list' ).append( this.template( { data : data_to_template } ) );    
  }

  , see_more : function( evt ) {
    
    evt.preventDefault();

    this.collection.url = this.next_href;
    this.collection.fetch();

  }

});