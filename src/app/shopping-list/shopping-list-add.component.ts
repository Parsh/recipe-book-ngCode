import { Component, OnChanges, Input , Output , EventEmitter} from '@angular/core';
import { Ingredients } from '../shared/ingredients'
import { ShoppingListService } from './shopping-list.service'

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {

  isAdd = true;
  @Input() item : Ingredients;
  @Output() cleared = new EventEmitter();

  constructor( private sls : ShoppingListService) { }

   ngOnChanges(changes){
     if(changes.item.currentValue === null){
       this.isAdd = true
     }else{
       this.isAdd = false
     }
   }

  onSubmit(ingredients : Ingredients){
    const newIngredient = new Ingredients(ingredients.name , ingredients.amount)
    if(!this.isAdd){
      //Edit
      this.sls.editItem(this.item , newIngredient)
      this.onClear()
    }else{
      this.item = newIngredient ;
      this.sls.addItem( this.item );
    }

  }

  onDelete(){
    this.sls.deleteItem(this.item);
    this.onClear()
  }

  onClear(){
    this.isAdd = true;
    this.cleared.emit(null);
  }


}
