import { BaseComponent } from './base.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
            <div class="video__holder">
                <iframe class="video__object" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <video  />
            </div>
            <p class="video__title"></p>
           </section>`);

    const videoElement = this.element.querySelector(
      '.video__object'
    )! as HTMLIFrameElement;
    videoElement.src = url;

    const titleElement = this.element.querySelector(
      '.video__title'
    )! as HTMLElement;
    titleElement.textContent = title;
  }
}
