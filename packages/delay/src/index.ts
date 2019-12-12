/*
 * File: index.ts
 * File Created: Wednesday, 11th December 2019 5:02:08 pm
 * Author: ChengCheng Wan <chengcheng.st@gmail.com>
 */

export const delay = <T extends {}>(timestamp = 0, value?: T): Promise<T> =>
  new Promise(resolve => setTimeout(() => resolve(value), timestamp));

export default delay;
