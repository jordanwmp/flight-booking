const extractFlightData = (apiResponse) => {
    
    const flightData = [];

    apiResponse.forEach(offer => {

        const offerData = {
            price: `${offer.price.total} ${offer.price.currency}`,
            currency: offer.price.currency,
            totalPrice: offer.price.total,
            airline: offer.validatingAirlineCodes[0],
            itineraries: []
        };

        offer.itineraries.forEach(itinerary => {
            
            const itineraryData = {
                duration: itinerary.duration,
                segments: []
            };

            itinerary.segments.forEach(segment => {
                const segmentData = {
                    departure: segment.departure.at,
                    arrival: segment.arrival.at,
                    duration: segment.duration,
                    airline: segment.carrierCode,
                    flightNumber: segment.number,
                    aircraft: segment.aircraft.code,
                    stops: segment.numberOfStops,
                    flightClass: offer.travelerPricings.map(pricing => pricing.fareDetailsBySegment[0].cabin),
                    baggage: offer.travelerPricings.map(pricing => pricing.fareDetailsBySegment[0].includedCheckedBags.quantity)
                };
                itineraryData.segments.push(segmentData);
            });

            offerData.itineraries.push(itineraryData);
        });
        flightData.push(offerData);
    });

    return flightData;
}


export default extractFlightData;
