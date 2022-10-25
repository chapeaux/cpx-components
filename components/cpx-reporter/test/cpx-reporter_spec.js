import { expect } from '@esm-bundle/chai';
import { CPXReporter } from '../cpx-reporter.js';

describe('CPX Reporter', () => {
    it('Emits default value "cpx-report"', () => {
        const ele = new CPXReporter();
        expect(ele.emit).to.equal('cpx-report');
    });
});
