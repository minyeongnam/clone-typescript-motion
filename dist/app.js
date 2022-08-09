import { ImageComponent } from './components/item/image.js';
import { VideoComponent } from './components/item/video.js';
import { NoteCompontent } from './components/item/note.js';
import { TaskCompontent } from './components/item/task.js';
import { PageComponent, pageItemComponent, } from './components/page.js';
import { InputDialog, } from './components/dialog/dialog.js';
import { MediaInput } from './components/dialog/input/mediaInput.js';
import { TextInput } from './components/dialog/input/textIInput.js';
class App {
    constructor(appRoot, dialogRoot) {
        this.dialogRoot = dialogRoot;
        this.page = new PageComponent(pageItemComponent);
        this.page.attachTo(appRoot);
        this.bindElementToDialog('#add-image', MediaInput, (input) => new ImageComponent(input.title, input.url));
        this.bindElementToDialog('#add-video', MediaInput, (input) => new VideoComponent(input.title, input.url));
        this.bindElementToDialog('#add-note', TextInput, (input) => new NoteCompontent(input.title, input.textarea));
        this.bindElementToDialog('#add-task', TextInput, (input) => new TaskCompontent(input.title, input.textarea));
    }
    bindElementToDialog(selector, InputComponent, makeSection) {
        const element = document.querySelector(selector);
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
new App(document.querySelector('.document'), document.querySelector('.modal-wrap'));
