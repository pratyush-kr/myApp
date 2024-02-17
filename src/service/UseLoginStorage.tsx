import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage";
const useLoginStorage = async () => {
  const { getItem, setItem, removeItem } = useAsyncStorage("@login_data");
  const saveValue = async (data: any) => {
    await setItem(data);
  };
  const readValue = async () => {
    let data: string | null = null;
    try {
      data = await getItem();
    } catch (e) {
      console.log(e);
    }
    return data;
  };
  const deleteValue = async () => {
    await removeItem();
  };
  return { readValue, saveValue, deleteValue };
};

export default useLoginStorage;
