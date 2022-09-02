import { expect } from '@esm-bundle/chai';
import { CPXReporter } from '../cpx-reporter.js';

it('sums up 2 number', () => {
    const ele = new CPXReporter();
    expect(ele.emit).to.equal('cpx-report');
});
