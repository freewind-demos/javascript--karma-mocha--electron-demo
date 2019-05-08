const {hello} = require('../src/hello');
const {expect} = require('chai');

describe('hello', function () {

  it('should return hello words for a given name', function () {
    expect(hello('karma')).to.equal('Hello, karma!x')
  })

})
