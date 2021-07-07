import * as LocalAuthentication from "expo-local-authentication";

const options = {
  promptMessage:
    " A message that is shown alongside the TouchID or FaceID prompt",
  cancelLabel: "Cancel",
};

export async function isAuthenticated() {
  const isAuthAvailable = await LocalAuthentication.hasHardwareAsync();
  if (isAuthAvailable) {
    const authListAvailable = await LocalAuthentication.supportedAuthenticationTypesAsync();
    if (authListAvailable.includes(1)) {
      const isEnrolledAsync = await LocalAuthentication.isEnrolledAsync();
      if (isEnrolledAsync) {
        const { success } = await LocalAuthentication.authenticateAsync(
          options
        );
        if (success) {
          return success;
        }
      }
    }
  }

  return false;
}
