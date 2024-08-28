import { executeCode } from './codeExecutor';

export function runTestCases(testCases, userCode) {
  return testCases.map(testCase => {
    const { input, expected } = testCase;
    const fullCode = `${userCode}\n\n${input}`;
    const { result } = executeCode(fullCode);
    return {
      input,
      expected,
      actual: result,
      passed: result === expected
    };
  });
}