import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routing }  from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { DropdownDirective } from './dropdown.directive';

import { RecipeService} from './recipes/recipe.service'
import { ShoppingListService} from './shopping-list/shopping-list.service'


import { ShoppingListModule} from './shopping-list/shopping-list.module';
import { HomeComponent } from './home.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Routing,
    ShoppingListModule
  ],
  providers: [RecipeService , ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
