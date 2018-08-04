const assert = require("assert");
//v1 tests
describe('fileParse', function() {
  it('should list ALL files tracked by git');
  it('should list ALL folders');
  it('should list top level folders');
});

// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function(){
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });

describe('colorAssign', function() {
  it('should be able to permute colors given a primary one');
  it('should assign a color to every top level folder');
  it('should assign a permutation of that color to every file within that folder');
  it('should write a settings file to the root level directory');
});

describe('log', function() {
  it('should log');
  it('should log in the assigned colors');
  it('should log logs from files not in the settings file');
  it('should assign colors to files not in the settings file');
});