//= require "_app/collections/description"
//= require "_app/views/description"

//= require "_app/models/mixes"
//= require "_app/collections/mixes"
//= require "_app/views/mixes"

//= require "_app/models/videos"
//= require "_app/collections/videos"
//= require "_app/views/videos"

//= require "_app/models/photos"
//= require "_app/collections/photos"
//= require "_app/views/photos"

//= require "_app/models/tweets"
//= require "_app/collections/tweets"
//= require "_app/views/tweets"

//= require "_app/models/mp3"
//= require "_app/collections/mp3"
//= require "_app/views/mp3"

//= require "_app/models/navigation"
//= require "_app/views/navigation"

//= require "_app/routers/app"

//= require_self

$(function() {
  new EURODANCECOMBR.Routes();
  Backbone.history.start();
});

