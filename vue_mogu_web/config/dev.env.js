'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',

  VUE_MOGU_WEB: '"http://101.34.67.170:9527"',
  PICTURE_API: '"http://101.34.67.170:8607/mogu-picture"',
	WEB_API: '"http://101.34.67.170:8607/mogu-web"',
  SEARCH_API: '"http://101.34.67.170:8607/mogu-search"',

})
