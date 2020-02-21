import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | jumbo', function(hooks) {
  setupRenderingTest(hooks);

  test('renders content inside a jumbo component with a Teacher Tomster Icon', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Jumbo>Hello World</Jumbo>`);

    assert.dom(".jumbo").exists();
    assert.dom(".jumbo").hasText("Hello World");
    assert.dom(".jumbo .tomster").exists();


    // Template block usage:
    await render(hbs`
      <Jumbo>
        template block text
      </Jumbo>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
