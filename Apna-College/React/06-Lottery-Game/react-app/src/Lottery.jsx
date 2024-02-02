import { useState } from "react";
import Ticket from "./Ticket.jsx";
import TicketBuyButton from "./TicketBuyButton.jsx";
import { randomArrayGenerator, winningCondition } from "./helper.js";

export default function Lottery({ totalDigitsOfLottery = 3 }) {

    let ticketArrayGenerator = () => randomArrayGenerator(totalDigitsOfLottery);

    let [ticket, setTicket] = useState(ticketArrayGenerator);

    let handleBuyTicket = () => {
        setTicket(ticketArrayGenerator);
    };
 
    return (
        <>
            <h1>Lottery Game!</h1>

            <Ticket ticket={ticket} />
            <TicketBuyButton action={handleBuyTicket} />

            <h3>{winningCondition(ticket) && "Congratulations, you won!"}</h3>
        </>
    );
}