import { QueryOptionsType, Category } from '@framework/types';
import http from '@framework/utils/http';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import { useQuery } from '@tanstack/react-query';

export const fetchElectronictablesCategory = async ({ queryKey }: any) => {
  const { data } = await http.get(API_ENDPOINTS.ELECTRONIC_CATEGORY);
  return data as Category[];
};
export const useElectronicCategoryQuery = (options: QueryOptionsType) => {
  
  return useQuery<Category[], Error>({
    queryKey: [API_ENDPOINTS.ELECTRONIC_CATEGORY, options],
    queryFn: () => fetchElectronictablesCategory(options),
  });
};
