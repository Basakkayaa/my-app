import { Card } from "./card";

export interface User {
    id: number;
    name: string;
    surname: string;
    age: number;
}


//   {
// "id": 1,
//     "name": "John",
//         "surname": "Doe",
//             "age": 30
//   }, 
// burada extend user yapmasının sebebei yukarıdaki userın özellikerini kendine alabilmesi

export interface UserWithCardDto extends User {
    cards: Card[];

}


// {  cards:Card[];
//  bu parametre aşağıyı karşılar
//     "id": 1,
//     "name": "John",
//     "surname": "Doe",
//     "age": 30,
//     "cards": [
//       {
//         "id": 62,
//         "userId": 1,
//         "number": "5602242626999444",
//         "type": "bankcard"
//       },