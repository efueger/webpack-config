'use strict';

var expect = require('expect.js'),
    Config = require('../lib/config'),
    ConfigFactory = require('../lib/configFactory');

describe('ConfigFactory', function () {
    var configFactory = new ConfigFactory();

    context('#create()', function() {
        it('should create "Config" from "Object"', function() {
            var config = configFactory.create({
                foo: 'foo1'
            });

            expect(config).to.be.a(Object);
            expect(config).to.be.a(Config);
            expect(config.toObject()).to.eql({
                foo: 'foo1'
            });
        });

        it('should create "Config[]" from "Object[]"', function() {
            var configs = configFactory.create([{
                foo: 'foo1'
            }]);

            expect(configs).to.be.a(Array);
            expect(configs).to.have.length(1);
            expect(configs[0]).to.be.a(Config);
            expect(configs[0].toObject()).to.eql({
                foo: 'foo1'
            });
        });

        it('should create "Config" from "Object" via "Function"', function() {
            var config = configFactory.create(function() {
                return {
                    foo: 'foo1'
                };
            });

            expect(config).to.be.a(Object);
            expect(config).to.be.a(Config);
            expect(config.toObject()).to.eql({
                foo: 'foo1'
            });
        });

        it('should create "Config[]" from "Object[]" via "Function"', function() {
            var configs = configFactory.create(function() {
                return [{
                    foo: 'foo1'
                }];
            });

            expect(configs).to.be.a(Array);
            expect(configs).to.have.length(1);
            expect(configs[0]).to.be.a(Config);
            expect(configs[0].toObject()).to.eql({
                foo: 'foo1'
            });
        });

        it('should create "Config" from "Config"', function() {
            var config = configFactory.create(new Config().merge({
                foo: 'foo1'
            }));

            expect(config).to.be.a(Object);
            expect(config).to.be.a(Config);
            expect(config.toObject()).to.eql({
                foo: 'foo1'
            });
        });

        it('should create "Config[]" from "Config[]"', function() {
            var configs = configFactory.create([new Config().merge({
                foo: 'foo1'
            })]);

            expect(configs).to.be.a(Array);
            expect(configs).to.have.length(1);
            expect(configs[0]).to.be.a(Config);
            expect(configs[0].toObject()).to.eql({
                foo: 'foo1'
            });
        });
    });
});
