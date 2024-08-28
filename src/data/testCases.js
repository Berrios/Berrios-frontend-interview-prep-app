export const testCases = {
  1: `
describe('reverseWords', () => {
  test('reverses multiple words', () => {
    expect(reverseWords("Hello World JavaScript")).toBe("JavaScript World Hello");
  });
  test('reverses multiple single-letter words', () => {
    expect(reverseWords("a b c d")).toBe("d c b a");
  });
  test('handles single word', () => {
    expect(reverseWords("Single")).toBe("Single");
  });
});
`,
  2: `
describe('getOddSquares', () => {
  test('returns odd squares from mixed array', () => {
    expect(getOddSquares([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 9, 25, 49, 81]);
  });
  test('returns empty array for even numbers', () => {
    expect(getOddSquares([2, 4, 6, 8, 10])).toEqual([]);
  });
  test('returns all squares for odd numbers', () => {
    expect(getOddSquares([1, 3, 5, 7, 9])).toEqual([1, 9, 25, 49, 81]);
  });
});
`,
  3: `
describe('countOccurrences', () => {
  test('counts occurrences in mixed array', () => {
    expect(countOccurrences(["apple", "banana", "apple", "cherry", "banana", "date"]))
      .toEqual({ apple: 2, banana: 2, cherry: 1, date: 1 });
  });
  test('counts occurrences with repeated elements', () => {
    expect(countOccurrences(["a", "b", "c", "a", "b", "a"]))
      .toEqual({ a: 3, b: 2, c: 1 });
  });
  test('handles single element array', () => {
    expect(countOccurrences(["unique"])).toEqual({ unique: 1 });
  });
});
`,
  4: `
describe('findMaxSum', () => {
  test('finds max sum in array with positive numbers', () => {
    expect(findMaxSum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
  });
  test('finds max sum in array with large numbers', () => {
    expect(findMaxSum([100, 200, 300, 400], 2)).toBe(700);
  });
  test('finds max sum when k is 1', () => {
    expect(findMaxSum([1, 4, 2, 10, 23, 3, 1, 0, 20], 1)).toBe(23);
  });
});
`,
  5: `
describe('rotateArray', () => {
  test('rotates array to the right', () => {
    expect(rotateArray([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
  });
  test('rotates array by 1 position', () => {
    expect(rotateArray([1, 2, 3], 1)).toEqual([3, 1, 2]);
  });
  test('handles rotation equal to array length', () => {
    expect(rotateArray([1, 2, 3, 4, 5], 5)).toEqual([1, 2, 3, 4, 5]);
  });
});
`,
  6: `
describe('insertArray', () => {
  test('inserts array in the middle', () => {
    expect(insertArray([1, 2, 3, 4, 5, 6, 7], 3, [10, 11, 12])).toEqual([1, 2, 10, 11, 12, 6, 7]);
  });
  test('inserts array near the beginning', () => {
    expect(insertArray([1, 2, 3, 4, 5], 2, [10, 20])).toEqual([1, 10, 20, 4, 5]);
  });
  test('handles insertion beyond array length', () => {
    expect(insertArray([1, 2, 3], 4, [10])).toEqual([1, 2, 3]);
  });
});
`,
  7: `
describe('mergeAndSort', () => {
  test('merges and sorts multiple arrays', () => {
    expect(mergeAndSort([[3, 2], [1, 4, 5], [6]])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test('merges and sorts arrays with single elements', () => {
    expect(mergeAndSort([[1], [2], [3], [4], [5]])).toEqual([1, 2, 3, 4, 5]);
  });
  test('handles arrays with duplicate elements', () => {
    expect(mergeAndSort([[5, 4], [3], [2, 1]])).toEqual([1, 2, 3, 4, 5]);
  });
});
`,
  8: `
describe('groupByAge', () => {
  test('groups people by age', () => {
    const input = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 25 },
      { name: "David", age: 30 }
    ];
    const expected = {
      25: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }],
      30: [{ name: "Bob", age: 30 }, { name: "David", age: 30 }]
    };
    expect(groupByAge(input)).toEqual(expected);
  });
  test('handles single age group', () => {
    const input = [
      { name: "Eve", age: 35 },
      { name: "Frank", age: 35 }
    ];
    const expected = {
      35: [{ name: "Eve", age: 35 }, { name: "Frank", age: 35 }]
    };
    expect(groupByAge(input)).toEqual(expected);
  });
  test('handles single person', () => {
    const input = [{ name: "Grace", age: 40 }];
    const expected = { 40: [{ name: "Grace", age: 40 }] };
    expect(groupByAge(input)).toEqual(expected);
  });
});
`,
  9: `
describe('removeDuplicates', () => {
  test('removes duplicates from mixed array', () => {
    expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
  test('handles array with all duplicates', () => {
    expect(removeDuplicates([1, 1, 1, 1, 1])).toEqual([1]);
  });
  test('handles array with no duplicates', () => {
    expect(removeDuplicates([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});
`,
  10: `
describe('chunkArray', () => {
  test('chunks array into groups of specified size', () => {
    expect(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]]);
  });
  test('chunks array with remainder', () => {
    expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });
  test('chunks array into individual elements', () => {
    expect(chunkArray([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });
});
`,
  11: `
describe('isPalindrome', () => {
  test('identifies palindrome with spaces and punctuation', () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });
  test('identifies non-palindrome', () => {
    expect(isPalindrome("race a car")).toBe(false);
  });
  test('identifies palindrome with mixed case', () => {
    expect(isPalindrome("Was it a car or a cat I saw?")).toBe(true);
  });
});
`,
  12: `
describe('capitalizeWords', () => {
  test('capitalizes all words', () => {
    expect(capitalizeWords("hello world")).toBe("Hello World");
  });
  test('capitalizes words with existing capitals', () => {
    expect(capitalizeWords("i love javascript")).toBe("I Love Javascript");
  });
  test('handles all uppercase input', () => {
    expect(capitalizeWords("THE QUICK BROWN FOX")).toBe("The Quick Brown Fox");
  });
});
`,
  13: `
describe('padString', () => {
  test('pads string with spaces', () => {
    expect(padString("Hello", 10)).toBe("Hello     ");
  });
  test('truncates string if longer than length', () => {
    expect(padString("JavaScript", 6)).toBe("JavaSc");
  });
  test('returns string as is if length matches', () => {
    expect(padString("AI", 2)).toBe("AI");
  });
});
`,
  14: `
describe('findMaxNumber', () => {
  test('finds max in positive number array', () => {
    expect(findMaxNumber([10, 5, 8, 12, 3])).toBe(12);
  });
  test('finds max in negative number array', () => {
    expect(findMaxNumber([-1, -5, -2])).toBe(-1);
  });
  test('handles array with duplicate max', () => {
    expect(findMaxNumber([100, 100, 100])).toBe(100);
  });
});
`,
  15: `
describe('randomNumberInRange', () => {
  test('generates number within range', () => {
    const result = randomNumberInRange(1, 10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
  });
  test('handles same min and max', () => {
    expect(randomNumberInRange(5, 5)).toBe(5);
  });
  test('handles negative range', () => {
    const result = randomNumberInRange(-10, 0);
    expect(result).toBeGreaterThanOrEqual(-10);
    expect(result).toBeLessThanOrEqual(0);
  });
});
`
};

export default testCases;