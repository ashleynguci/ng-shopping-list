import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe("Banh xeo", "a Vietnamese pancake ", "https://cdn.daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg"), new Recipe("Banh cuon", "a Vietnamese spring roll ", "https://lh3.googleusercontent.com/proxy/6peHFIV7d5RqaSDVdm1y7EsymJ3gT580My-uJSP8LNFyNpDaR8-5sVXOBxUT7nltyGppnaXRGt9WU0JEPNwZBilJfzmjUjH7JBh3CVvla4VcD7gugD4vYPzs2cM1T8DI9_9AvExzGR3ru3bmJW7EIybuVXOUP1UtgSbbXJ8YQz1verzdxSJJchCV_ioiQw5F5ChEhA9VpDOTE_vxYqsKLegOerch3jrEIviZ")];


  constructor() { }

  ngOnInit(): void {
  }

}
