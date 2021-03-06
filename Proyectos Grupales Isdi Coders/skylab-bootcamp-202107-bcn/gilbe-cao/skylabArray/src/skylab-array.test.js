const SkylabArray = require('./skylab-array');

/**
 * GIVEN
 * WHEN
 * THEN
 * AND
 * OR
 */

describe('SkylabArray class', () => {
  let myArray;

  beforeEach(() => {
    myArray = new SkylabArray();
  });

  describe('Given a length property', () => {
    describe('When the object is first created', () => {
      test('Then return 0', () => {
        expect(myArray.length).toBe(0);
      });
    });
  });

  describe('Given a push method', () => {
    describe('When is invoked with Skylab string', () => {
      describe('And the array is empty', () => {
        test('Then return 1', () => {
          expect(myArray.push('Skylab')).toBe(1);
        });
        test('Then myArray[0]=Skylab', () => {
          myArray.push('Skylab');
          expect(myArray[0]).toBe('Skylab');
        });
      });

      describe('And the array.length is 2', () => {
        beforeEach(() => {
          myArray.push('true');
          myArray.push('true');
        });

        test('Then return 3', () => {
          expect(myArray.push('Skylab')).toBe(3);
        });
      });
    });

    describe('When is invoked with [Skylab, mola] string', () => {
      describe('And the array is empty', () => {
        test('Then return 2', () => {
          expect(myArray.push('Skylab', 'mola')).toBe(2);
        });
        test('Then myArray[0]=Skylab', () => {
          myArray.push('Skylab');
          expect(myArray[0]).toBe('Skylab');
        });
        test('Then myArray[1]=mola', () => {
          myArray.push('Skylab', 'mola');
          expect(myArray[1]).toBe('mola');
        });
      });

      describe('And the array.length is 2', () => {
        beforeEach(() => {
          myArray.push('true');
          myArray.push('true');
        });

        test('Then return 4', () => {
          expect(myArray.push('Skylab', 'mola')).toBe(4);
        });
      });
    });
  });

  describe('Given a map method', () => {
    describe('When is invoked', () => {
      let newArray;

      describe('And array is empty', () => {
        // Test scenarios when array is empty
      });

      describe('And array has at least one element', () => {
        beforeEach(() => {
          myArray.push('mola');

          function mapCallback(value) {
            return `Skylab: ${value}`;
          }

          newArray = myArray.map(mapCallback);
        });

        test('Then return a new array', () => {
          expect(myArray).not.toEqual(newArray);
        });

        test('Then return a new array with same length', () => {
          expect(myArray.length).toEqual(newArray.length);
        });

        test('Then newArray[0] should contain myArray[0]', () => {
          expect(newArray[0]).toMatch(myArray[0]);
        });
      });
    });
  });
});
