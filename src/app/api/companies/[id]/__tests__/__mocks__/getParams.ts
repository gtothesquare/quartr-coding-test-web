export const getParams = (id: string) => {
  return { params: Promise.resolve({ id }) };
};
