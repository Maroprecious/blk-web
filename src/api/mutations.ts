import { useMutation } from "@tanstack/react-query";
import { AuthPayload, createProfilePayload } from "@/utils/types";
import api from "@/utils/api";


export function useSignUp() {
    return useMutation({ mutationFn: (data: AuthPayload) => api.post('/auth/signup', data).then((resp) => resp.data) });
}

export function useLogin() {
    return useMutation({ mutationFn: (data: AuthPayload) => api.post('/auth/signin', data).then((resp) => resp.data) });
}
export function useCompleteProfile() {
    return useMutation({ mutationFn: (data: createProfilePayload) => api.post('/users/me/profile', data).then((resp) => resp.data) });
}