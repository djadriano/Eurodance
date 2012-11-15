//= require "_vendors/core/jquery"
//= require "_vendors/core/underscore"
//= require "_vendors/core/json2"
//= require "_vendors/core/backbone"

//= require "_vendors/shared/mixins"

//= require "_app/collections/cards"
//= require "_app/views/cards"

//= require "_app/collections/description"
//= require "_app/views/description"

//= require "_app/routers/app"

//= require_self

$(function() {

  // Cards initialize
  new EURODANCECOMBR.CardsView({
    collection : new EURODANCECOMBR.CardsCollection
  });

  // Artist initialize
  new EURODANCECOMBR.DescriptionView({
    collection : new EURODANCECOMBR.DescriptionCollection
    , artist   : 'corona'
  });

});