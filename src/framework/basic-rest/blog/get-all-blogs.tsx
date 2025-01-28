import { QueryOptionsType, Blog} from '@framework/types';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import http from '@framework/utils/http';
import {useQuery} from '@tanstack/react-query';

const fetchBlogs = async () => {
  const { data } = await http.get(API_ENDPOINTS.BLOGS);
  return { blogs: { data: data as Blog[] } };
};



const useBlogsQuery = () => {
  return useQuery({
    queryKey: [API_ENDPOINTS.BLOGS],
    queryFn: () => fetchBlogs(),
  });
 
};

export { useBlogsQuery, fetchBlogs };
