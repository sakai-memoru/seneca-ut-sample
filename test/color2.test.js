const expect = require('chai').expect;
const Seneca = require('seneca');

function test_seneca(fin){
  return Seneca({log:'test'})
    .test(fin)
    .use(require('../color-plugin'));
}

describe('color plugin',()=>{
  describe('logical unit test',()=>{
    it('should return FF0000 hex code when getting red hex',(done)=>{
      // Arrange
      const seneca = test_seneca(done);
      const rolecmd = {role:'sample',cmd:'getColor'};
      const colorCode = 'red';
      const CONS_RED = 'FF0000';
      const msg = {colorCode:colorCode};
      // Act
      seneca.act(rolecmd,msg,(ignore,result)=>{
        // Assert
        console.log(result.retVal);
        expect(result.retVal).to.equal(CONS_RED);
        done();
      })
    });
  });
});

