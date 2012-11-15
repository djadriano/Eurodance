EURODANCECOMBR.CardsCollection = Backbone.Collection.extend({

  url : 'http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=eurodance&api_key=4959ac7ccf2055437d47a70303cc0ee0&format=json&limit=10'

  , parse : function( response ) {
    this.add( [ response.topartists.artist ] );
  }

});