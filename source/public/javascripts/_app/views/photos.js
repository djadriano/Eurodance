//= require _app/templates/photos

EURODANCECOMBR.PhotosView = Backbone.View.extend({

  el                : '.artist_navigation_content'
  , template        : JST[ '_app/templates/photos' ]

  , events : {
    'click .next_photos' : 'see_more'
  }

  , initialize   : function() {

    _.bindAll( this, 'render', 'see_more' );

    this.collection.on( 'add', this.render );

    this.model.set({ has_render : false });

    this.collection.fetch({
      data : {
        name    : this.options.artist
        , start : 0
      }
    });

  }

  , render : function( model ) {

    var data_to_template = model.toJSON()
      , el_list          = $( '.artist_photos_list' );

    // set the pagination value
    if( this.model.get( 'pages_total' ) === 0 ) {
      this.model.set({ pages_total : ( Math.ceil( data_to_template.total / 20 ) - 1 ) });
    }

    // check if is update content or append content
    if( this.model.get( 'has_render' ) === false ) {

      data_to_template = $.extend( {}, data_to_template, { action : 'add' } );
      this.update_content( this.$el, data_to_template );

      this.model.set({ has_render : true });

    } else {

      data_to_template = $.extend( {}, data_to_template, { action : 'update' } );
      this.append_content( el_list, data_to_template );

    }

  }

  , see_more : function( evt ) {

    evt.preventDefault();

    this.model.set({ current_page : ( this.model.get( 'current_page' ) + 1 ) });

    // if don't have the next page hide the next button
    if( this.model.get( 'pages_total' ) == ( this.model.get( 'current_page' ) + 1 ) ) {
      this.$( '.next_photos' ).hide();
    }

    this.collection.fetch({
      data : {
        name    : this.options.artist
        , start : ( this.model.get( 'items_per_page' ) * ( this.model.get( 'current_page' ) + 1 ) )
      }
    });

  }

  , update_content : function( el, data_to_template ) {

    this.$( '.next_photos' ).show();
    el.html( this.template( { data : data_to_template } ) );

  }

  , append_content : function( el, data_to_template ) {
    el.append( this.template( { data : data_to_template } ) );
  }

});