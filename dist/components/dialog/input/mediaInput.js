import { BaseComponent } from '../../item/base.js';
export class MediaInput extends BaseComponent {
    constructor() {
        super(`<div class="modal-contents">
            <div>
                <label for="title">Title</label>
                <span><input type="text" id="title" /></span>
            </div>
            <div>
                <label for="url">URL</label>
                <span><input type="text" id="url" /></span>
            </div>
        </div>`);
    }
    get title() {
        const element = this.element.querySelector('#title');
        return element.value;
    }
    get url() {
        const element = this.element.querySelector('#url');
        return element.value;
    }
}
