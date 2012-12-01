EURODANCECOMBR.PhotosCollection = Backbone.Collection.extend({

  url : 'http://developer.echonest.com/api/v4/artist/images?api_key=HXWPESNZ5W478MK7U&format=json&license=unknown&results=15'

  , parse : function( response ) {
    this.add( [ response.response ] );
  }

});