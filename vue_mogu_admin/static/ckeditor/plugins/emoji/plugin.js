﻿/*
 Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
(function(){var b=!1;CKEDITOR.plugins.add("emoji",{requires:"autocomplete,textmatch,ajax",beforeInit:function(){CKEDITOR.env.ie&&11>CKEDITOR.env.version||b||(CKEDITOR.document.appendStyleSheet(this.path+"skins/default.css"),b=!0)},init:function(a){CKEDITOR.ajax.load(CKEDITOR.getUrl(a.config.emoji_emojiListUrl||"plugins/emoji/emoji.json"),function(b){function c(){a._.emoji.autocomplete=new CKEDITOR.plugins.autocomplete(a,{textTestCallback:f(),dataCallback:g,itemTemplate:'\x3cli data-id\x3d"{id}" class\x3d"cke_emoji_suggestion_item"\x3e{symbol} {id}\x3c/li\x3e',
outputTemplate:"{symbol}"})}function f(){return function(a){return a.collapsed?CKEDITOR.plugins.textMatch.match(a,h):null}}function h(a,b){var d=a.slice(0,b).match(new RegExp("(?:\\s|^)(:\\S{"+k+"}\\S*)$"));return d?{start:a.indexOf(d[1]),end:b}:null}function g(a,b){var d=a.query.substr(1).toLowerCase(),c=CKEDITOR.tools.array.filter(l,function(a){return-1!==a.id.toLowerCase().indexOf(d)}).sort(function(a,b){var c=a.id.substr(1,d.length)===d,e=b.id.substr(1,d.length)===d;return c&&e||!c&&!e?a.id===
b.id?0:a.id>b.id?1:-1:c?-1:1});b(c)}if(null!==b){void 0===a._.emoji&&(a._.emoji={});void 0===a._.emoji.list&&(a._.emoji.list=JSON.parse(b));var l=a._.emoji.list,k=void 0===a.config.emoji_minChars?2:a.config.emoji_minChars;if("ready"!==a.status)a.once("instanceReady",c);else c()}})}})})();