module.exports = {
  name: 'ember-summernote',

  included: function(app) {
    this._super.included(app);

    app.import('bower_components/summernote/dist/summernote.min.js');
    app.import('bower_components/summernote/dist/summernote.css');
  }
}
