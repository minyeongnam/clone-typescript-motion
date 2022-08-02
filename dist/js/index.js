"use strict";
class frontUI {
    /*  modalShow(id: string): void;
    modalHide(id: string): void; */
    constructor() {
        this.modalWrap = document.querySelector('.modal-wrap');
        this.activeModal = null;
        this.addBtn = null;
        this.modalType = '';
    }
    modalShow(modalName, modalType) {
        this.activeModal = document.querySelector(`.${modalName}`);
        this.activeModal.classList.add('active');
        this.modalWrap.style.display = 'block';
        this.activeModal.style.display = 'block';
        this.modalType = modalType;
        this.addBtn = document.querySelector('.modal.active .btn-add');
        if (this.addBtn) {
            this.addBtn.addEventListener('click', this.addClick, true);
        }
    }
    modalHide() {
        if (this.activeModal && this.addBtn) {
            this.modalWrap.style.display = 'none';
            this.activeModal.style.display = 'none';
            this.addBtn.removeEventListener('click', this.addClick, true);
        }
    }
    addItem() {
        const list = document.querySelector('.list-motion > ul');
        let element = document.createElement('li');
        switch (this.modalType) {
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
    addClick() {
        return this.addItem.bind(this);
    }
}
const front = new frontUI();
