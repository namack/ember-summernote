module.exports = {
  name: 'ember-summernote',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/bootstrap/dist/js/bootstrap.js');
    app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap-theme.min.css');
    app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.min.css');
    app.import(app.bowerDirectory + '/font-awesome/css/font-awesome.min.css');
    app.import(app.bowerDirectory + '/summernote/dist/summernote.css');
    app.import(app.bowerDirectory + '/summernote/dist/summernote.js');
    app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.ttf', {
      destDir: 'fonts'
    });
    app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.woff', {
      destDir: 'fonts'
    });
    app.import(app.bowerDirectory + '/font-awesome/fonts/fontawesome-webfont.woff2', {
      destDir: 'fonts'
    });
  }
}
