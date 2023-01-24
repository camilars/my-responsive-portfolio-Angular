import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button.component';

@NgModule({
    declarations: [ButtonComponent],
    exports: [ButtonComponent],
    imports: [CommonModule, RouterModule],

})
export class ButtonModule {}
