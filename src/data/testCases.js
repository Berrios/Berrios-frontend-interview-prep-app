export const testCases = {
    1: [
      { input: ["Hello", "World", "JavaScript"], expected: "JavaScript World Hello" },
      { input: ["a", "b", "c", "d"], expected: "d c b a" },
      { input: ["Single"], expected: "Single" }
    ],
    2: [
      { input: [1, 2, 3, 4, 5, 6, 7, 8, 9], expected: [1, 9, 25, 49, 81] },
      { input: [2, 4, 6, 8, 10], expected: [] },
      { input: [1, 3, 5, 7, 9], expected: [1, 9, 25, 49, 81] }
    ],
    3: [
      { 
        input: ["apple", "banana", "apple", "cherry", "banana", "date"],
        expected: { apple: 2, banana: 2, cherry: 1, date: 1 }
      },
      { 
        input: ["a", "b", "c", "a", "b", "a"],
        expected: { a: 3, b: 2, c: 1 }
      },
      { 
        input: ["unique"],
        expected: { unique: 1 }
      }
    ],
    4: [
      { input: [[1, 4, 2, 10, 23, 3, 1, 0, 20], 4], expected: 39 },
      { input: [[100, 200, 300, 400], 2], expected: 700 },
      { input: [[1, 4, 2, 10, 23, 3, 1, 0, 20], 1], expected: 23 }
    ],
    5: [
      { input: [[1, 2, 3, 4, 5], 2], expected: [4, 5, 1, 2, 3] },
      { input: [[1, 2, 3], 1], expected: [3, 1, 2] },
      { input: [[1, 2, 3, 4, 5], 5], expected: [1, 2, 3, 4, 5] }
    ],
    6: [
      { input: [[1, 2, 3, 4, 5, 6, 7], 3, [10, 11, 12]], expected: [1, 2, 10, 11, 12, 6, 7] },
      { input: [[1, 2, 3, 4, 5], 2, [10, 20]], expected: [1, 10, 20, 4, 5] },
      { input: [[1, 2, 3], 4, [10]], expected: [1, 2, 3] }
    ],
    7: [
      { input: [[3, 2], [1, 4, 5], [6]], expected: [1, 2, 3, 4, 5, 6] },
      { input: [[1], [2], [3], [4], [5]], expected: [1, 2, 3, 4, 5] },
      { input: [[5, 4], [3], [2, 1]], expected: [1, 2, 3, 4, 5] }
    ],
    8: [
      { 
        input: [
          { name: "Alice", age: 25 },
          { name: "Bob", age: 30 },
          { name: "Charlie", age: 25 },
          { name: "David", age: 30 }
        ],
        expected: {
          25: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }],
          30: [{ name: "Bob", age: 30 }, { name: "David", age: 30 }]
        }
      },
      { 
        input: [
          { name: "Eve", age: 35 },
          { name: "Frank", age: 35 }
        ],
        expected: {
          35: [{ name: "Eve", age: 35 }, { name: "Frank", age: 35 }]
        }
      },
      { 
        input: [
          { name: "Grace", age: 40 }
        ],
        expected: {
          40: [{ name: "Grace", age: 40 }]
        }
      }
    ],
    9: [
      { input: [1, 2, 2, 3, 4, 4, 5], expected: [1, 2, 3, 4, 5] },
      { input: [1, 1, 1, 1, 1], expected: [1] },
      { input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] }
    ],
    10: [
      { input: [[1, 2, 3, 4, 5, 6, 7, 8], 3], expected: [[1, 2, 3], [4, 5, 6], [7, 8]] },
      { input: [[1, 2, 3, 4, 5], 2], expected: [[1, 2], [3, 4], [5]] },
      { input: [[1, 2, 3], 1], expected: [[1], [2], [3]] }
    ],
    11: [
      { input: "A man, a plan, a canal: Panama", expected: true },
      { input: "race a car", expected: false },
      { input: "Was it a car or a cat I saw?", expected: true }
    ],
    12: [
      { input: "hello world", expected: "Hello World" },
      { input: "i love javascript", expected: "I Love Javascript" },
      { input: "THE QUICK BROWN FOX", expected: "The Quick Brown Fox" }
    ],
    13: [
      { input: ["Hello", 10], expected: "Hello     " },
      { input: ["JavaScript", 6], expected: "JavaSc" },
      { input: ["AI", 5], expected: "AI   " }
    ],
    14: [
      { input: [10, 5, 8, 12, 3], expected: 12 },
      { input: [-1, -5, -2], expected: -1 },
      { input: [100, 100, 100], expected: 100 }
    ],
    15: [
      { input: [1, 10], expected: (result) => result >= 1 && result <= 10 },
      { input: [5, 5], expected: 5 },
      { input: [-10, 0], expected: (result) => result >= -10 && result <= 0 }
    ]
  };