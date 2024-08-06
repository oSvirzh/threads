/* eslint-disable react/react-in-jsx-scope */
import { Env } from '@env';
import { ScrollView, View } from 'react-native';
import { LanguageMenuItem } from 'src/components/organisms/language-menu-item';

import { Text } from '@/components/atoms';
import { MenuItemsContainer } from '@/components/molecules/menu-item-container';
import { SettingItem } from '@/components/molecules/setting-item';
import { FocusAwareStatusBar } from '@/components/organisms/focus-aware-status-bar';
import { ThemeMenuItem } from '@/components/organisms/theme-menu-item';
import { translate, useAuth } from '@/core';

export default function Settings() {
  const signOut = useAuth.use.signOut();
  return (
    <>
      <FocusAwareStatusBar />
      <ScrollView>
        <View className="flex-1 px-4 pt-16 ">
          <Text className="text-xl font-bold">
            {translate('settings.title')}
          </Text>
          <MenuItemsContainer title="settings.generale">
            <LanguageMenuItem />
            <ThemeMenuItem />
          </MenuItemsContainer>

          <MenuItemsContainer title="settings.about">
            <SettingItem text="settings.app_name" value={Env.NAME} />
            <SettingItem text="settings.version" value={Env.VERSION} />
          </MenuItemsContainer>

          <View className="my-8">
            <MenuItemsContainer>
              <SettingItem text="settings.logout" onPress={signOut} />
            </MenuItemsContainer>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
