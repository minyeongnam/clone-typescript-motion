import { BaseComponent } from './base.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
            <div class="video__player">
                <iframe class="video__iframe"></iframe>
            </div>
            <h2 class="video__title"></h2>
           </section>`);

    const iframeElement = this.element.querySelector(
      '.video__iframe'
    )! as HTMLIFrameElement;
    iframeElement.src = this.convertToEmbeddedURL(url);

    const titleElement = this.element.querySelector(
      '.video__title'
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  /**
   * url 유형 3개 => ID만 가져오기
   * <iframe width="1920" height="947" src="https://www.youtube.com/embed/SMMQBMIsrZE" title="프로 굳이 살 필요 있을까요? 풀체인지된 애플 신형 맥북에어 M2 언빡싱&둘러보기!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   * https://www.youtube.com/embed/SMMQBMIsrZE
   * https://youtu.be/SMMQBMIsrZE
   * 정규표현식으로 처리, Regex
   */

  private convertToEmbeddedURL(url: string): string {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);
    const videoId = match ? match[1] || match[2] : undefined;

    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}
