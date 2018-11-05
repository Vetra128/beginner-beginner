import { spy, assert } from 'sinon';
import { expect } from 'chai';
import Component from 'vue-class-component';
import { ComponentTest, MockLogger } from '../../util/component-test';
import { AnyDifferentPage } from './any-different';

let loggerSpy = spy();

@Component({
  template: require('./any-different.html')
})
class MockAboutComponent extends AnyDifferentPage {
  constructor() {
    super();
    this.logger = new MockLogger(loggerSpy);
  }
}

describe('AnyDifferent component', () => {
  let directiveTest: ComponentTest;

  beforeEach(() => {
    directiveTest = new ComponentTest('<div><any-different></any-different></div>', { 'any-different': MockAboutComponent });
  });

  it('should render correct contents', async () => {
    directiveTest.createComponent();

    await directiveTest.execute((vm) => {
      expect(vm.$el.querySelector('.repo-link').getAttribute('href')).to.equal('https://github.com/masonz/generator-vue-ts-starter');
      assert.calledWith(loggerSpy, 'about is ready!');
    });
  });
});
