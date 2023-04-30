import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import { CarouselModule } from 'primeng/carousel';
import { DeleteModalComponent } from '../pages/components/delete-modal/delete-modal.component';
import { ProductModalComponent } from '../pages/components/product-modal/product-modal.component';



@NgModule({
  declarations: [
    DeleteModalComponent,
    ProductModalComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule
  ],
  exports: [
    ToastModule,
    CheckboxModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    InputTextModule,
    DialogModule,
    DeleteModalComponent,
    ProductModalComponent,
    CarouselModule
  ],
  providers:[MessageService]
})
export class SharedModule { }
