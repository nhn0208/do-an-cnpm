export interface ProductProps  {
    id_item: number,
    userId?: number,
    name: string,
    image: string,
    price: number,
    brand?: string,
    origin?: string,
    type?: string,
    description?: string,
    size?: number,
}