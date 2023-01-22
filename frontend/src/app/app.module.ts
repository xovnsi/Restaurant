import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/partials/menu/menu.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchComponent } from './components/partials/search/search.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { DishPageComponent } from './components/pages/dish-page/dish-page.component';
import {RatingModule} from "ng-starrating";
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/partials/title/title.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ToastrModule} from "ngx-toastr";
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { InputContainerComponent } from './components/partials/input-container/input-container.component';
import { InputValidationComponent } from './components/partials/input-validation/input-validation.component';
import { TextInputComponent } from './components/partials/text-input/text-input.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    DishPageComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    LoginPageComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    RegisterPageComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        RatingModule,
        HttpClientModule,
        ReactiveFormsModule,
        ToastrModule.forRoot({
          timeOut:3000, positionClass: 'toast-bottom-right', newestOnTop:false
        }) // for current project
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
