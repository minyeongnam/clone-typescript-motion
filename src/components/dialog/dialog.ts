import { BaseComponent, Component } from '../item/base.js';
import { Composable } from '../page.js';

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

export interface MediaData {
  readonly title: string;
  readonly url: string;
}

export interface TextData {
  readonly title: string;
  readonly textarea: string;
}

export class InputDialog
  extends BaseComponent<HTMLElement>
  implements Composable
{
  closeListener?: OnCloseListener;
  submitListener?: OnSubmitListener;
  constructor() {
    super(`
        <dialog class="modal" open>
            <button type="button" class="btn-close">close</button>
            <div class="modal-contents"></div>          
            <button type="button" class="btn-submit">submit</button>
        </dialog>
    `);
    const closeBtn = this.element.querySelector('.btn-close')! as HTMLElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
    const submitBtn = this.element.querySelector('.btn-submit')! as HTMLElement;
    submitBtn.onclick = () => {
      this.submitListener && this.submitListener();
    };
  }
  setCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
  setSubmitListener(listener: OnSubmitListener) {
    this.submitListener = listener;
  }
  addChild(child: Component): void {
    const contents = this.element! as HTMLElement;
    child.attachTo(contents);
  }
}
