import { Component , Input , Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() isOpen = false;
  @Input() title = 'Modal Title';
  @Output() closeModal = new EventEmitter<void>();

  close(){
    this.closeModal.emit();
  }

}
