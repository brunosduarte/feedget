import { Camera, Trash } from 'phosphor-react-native'
import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { theme } from '../../theme'

import { styles } from './styles'

interface Props {
  screenshot: string | null
  onTakeShot: () => void
  onRemoveShot: () => void
}

export function ScreenshotButton({
  screenshot,
  onTakeShot,
  onRemoveShot,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={screenshot ? onRemoveShot : onTakeShot}
    >
      {screenshot ? (
        <View>
          <Image style={styles.image} alt="" source={{ uri: screenshot }} />
          <Trash
            size={22}
            color={theme.colors.text_secondary}
            weight="fill"
            style={styles.removeIcon}
          />
        </View>
      ) : (
        <Camera size={22} color={theme.colors.text_primary} weight="bold" />
      )}
    </TouchableOpacity>
  )
}
