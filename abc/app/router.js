import Ember from 'ember';
import config from './config/environment';
//This line imports the Spree Router.
import spreeRouter from 'spree-ember-storefront/router';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
    spreeRouter(this, {
        mountPath:    '/spree',
        cartPath:     'cart',
        productsPath: 'products',
        checkoutPath: 'checkout'
      });

});
