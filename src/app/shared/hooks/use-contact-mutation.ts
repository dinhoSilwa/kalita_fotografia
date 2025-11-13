import type {ContactMessage } from "@/domain/contact/entities/contact-message"
import { useApiContactService } from "@/domain/instanceContainer"
import { useMutation } from "@tanstack/react-query"
import type { AxiosError } from "axios"

export const useContactMutation = () =>{
  const sendContactMutation = useApiContactService
  const {mutate, isPending, isSuccess, isError} = useMutation({
    mutationFn : (data : ContactMessage) => sendContactMutation.sendMessage(data),
    //no futuro será implementado mais opçoes de gerenciamente de Query
    onSuccess:(data) =>{
      console.log(data)
    
    },
    onError: (error : AxiosError) =>{
      console.warn("Falha ao enviar form", error)
    }
  })

  return {mutate, isPending, isSuccess, isError}
}