import { useLocalStorage } from "@/hooks/useLocalStorage";

export function useJoueurId() {
    const [id, setId] = useLocalStorage<string>("id", "");
    return [id, setId] as const;
}