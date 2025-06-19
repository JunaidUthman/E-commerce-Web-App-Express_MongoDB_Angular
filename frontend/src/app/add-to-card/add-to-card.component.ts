import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';




@Component({
  selector: 'app-add-to-card',
  imports: [CommonModule],
  templateUrl: './add-to-card.component.html',
  styleUrl: './add-to-card.component.css'
})
export class AddToCardComponent {

  @Input() product: any;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
