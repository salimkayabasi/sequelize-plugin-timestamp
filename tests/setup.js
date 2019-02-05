const second = 1000;
jest.setTimeout(15 * second);

const onError = (error) => {
  throw error;
};
process.setMaxListeners(0);
process.on('uncaughtException', onError);
process.on('unhandledRejection', onError);
