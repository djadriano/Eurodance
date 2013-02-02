//= require _app/templates/tweets

EURODANCECOMBR.TweetsView = Backbone.View.extend({

  el               : '.artist_tweets'
  , next_page      : ''
  , template       : JST[ '_app/templates/tweets' ]
  , collection_url : 'http://search.twitter.com/search.json'

  , events : {
    'click .next' : 'see_more'
  }

  , initialize : function() {

    _.bindAll( this, 'render', 'see_more' );

    this.collection.on( 'add', this.render );

    this.collection.url = this.collection_url + '?callback=?'

    this.collection.fetch({
      data : {
        q                  : '&#34;' + this.options.artist + '&#34;'
        , rpp              : 20
        , include_entities : 'true'
        , result_type      : 'mixed'
      }
    });

  }

  , render : function( model ) {

    var data_to_template = model.toJSON();

    typeof data_to_template.next_page != 'undefined' ? this.next_page = data_to_template.next_page : this.$( '.next' ).hide();

    $( '.artist_tweets_list' ).append( this.template( { data : data_to_template } ) );

  }

  , see_more : function( evt ) {

    evt.preventDefault();

    this.collection.url = this.collection_url + this.next_page + '&callback=?';
    this.collection.fetch();

  }

});