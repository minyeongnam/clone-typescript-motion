import { BaseComponent } from './item/base.js';
class pageItemComponent extends BaseComponent {
    constructor() {
        super(`<li class="page__item">
              <button type="button">close</button>
           </li>`);
    }
    addChild(child) {
        const container = this.element;
        child.attachTo(container);
    }
}
export class PageComponent extends BaseComponent {
    constructor() {
        super('<ul class="page"></ul>');
    }
    addChild(section) {
        const item = new pageItemComponent();
        console.log(item);
        console.log(section);
        item.addChild(section);
        console.log(this.element);
        item.attachTo(this.element, 'beforeend');
    }
}
