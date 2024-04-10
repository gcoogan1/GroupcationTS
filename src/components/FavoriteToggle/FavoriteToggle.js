import { useState } from "react";
import { Pressable, StyleSheet } from "react-native";

import Icon from "../Icon/Icon";
import { theme } from "../../styles/theme";
import FavoriteOutlined from "../../../assets/icons/Favorite_Outlined.svg";
import FavoriteFilled from "../../../assets/icons/Favorite_Filled.svg";
import { favoriteToggleStyles } from "./styles/FavoriteToggle.styles";


/**
 * This component renders a toggle that allows a user to select a favorite.
 * @prop {string} size optional -> sm, md (defaults to 'md')
 * @returns {ReactElement} Renders a favorites toggle.
 *
 * @example 
 * <FavoriteToggle size="sm" />
 */
const FavoriteToggle = ({ size }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleHandler = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      {!!isFavorite ? (
        <Pressable
          onPress={toggleHandler}
          style={({ pressed, focused }) => [
            pressed && favoriteToggleStyles.filledPressed,
            focused && favoriteToggleStyles.filledFocus,
            (size === 'sm') && { padding: theme.spacing.sm},
            favoriteToggleStyles.filledContainer
          ]}
        >
          <Icon size={size}>
            <FavoriteFilled color={theme.color.primary.onBase} />
          </Icon>
        </Pressable>
      ) : (
        <Pressable
          onPress={toggleHandler}
          style={({ pressed, focused }) => [
            pressed && favoriteToggleStyles.outlinedPressed,
            focused && favoriteToggleStyles.outlinedFocus,
            (size === 'sm') && { padding: theme.spacing.sm},
            favoriteToggleStyles.outlinedContainer
          ]}
        >
          <Icon size={size}>
            <FavoriteOutlined color={theme.color.surface.onBasePrimary} />
          </Icon>
        </Pressable>
      )}
    </>
  );
};

export default FavoriteToggle;
