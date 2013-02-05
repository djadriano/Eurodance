//= require "_vendors/shared/mixins"

//= require "_app/collections/cards"
//= require "_app/views/cards"

//= require "_app/views/index"

//= require_self

$(function() {
  new EURODANCECOMBR.CardsView({
    collection : new EURODANCECOMBR.CardsCollection
  });
});