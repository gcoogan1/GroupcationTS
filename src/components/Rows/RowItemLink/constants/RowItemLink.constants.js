import { theme } from "../../../../styles/theme";

const ROW_ITEM_LINK_TEXT_STYLE = {
  basic: {
    label: {
      color: theme.color.surface.onBasePrimary
    },
    subLabel: {
      color: theme.color.surface.onBaseSecondary
    }
  },
  activity: {
    label: {
      color: theme.color.surface.onBaseSecondary
    },
    subLabel: {
      ...theme.typeography.body.md,
      color: theme.color.surface.onBasePrimary
    }
  },
  user: {
    label: {
      color: theme.color.surface.onBasePrimary
    }
  },
  avatars: {
    label: {
      color: theme.color.surface.onBaseSecondary
    },
    subLabel: {
      ...theme.typeography.body.md,
      color: theme.color.surface.onBasePrimary
    }
  },
  notification: {
    label: {
      ...theme.typeography.body.md,
      color: theme.color.surface.onBasePrimary
    },
    subLabel: {
      ...theme.typeography.body.sm,
      color: theme.color.surface.onBaseSecondary
    }
  },
  message: {
    label: {
      color: theme.color.surface.onBasePrimary
    },
    subLabel: {
      ...theme.typeography.body.md,
      color: theme.color.surface.onBaseSecondary
    }
  }
}

export default { ROW_ITEM_LINK_TEXT_STYLE }