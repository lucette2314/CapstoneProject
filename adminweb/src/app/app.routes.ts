import { Routes } from '@angular/router';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { FoodComponent } from './components/food/food.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { OffersComponent } from './components/offers/offers.component';
import { FoodsComponent } from './components/foods/foods.component';
import { DrinkComponent } from './components/drink/drink.component';
import { OfferComponent } from './components/offer/offer.component';
import { FoodformComponent } from './components/foodform/foodform.component';
import { DrinksformComponent } from './components/drinksform/drinksform.component';
import { OffersformComponent } from './components/offersform/offersform.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


export const routes: Routes = [
    {path: '', component: LoginpageComponent},
    {path: 'food', component: FoodComponent},
    {path: 'foods', component: FoodsComponent},
    {path: 'drink', component: DrinkComponent},
    {path: 'drinks', component: DrinksComponent},
    {path: 'offer', component: OfferComponent},
    {path: 'offers', component: OffersComponent},
    {path: 'addfood', component: FoodformComponent},
    {path: 'adddrink', component: DrinksformComponent},
    {path: 'addoffer', component: OffersformComponent},
    {path: 'loginpage', component: FoodComponent},
    {path: 'editfood/:food_id', component: FoodformComponent},
    {path: 'editdrink/:drink_id', component: DrinksformComponent},
    {path: 'editoffer/:offer_id', component: OffersformComponent},
    {path: '**', component: NotfoundComponent}
];
