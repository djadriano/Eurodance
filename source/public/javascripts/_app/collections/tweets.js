EURODANCECOMBR.TweetsCollection = Backbone.Collection.extend({

  url : 'http://search.twitter.com/search.json?rpp=20&include_entities=true&result_type=mixed?callback=?'

  , parse : function( response ) {
    this.add( [ response.results ] );
  }

});