import type { PostgrestError } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

import type { OrderBy, Pagination, Post } from '@/api';
import { POST_ORDER_BY, SORT_ORDER } from '@/api';
import { supabase } from '@/api/supabase';
import { showErrorMessage } from '@/ui';

export const usePosts = (parent: string | null = null) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<PostgrestError>();
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState<Pagination>({
    currentPage: 1,
    offset: 20,
    count: 0,
  });
  const [orderBy, setOrderBy] = useState<OrderBy[]>([
    { column: POST_ORDER_BY.CREATED_AT, order: SORT_ORDER.ASC },
  ]);

  const fetchPosts = async () => {
    setIsLoading(true);
    getCount();
    let query = supabase.from('posts').select('*');
    orderBy.forEach((item) => {
      query = query.order(item.column, {
        ascending: item.order === SORT_ORDER.ASC,
      });
    });

    if (parent) {
      query.eq('parent', parent);
    } else {
      query.filter('parent', 'is', null);
    }

    const { data, error } = await query
      .range(
        (pagination.currentPage - 1) * pagination.offset,
        pagination.currentPage * pagination.offset - 1
      )
      .returns<Post[]>();

    if (data) {
      setPosts(data);
    } else {
      setPosts([]);
    }

    if (error) {
      setError(error);
      showErrorMessage(error.message);
    }

    setIsLoading(false);
  };

  const getCount = async () => {
    const { count } = await supabase
      .from('posts')
      .select('id', { count: 'exact' })
      .filter('parent', 'is', parent);
    setPagination({ ...pagination, count: count || 0 });
  };

  const loadMore = () => {
    setPagination((state) => ({
      ...state,
      currentPage: Math.min(
        state.currentPage + 1,
        Math.ceil(state.count / state.offset) || 1
      ),
    }));
  };

  const toggleOrderBy = (column: POST_ORDER_BY) => {
    const index = orderBy.findIndex((item) => item.column === column);
    if (index !== -1) {
      const newOrderBy = [...orderBy];
      newOrderBy[index].order =
        newOrderBy[index].order === SORT_ORDER.ASC
          ? SORT_ORDER.DESC
          : SORT_ORDER.ASC;
      return setOrderBy(newOrderBy);
    }

    setOrderBy([...orderBy, { column, order: SORT_ORDER.DESC }]);
    setPagination({ ...pagination, currentPage: 1 });

    fetchPosts();
  };

  useEffect(() => {
    const realtimeChannel = supabase
      .channel('public:posts')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'posts' },
        () => fetchPosts()
      );
    realtimeChannel.subscribe();
    fetchPosts();
  }, []);

  return {
    posts,
    error,
    isLoading,
    loadMore,
    toggleOrderBy,
    orderBy,
  };
};
