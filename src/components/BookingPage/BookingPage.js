import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import './BookingPage.css';

const BookingPage = () => {
  const [boardingStage, setBoardingStage] = useState('');
  const [alightingStage, setAlightingStage] = useState('');
  const [numSeats, setNumSeats] = useState(1);
  const [totalPrice, setTotalPrice] = useState(null);
  const [selectedBus, setSelectedBus] = useState(null);
  const [userAccountBalance, setUserAccountBalance] = useState(10000.00); // Initial account balance
  const [buses, setBuses] = useState([
    { name: 'Bus Z', freeSeats: 50, bookedSeats: 0 },
    { name: 'Bus Y', freeSeats: 50, bookedSeats: 0 },
    { name: 'Bus X', freeSeats: 50, bookedSeats: 0 },
    { name: 'Bus W', freeSeats: 50, bookedSeats: 0 },
  ]);

  const stages = ['A', 'B', 'C', 'D', 'E', 'F'];

  const calculateTotalPrice = () => {
    const distanceMap = {
      'A-B': 5,
      'B-C': 3,
      'C-D': 4,
      'D-E': 10,
      'E-F': 3,
      'A-C': 8,
      'B-D': 7,
      'C-E': 9,
      'D-F': 12,
      'A-D': 13,
      'B-E': 11,
      'C-F': 14,
      'A-E': 17,
      'B-F': 15,
      'A-F': 18
    };

    const distanceKey = `${boardingStage}-${alightingStage}`;
    const distance = distanceMap[distanceKey];
    const priceRate = 2.5;
    const total = (distance || 0) * priceRate * numSeats;
    setTotalPrice(total.toFixed(2)); // Rounded to 2 decimal places
  };

  const handleBooking = () => {
    if (!boardingStage || !alightingStage || numSeats <= 0 || totalPrice === null || !selectedBus) {
      alert('Please fill in all the required fields.');
      return;
    }
    /*
    if (setBuses(2) <= 1 || setBuses(2) < numSeats){
      alert('No free seats available. Pick another Bus');
      return;
    }

    if (userAccountBalance < totalPrice) {
      alert('Insufficient funds. Please top up your account.');
      return;
    }
    */
    const updatedBuses = buses.map((bus) =>
      bus.name === selectedBus.name
        ? { ...bus, freeSeats: bus.freeSeats - numSeats, bookedSeats: bus.bookedSeats + numSeats }
        : bus
    );

    setBuses(updatedBuses);

    // Deduct the total price from the user's account balance
    const remainingBalance = userAccountBalance - parseFloat(totalPrice);
    setUserAccountBalance(remainingBalance);
    if (userAccountBalance < totalPrice) {
      alert('Insufficient funds. Please top up your account.');
      return;// needs to return to the original number b4 the addition was done
    }

    // Booking and submission logic
    console.log('Booking submitted:', { boardingStage, alightingStage, numSeats, totalPrice, selectedBus });
  };

  return (
    <div className="booking-page-container">
      <Nav />
      <div className="booking-sections">
        <div className="small-section">
          <h2>Available Buses</h2>
          {buses.map((bus) => (
            <div key={bus.name} onClick={() => setSelectedBus(bus)}>
              {bus.name} - Free Seats: {bus.freeSeats}
            </div>
          ))}
        </div>
        <div className="large-section">
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

            <button onClick={handleBooking}>Book Now</button>

            {/* Display the report at the bottom */}
            <div className="report-section">
              <h3>Report</h3>
              <p>Kilometers Driven: </p>
              <p>Remaining Account Balance: KES {userAccountBalance.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;

