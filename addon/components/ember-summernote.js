/* global Summernote */
import Ember from 'ember';
import layout from '../templates/components/ember-summernote';
// import Summernote from 'summernote';

const { $ } = Ember;

export default Ember.Component.extend({
  layout: layout,

  setupSummernote: Ember.on('didInsertElement', function() {
    let summernote = new Summernote();
  })
});
