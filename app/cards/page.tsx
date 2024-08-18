import YuGiOhCards from "../components/YuGiOhCards";
import { waitCard } from "../lib/wait";

export default async function addcard() {
    await waitCard(1450);

    return (
        <div>
            <YuGiOhCards />
        </div>
    );
}
