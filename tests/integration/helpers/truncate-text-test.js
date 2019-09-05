import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { setupRenderingTest } from 'ember-mocha';
import { render } from '@ember/test-helpers';

import hbs from 'htmlbars-inline-precompile';

describe('TruncateTextHelper', async function() {
  setupRenderingTest();

  it('does truncate text when is greater than limit', async function() {
    this.set('text', 'my awesome but very large text!!');

    await render(hbs`{{truncate-text this.text limit=10}}`);

    expect(this.element.textContent).to.be.include('my awesome...');
  });

  it('does not truncate text when lower than limit', async function() {
    this.set('text2', 'my awesome but very large text!!');

    await render(hbs`{{truncate-text this.text2 limit=100}}`);

    expect(this.element.textContent).to.be.include('my awesome but very large text!!');
  });
});
