import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatRadioModule,
  MatButtonToggleModule,
  MatDatepickerModule
} from '@angular/material';

const MATERIAL = [  
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatRadioModule,
  MatButtonToggleModule,
  MatDatepickerModule
  ];

@NgModule({
  imports: MATERIAL,
  exports: MATERIAL,
})
export class AppMaterialModule { }
