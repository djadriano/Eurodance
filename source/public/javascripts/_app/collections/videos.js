EURODANCECOMBR.VideosCollection = Backbone.Collection.extend({

  url : 'http://developer.echonest.com/api/v4/artist/video?api_key=HXWPESNZ5W478MK7U&format=json&start=0'

  , parse : function( response ) {
    this.add( [ response.response ] );
  }

});