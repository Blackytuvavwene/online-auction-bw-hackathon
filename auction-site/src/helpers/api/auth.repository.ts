
import { ApiUserRootResponse} from './../../types/user.type';



const AuthRepository={
    login:async (email: string, password: string): Promise<ApiUserRootResponse>=> {
        const response= await fetch('http://localhost:3000/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.message);
        }

        const data = await response.json() as ApiUserRootResponse;
        return data;
    },


    register: async (email: string, password: string, username: string): Promise<ApiUserRootResponse> => {
        const response = await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, password, username }),
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.message);
        }

        const data = await response.json() as ApiUserRootResponse;
        return data;
    },


    getCurrentUser: async (): Promise<ApiUserRootResponse> => {
        const response = await fetch('http://localhost:3000/api/users/me', {
            method: 'GET',
           
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.message);
        }

        const data = await response.json() as ApiUserRootResponse;
        return data;
    }
}

export default AuthRepository;