import { Component , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {

  @Input() ModalDisplay:boolean = false;
  @Input() text:string = "";
  @Input() isLoading:boolean = false;
  @Output() deleteBtnClick = new EventEmitter<string>();
  @Output() cancelBtnClick = new EventEmitter<string>();

  hideModal(){
    this.cancelBtnClick.emit("");
  }

  handleDeleteModel(){
    this.deleteBtnClick.emit("");
  }

}
