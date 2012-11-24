//= require "_vendors/core/jquery"
//= require "_vendors/core/underscore"
//= require "_vendors/core/json2"
//= require "_vendors/core/backbone"

//= require "_vendors/shared/mixins"

//= require "_app/collections/cards"
//= require "_app/views/cards"

//= require "_app/collections/description"
//= require "_app/views/description"

//= require "_app/collections/mixes"
//= require "_app/views/mixes"

//= require "_app/collections/videos"
//= require "_app/views/videos"

//= require "_app/collections/mp3"
//= require "_app/views/mp3"

//= require "_app/collections/photos"
//= require "_app/views/photos"

//= require "_app/collections/tweets"
//= require "_app/views/tweets"

//= require "_app/routers/app"

//= require_self

$(function() {

  var artist_param = 'taleesa';

  // new EURODANCECOMBR.CardsView({
  //   collection : new EURODANCECOMBR.CardsCollection
  // });

  new EURODANCECOMBR.DescriptionView({
    collection : new EURODANCECOMBR.DescriptionCollection
    , artist   : artist_param
  });

  // new EURODANCECOMBR.MixesView({
  //   collection : new EURODANCECOMBR.MixesCollection
  //   , artist   : artist_param
  // });

  // new EURODANCECOMBR.VideosView({
  //   collection : new EURODANCECOMBR.VideosCollection
  //   , artist   : artist_param
  // });

  // new EURODANCECOMBR.PhotosView({
  //   collection : new EURODANCECOMBR.PhotosCollection
  //   , artist   : artist_param
  // });

  // new EURODANCECOMBR.TweetsView({ 
  //   collection : new EURODANCECOMBR.TweetsCollection
  //   , artist : artist_param 
  // });

  // new EURODANCECOMBR.Mp3View({
  //   collection : new EURODANCECOMBR.Mp3Collection
  //   , artist   : artist_param
  // });

});