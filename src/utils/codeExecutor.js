export const executeCode = (code, input) => {
    try {
        // eslint-disable-next-line no-new-func
        const userFunction = new Function('console', code);
        return userFunction(...input);
    } catch (error) {
        return `Error: ${error.message}`;
    }
  };