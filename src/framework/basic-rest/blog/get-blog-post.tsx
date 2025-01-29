import { QueryOptionsType, Blog } from '@framework/types';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import http from '@framework/utils/http';
import shuffle from 'lodash/shuffle';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

const fetchBlogPost = async () => {
  const { data } = await http.get(API_ENDPOINTS.BLOGDETAILS);
  return data;
};

const useBlogPostQuery = () => {
  return useQuery({
    queryKey: [API_ENDPOINTS.BLOGDETAILS],
    queryFn: () => fetchBlogPost(),
  });
};

export { useBlogPostQuery, fetchBlogPost };
