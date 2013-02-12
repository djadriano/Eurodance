EURODANCECOMBR.VideosCollection = Backbone.Collection.extend({

  url : 'http://developer.echonest.com/api/v4/artist/video?api_key=HXWPESNZ5W478MK7U&format=json&results=15'

  , parse : function( response ) {
    this.add( [ response.response ] );
  }

});