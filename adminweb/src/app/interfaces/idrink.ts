import { Idrinkcategory } from "./idrinkcategory";

export interface Idrink {
    id: Number;
    name: String;
    description: String;
    price: Number
    drink_category_id: Number;
    drinkcategory?: Idrinkcategory;
    image: string;
}
