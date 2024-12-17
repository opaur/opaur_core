export type BrandUser = {
    id: string;
    user_id: string;
    brand_id: string;
    is_brand_owner: boolean;
    brand?: {
      id: string;
      name: string;
      created_at:string;
      category?:{
        id:string;
        name:string;
      }
    };
  }