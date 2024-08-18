"use client"

import { useState, useEffect } from 'react';
import { fetchCardData } from '../lib/api';
import Image from 'next/image';

interface Card {
    id: number;
    atk?: number;
    def?: number;
    level?: number;
    race: string;
    attribute: string;
    card_images: {
        id: number;
        image_url: string;
        image_url_small: string;
        image_url_cropped: string;
    }[];

}

const YuGiOhCards = () => {
    const [cards, setCards] = useState<Card[]>([]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchCardData({});
            setCards(data.data);
        };
        getData();
    }, []);



    return (
        <div className="container mx-auto p-4 justify-center  items-center">
            <h1 className="text-2xl font-bold mb-4">Yu-Gi-Oh! Cards</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center  items-center ">
                {cards.map(card => (
                    <div key={card.id}
                    className="bg-gray-900 bg-opacity-10 p-7 m-3 rounded-lg  shadow-gray-900 relative h-[350px] ">
                        <Image src={card.card_images[0]?.image_url} alt={String(card.id)} fill/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YuGiOhCards;
