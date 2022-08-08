import { BaseComponent } from '../../item/base.js';

export class MediaInput extends BaseComponent<HTMLElement> {
  constructor() {
    super(
      `<div class="modal-contents">
            <div>
                <label for="title">Title</label>
                <span><input type="text" id="title" /></span>
            </div>
            <div>
                <label for="url">URL</label>
                <span><input type="text" id="url" /></span>
            </div>
        </div>`
    );
  }

  get title(): string {
    const element = this.element.querySelector('#title')! as HTMLInputElement;
    return element.value;
  }
  get url(): string {
    const element = this.element.querySelector('#url')! as HTMLInputElement;
    return element.value;
  }
}
