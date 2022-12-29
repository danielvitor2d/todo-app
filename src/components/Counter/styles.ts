import { StyleSheet } from "react-native";
import { palette } from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  tagNumber: {
    height: 19,
    width: 25,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.gray400,
    marginLeft: 6,
  },
  tagNumberText: {
    color: palette.gray200,
    fontWeight: 'bold',
    fontSize: 13,
  },
})