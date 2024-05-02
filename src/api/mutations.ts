import { useMutation } from "@tanstack/react-query";
import {
  AuthPayload,
  CreateOrderDto,
  addShippingPayload,
  bookRetreatPayload,
  createProfilePayload,
  makeEnquiryPayload,
  updatePasswordPayload,
} from "@/utils/types";
import api from "@/utils/api";


export function useSignUp() {
  return useMutation({
    mutationFn: (data: AuthPayload) =>
      api.post("/auth/signup", data).then((resp) => resp.data),
  });
}

export function useLogin() {
  return useMutation({
    mutationFn: (data: AuthPayload) =>
      api.post("/auth/signin", data).then((resp) => resp.data),
  });
}
export function useCompleteProfile() {
  return useMutation({
    mutationFn: (data: createProfilePayload) =>
      api.post("/users/me/profile", data).then((resp) => resp.data),
  });
}
export function useEditProfile() {
  return useMutation({
    mutationFn: (data: createProfilePayload) =>
      api.put("/users/me/profile", data).then((resp) => resp.data),
  });
}
export function useChangePassword() {
  return useMutation({
    mutationFn: (data: updatePasswordPayload) =>
      api.put("/users/me/password", data).then((resp) => resp.data),
  });
}
export function useAddShippingAdress() {
    return useMutation({ mutationFn: (data: addShippingPayload) => api.post('/users/me/addresses', data).then((resp) => resp.data) });
}

export function useOrders() {
    return useMutation({ mutationFn: (data: CreateOrderDto) => api.post('/orders', data).then((resp) => resp.data) });
}
  return useMutation({
    mutationFn: (data: addShippingPayload) =>
      api.post("/users/me/addresses", data).then((resp) => resp.data),
  });
}
export function useMakeEnquiry() {
  return useMutation({
    mutationFn: (data: makeEnquiryPayload) =>
      api.post("/retreats/inquiry", data).then((resp) => resp.data),
  });
}
export function useBookRetreats(id: number) {
    return useMutation({
      mutationFn: (data: bookRetreatPayload) =>
        api.post(`/retreats/${id}/book`, data).then((resp) => resp.data),
    });
  }
