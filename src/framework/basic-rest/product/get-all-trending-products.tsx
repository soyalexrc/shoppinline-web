import { QueryOptionsType, Product } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from '@tanstack/react-query';

export const fetchTrendingProducts = async ({ queryKey }: any) => {
  const { data } = await http.get(API_ENDPOINTS.TOPSELL_PRODUCTS);
  return data as Product[];
};

export const useTrendingProductsQuery = (options?: QueryOptionsType) => {
  return useQuery<Product[], Error>({
    queryKey: [API_ENDPOINTS.POPULAR_PRODUCTS, options],
    queryFn: () => fetchTrendingProducts(options),
  });
};
