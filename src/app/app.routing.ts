import { Routes , RouterModule} from '@angular/router'
import {  ModuleWithProviders } from '@angular/core'

import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { HomeComponent } from './home.component'

const APP_ROUTES : Routes = [

  { path : 'recipes' , loadChildren : 'app/recipes/recipes.module#RecipesModule'},
  { path : 'shopping-list' , component : ShoppingListComponent},
  { path : '**' , component : HomeComponent}

];

export const Routing : ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
