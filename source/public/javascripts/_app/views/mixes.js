//= require _app/templates/mixes

EURODANCECOMBR.MixesView = Backbone.View.extend({

  el          : '.artist_mixes'
  , next_href : ''
  , template  : JST[ '_app/templates/mixes' ]

  , events : {
    'click .next' : 'see_more'
  }

  , initialize : function() {

    _.bindAll( this, 'render', 'see_more' );

    this.has_render = false;

    this.$( '.next' ).show();

    this.collection.on( 'add', this.render );

    this.collection.fetch({
      data : { q : this.options.artist }
    });

  }

  , render : function( model ) {

    var data_to_template = model.toJSON()
      , el_mixes_list = this.$( '.artist_mixes_list' );

    typeof data_to_template.next_href != 'undefined' ? this.next_href = data_to_template.next_href : this.$( '.next' ).hide();

    if( this.has_render === false ) {
      this.update_content( el_mixes_list, data_to_template );
    } else {
      this.append_content( el_mixes_list, data_to_template );
    }

    this.has_render === false ? this.has_render = true : this.has_render;

  }

  , see_more : function( evt ) {

    evt.preventDefault();

    this.collection.url = this.next_href;
    this.collection.fetch();

  }

  , update_content : function( el, data_to_template ) {
    el.html( this.template( { data : data_to_template } ) );
  }

  , append_content : function( el, data_to_template ) {
    el.append( this.template( { data : data_to_template } ) );
  }

});