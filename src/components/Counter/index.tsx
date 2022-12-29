import { Text, View } from "react-native"

import { styles } from "./styles"

interface CounterProps {
  name: string
  value: number
  color: string
}

export function Counter({ name, color, value }: CounterProps) {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.tagText, color }}>
        {name}
      </Text>
      <View style={styles.tagNumber}>
        <Text style={styles.tagNumberText}>
          {value}
        </Text>
      </View>
    </View>
  )
}