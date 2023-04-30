import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {CheckboxModule} from 'primeng/checkbox';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ToastModule,
    CheckboxModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[MessageService]
})
export class SharedModule { }
