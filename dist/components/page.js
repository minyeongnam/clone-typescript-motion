import { BaseComponent } from './item/base.js';
class pageItemComponent extends BaseComponent {
    constructor() {
        super(`<li class="page__item">
              <button type="button" class="btn-delete">close</button>
           </li>`);
        const deleteBtn = this.element.querySelector('.btn-delete');
        deleteBtn.onclick = () => {
            this.onDeleteListener && this.onDeleteListener();
        };
    }
    addChild(child) {
        const container = this.element;
        child.attachTo(container);
    }
    setDeleteListener(listener) {
        this.onDeleteListener = listener;
    }
}
export class PageComponent extends BaseComponent {
    constructor() {
        super('<ul class="page"></ul>');
    }
    addChild(section) {
        const item = new pageItemComponent();
        item.addChild(section);
        item.attachTo(this.element, 'beforeend');
        item.setDeleteListener(() => {
            item.removeFrom(this.element);
        });
    }
}
