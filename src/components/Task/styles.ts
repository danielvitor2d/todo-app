import { StyleSheet } from "react-native";
import { palette } from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingLeft: 10,
    paddingVertical: 8,
    backgroundColor:
      palette.gray500,
    flexDirection: 'row',
    borderRadius: 8,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox: {
    flex: 1,
    color: palette.gray100,
  },
  button: {
    width: 56,
    height: 56,
    marginLeft: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
})