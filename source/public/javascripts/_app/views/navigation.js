EURODANCECOMBR.NavigationView = Backbone.View.extend({

  el : '.artist_navigation_links'

  , events : {
    'click .artist_navigation_links_mixes'    : 'show_mixes'
    , 'click .artist_navigation_links_videos' : 'show_videos'
  }

  , initialize : function() {
    _.bindAll( this, 'show_mixes', 'show_videos', 'remove_active_class_of_items', 'add_active_class_item' );
  }

  , show_mixes : function( evt ) {

    evt.preventDefault();

    this.remove_active_class_of_items();
    this.add_active_class_item( evt );

    new EURODANCECOMBR.MixesView({
      collection : new EURODANCECOMBR.MixesCollection
      , artist   : this.options.artist
    });

  }

  , show_videos : function( evt ) {

    evt.preventDefault();

    this.remove_active_class_of_items();
    this.add_active_class_item( evt );

    new EURODANCECOMBR.VideosView({
      collection : new EURODANCECOMBR.VideosCollection
      , artist   : this.options.artist
    });

  }

  , remove_active_class_of_items : function() {
    this.$el.find( '.active' ).removeClass( 'active' );
  }

  , add_active_class_item : function( evt ) {

    var el = $( evt.currentTarget );
    el.addClass( 'active' );

  }

});