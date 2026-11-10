import { formatCurrency } from '../../scripts/utils/money.js';

describe('test suite: formatCurrency', () => {
    it('converts cents into dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('works with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('works with negative number', () => {
        expect(formatCurrency(-1000)).toEqual('-10.00');
    });

    describe('rounds up or down to the nearest cent', () => {
        it('scaling up', () => {
            expect(formatCurrency(2000.5)).toEqual('20.01');
        });

        it('scaling down', () => {
            expect(formatCurrency(2000.4)).toEqual('20.00');
        });

    });
});