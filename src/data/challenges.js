const challenges = [
    {
      id: 1,
      name: "Reverse and Join",
      section: "Arrays",
      description: "Given an array of strings, reverse the order of the elements and join them into a single string with a space between each word.",
      example: {
        input: '["Hello", "World", "JavaScript"]',
        output: '"JavaScript World Hello"'
      },
      methods: ["reverse()", "join()"],
      initialCode: "function reverseAndJoin(arr) {\n  // Your code here\n}",
      bigONotation: "O(n) where n is the number of elements in the array"
    },
    {
      id: 2,
      name: "Filter and Map",
      section: "Arrays",
      description: "Given an array of numbers, filter out all even numbers, then square the remaining odd numbers.",
      example: {
        input: "[1, 2, 3, 4, 5, 6, 7, 8, 9]",
        output: "[1, 9, 25, 49, 81]"
      },
      methods: ["filter()", "map()"],
      initialCode: "function filterAndMap(arr) {\n  // Your code here\n}",
      bigONotation: "O(n) where n is the number of elements in the array"
    },
    {
      id: 3,
      name: "Reduce to Object",
      section: "Arrays",
      description: "Given an array of strings, create an object where the keys are the strings and the values are the number of times each string appears in the array.",
      example: {
        input: '["apple", "banana", "apple", "cherry", "banana", "date"]',
        output: '{ apple: 2, banana: 2, cherry: 1, date: 1 }'
      },
      methods: ["reduce()"],
      initialCode: "function reduceToObject(arr) {\n  // Your code here\n}",
      bigONotation: "O(n) where n is the number of elements in the array"
    },
    {
      id: 4,
      name: "Sliding Window",
      section: "Arrays",
      description: "Given an array of numbers and a window size k, find the maximum sum of any contiguous subarray of size k.",
      example: {
        input: "[1, 4, 2, 10, 23, 3, 1, 0, 20], k = 4",
        output: "39 (subarray [10, 23, 3, 1])"
      },
      methods: ["slice()"],
      initialCode: "function slidingWindow(arr, k) {\n  // Your code here\n}",
      bigONotation: "O(n) where n is the number of elements in the array"
    },
    {
      id: 5,
      name: "Rotate Array",
      section: "Arrays",
      description: "Given an array and a number k, rotate the array to the right by k steps.",
      example: {
        input: "[1, 2, 3, 4, 5], k = 2",
        output: "[4, 5, 1, 2, 3]"
      },
      methods: ["splice()", "unshift()"],
      initialCode: "function rotateArray(arr, k) {\n  // Your code here\n}",
      bigONotation: "O(n) where n is the number of elements in the array"
    },
    {
      id: 6,
      name: "Find and Replace",
      section: "Arrays",
      description: "Given an array of numbers, find the first occurrence of a specific number and replace it and the next two elements with a given replacement array.",
      example: {
        input: "[1, 2, 3, 4, 5, 6, 7], find: 3, replace: [10, 11, 12]",
        output: "[1, 2, 10, 11, 12, 6, 7]"
      },
      methods: ["indexOf()", "splice()"],
      initialCode: "function findAndReplace(arr, find, replace) {\n  // Your code here\n}",
      bigONotation: "O(n) where n is the number of elements in the array"
    },
    {
      id: 7,
      name: "Flatten and Sort",
      section: "Arrays",
      description: "Given an array of arrays containing numbers, flatten it into a single array and sort the numbers in ascending order.",
      example: {
        input: "[[3, 2], [1, 4, 5], [6]]",
        output: "[1, 2, 3, 4, 5, 6]"
      },
      methods: ["concat() or flat()", "sort()"],
      initialCode: "function flattenAndSort(arr) {\n  // Your code here\n}",
      bigONotation: "O(n log n) where n is the total number of elements across all nested arrays"
    },
    {
      id: 8,
      name: "Group by Property",
      section: "Arrays",
      description: "Given an array of objects representing people, group them by age.",
      example: {
        input: '[{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }, { name: "Charlie", age: 25 }, { name: "David", age: 30 }]',
        output: '{ 25: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }], 30: [{ name: "Bob", age: 30 }, { name: "David", age: 30 }] }'
      },
      methods: ["reduce()"],
      initialCode: "function groupByProperty(arr) {\n  // Your code here\n}",
      bigONotation: "O(n) where n is the number of objects in the array"
    },
    {
      id: 9,
      name: "Remove Duplicates",
      section: "Arrays",
      description: "Given an array of numbers, remove all duplicates while preserving the original order of elements.",
      example: {
        input: "[1, 2, 2, 3, 4, 4, 5]",
        output: "[1, 2, 3, 4, 5]"
      },
      methods: ["filter()", "indexOf()"],
      initialCode: "function removeDuplicates(arr) {\n  // Your code here\n}",
      bigONotation: "O(n^2) where n is the number of elements in the array"
    },
    {
      id: 10,
      name: "Chunk Array",
      section: "Arrays",
      description: "Given an array and a chunk size, divide the array into subarrays of the specified size.",
      example: {
        input: "[1, 2, 3, 4, 5, 6, 7, 8], chunk size: 3",
        output: "[[1, 2, 3], [4, 5, 6], [7, 8]]"
      },
      methods: ["slice()"],
      initialCode: "function chunkArray(arr, size) {\n  // Your code here\n}",
      bigONotation: "O(n) where n is the number of elements in the array"
    },
    {
      id: 11,
      name: "String Palindrome",
      section: "Strings",
      description: "Given a string, determine if it's a palindrome (reads the same forwards and backwards), ignoring spaces and punctuation.",
      example: {
        input: '"A man, a plan, a canal: Panama"',
        output: "true"
      },
      methods: ["toLowerCase()", "replace()", "split()", "reverse()", "join()"],
      initialCode: "function isPalindrome(str) {\n  // Your code here\n}",
      bigONotation: "O(n) where n is the length of the string"
    },
    {
      id: 12,
      name: "Capitalize Words",
      section: "Strings",
      description: "Given a sentence, capitalize the first letter of each word.",
      example: {
        input: '"hello world"',
        output: '"Hello World"'
      },
      methods: ["split()", "map()", "charAt()", "slice()", "join()"],
      initialCode: "function capitalizeWords(sentence) {\n  // Your code here\n}",
      bigONotation: "O(n) where n is the number of characters in the sentence"
    },
    {
      id: 13,
      name: "Trim and Pad",
      section: "Strings",
      description: "Given a string and a target length, trim the string if it's longer than the target length, or pad it with spaces at the end if it's shorter.",
      example: {
        input: '"Hello", target length: 10',
        output: '"Hello     "'
      },
      methods: ["trim()", "padEnd()"],
      initialCode: "function trimAndPad(str, targetLength) {\n  // Your code here\n}",
      bigONotation: "O(n) where n is the target length"
    },
    {
      id: 14,
      name: "Find Largest Number",
      section: "Math",
      description: "Given an array of numbers, find the largest number.",
      example: {
        input: "[10, 5, 8, 12, 3]",
        output: "12"
      },
      methods: ["Math.max()", "reduce()"],
      initialCode: "function findLargestNumber(numbers) {\n  // Your code here\n}",
      bigONotation: "O(n) where n is the number of elements in the array"
    },
    {
      id: 15,
      name: "Generate Random Integer",
      section: "Math",
      description: "Write a function that generates a random integer between a minimum and maximum value (inclusive).",
      example: {
        input: "min: 1, max: 10",
        output: "A random number between 1 and 10"
      },
      methods: ["Math.random()", "Math.floor()"],
      initialCode: "function generateRandomInt(min, max) {\n  // Your code here\n}",
      bigONotation: "O(1)"
    },
    // Add more challenges here...
  ];

export default challenges;