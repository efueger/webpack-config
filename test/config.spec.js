'use strict';

var expect = require('expect.js'),
    webpackConfig = require('../index');

var Config = webpackConfig.Config;

describe('Config', function () {
    describe('#ctor()', function() {
        it('should accept object', function() {
            var config = new Config({
                foo: 'foo1'
            });

            var obj = config.toPlainObject();

            expect(obj).to.eql({
                foo: 'foo1'
            });
        });
    });

    describe('#merge()', function() {
        it('should do merging correctly', function() {
            var config = new Config({
                foo: 'foo1'
            });

            config.merge({
                foo: 'foo2'
            });

            var obj = config.toPlainObject();

            expect(obj).to.eql({
                foo: 'foo2'
            });
        });

        it('should do deep merging correctly', function() {
            var config = new Config({
                foo: {
                    bar: 'bar1'
                }
            });

            config.merge({
                foo: {
                    bar: 'bar2'
                }
            });

            var obj = config.toPlainObject();

            expect(obj).to.eql({
                foo: {
                    bar: 'bar2'
                }
            });
        });
    });

    describe('#defaults()', function() {
        it('should assign default values correctly', function() {
            var config = new Config({
                foo: 'foo1'
            });

            config.defaults({
                foo: 'foo2'
            });

            var obj = config.toPlainObject();

            expect(obj).to.eql({
                foo: 'foo1'
            });
        });
    });

    describe('#extend()', function() {
        it('should create a new instance', function() {
            var expectedConfig = new Config(),
                actualConfig = expectedConfig.extend();

            expect(expectedConfig).not.to.be(actualConfig);
            expect(actualConfig).to.be.a(Config);
        });
    });

    describe('#toPlainObject()', function() {
        it('should return object', function() {
            var config = new Config({
                    foo: 'foo1'
                }),
                obj = config.toPlainObject();

            expect(obj).to.be.an('object');
        });
    });
});