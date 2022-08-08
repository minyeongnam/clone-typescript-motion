import { BaseComponent } from '../../item/base.js';
export class TextInput extends BaseComponent {
    constructor() {
        super(`<div class="modal-contents">
            <div>
                <label for="title">Title</label>
                <span><input type="text" id="title" /></span>
            </div>
            <div>
                <label for="textarea">body</label>
                <span><textarea id="textarea"></textarea></span>
            </div>
        </div>`);
    }
    get title() {
        const element = this.element.querySelector('#title');
        return element.value;
    }
    get textarea() {
        const element = this.element.querySelector('#textarea');
        return element.value;
    }
}
