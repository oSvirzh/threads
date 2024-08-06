import { decode } from 'base64-arraybuffer';
import * as FileSystem from 'expo-file-system';
import { useCallback, useState } from 'react';

import type { UploadOptions } from '@/api';
import { supabase } from '@/api/supabase';
import { showErrorMessage } from '@/ui';

export const useUploadAvatar = (options?: UploadOptions) => {
  const [loading, setLoading] = useState(false);
  const storage = supabase.storage;

  const uploadImage = useCallback(
    async (
      uri: string
    ): Promise<{
      data: { id: string; path: string; fullPath: string } | null;
      error: null;
      publicUrl: string | undefined;
    }> => {
      setLoading(true);

      try {
        const base64Data = await convertImageToBase64(uri);
        const fileName = generateFileName();
        const { data, error } = await storage
          .from(options?.bucket || 'files')
          .upload(fileName, decode(base64Data), {
            contentType: options?.contentType || 'image/png',
          });

        if (error) {
          throw new Error(`Upload failed: ${error.message}`);
        }

        const publicUrl = getPublicUrl(data?.path, options);

        return { data, error: null, publicUrl };
      } catch (error) {
        console.error('Error uploading avatar:', error);
        showErrorMessage(JSON.stringify(error));
        return { error };
      } finally {
        setLoading(false);
      }
    },
    [options, storage]
  );

  const convertImageToBase64 = async (uri: string): Promise<string> => {
    return await FileSystem.readAsStringAsync(uri, { encoding: 'base64' });
  };

  const generateFileName = (): string => {
    return `avatars/${new Date().getTime()}.png`;
  };

  const getPublicUrl = (
    path?: string,
    options?: UploadOptions
  ): string | undefined => {
    if (!path) return undefined;
    return storage.from(options?.bucket || 'files').getPublicUrl(path).data
      .publicUrl;
  };

  return { uploadImage, loading };
};
