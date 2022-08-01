"use strict";
class frontUI {
    /*  modalShow(id: string): void;
    modalHide(id: string): void; */
    constructor() {
        this.modalWrap = document.querySelector('.modal-wrap');
    }
    modalShow(id) {
        const modal = document.querySelector(`.${id}`);
        this.modalWrap.style.display = 'block';
        modal.style.display = 'block';
    }
    modalHide(id) {
        const modal = document.querySelector(`.${id}`);
        this.modalWrap.style.display = 'none';
        modal.style.display = 'none';
    }
    addItem(type) {
        const list = document.querySelector('.list-motion > ul');
        let element = document.createElement('li');
        switch (type) {
            case 'image':
                {
                    element.setAttribute('class', 'item-image');
                    element.innerHTML = `<div>
        <img src="#" alt="">
    </div>                        
    <h2>title</h2>`;
                }
                break;
            case 'video':
                {
                    element.setAttribute('class', 'item-video');
                    element.innerHTML = `<div>
        <img src="#" alt="">
    </div>                        
    <h2>title</h2>`;
                }
                break;
            case 'note':
                {
                    element.setAttribute('class', 'item-note');
                    element.innerHTML = `<h2>title</h2>
        <p>내용</p>`;
                }
                break;
            case 'task':
                {
                    element.setAttribute('class', 'item-task');
                    element.innerHTML = `<h2>title</h2>
        <ul>
            <li>task1</li>
        </ul>`;
                }
                break;
        }
        list.appendChild(element);
    }
}
const front = new frontUI();
