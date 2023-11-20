import React, { useState } from "react";
import './BookingPage.css';
import Nav from '../Nav/Nav';

export default function BookingPage() {
    const [bookingDetails, setBookingDetails] = useState({
        stageChoice: "",
        price: "",
        noOfSeats: "",
        pickUpPoint: "",
        dropOffPoint: "",
    });

    const stageChoices = [
        "Thika to Juja",
        "Juja to Ruiru",
        "Ruiru to Kahawa",
        "Kahawa to Githurai",
        "Githurai to Roysambu",
        "Roysambu to Rosters",
        "Rosters to Allsops",
        "Allsops to Survey",
        "Survey to Muthaiga",
        "Muthaiga to Ngara",
        "Ngara to Town-Center",
    ];

    const priceArray = [
        "50",
        "30",
        "30",
        "20",
        "20",
        "20",
        "20",
        "20",
        "20",
        "30",
    ];

    const handleStageChoiceClick = (selectedStage) => {
        const selectedPrice = priceArray[selectedStage];
        const selectedStageChoice = stageChoices[selectedStage];
        const [firstWord] = selectedStageChoice.split(" ");
        const [, lastWord] = selectedStageChoice.split(" ").reverse(); // Get the last word

        setBookingDetails({
            ...bookingDetails,
            stageChoice: selectedStageChoice,
            price: selectedPrice || "",
            pickUpPoint: firstWord || "",
            dropOffPoint: lastWord || "",
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted with:", bookingDetails);
    };

    return (
        <div>
            <Nav/>
            <div className="Page__Wrapper">
            <div className="Page__Booking-options">
                {stageChoices.map((stageChoice, index) => (
                    <span
                        key={stageChoice + index}
                        className="Stage__choice"
                        onClick={() => handleStageChoiceClick(index)}
                    >
                        {stageChoice}
                    </span>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="Form__booking">
                <p>Selected Stage: {bookingDetails.stageChoice}</p>
                <p className="Price">Unit Price: {bookingDetails.price}</p>
                <span>
                    <p>Pick Up Point</p>
                    <select
                        name="pickUpPoint"
                        value={bookingDetails.pickUpPoint}
                        onChange={(e) =>
                            setBookingDetails({
                                ...bookingDetails,
                                pickUpPoint: e.target.value,
                            })
                        }
                    >
                        {stageChoices.map((choice, index) => (
                            <option key={index} value={choice.split(" ")[0]}>
                                {choice.split(" ")[0]}
                            </option>
                        ))}
                    </select>
                </span>
                <span>
                    <p>Drop Off Point</p>
                    <select
                        name="dropOffPoint"
                        value={bookingDetails.dropOffPoint}
                        onChange={(e) =>
                            setBookingDetails({
                                ...bookingDetails,
                                dropOffPoint: e.target.value,
                            })
                        }
                    >
                        {stageChoices.map((choice, index) => (
                            <option
                                key={index}
                                value={choice.split(" ").reverse()[0]}
                            >
                                {choice.split(" ").reverse()[0]}
                            </option>
                        ))}
                    </select>
                </span>
                <button type="submit">Book Now</button>
            </form>
        </div>
        </div>
    );
}
