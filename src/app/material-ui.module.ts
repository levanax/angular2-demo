import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatInputModule],
  exports: [MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatInputModule]
})

export class MaterialUIModule {

}