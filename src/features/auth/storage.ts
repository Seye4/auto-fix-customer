import { File, Paths } from "expo-file-system";

const authStateFile = new File(Paths.document, "auto-fix-auth-state.json");

type AuthState = {
  isCustomerAuthenticated: boolean;
};

export async function getIsCustomerAuthenticated() {
  try {
    if (!authStateFile.exists) {
      return false;
    }

    const content = await authStateFile.text();
    const parsed = JSON.parse(content) as Partial<AuthState>;

    return parsed.isCustomerAuthenticated === true;
  } catch {
    return false;
  }
}

export async function setIsCustomerAuthenticated(value: boolean) {
  try {
    if (!authStateFile.exists) {
      authStateFile.create({ intermediates: true, overwrite: true });
    }

    authStateFile.write(JSON.stringify({ isCustomerAuthenticated: value } satisfies AuthState), {
      append: false,
    });
  } catch (error) {
    console.warn("Unable to persist auth state", error);
  }
}
