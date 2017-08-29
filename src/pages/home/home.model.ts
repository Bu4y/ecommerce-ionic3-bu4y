export class HomeModel {
  images: Array<String>;
  popularproducts: Array<ProductItemModel>;
  popularshops: Array<ShopItemModel>;
  lastvisit: Array<ProductItemModel>;
  bestseller: Array<ProductItemModel>;
}

export class ProductItemModel {
  name: String;
  image: String;
  unitprice: Number;
}
export class ShopItemModel {
  name: String;
  image: String;
}
