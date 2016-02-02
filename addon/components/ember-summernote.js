import Ember from 'ember';
import layout from '../templates/components/ember-summernote';
import Summernote from 'ember-summernote/components/ember-summernote';

const { $, on } = Ember;

export default Ember.Component.extend({
  layout: layout,
  postContent: "Please Work",
  height: 200,
  placeholder: null,

  destroySummernote: on('willDestroyElement', function() {
    this.$('#summernote').destroy();
  }),

  setupSummernote: on('didInsertElement', function() {
    let summernote = new Summernote();
    let height = this.get('height');
    let placeholder = this.get('placeholder');

    this.$('#summernote').summernote({
      height: height,
      placeholder: placeholder,
      toolbar: [
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['fontsize', ['fontsize']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['height', ['height']],
        ['insert', ['link']],
        ['table', ['table']],
        ['help', ['help']]
      ]
    });

    let content = this.get('content');
  }),

  keyUp: function() {
    this.send('updateContent');
  },

  click: function() {
    this.send('updateContent');
  },

  actions: {
    updateContent() {
      var content = this.$('.note-editable').html();
      this.set('content', content);
    }
  },
});
