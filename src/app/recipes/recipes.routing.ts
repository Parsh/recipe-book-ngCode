import {Routes , RouterModule} from '@angular/router';
import {  ModuleWithProviders } from '@angular/core'

import { RecipesComponent} from './recipes.component'
import {RecipeStartComponent} from './recipe-start.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';


const RECIPE_ROUTES : Routes = [
  {path : '' , component: RecipesComponent , children:[
    {path :'' , component : RecipeStartComponent},
    {path : 'new' , component: RecipeEditComponent},
    {path :':id' , component : RecipeDetailComponent},
    {path :':id/edit' , component : RecipeEditComponent}
  ]}

]

export const recipesRouting : ModuleWithProviders = RouterModule.forChild(RECIPE_ROUTES)
