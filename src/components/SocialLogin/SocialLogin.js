import { Text, View } from "react-native";

import { socialLoginStyles } from "./SocialLogin.styles";
import SocialLoginButton from "./SocialLoginButton/SocialLoginButton";

// TODO: Add other social logins when available

/**
 * This component renders a display with a social login button.
 * @important -> This components only displays a login option for google.
 * @returns {ReactElement} Renders social login.
 *
 * @example  <SocialLogin />
 */
const SocialLogin = () => {
  return (
    <View style={socialLoginStyles.container}>
      <View style={socialLoginStyles.textContainer}>
        <View style={socialLoginStyles.line}></View>
        <Text style={socialLoginStyles.text}>or</Text>
        <View style={socialLoginStyles.line}></View>
      </View>
      <SocialLoginButton />
    </View>
  );
};

export default SocialLogin;
