import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('scientists');
  this.route('programmers');
  this.route('about', function() {
    this.route('us');
  });
  this.route('contact', {
    path: '/getting-in-touch'
  });
});
