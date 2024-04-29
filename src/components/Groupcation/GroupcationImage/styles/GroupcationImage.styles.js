import { StyleSheet } from "react-native";
import { theme } from "../../../../styles/theme";

export const groupcationImageStyles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    justifyContent: "space-between",
    backgroundColor: theme.color.disabled.base
  },
  topContentContainer: {
    flexDirection: "row",
    paddingTop: 56,
    paddingBottom: theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
    justifyContent: "space-between"
  },
  topRightContent: {
    flexDirection: "row",
    gap: theme.spacing.xs
  },
  iconContainer: {
    width: 36,
    height: 36
  },
  bottomContentContainer: {
    padding: theme.spacing.md,
    flexDirection: "row"
  },
  tagLink: {
    ...theme.border.radius.sm,
    borderWidth: theme.border.width.lg.borderWidth,
    borderColor: "transparent",
    backgroundColor: theme.color.surface.base
  },
  tagLinkFocused: {
    borderColor: theme.color.surface.layer
  },
  tagLinkPressed: {
    borderColor: theme.color.surface.line
  },
});
