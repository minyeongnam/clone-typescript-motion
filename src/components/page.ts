import { BaseComponent, Component } from './item/base.js';

export interface Composable {
  addChild(child: Component): void;
}
class pageItemComponent
  extends BaseComponent<HTMLElement>
  implements Composable
{
  constructor() {
    super(`<li class="page__item">
              <button type="button">close</button>
           </li>`);
  }
  addChild(child: Component) {
    const container = this.element! as HTMLElement;
    child.attachTo(container);
  }
}

export class PageComponent
  extends BaseComponent<HTMLUListElement>
  implements Composable
{
  constructor() {
    super('<ul class="page"></ul>');
  }
  addChild(section: Component) {
    const item = new pageItemComponent();
    console.log(item);
    console.log(section);
    item.addChild(section);
    console.log(this.element);
    item.attachTo(this.element, 'beforeend');
  }
}
