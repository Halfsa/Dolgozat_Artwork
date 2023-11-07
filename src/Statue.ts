export class Statue implements Artwork{
    title: string;
    year: number;
    price: number;
    height:number;
    constructor(title:string,year:number,price:number,height:number){
        this.title = title;
        this.year = year;
        this.price = price;
        this.height = height;
        var nevtest = new RegExp(/^[a-z,\ A-Z]+$/gm);
        if (nevtest.test(title)==false||year>2023||price<1||height<10) {
            throw new Error("nem megfelelően kitöltött adatok");
        }
    }
    
}