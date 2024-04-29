import { useMutation } from "@tanstack/react-query";
import { AuthPayload, addShippingPayload, createProfilePayload, updatePasswordPayload } from "@/utils/types";
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
export function useEditProfile() {
    return useMutation({ mutationFn: (data: createProfilePayload) => api.put('/users/me/profile', data).then((resp) => resp.data) });
}
export function useChangePassword() {
    return useMutation({ mutationFn: (data: updatePasswordPayload) => api.put('/users/me/password', data).then((resp) => resp.data) });
}
export function useAddShippingAdress() {
    return useMutation({ mutationFn: (data: addShippingPayload) => api.post('/users/me/addresses', data).then((resp) => resp.data) });
}