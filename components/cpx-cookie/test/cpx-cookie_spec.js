import { elementUpdated, html, fixture } from '@open-wc/testing';
import { expect } from '@esm-bundle/chai';

import { CPXCookie } from '../cpx-cookie';

describe('CPX Cookie', () => {
    it('Emits default value "cookie-ready"', () => {
        const ele = new CPXCookie();
        expect(ele.emit).to.equal('cookie-ready');
    });

    it('Sets a cookie value', async () => {
        const test_key = 'test_key';
        const test_val = 'test_value';

        const el = await fixture(html`
            <cpx-cookie action="set" key="${test_key}" value="${test_val}"></cpx-cookie>
        `);

        await elementUpdated(el);
        await elementUpdated(document.body);

        expect(document.cookie).to.equal(`${test_key}=${test_val}`);
    });

    it('Emits a requested event', async () => {
        const test_key = 'user_data';
        const event_id = 'test-token-ready';

        const user_data = { name: "shadowman", account_id: "rh1234" };
        const user_data_str = JSON.stringify(user_data);

        let event_emitted = false;
        let emitted_user_data;

        document.cookie = `${test_key}=${user_data_str}`;

        document.addEventListener(event_id, (e) => {
            emitted_user_data = e.detail;
            event_emitted = true;
        });

        const el = await fixture(html`
            <cpx-cookie action="get" key="${test_key}" parse="json" emit="${event_id}"></cpx-cookie>
        `);

        await elementUpdated(el);

        expect(event_emitted).to.be.true;
        expect(emitted_user_data).to.eql(user_data);
    });
});
