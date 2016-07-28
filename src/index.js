'use strict'
import page from 'page';
require('babel-polyfill'); //Only use if async-await is used

require('./homepage');
require('./character-page');
require('./signup');
require('./signin');
require('./footer');

page();