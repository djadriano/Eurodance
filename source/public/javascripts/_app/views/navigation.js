EURODANCECOMBR.NavigationView = Backbone.View.extend({

  el : '.artist_navigation_links'

  , events : {
    'click .artist_navigation_links_mixes'    : 'show_mixes'
    , 'click .artist_navigation_links_videos' : 'show_videos'
    , 'click .artist_navigation_links_photos' : 'show_photos'
    , 'click .artist_navigation_links_tweets' : 'show_tweets'
    , 'click .artist_navigation_links_mp3'    : 'show_mp3'
  }

  , initialize : function() {
    _.bindAll( this, 'show_mixes', 'show_videos', 'show_photos', 'show_tweets', 'show_mp3', 'remove_active_class_of_items', 'add_active_class_item' );
  }

  , show_mixes : function( evt ) {

    evt.preventDefault();

    this.remove_active_class_of_items();
    this.add_active_class_item( evt );

    // undelegate all events of last view instantiated
    if( window.mixes_view ) {
       window.mixes_view.undelegateEvents();
    }

    window.mixes_view = new EURODANCECOMBR.MixesView({
      model        : new EURODANCECOMBR.MixesModel
      , collection : new EURODANCECOMBR.MixesCollection
      , artist     : this.options.artist
    });

  }

  , show_videos : function( evt ) {

    evt.preventDefault();

    this.remove_active_class_of_items();
    this.add_active_class_item( evt );

    // undelegate all events of last view instantiated
    if( window.videos_view ) {
       window.videos_view.undelegateEvents();
    }

    window.videos_view = new EURODANCECOMBR.VideosView({
      model        : new EURODANCECOMBR.VideosModel
      , collection : new EURODANCECOMBR.VideosCollection
      , artist     : this.options.artist
    });

  }

  , show_photos : function( evt ) {

    evt.preventDefault();

    this.remove_active_class_of_items();
    this.add_active_class_item( evt );

    // undelegate all events of last view instantiated
    if( window.photos_view ) {
       window.photos_view.undelegateEvents();
    }

    window.photos_view = new EURODANCECOMBR.PhotosView({
      model        : new EURODANCECOMBR.PhotosModel
      , collection : new EURODANCECOMBR.PhotosCollection
      , artist     : this.options.artist
    });

  }

  , show_tweets : function( evt ) {

    evt.preventDefault();

    this.remove_active_class_of_items();
    this.add_active_class_item( evt );

    // undelegate all events of last view instantiated
    if( window.tweets_view ) {
       window.tweets_view.undelegateEvents();
    }

    window.tweets_view = new EURODANCECOMBR.TweetsView({
      model        : new EURODANCECOMBR.TweetsModel
      , collection : new EURODANCECOMBR.TweetsCollection
      , artist     : this.options.artist
    });

  }

  , show_mp3 : function( evt ) {

    evt.preventDefault();

    this.remove_active_class_of_items();
    this.add_active_class_item( evt );

    // undelegate all events of last view instantiated
    if( window.mp3_view ) {
       window.mp3_view.undelegateEvents();
    }

    window.mp3_view = new EURODANCECOMBR.Mp3View({
      model        : new EURODANCECOMBR.Mp3Model
      , collection : new EURODANCECOMBR.Mp3Collection
      , artist     : this.options.artist
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