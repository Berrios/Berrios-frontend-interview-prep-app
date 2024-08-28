export function executeCode(userCode) {
  let logs = [];
  const console = {
    log: (...args) => logs.push(args.join(' ')),
  };

  try {
    // eslint-disable-next-line no-new-func
    const userFunction = new Function('console', userCode);
    const result = userFunction(console);
    return { result, logs };
  } catch (error) {
    // Handle the error appropriately
    return { error: error.message, logs };
  }
}