export function convertToArray<ReturnType>(
  items: Array<unknown> | null | undefined
): Array<ReturnType> {
  const result = new Array<ReturnType>();
  items?.forEach((item) => {
    result.push(Object.assign({} as ReturnType, item));
  });
  return result;
}
