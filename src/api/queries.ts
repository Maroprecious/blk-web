import { useQuery } from "@tanstack/react-query";
import api from "@/utils/api";


export default function useGetUser() {
    return useQuery({
        queryKey: ['get-user'],
        queryFn: () => api.get('/users/me').then((resp) => resp.data),
        enabled: false
    });
}
