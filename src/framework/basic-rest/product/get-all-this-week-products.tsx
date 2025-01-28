import { QueryOptionsType, Product } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from '@tanstack/react-query';

export const fetchThisWeekProducts = async ({ queryKey }: any) => {
  const { data } = await http.get(API_ENDPOINTS.THIS_WEEK_PRODUCTS);
  return data as Product[];
};

export const useThisWeekProductsQuery = (options: QueryOptionsType) => {
  return useQuery<Product[], Error>({
        queryKey: [API_ENDPOINTS.THIS_WEEK_PRODUCTS, options],
        queryFn: () =>   fetchThisWeekProducts(options),
    });
};
