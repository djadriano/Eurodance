//= require _app/templates/teste

EURODANCECOMBR.IndexView = Backbone.View.extend({

  template: JST[ '_app/templates/teste' ],

  initialize : function() {
    $( 'body' ).append( this.template( { name : 'Adriano' } ) );
  }

});