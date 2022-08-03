import { BaseComponent } from './base.js';
export class TaskCompontent extends BaseComponent {
    constructor(title, task) {
        super(`<section class="task">
        <h2 class="task__title"></h2>
        <input type="checkbox" class="task__check" />
        </section>`);
        const titleElement = this.element.querySelector('.task__title');
        titleElement.textContent = title;
        const taskElement = this.element.querySelector('.task__check');
        taskElement.insertAdjacentText('afterend', task);
    }
}
