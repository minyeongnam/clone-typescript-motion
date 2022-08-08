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
import { InputDialog } from './components/dialog/dialog.js';
import { MediaInput } from './components/dialog/input/mediaInput.js';
import { TextInput } from './components/dialog/input/textIInput.js';

class App {
  private readonly page: Component & Composable;

  constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) {
    this.page = new PageComponent(pageItemComponent);
    this.page.attachTo(appRoot);

    const imageBtn = document.querySelector('#add-image')! as HTMLButtonElement;
    imageBtn.addEventListener('click', () => {
      dialogRoot.style.display = 'block';

      const dialog = new InputDialog();
      const mediaInput = new MediaInput();

      dialog.addChild(mediaInput);
      dialog.attachTo(dialogRoot);

      dialog.setCloseListener(() => {
        dialogRoot.style.display = 'none';
        dialog.removeFrom(dialogRoot);
      });

      dialog.setSubmitListener(() => {
        const image = new ImageComponent(mediaInput.title, mediaInput.url);
        this.page.addChild(image);
        dialog.removeFrom(dialogRoot);
        dialogRoot.style.display = 'none';
      });
    });
    const videoBtn = document.querySelector('#add-video')! as HTMLButtonElement;
    videoBtn.addEventListener('click', () => {
      dialogRoot.style.display = 'block';

      const dialog = new InputDialog();
      const mediaInput = new MediaInput();

      dialog.addChild(mediaInput);
      dialog.attachTo(dialogRoot);

      dialog.setCloseListener(() => {
        dialogRoot.style.display = 'none';
        dialog.removeFrom(dialogRoot);
      });

      dialog.setSubmitListener(() => {
        const video = new VideoComponent(mediaInput.title, mediaInput.url);
        this.page.addChild(video);
        dialog.removeFrom(dialogRoot);
        dialogRoot.style.display = 'none';
      });
    });
    const noteBtn = document.querySelector('#add-note')! as HTMLButtonElement;
    noteBtn.addEventListener('click', () => {
      dialogRoot.style.display = 'block';

      const dialog = new InputDialog();
      const textInput = new TextInput();

      dialog.addChild(textInput);
      dialog.attachTo(dialogRoot);

      dialog.setCloseListener(() => {
        dialogRoot.style.display = 'none';
        dialog.removeFrom(dialogRoot);
      });

      dialog.setSubmitListener(() => {
        const note = new NoteCompontent(textInput.title, textInput.textarea);
        this.page.addChild(note);
        dialog.removeFrom(dialogRoot);
        dialogRoot.style.display = 'none';
      });
    });
    const taskBtn = document.querySelector('#add-task')! as HTMLButtonElement;
    taskBtn.addEventListener('click', () => {
      dialogRoot.style.display = 'block';

      const dialog = new InputDialog();
      const textInput = new TextInput();

      dialog.addChild(textInput);
      dialog.attachTo(dialogRoot);

      dialog.setCloseListener(() => {
        dialogRoot.style.display = 'none';
        dialog.removeFrom(dialogRoot);
      });

      dialog.setSubmitListener(() => {
        const task = new TaskCompontent(textInput.title, textInput.textarea);
        this.page.addChild(task);
        dialog.removeFrom(dialogRoot);
        dialogRoot.style.display = 'none';
      });
    });
  }
}

new App(
  document.querySelector('.document')! as HTMLElement,
  document.querySelector('.modal-wrap')! as HTMLElement
);
