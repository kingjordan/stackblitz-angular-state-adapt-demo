export function moveElement<T>(array: Array<T>, fromIndex: number, toIndex: number): Array<T> {
    const element = array.splice(fromIndex, 1)[0];
    array.splice(toIndex, 0, element);
    return array;
  }