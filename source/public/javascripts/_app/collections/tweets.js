EURODANCECOMBR.TweetsCollection = Backbone.Collection.extend({

  url : ''

  , parse : function( response ) {
    this.add( [ response ] );
  }

});