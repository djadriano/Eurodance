EURODANCECOMBR.VideosCollection = Backbone.Collection.extend({

  url : 'https://gdata.youtube.com/feeds/api/videos/-/music/eurodance?alt=json'

  , parse : function( response ) {
    this.add( [ response.feed.entry ] );
  }

});