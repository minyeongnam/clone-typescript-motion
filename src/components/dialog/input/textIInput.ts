import { BaseComponent } from '../../item/base.js';

export class TextInput extends BaseComponent<HTMLElement> {
  constructor() {
    super(
      `<div class="modal-contents">
            <div>
                <label for="title">Title</label>
                <span><input type="text" id="title" /></span>
            </div>
            <div>
                <label for="textarea">body</label>
                <span><textarea id="textarea"></textarea></span>
            </div>
        </div>`
    );
  }

  get title(): string {
    const element = this.element.querySelector('#title')! as HTMLInputElement;
    return element.value;
  }
  get textarea(): string {
    const element = this.element.querySelector(
      '#textarea'
    )! as HTMLTextAreaElement;
    return element.value;
  }
}
