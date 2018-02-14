import { toUpper } from '../src/utils/string.js';

describe('testing string utils', function () {
  it('should return LALA', function () {
    var str = 'lala';
    var result = toUpper(str);
    expect(result).toEqual('LALA');
  });
});