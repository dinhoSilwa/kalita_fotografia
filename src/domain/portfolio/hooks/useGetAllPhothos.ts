import { useQuery } from "@tanstack/react-query"
import { portfolioMutation } from "./useUploadMultiples"
import type { PhotoInDb } from "../entities/portfolio-entities"

export const useGetAllPhotos = () =>{
  const {data, isError, isLoading, refetch} = useQuery<PhotoInDb[]>({
    queryKey : ['all-photos'],
    queryFn : () => portfolioMutation.getAllPortfolioPhotos()
  })
  return {data, isError, isLoading, refetch}
}