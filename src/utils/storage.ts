import { setItemAsync, getItemAsync } from "expo-secure-store";

const prefix = "SECURE_STORE_";

class Storage {
  public async addItem(key: string, value: any) {
    try {
      if (typeof value === "string") {
        await setItemAsync(prefix + key, value);
      } else {
        await setItemAsync(prefix + key, JSON.stringify(value));
      }
    } catch (err) {
      console.error(err);
    }
  }

  public async getItem(key: string) {
    try {
      const data = await getItemAsync(prefix + key);
      if (data) return JSON.parse(data);
      return null;
    } catch (err) {
      console.error(err);
    }
  }
}

export const secureStorage: Storage = new Storage();
