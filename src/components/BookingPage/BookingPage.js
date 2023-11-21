import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import './BookingPage.css';

const BookingPage = () => {
  const [boardingStage, setBoardingStage] = useState('');
  const [alightingStage, setAlightingStage] = useState('');
  const [numSeats, setNumSeats] = useState(1);
  const [totalPrice, setTotalPrice] = useState(null);

  const stages = ['A', 'B', 'C', 'D', 'E', 'F'];

  const calculateTotalPrice = () => {
    const distanceMap = {
      'A-B': 5,
      'B-C': 3,
      'C-D': 4,
      'D-E': 10,
      'E-F': 3,
    };

    const distanceKey = `${boardingStage}-${alightingStage}`;
    const distance = distanceMap[distanceKey];
    const priceRate = 2.5;
    const total = (distance || 0) * priceRate * numSeats;
    setTotalPrice(total.toFixed(2)); // Rounded to 2 decimal places
  };

  const handleBooking = () => {
    //logic to submit the entry to MongoDB
    //API call to a server that interacts with MongoDB(Not yet integrated)
    if (boardingStage && alightingStage && numSeats > 0 && totalPrice) {
      // Booking and submission logic
      console.log('Booking submitted:', { boardingStage, alightingStage, numSeats, totalPrice });
    } else {
      alert('Please fill in all the required fields.');
    }
  };

  return (
    <div className="booking-page-container">
      <Nav />
      <div className="booking-sections">
        <div className="small-section">
          {/* Smaller section */}
          <h2>Available Buses</h2>
          <li>Super metro</li>
          <li>Virginia</li>
          <li>Kensilver</li>
          <li>Roam Rapid</li>
          <li>Nicco</li>
        </div>
        <div className="large-section">
          {/* Larger section */}
          <h2>Booking Form</h2>
          <div className="booking-form">
            <label>
              Boarding Stage:
              <select value={boardingStage} onChange={(e) => setBoardingStage(e.target.value)}>
                <option value="">Select Stage</option>
                {stages.map((stage) => (
                  <option key={stage} value={stage}>
                    {stage}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Alighting Stage:
              <select value={alightingStage} onChange={(e) => setAlightingStage(e.target.value)}>
                <option value="">Select Stage</option>
                {stages.map((stage) => (
                  <option key={stage} value={stage}>
                    {stage}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Number of Seats:
              <input
                type="number"
                value={numSeats}
                onChange={(e) => setNumSeats(Math.max(1, parseInt(e.target.value, 10)))}
              />
            </label>

            <button onClick={calculateTotalPrice}>Calculate Total Price</button>

            {totalPrice !== null && (
              <div className="total-price">
                Total Price: KES {totalPrice}
              </div>
            )}

            <button onClick={handleBooking} disabled={!boardingStage || !alightingStage || numSeats <= 0 || totalPrice === null}>
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;


/*import React, { useState } from "react";
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
                    <p>Board</p>
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
                    <p>Alight</p>
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
}*/
