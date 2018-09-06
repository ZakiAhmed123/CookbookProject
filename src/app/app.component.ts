import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() recipeStatus: boolean; 

  recipeStatus2= true;
  shoppingList2= false;
  onNavigate(recipeStatus: boolean) {
    this.recipeStatus2 = recipeStatus;
    this.shoppingList2 = !recipeStatus;
  }

}
