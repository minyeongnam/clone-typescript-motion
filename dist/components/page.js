import { BaseComponent } from './item/base.js';
export class pageItemComponent extends BaseComponent {
    constructor() {
        super(`<li class="page-item">
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
    constructor(pageItemConstructor) {
        super('<ul class="page"></ul>');
        this.pageItemConstructor = pageItemConstructor;
    }
    addChild(section) {
        const item = new this.pageItemConstructor();
        item.addChild(section);
        item.attachTo(this.element, 'beforeend');
        item.setDeleteListener(() => {
            item.removeFrom(this.element);
        });
    }
}
