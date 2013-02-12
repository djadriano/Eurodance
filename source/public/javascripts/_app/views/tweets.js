//= require _app/templates/tweets

EURODANCECOMBR.TweetsView = Backbone.View.extend({

  el         : '.artist_navigation_content'
  , template : JST[ '_app/templates/tweets' ]

  , events : {
    'click .next_tweets' : 'see_more'
  }

  , initialize : function() {

    _.bindAll( this, 'render', 'see_more' );

    this.listenTo( this.model, 'change:next_page', this.pagination  );

    this.collection.on( 'add', this.render );

    this.collection.url = this.model.get( 'collection_url' ) + '?callback=?';

    this.model.set({ has_render : false });

    this.collection.fetch({
      data : {
        q                  : '&#34;' + this.options.artist + '&#34;'
        , rpp              : 20
        , include_entities : 'true'
        , result_type      : 'mixed'
      }
    });

  }

  // render the results
  , render : function( model ) {

    var data_to_template = model.toJSON()
      , el_list          = $( '.artist_tweets_list' );

    // set the pagination value
    this.model.set({ next_page : data_to_template.next_page });

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

    console.log(this.model.get( 'collection_url' ) + this.model.get( 'next_page' ) + '&callback=?');

    // this.collection.url = this.model.get( 'collection_url' ) + this.model.get( 'next_page' ) + '&callback=?';
    // this.collection.fetch();

  }

  , pagination : function() {

    console.log(this.model.get( 'next_page' ));

    // if don't have the next page hide the next button
    if( typeof this.model.get( 'next_page' ) === 'undefined' ) {
      this.$( '.next_tweets' ).hide();
    }

  }

  , update_content : function( el, data_to_template ) {
    el.html( this.template( { data : data_to_template } ) );
  }

  , append_content : function( el, data_to_template ) {
    el.append( this.template( { data : data_to_template } ) );
  }

});