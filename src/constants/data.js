export const backblaze = {
  minPay: 7,
  costStorage: 0.005,
  costTransfer: 0.01,
};
export const vultr = {
  minPay: 5,
  costStorage: 0.01,
  costTransfer: 0.01,
};
export const bunny = {
  maxPay: 10,
  costStorage: {
    hdd: 0.01,
    ssd: 0.02,
  },
  costTransfer: 0.01,
};
export const scaleway = {
  costStorage: {
    storageUpTo75GB: 0,
    multiAfter: 0.06,
    singleAfter: 0.03,
  },
  costTransfer: {
    transferUpTo75GB: 0,
    storageAfter: 0.02,
  },
};
