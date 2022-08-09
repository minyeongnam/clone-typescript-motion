import { Component } from './components/item/base.js';
import { ImageComponent } from './components/item/image.js';
import { VideoComponent } from './components/item/video.js';
import { NoteCompontent } from './components/item/note.js';
import { TaskCompontent } from './components/item/task.js';
import {
  Composable,
  PageComponent,
  pageItemComponent,
} from './components/page.js';
import {
  InputDialog,
  MediaData,
  TextData,
} from './components/dialog/dialog.js';
import { MediaInput } from './components/dialog/input/mediaInput.js';
import { TextInput } from './components/dialog/input/textIInput.js';

type InputComponent<T = (MediaData | TextData) & Component> = {
  new (): T;
};
class App {
  private readonly page: Component & Composable;

  constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent(pageItemComponent);
    this.page.attachTo(appRoot);

    this.bindElementToDialog<MediaInput>(
      '#add-image',
      MediaInput,
      (input: MediaInput) => new ImageComponent(input.title, input.url)
    );

    this.bindElementToDialog<MediaInput>(
      '#add-video',
      MediaInput,
      (input: MediaInput) => new VideoComponent(input.title, input.url)
    );

    this.bindElementToDialog<TextInput>(
      '#add-note',
      TextInput,
      (input: TextInput) => new NoteCompontent(input.title, input.textarea)
    );

    this.bindElementToDialog<TextInput>(
      '#add-task',
      TextInput,
      (input: TextInput) => new TaskCompontent(input.title, input.textarea)
    );
  }

  private bindElementToDialog<T extends (MediaData | TextData) & Component>(
    selector: string,
    InputComponent: InputComponent<T>,
    makeSection: (input: T) => Component
  ) {
    const element = document.querySelector(selector)! as HTMLButtonElement;
    element.addEventListener('click', () => {
      this.dialogRoot.style.display = 'block';

      const dialog = new InputDialog();
      const input = new InputComponent();

      dialog.addChild(input);
      dialog.attachTo(this.dialogRoot);

      dialog.setCloseListener(() => {
        this.dialogRoot.style.display = 'none';
        dialog.removeFrom(this.dialogRoot);
      });

      dialog.setSubmitListener(() => {
        const image = makeSection(input);
        this.page.addChild(image);
        dialog.removeFrom(this.dialogRoot);
        this.dialogRoot.style.display = 'none';
      });
    });
  }
}

new App(
  document.querySelector('.document')! as HTMLElement,
  document.querySelector('.modal-wrap')! as HTMLElement
);
