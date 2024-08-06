import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { Button, Text } from '@/components/atoms';
import { Index } from '@/components/atoms/cover';
import { FocusAwareStatusBar } from '@/components/organisms/focus-aware-status-bar';
import { useIsFirstTime } from '@/core/hooks';

export default function Onboarding() {
  const [_, setIsFirstTime] = useIsFirstTime();
  const router = useRouter();
  return (
    <View className="flex h-full items-center  justify-center">
      <FocusAwareStatusBar />
      <View className="w-full flex-1">
        <Index />
      </View>
      <View className="justify-end ">
        <Text className="my-3 text-center text-5xl font-bold">
          Hello There!
        </Text>
      </View>
      <SafeAreaView className="mt-6">
        <Button
          label="Let's Get Started "
          onPress={() => {
            setIsFirstTime(false);
            router.replace('/login');
          }}
        />
      </SafeAreaView>
    </View>
  );
}
