EURODANCECOMBR.MixesCollection = Backbone.Collection.extend({

  url : 'http://api.soundcloud.com/tracks.json?client_id=d614588ae977c9792c5211ef5ca27945&linked_partitioning=1&limit=10&tags=eurodance'

  , parse : function( response ) {
    this.add( [ response ] );
  }

});