//= require _app/templates/mixes

EURODANCECOMBR.MixesView = Backbone.View.extend({

  // set the variables
  el          : '.artist_navigation_content'
  , next_href : ''
  , template  : JST[ '_app/templates/mixes' ]

  // set the events
  , events : {
    'click .next' : 'see_more'
  }

  // constructor
  , initialize : function() {

    _.bindAll( this, 'render', 'see_more' );

    this.has_render = false;

    this.collection.on( 'add', this.render );

    this.collection.fetch({
      data : { q : this.options.artist }
    });

    this.$( '.next' ).show();

  }

  // render the results
  , render : function( model ) {

    var data_to_template = model.toJSON()
      , el_list          = $( '.artist_mixes_list' );

    // if have the next page update the next_href variable
    typeof data_to_template.next_href != 'undefined' ? this.next_href = data_to_template.next_href : this.next_href = this.next_href;

    // check if is update content or append content
    if( this.has_render === false ) {

      data_to_template = $.extend( {}, data_to_template, { action : 'add' } );
      this.update_content( this.$el, data_to_template );

    } else {

      data_to_template = $.extend( {}, data_to_template, { action : 'update' } );
      this.append_content( el_list, data_to_template );

    }

    // if don't have the next page hide the next button
    if( typeof data_to_template.next_href === 'undefined' ) {
      this.$( '.next' ).hide();
    }

    // update the has_render variable
    this.has_render === false ? this.has_render = true : this.has_render;

  }

  // function for get more results
  , see_more : function( evt ) {

    evt.preventDefault();

    this.collection.url = this.next_href;
    this.collection.fetch();

  }

  , update_content : function( el, data_to_template ) {
    el.html( this.template( { data : data_to_template } ) );
  }

  , append_content : function( el, data_to_template ) {
    el.append( this.template( { data : data_to_template } ) );
  }

});