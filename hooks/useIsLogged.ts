import { useLocalStorage } from "@/hooks/useLocalStorage";

export function useIsLogged() {
    const [id, setId] = useLocalStorage<boolean>("id", false);
    return [id, setId] as const;
}