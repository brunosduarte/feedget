/* eslint-disable camelcase */
import 'react-native-gesture-handler'

import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter'

import { theme } from '@/theme'
import Widget from '@/components/Widget'
import { useCallback, useEffect, useState } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync()
        await Font.loadAsync({
          Inter_400Regular,
          Inter_500Medium,
        })
      } catch (e) {
        console.warn(e)
      } finally {
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return (
    <View
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      onLayout={onLayoutRootView}
    >
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <Widget />
    </View>
  )
}

// import { View } from "react-native"
// import { router } from "expo-router"

// import { Steps } from "@/components/steps"
// import { Button } from "@/components/button"
// import { Welcome } from "@/components/welcome"

// export default function Index() {
//   return (
//     <View style={{ flex: 1, padding: 40, gap: 40 }}>
//       <Welcome />
//       <Steps />

//       <Button onPress={() => router.navigate("/home")}>
//         <Button.Title>Começar</Button.Title>
//       </Button>
//     </View>
//   )
// }
