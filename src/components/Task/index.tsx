import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from "./styles";
import { palette } from "../../../theme";
import { Todo } from "../../screens/Home";

interface TodoProps {
  todo: Todo
  onCheck: (onCheck: boolean) => void
  onRemove: () => void
}

export function Task({
  todo,
  onCheck,
  onRemove,
}: TodoProps) {
  const [checked, setChecked] = useState(todo.done)

  return (
    <View style={styles.container}>
      <BouncyCheckbox 
        size={25}
        style={styles.checkbox}
        fillColor={checked ? palette.purpleDark : palette.blue}
        unfillColor={palette.gray500}
        text={todo.text}
        textStyle={{ color: !checked ? palette.gray100 : palette.gray300 }}
        isChecked={checked}
        innerIconStyle={{ borderWidth: 2 }}
        onPress={(isChecked: boolean) => {
          setChecked(isChecked)
          onCheck(isChecked)
        }}
      />
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Ionicons name="trash-outline" size={20} color={palette.gray300} />
      </TouchableOpacity>
    </View>
  )
}