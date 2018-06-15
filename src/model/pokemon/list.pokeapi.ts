export class PokeApiModel
{
    next: string;
    previous: string; 
    count: number;
    results: Array<PokeApiItemModel> = new Array<PokeApiItemModel>();
}

export class PokeApiItemModel
{
    name: string; 
    url: string;
}