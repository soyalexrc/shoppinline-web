import { QueryOptionsType, Product } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from '@tanstack/react-query';
import shuffle from 'lodash/shuffle';

export const fetchFashionProducts = async ({ queryKey }: any) => {

  const { data } = await http.get(API_ENDPOINTS.FASHION_PRODUCTS);
  return shuffle(data) as Product[];
};
export const usefashionProductsQuery = (options: QueryOptionsType) => {

  return useQuery<Product[], Error>({
        queryKey:[API_ENDPOINTS.FASHION_PRODUCTS, options],
        queryFn: () =>  fetchFashionProducts(options)
    });
};