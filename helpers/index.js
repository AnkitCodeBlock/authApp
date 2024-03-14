const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/phone");
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  return res.json();
};

export const getSingleProduct = async (_id) => {
  const item = await getData();
  const singleItem = await item.find((product) => product._id === _id);
  return singleItem;
};
