import { NumberFormatStyle } from "@angular/common";
import { Ifoodcategory } from "./ifoodcategory";

export interface Ifood {
    id: Number;
    name: String;
    description: String;
    price: Number
    food_category_id: Number;
    image: String;
}
