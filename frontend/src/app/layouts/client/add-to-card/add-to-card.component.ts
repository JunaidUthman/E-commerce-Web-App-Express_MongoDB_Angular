import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardServiceService } from '../../../services/cardService/card-service.service'; // create this service as above



@Component({
  selector: 'app-add-to-card',
  imports: [CommonModule , FormsModule],
  templateUrl: './add-to-card.component.html',
  styleUrl: './add-to-card.component.css'
})
export class AddToCardComponent {

  constructor(private cardService: CardServiceService) {}

  @Input() product: any;
  @Output() close = new EventEmitter<void>();
  @Output() SuccessAlert = new EventEmitter<void>();
  
  selectedColor: string = '';
  selectedSize: string = '';
  quantity: number = 1;

  showSuccessAlert = false;
  successMessage = '';

  onClose() {
    this.close.emit();
  }

  onAddToCard() {
    if (!this.selectedColor || !this.selectedSize || !this.quantity) {
      alert('Please select color, size, and quantity.');
      return;
    }
    this.cardService.addToCard(
      this.product._id,
      this.selectedColor,
      this.selectedSize,
      this.quantity
    ).subscribe({
      next: (res) => {
        this.SuccessAlert.emit();
        this.close.emit();
      },
      error: (err) => {
        alert('Failed to add product to card.');
      }
    });
  }
}
