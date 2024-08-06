import type { OrderBy, POST_ORDER_BY } from '@/api';

export interface CommentsFilterProps {
  orderBy: OrderBy[];
  toggleOrderBy: (orderBy: POST_ORDER_BY) => void;
}
