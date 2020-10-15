const parseData = ({ data, column }) => {
  const keys = column.map((cur) => cur.name);
  return data.map((cur) =>
    cur.reduce((result, field, index) => {
      result[keys[index]] = field;
      return result;
    }, {})
  );
};
export { parseData };
