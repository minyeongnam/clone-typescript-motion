import { BaseComponent } from './base.js';

export class TaskCompontent extends BaseComponent<HTMLElement> {
  constructor(title: string, task: string) {
    super(`<section class="task">
        <h2 class="task__title"></h2>
        <input type="checkbox" class="task__check" />
        </section>`);

    const titleElement = this.element.querySelector(
      '.task__title'
    )! as HTMLHeadingElement;
    titleElement.textContent = title;

    const taskElement = this.element.querySelector(
      '.task__check'
    )! as HTMLInputElement;
    taskElement.insertAdjacentText('afterend', task);
  }
}
