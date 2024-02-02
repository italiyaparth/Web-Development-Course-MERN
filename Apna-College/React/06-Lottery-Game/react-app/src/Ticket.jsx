import TicketNumber from "./TicketNumber.jsx";
import "./Ticket.css";

export default function Ticket({ ticket }) {
    return (
        <div className="Ticket">
            <h2>Ticket</h2>
            {ticket.map((num, idx) => (<TicketNumber key={idx} number={num}/>))}
        </div>
    );
}