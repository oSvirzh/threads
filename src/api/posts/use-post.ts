import { useEffect, useState } from 'react';

import type { Post } from '@/api';
import { supabase } from '@/api/supabase';
import { showErrorMessage } from '@/ui';

export const usePost = (id: string) => {
  const [errorText, setErrorText] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<string>(id);
  const [post, setPost] = useState<Post>();

  const getPostById = async (id: string) => {
    try {
      setErrorText(undefined);
      setLoading(true);
      const { data } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .throwOnError();
      if (data && data?.length > 0 && data[0]) {
        setPost(data[0]);
      } else {
        setPost(undefined);
      }
    } catch (e) {
      showErrorMessage(JSON.stringify(e));
      setErrorText(JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPostById(currentId);
  }, [currentId]);

  return { errorText, loading, currentId, setCurrentId, post };
};
