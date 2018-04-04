export interface Recipe {
    id:number,
    name:string,
    imagePath:string,
    description:string,
    ingredients:Ingredients[]
}
export interface Ingredients{
    name:string,
    quantity:string
}