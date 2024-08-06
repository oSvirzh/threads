import { useState } from 'react';

import { supabase } from '@/api/supabase';
import type { FormType } from '@/components/organisms/add-comment-form/add-comment-form.types';
import { showErrorMessage, showSuccessMessage } from '@/ui';

export const useAddPost = (parent?: string) => {
  const [errorText, setErrorText] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  const onAdd = async (data: FormType) => {
    try {
      setErrorText(undefined);
      setLoading(true);
      await supabase
        .from('posts')
        .insert({ ...data, parent })
        .select()
        .throwOnError()
        .single();
      showSuccessMessage('Post created!');
    } catch (e) {
      showErrorMessage(JSON.stringify(e));
      setErrorText(JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  };

  return { onAdd, errorText, loading };
};
