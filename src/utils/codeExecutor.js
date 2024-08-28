export const executeCode = (code, input) => {
    try {
      const userFunction = new Function('return ' + code)();
      return userFunction(...input);
    } catch (error) {
      return `Error: ${error.message}`;
    }
  };