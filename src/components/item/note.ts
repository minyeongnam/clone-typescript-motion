import { BaseComponent } from './base.js';

export class NoteCompontent extends BaseComponent<HTMLElement> {
  constructor(title: string, body: string) {
    super(`<section class="note">
        <h2 class="note__title"></h2>
        <p class="note__contents"></p>
        </section>`);
    const titleElement = this.element.querySelector(
      '.note__title'
    )! as HTMLHeadElement;
    titleElement.textContent = title;

    const contentsElement = this.element.querySelector(
      '.note__contents'
    )! as HTMLParagraphElement;
    contentsElement.textContent = body;
  }
}
