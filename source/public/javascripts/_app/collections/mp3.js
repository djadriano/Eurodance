EURODANCECOMBR.Mp3Collection = Backbone.Collection.extend({

  url : 'http://www.4shared.com/v0/files.jsonp?oauth_consumer_key=25fd435c95a8af4a8d50a583c393588f&category=1&offset=0&limit=20&callback=?'

  , parse : function( response ) {
    this.add( [ response.files ] );
  }

});