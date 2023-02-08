export const calculator = (valueStorage, valueTransfer, data) => {
  const { minPay, costStorage, costTransfer } = data;
  const result = valueStorage * costStorage + valueTransfer * costTransfer;
  if (result > minPay) return result;
  return minPay;
};

export const calculatorBunny = (
  valueStorage,
  valueTransfer,
  valueBunny,
  bunny
) => {
  const {
    costStorage: { hdd, ssd },
    costTransfer,
    maxPay,
  } = bunny;
  const storage = valueBunny === '1' ? valueStorage * hdd : valueStorage * ssd;
  const result = storage + valueTransfer * costTransfer;
  if (result > maxPay) return maxPay;
  return result;
};

export const calculatorScaleway = (
  valueStorage,
  valueTransfer,
  valueScaleway,
  scaleway
) => {
  const {
    costStorage: { storageUpTo75GB, multiAfter, singleAfter },
    costTransfer: { transferUpTo75GB, storageAfter },
  } = scaleway;
  let storage;
  let transfer;
  const newValueStorage = valueStorage - 75;
  const newValueTransfer = valueTransfer - 75;
  if (valueStorage <= 75) {
    storage = storageUpTo75GB;
  } else {
    storage =
      valueScaleway === '1'
        ? newValueStorage * multiAfter
        : newValueStorage * singleAfter;
  }
  if (valueTransfer <= 75) {
    transfer = transferUpTo75GB;
  } else {
    transfer = newValueTransfer * storageAfter;
  }
  const result = storage + transfer;
  return result;
};
