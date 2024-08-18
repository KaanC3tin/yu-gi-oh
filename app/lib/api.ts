
import axios from 'axios';

const API_URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=metal%20raiders&attribute=dark'

export const fetchCardData = async (params: Record<string, any>) => {
    try {
        const response = await axios.get(API_URL, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching card data:', error);
        return {
            data: [{

                id: 31,
                atk: 31,
                def: 31,
                level: 31,
                race: "Aqua",
                attribute: "WATER",
                card_images: [
                    {
                        image_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2FMenOfTurkey%2Fcomments%2F188ce96%2Fb%25C3%25BCy%25C3%25BCk_yarrak_sevenler_acil_dm_%25C3%25A7ok_azg%25C4%25B1n%25C4%25B1m%2F&psig=AOvVaw30UGvj9oszpdD8bpEgqP0h&ust=1724063553568000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjw0LCr_ocDFQAAAAAdAAAAABAE"
                    }
                ],
            },
            ]
        };
    }
};
