import { Component } from '@angular/core';
import { DataStorageService } from '../recipes/share/data-storage.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(private dataStorageService: DataStorageService) {

    }

    onSaveData() {
        this.dataStorageService.storeRecipes();
    }
} 