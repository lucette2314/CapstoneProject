import { Ifoodcategory } from "./ifoodcategory";

export interface Ifood {
    id: Number;
    name: String;
    description: String;
    price: Number
    food_category_id: Number;
    foodcategory?: Ifoodcategory;
    image: string;
}
