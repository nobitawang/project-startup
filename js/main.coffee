require.config
  baseUrl: 'js/lib'
  paths:
    backbone: 'backbone/backbone'
    underscore: 'underscore/underscore-min'
    jquery: 'jquery/dist/jquery.min'

  shim:
    backbone:
      deps: ['underscore', 'jquery']
      exports: 'Backbone'
