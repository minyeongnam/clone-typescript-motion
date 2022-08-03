import { ImageComponent } from './components/item/image.js';
import { VideoComponent } from './components/item/video.js';
import { NoteCompontent } from './components/item/note.js';
import { TaskCompontent } from './components/item/task.js';
import { PageComponent } from './components/page.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
        console.log(image);
        this.page.addChild(image);
        const video = new VideoComponent('video Title', 'https://youtu.be/DmK7d0xB2j0');
        this.page.addChild(video);
        const note = new NoteCompontent('note TItle', 'body contents');
        this.page.addChild(note);
        const task = new TaskCompontent('check Title', 'check');
        this.page.addChild(task);
    }
}
new App(document.querySelector('.document'));
