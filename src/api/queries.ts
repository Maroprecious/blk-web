import { useQuery } from "@tanstack/react-query";
import api from "@/utils/api";

export function useGetUser() {
  return useQuery({
    queryKey: ["get-user"],
    queryFn: () => api.get("/users/me").then((resp) => resp.data),
    enabled: false,
  });
}

export function useGetAllHerbapaedia() {
  return useQuery({
    queryKey: ["get-herbalpaedia"],
    queryFn: () => api.get("/herbalpedia").then((resp) => resp.data),
  });
}

export function useGetOneHerbalpaedia(id: number) {
  return useQuery({
    queryKey: ["get-one-herbalpaedia"],
    queryFn: () => api.get(`/herbalpedia/${id}`).then((resp) => resp.data),
    enabled: false,
  });
}
export function useGetFeaturedProducts() {
  return useQuery({
    queryKey: ["get-featured-products"],
    queryFn: () => api.get("/products/featured").then((resp) => resp.data),
  });
}

export function useGetAllProducts() {
  return useQuery({
    queryKey: ["get-all-products"],
    queryFn: () => api.get("/products").then((resp) => resp.data),
  });
}

export function useGetOneProduct(id: number) {
    return useQuery({
      queryKey: ["get-one-product"],
      queryFn: () => api.get(`/products/${id}`).then((resp) => resp.data),
      enabled: false,
    });
  }
  export function useGetShippingAddress() {
    return useQuery({
      queryKey: ["get-addresses"],
      queryFn: () => api.get('/users/me/addresses').then((resp) => resp.data),
      enabled: false,
    });
  }
  export function useGetAllRetreats() {
    return useQuery({
      queryKey: ["get-retreats"],
      queryFn: () => api.get('/retreats').then((resp) => resp.data),
    
    });
  }