exports.config = {
  files: {
    stylesheets: {
      joinTo: 'css/app.css',
      order: {
        before: 'frontend/styles/reset.css',
      },
    },
    javascripts: {
      joinTo: 'js/app.js',
    },
  },
  paths: {
    public: 'web',
    watched: ['frontend'],
  },
};
