import { ImageComponent } from './components/image.js';
import { PageComponent } from './components/page.js';
import { VideoComponent } from './components/video.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
        image.attachTo(appRoot, 'beforeend');
        const video = new VideoComponent('video Title', 'https://youtu.be/DmK7d0xB2j0');
        video.attachTo(appRoot, 'beforeend');
    }
}
new App(document.querySelector('.document'));
