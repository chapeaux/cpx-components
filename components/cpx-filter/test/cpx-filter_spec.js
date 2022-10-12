import { expect } from '@esm-bundle/chai';
import { html, fixture, elementUpdated } from '@open-wc/testing';

import { CPXFilter } from '../cpx-filter';


describe('CPX Filter', () => {
  const ulId = "example";

  it('is defined', () => {
    const ele = new CPXFilter();
    expect(ele).to.exist;
  });

  it('filters a list', async () => {
    const condition = "contains";
    const criteria = "javascript";

    setList()

    const el = await fixture(html`
      <cpx-filter container="#${ulId}" item="li" condition="${condition}" criteria="${criteria}"></cpx-filter>
    `);

    const items = document.querySelectorAll('li');
    expect(items[0].style.display).to.be.equal('');
    expect(items[1].style.display).to.be.equal('none');
    expect(items[2].style.display).to.be.equal('');
    expect(items[3].style.display).to.be.equal('');
    expect(items[4].style.display).to.be.equal('none');
  });

  it.skip('filters a list using script data', async () => {
    const condition = "contains";
    setList()

    const el = await fixture(html`
      <cpx-filter container="#${ulId}" item="li" condition="${condition}">
        <script type="data">
          [
            ["CSS", "Vue"]
          ]
        </script>
      </cpx-filter>
    `);

    const items = document.querySelectorAll('li');
    expect(items[0].style.display).to.be.equal('none');
    expect(items[1].style.display).to.be.equal('');
    expect(items[2].style.display).to.be.equal('');
    expect(items[3].style.display).to.be.equal('');
    expect(items[4].style.display).to.be.equal('');
  });

  /**
   * Sets an Unordered List in the Dom.
   */
  async function setList() {
    const list = document.createElement('ul');
    list.setAttribute('id', ulId);

    const liNames = [
      "D3.js - Javascript",
      "Material Design - CSS",
      "Vue.js - JavaScript",
      "Bootstrap - CSS / JavaScript",
      "Tailwind - CSS",
    ];

    liNames.forEach(name => {
      let li = document.createElement('li');
      li.innerHTML = name;
      list.appendChild(li);
    });

    await document.body.append(list);
  }
});
