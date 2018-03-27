// Copyright (c) 2015 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

'use strict';

var test = require('tape');
var utils = require('../lib/utils');

test('getHostName can get meaningful results', function testGetHostName(assert) { // eslint-disable-line
    var appName = utils.getServiceName();
    assert.true(appName.length >= 1);
});

test('getLimitedLength can limit hostname length', function testGetLimitedLength(assert) { // eslint-disable-line

    var longHostName = 'a_very_long_host_name_01234567890abcdef_01234567890abcdef' +
        '01234567890abcdef_01234567890abcdef' + '01234567890abcdef_01234567890abcdef' +
        '01234567890abcdef_01234567890abcdef';
    var appNameTruncatedHost = utils.getLimitedLength(longHostName);
    assert.true(appNameTruncatedHost.indexOf(longHostName) < 0);
    assert.true(appNameTruncatedHost.indexOf(longHostName.substr(0, 24)) >= 0);

    assert.end();

});
