import { StyleSheet } from "react-native";
import { palette } from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.gray600,
    padding: 24,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 42,
  },
  input: {
    flex: 1,
    height: 56,
    borderRadius: 6,
    marginRight: 5,
    backgroundColor: 
    palette.gray500,
    padding: 16,
    color: palette.gray100,
  },
  inputFocused: {
    borderWidth: 1,
    borderColor: palette.purpleDark,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: palette.blueDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  emptyGroup: {
    paddingVertical: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: palette.gray400,
  },
  listEmptyInput: {
    color: palette.gray300,
    textAlign: 'center',
    fontSize: 14,
  },
})