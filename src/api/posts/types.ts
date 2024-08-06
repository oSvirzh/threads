export enum POST_ORDER_BY {
  CREATED_AT = 'created_at',
  USERNAME = 'username',
  EMAIL = 'email',
}

export enum SORT_ORDER {
  ASC = 'asc',
  DESC = 'desc',
}

export type Post = {
  id: string;
  created_at: string;
  username: string;
  email: string;
  text: string;
  avatar: string;
  home_url: string;
};

export type OrderBy = {
  column: POST_ORDER_BY;
  order: SORT_ORDER;
};

export interface Pagination {
  currentPage: number;
  offset: number;
  count: number;
}

export type UploadOptions = {
  bucket?: string;
  contentType?: string;
};
