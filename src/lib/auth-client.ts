import { createAuthClient } from "better-auth/react";

export const {
  signIn,
  signUp,
  signOut,
  resetPassword,
  requestPasswordReset,
  updateUser,
  useSession,
  changeEmail,
  revokeSessions,
  changePassword,
  sendVerificationEmail,
} = createAuthClient();
