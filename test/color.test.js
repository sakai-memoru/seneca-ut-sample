const expect = require('chai').expect;
const getColor = require('../lib/color').getColor;

describe('color#getColor() function',()=>{
  describe('logical unit test',()=>{
    it('should return FF0000 hex code when getting red hex',()=>{
      // Arrange
      const colorCode = 'red';
      const CONS_RED = 'FF0000';
      // Act
      let actual = getColor(colorCode);
      // Assert
      expect(actual).to.equal(CONS_RED);
    });
    it('should return 000000 hex code when false parameter',()=>{
      // Arrange
      const colorCode = 'RED';
      const CONS_BLACK = '000000';
      // Act
      let actual = getColor(colorCode);
      // Assert
      expect(actual).to.equal(CONS_BLACK);
    });
    it('should return 000000 hex code when getting black hex',()=>{
      // Arrange
      const colorCode = 'black';
      const CONS_BLACK = '000000';
      // Act
      let actual = getColor(colorCode);
      // Assert
      expect(actual).to.equal(CONS_BLACK);
    });

  });
});

