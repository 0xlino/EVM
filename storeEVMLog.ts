
/**
 * @description Stores a log instance in the logs map
 * @param logsMap - Logs map
 * @param logInstance - Log instance
 */
const storeEVMLog = (logsMap, logInstance) => {
  if (!Array.isArray(logsMap[logInstance.address]))
    logsMap[logInstance.address] = [];

  logsMap[logInstance.address].push(logInstance);
};

export default storeEVMLog;
