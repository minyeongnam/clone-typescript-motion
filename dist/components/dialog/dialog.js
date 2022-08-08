import { BaseComponent } from '../item/base.js';
export class InputDialog extends BaseComponent {
    constructor() {
        super(`
        <dialog class="modal" open>
            <button type="button" class="btn-close">close</button>
            <div class="modal-contents"></div>          
            <button type="button" class="btn-submit">submit</button>
        </dialog>
    `);
        const closeBtn = this.element.querySelector('.btn-close');
        closeBtn.onclick = () => {
            this.closeListener && this.closeListener();
        };
        const submitBtn = this.element.querySelector('.btn-submit');
        submitBtn.onclick = () => {
            this.submitListener && this.submitListener();
        };
    }
    setCloseListener(listener) {
        this.closeListener = listener;
    }
    setSubmitListener(listener) {
        this.submitListener = listener;
    }
    addChild(child) {
        const contents = this.element;
        child.attachTo(contents);
    }
}
