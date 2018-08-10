const expect = require('expect');

const { isRealString } = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    expect(isRealString({ name: 'pat' })).toBe(false);
  });

  it('should reject string with only spaces', () => {
    expect(isRealString(' ')).toBe(false);
  });

  it('should allo strings with non-space characters', () => {
    expect(isRealString(' bc ')).toBe(true);
  });
});
