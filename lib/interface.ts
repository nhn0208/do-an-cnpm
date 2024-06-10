export interface ProductProps  {
    id_item?: number,
    id_type?: number,
    id_material?: number,
    id_origin?: number,
    id_brand?: number,
    name?: string,
    image?: string,
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

export interface InvoiceProps {
    "id_invoice": number,
    "id_payment_method": number,
    "datetime": string,
    "ship_fee": number,
    "item_fee": number,
    "total": number,
    "payment_status": number,
    "address": string,
    "description": string,
    "name_status": string,
    "name_payment_method": string
}

export interface ItemInInvoiceProps {
    "id_item_detail": number,
    "id_invoice": number,
    "quantity": number,
    "unit_price": number,
    "size": number,
    "name": string,
    "id_item": number
}