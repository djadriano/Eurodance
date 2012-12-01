//= require _app/templates/photos

EURODANCECOMBR.PhotosView = Backbone.View.extend({

  el                : '.artist_photos'
  , pages_total     : 0
  , items_per_page  : 15
  , current_page    : 0
  , template        : JST[ '_app/templates/photos' ]
  , events          : {
    'click .next'   : 'see_more'
  }

  , initialize   : function() {

    var self = this;

    _.bindAll( this, 'render', 'see_more' );

    this.collection.on( 'add', this.render );

    this.collection.fetch({
      data : { 
        name    : self.options.artist
        , start : 0
      }
    });

  }

  , render : function( model ) {

    var data_to_template = model.toJSON();

    this.pages_total === 0 ? this.pages_total = ( Math.ceil( data_to_template.total / 20 ) - 1 ) : this.pages_total = this.pages_total;

    if( this.pages_total == ( this.current_page + 1 ) ) {
      this.$( '.next' ).hide();
    }

    $( '.artist_photos_list' ).append( this.template( { data : data_to_template } ) );

  }

  , see_more : function( evt ) {
    
    evt.preventDefault();

    this.current_page++;

    this.collection.fetch({
      data : { 
        name    : this.options.artist
        , start : ( this.items_per_page * this.current_page )
      }
    });

  }  

});