import { api } from "../../../service/api";


export const formService = {
  gerVerifyCPF : async(cpf: number) => {
    try {
      const response = await api.get(`students/verify?cpf=${cpf}`,
        {
          headers: {
              "Content-Type": "application/json"
          },
        }
      );

      return {
        message: 'Sucesso',
        data: response.data,
        status: 200
    };
    } catch (error) {
      return {
        message: error.response?.data || 'Erro desconhecido',
        status: error.response?.status || 500,
    };
    }
  },
  postDates: async (formData: string) => {
    try {
        const response = await api.post("students/leads/",formData, {
          headers: {
              "Content-Type": "application/json"
          },
        });
        
        return {
            message: 'Sucesso',
            data: response.data,
            status: 200
        };
        } catch (error: any) {
        return {
            message: error.response?.data || 'Erro desconhecido',
            status: error.response?.status || 500,
        };
    }
  },
}
