//= require _app/templates/mixes

EURODANCECOMBR.MixesView = Backbone.View.extend({

  // set the variables
  el          : '.artist_navigation_content'
  , template  : JST[ '_app/templates/mixes' ]

  // set the events
  , events : {
    'click .next_mixes' : 'see_more'
  }

  // constructor
  , initialize : function() {

    _.bindAll( this, 'render', 'see_more', 'pagination' );

    this.listenTo( this.model, 'change:pagination', this.pagination  );

    this.collection.on( 'add', this.render );

    this.model.set({ has_render : false });

    this.collection.fetch({
      data : { q : this.options.artist }
    });

  }

  // render the results
  , render : function( model ) {

    var data_to_template = model.toJSON()
      , el_list          = $( '.artist_mixes_list' );

    // set the pagination value
    this.model.set({ pagination : data_to_template.next_href });

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

  // function for get more results
  , see_more : function( evt ) {

    evt.preventDefault();

    this.collection.url = this.model.get( 'pagination' );
    this.collection.fetch();

  }

  , pagination : function() {

    // if don't have the next page hide the next button
    if( typeof this.model.get( 'pagination' ) === 'undefined' ) {
      this.$( '.next_mixes' ).hide();
    }

  }

  , update_content : function( el, data_to_template ) {
    el.html( this.template( { data : data_to_template } ) );
  }

  , append_content : function( el, data_to_template ) {
    el.append( this.template( { data : data_to_template } ) );
  }

});