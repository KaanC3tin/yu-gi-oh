
import axios from 'axios';

const API_URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=metal%20raiders&attribute=dark'

export const fetchCardData = async (params: Record<string, any>) => {

    const response = await axios.get(API_URL, { params });
    return response.data;

}
