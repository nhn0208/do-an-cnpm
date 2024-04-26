export interface ProductProps  {
    id_item?: number,
    id_type?: number,
    id_material?: number,
    id_origin?: number,
    id_brand?: number,
    name?: string,
    image: string,
    description?: string,
    sizes?: {
        id_item_detail?: number,
        id_item?: number,
        id_size?: number,
        price?: number,
        quantity?: number,
    }[],
}

export interface BrandProps {
    id_brand?: number,
    name?: string | null,
}

export interface CartProps {
    id_item_detail?: number,
    quantity?: number,
    price?: number,
    size?: number,
    id_item: number,
    name?: string | null,
}

export interface ProfileProps {
    name?: string,
    phone?: string,
    email?: string,
    role?: string,
    image?: string,
}