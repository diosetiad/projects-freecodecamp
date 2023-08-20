const rot13 = require('./caesarsCipher');

describe('cipher tests', ()=>{
  test('SERR PBQR PNZC should decode to FREE CODE CAMP',()=>{
    expect(rot13('SERR PBQR PNZC')).toBe('FREE CODE CAMP');
  });

  test('SERR CVMMN! should decode to FREE PIZZA!',()=>{
    expect(rot13('SERR CVMMN!')).toBe('FREE PIZZA!');
  });

  test('SERR YBIR? should decode to FREE LOVE?',()=>{
    expect(rot13('SERR YBIR?')).toBe('FREE LOVE?');
  });

  test('YNML PNG should not decode to LAZY DOG',()=>{
    expect(rot13('YNML PNG')).not.toBe('LAZY DOG');
  });
});