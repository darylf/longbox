/**
 * Returns the given value unless the given value is null or undefined, in which case it returns defaultValue
 * @param {number|null|undefined} value
 * @param {number} defaultValue - optional
 * @returns {number}
 */
export const nvl = (
  value: number | null | undefined,
  defaultValue = 0
): number => value ?? defaultValue;
