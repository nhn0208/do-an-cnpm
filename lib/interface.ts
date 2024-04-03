export interface ProductProps  {
    id_item?: number,
    userId?: number,
    name?: string,
    image?: string,
    price?: number,
    brand?: string | null,
    origin?: string,
    type?: string | null,
    description?: string,
    size?: number,
}

export interface CartProps {
    id_item?: number,
    userId?: number,
    name?: string,
    image?: string,
    price?: number,
    brand?: string | null,
    origin?: string,
    type?: string | null,
    description?: string,
    size?: number,
    material?: string,
    quantity?: number,
}

export interface ProfileProps {
    name?: string,
    phone?: string,
    email?: string,
    role?: string,
    image?: string,
}