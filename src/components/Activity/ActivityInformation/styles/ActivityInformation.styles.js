import { StyleSheet } from "react-native";

import { theme } from "../../../../styles/theme";

export const activityInfoStyles = StyleSheet.create({
  container: {
    ...theme.border.radius.sm,
    ...theme.border.width.md,
    padding: theme.spacing.sm,
    borderColor: theme.color.surface.onBasePrimary,
    gap: theme.spacing.xs,
  },
  summaryHeaderContainer: {
    paddingVertical: theme.spacing.sm,
    alignItems: "center",
  },
  summaryHeader: {
    ...theme.typeography.body.mdBold,
    color: theme.color.surface.onBasePrimary,
  },
  summarySubHeader: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBaseSecondary,
  },
  detailsContainer: {
    ...theme.border.radius.md,
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.md,
    gap: theme.spacing.sm,
    backgroundColor: theme.color.surface.layer,
  },
  departureContainer: {
    gap: theme.spacing.sm,
    flexDirection: "row",
  },
  departureTextContainer: {
    gap: theme.spacing.xs,
  },
  departureHeader: {
    ...theme.typeography.body.mdBold,
    color: theme.color.surface.onBasePrimary,
  },
  departureSubHeader: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBaseSecondary,
  },
  durationContainer: {
    paddingVertical: theme.spacing.lg,
    gap: theme.spacing.xs,
    flexDirection: "row",
    justifyContent: "center",
  },
  durationText: {
    ...theme.typeography.body.smBold,
    color: theme.color.surface.onBaseSecondary,
  },
  summaryFooterContainer: {
    paddingVertical: theme.spacing.sm,
  },
  notesContainer: {
    ...theme.border.radius.md,
    padding: theme.spacing.md,
    gap: theme.spacing.sm,
    backgroundColor: theme.color.surface.layer,
  },
  notesText: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBasePrimary,
  },
});
