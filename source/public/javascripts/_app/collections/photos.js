EURODANCECOMBR.PhotosCollection = Backbone.Collection.extend({

  url : 'http://developer.echonest.com/api/v4/artist/images?api_key=HXWPESNZ5W478MK7U&format=json&start=0&license=unknown&results=20'

  , parse : function( response ) {
    this.add( [ response.response ] );
  }

});