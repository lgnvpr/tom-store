export interface ProductModel {
    id: string;
    name: string;

    // đơn vị
    unit?: string;

    // giá gốc
    price?: number;

    // giá bán
    salePrice?: number;

    //phần trăm giảm
    salePercent ?: number;

    // số lượng tồn kho
    quantity?: number;

    //phân loại sản phẩm
    classify?: string;

    thumbImagesUrl?: string[];
}