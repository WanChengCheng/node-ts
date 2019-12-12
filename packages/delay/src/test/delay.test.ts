/*
 * File: delay.test.ts
 * File Created: Wednesday, 11th December 2019 5:11:21 pm
 * Author: ChengCheng Wan <chengcheng.st@gmail.com>
 */
import {delay} from '..';

describe('delay test', () => {
    it('should resolve as expected', async () => {
        const t = Date.now();
        const res = await delay(1000, 'A');
        expect(res).toBe('A');
        expect(Date.now() - t >= 1000).toBeTruthy();
    })
});
