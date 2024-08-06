import * as React from 'react';

import { useAddPost } from '@/api';
import { useUploadAvatar } from '@/api/posts/use-upload-image';
import { AddCommentForm } from '@/components/organisms/add-comment-form';
import type { FormType } from '@/components/organisms/add-comment-form/add-comment-form.types';

export function AddComment({ parent }: { parent?: string }) {
  const { onAdd, loading: postLoading } = useAddPost(parent);
  const { uploadImage, loading: imageUploadLoading } = useUploadAvatar();

  const onSubmit = async (values: FormType) => {
    const { error, publicUrl } = await uploadImage(values.avatar);
    if (!error && publicUrl) {
      onAdd({ ...values, avatar: publicUrl });
    }
  };

  return (
    <>
      <AddCommentForm
        onSubmit={onSubmit}
        loading={postLoading || imageUploadLoading}
      />
    </>
  );
}
