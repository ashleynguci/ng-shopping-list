import { Component, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    featureSelected = new EventEmitter<string>();

    onSelect(feature: string) {

    }
} 