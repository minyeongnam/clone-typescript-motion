import { BaseComponent } from './base.js';
export class NoteCompontent extends BaseComponent {
    constructor(title, body) {
        super(`<section class="note">
        <h2 class="note__title"></h2>
        <p class="note__contents"></p>
        </section>`);
        const titleElement = this.element.querySelector('.note__title');
        titleElement.textContent = title;
        const contentsElement = this.element.querySelector('.note__contents');
        contentsElement.textContent = body;
    }
}
