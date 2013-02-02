//= require "_vendors/core/jquery"
//= require "_vendors/core/underscore"
//= require "_vendors/core/json2"
//= require "_vendors/core/backbone"
//= require "_vendors/shared/mixins"

//= require "_app/views/navigation"

//= require "_app/collections/description"
//= require "_app/views/description"

//= require "_app/collections/mixes"
//= require "_app/views/mixes"

//= require "_app/collections/videos"
//= require "_app/views/videos"

//= require "_app/routers/app"

//= require_self

$(function() {
  new EURODANCECOMBR.Routes();
  Backbone.history.start();
});

