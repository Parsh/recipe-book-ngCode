import { Ingredients } from '../shared/ingredients';

export class ShoppingListService {

  private items : Ingredients[] = [];
  constructor() { }

 getItems(){
            return this.items;
 }

 addItems(items: Ingredients[]){
  Array.prototype.push.apply(this.items , items); //pushing all the items into the array in one line (rather than using for loop to do so)
 }

 addItem( item : Ingredients){
   this.items.push(item);
 }

 editItem(oldItem : Ingredients , newItem : Ingredients){
   this.items[this.items.indexOf(oldItem)] = newItem;
 }

 deleteItem( item : Ingredients){
    this.items.splice(this.items.indexOf(item),1)
 }
}
