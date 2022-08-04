import { BaseComponent, Component } from './item/base.js';

export interface Composable {
  addChild(child: Component): void;
}

type OnDeleteListener = () => void;
class pageItemComponent
  extends BaseComponent<HTMLElement>
  implements Composable
{
  private onDeleteListener?: OnDeleteListener;
  constructor() {
    super(`<li class="page__item">
              <button type="button" class="btn-delete">close</button>
           </li>`);
    const deleteBtn = this.element.querySelector(
      '.btn-delete'
    )! as HTMLButtonElement;

    deleteBtn.onclick = () => {
      this.onDeleteListener && this.onDeleteListener();
    };
  }
  addChild(child: Component) {
    const container = this.element! as HTMLElement;
    child.attachTo(container);
  }
  setDeleteListener(listener: OnDeleteListener) {
    this.onDeleteListener = listener;
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
    item.addChild(section);
    item.attachTo(this.element, 'beforeend');
    item.setDeleteListener(() => {
      item.removeFrom(this.element);
    });
  }
}
