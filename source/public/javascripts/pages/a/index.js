//= require "_app/views/navigation"

//= require "_app/collections/description"
//= require "_app/views/description"

//= require "_app/models/mixes"
//= require "_app/collections/mixes"
//= require "_app/views/mixes"

//= require "_app/collections/videos"
//= require "_app/views/videos"

//= require "_app/routers/app"

//= require_self

$(function() {

  window.mixes_view = new EURODANCECOMBR.MixesView({
    collection : new EURODANCECOMBR.MixesCollection
    , model    : new EURODANCECOMBR.MixesModel
  });

  new EURODANCECOMBR.Routes();
  Backbone.history.start();
});

