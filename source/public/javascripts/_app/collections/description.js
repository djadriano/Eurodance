EURODANCECOMBR.DescriptionCollection = Backbone.Collection.extend({

  url : 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key=4959ac7ccf2055437d47a70303cc0ee0&format=json'

  , parse : function( response ) {
    this.add( [ response.artist ] );
  }

});