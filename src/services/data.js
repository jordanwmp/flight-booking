const data = [
    {
        "type": "flight-offer",
        "id": "1",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT16H",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "1",
                            "at": "2025-01-06T12:50:00"
                        },
                        "arrival": {
                            "iataCode": "XMN",
                            "terminal": "3",
                            "at": "2025-01-06T18:25:00"
                        },
                        "carrierCode": "MF",
                        "number": "802",
                        "aircraft": {
                            "code": "789"
                        },
                        "operating": {
                            "carrierCode": "MF"
                        },
                        "duration": "PT8H35M",
                        "id": "1",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "XMN",
                            "terminal": "3",
                            "at": "2025-01-06T22:10:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "at": "2025-01-07T00:50:00"
                        },
                        "carrierCode": "MF",
                        "number": "843",
                        "aircraft": {
                            "code": "738"
                        },
                        "operating": {
                            "carrierCode": "MF"
                        },
                        "duration": "PT3H40M",
                        "id": "2",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "237.02",
            "base": "78.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "237.02"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "MF"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "237.02",
                    "base": "78.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "1",
                        "cabin": "ECONOMY",
                        "fareBasis": "SOW6AAUS",
                        "brandedFare": "YSTANDARD",
                        "brandedFareLabel": "ECONOMY STANDARD",
                        "class": "S",
                        "includedCheckedBags": {
                            "quantity": 1
                        },
                        "amenities": [
                            {
                                "description": "CHECKED BAG 1PC OF 23KG 158CM",
                                "isChargeable": false,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE  TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE  TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "2",
                        "cabin": "ECONOMY",
                        "fareBasis": "SOW6AAUS",
                        "brandedFare": "YSTANDARD",
                        "brandedFareLabel": "ECONOMY STANDARD",
                        "class": "S",
                        "includedCheckedBags": {
                            "quantity": 1
                        },
                        "amenities": [
                            {
                                "description": "CHECKED BAG 1PC OF 23KG 158CM",
                                "isChargeable": false,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE  TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE  TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "2",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT26H25M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "1",
                            "at": "2025-01-06T12:50:00"
                        },
                        "arrival": {
                            "iataCode": "XMN",
                            "terminal": "3",
                            "at": "2025-01-06T18:25:00"
                        },
                        "carrierCode": "MF",
                        "number": "802",
                        "aircraft": {
                            "code": "789"
                        },
                        "operating": {
                            "carrierCode": "MF"
                        },
                        "duration": "PT8H35M",
                        "id": "26",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "XMN",
                            "terminal": "3",
                            "at": "2025-01-07T08:30:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "at": "2025-01-07T11:15:00"
                        },
                        "carrierCode": "MF",
                        "number": "853",
                        "aircraft": {
                            "code": "738"
                        },
                        "operating": {
                            "carrierCode": "MF"
                        },
                        "duration": "PT3H45M",
                        "id": "27",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "237.02",
            "base": "78.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "237.02"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "MF"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "237.02",
                    "base": "78.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "26",
                        "cabin": "ECONOMY",
                        "fareBasis": "SOW6AAUS",
                        "brandedFare": "YSTANDARD",
                        "brandedFareLabel": "ECONOMY STANDARD",
                        "class": "S",
                        "includedCheckedBags": {
                            "quantity": 1
                        },
                        "amenities": [
                            {
                                "description": "CHECKED BAG 1PC OF 23KG 158CM",
                                "isChargeable": false,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE  TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE  TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "27",
                        "cabin": "ECONOMY",
                        "fareBasis": "SOW6AAUS",
                        "brandedFare": "YSTANDARD",
                        "brandedFareLabel": "ECONOMY STANDARD",
                        "class": "S",
                        "includedCheckedBags": {
                            "quantity": 1
                        },
                        "amenities": [
                            {
                                "description": "CHECKED BAG 1PC OF 23KG 158CM",
                                "isChargeable": false,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE  TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE  TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "3",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 1,
        "itineraries": [
            {
                "duration": "PT24H10M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "1",
                            "at": "2025-01-06T20:50:00"
                        },
                        "arrival": {
                            "iataCode": "TFU",
                            "terminal": "1",
                            "at": "2025-01-07T05:00:00"
                        },
                        "carrierCode": "3U",
                        "number": "3892",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "3U"
                        },
                        "duration": "PT11H10M",
                        "id": "15",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "TFU",
                            "terminal": "1",
                            "at": "2025-01-07T14:40:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "at": "2025-01-07T17:00:00"
                        },
                        "carrierCode": "3U",
                        "number": "3935",
                        "aircraft": {
                            "code": "321"
                        },
                        "operating": {
                            "carrierCode": "3U"
                        },
                        "duration": "PT3H20M",
                        "id": "16",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "321.52",
            "base": "145.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "321.52"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "3U"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "321.52",
                    "base": "145.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "15",
                        "cabin": "ECONOMY",
                        "fareBasis": "N1ADDAU0",
                        "class": "N",
                        "includedCheckedBags": {
                            "quantity": 1
                        }
                    },
                    {
                        "segmentId": "16",
                        "cabin": "ECONOMY",
                        "fareBasis": "V1ABDA0T",
                        "class": "V",
                        "includedCheckedBags": {
                            "quantity": 1
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "4",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT16H55M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "1",
                            "at": "2025-01-06T22:00:00"
                        },
                        "arrival": {
                            "iataCode": "SIN",
                            "terminal": "1",
                            "at": "2025-01-07T03:15:00"
                        },
                        "carrierCode": "TR",
                        "number": "21",
                        "aircraft": {
                            "code": "789"
                        },
                        "operating": {
                            "carrierCode": "TR"
                        },
                        "duration": "PT8H15M",
                        "id": "56",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "SIN",
                            "terminal": "1",
                            "at": "2025-01-07T09:30:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "at": "2025-01-07T10:55:00"
                        },
                        "carrierCode": "TR",
                        "number": "606",
                        "aircraft": {
                            "code": "789"
                        },
                        "operating": {
                            "carrierCode": "TR"
                        },
                        "duration": "PT2H25M",
                        "id": "57",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "412.31",
            "base": "303.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "412.31"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "SQ"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "412.31",
                    "base": "303.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "56",
                        "cabin": "ECONOMY",
                        "fareBasis": "H2TR24",
                        "class": "H",
                        "includedCheckedBags": {
                            "weight": 30,
                            "weightUnit": "KG"
                        }
                    },
                    {
                        "segmentId": "57",
                        "cabin": "ECONOMY",
                        "fareBasis": "H2TR24",
                        "class": "H",
                        "includedCheckedBags": {
                            "weight": 30,
                            "weightUnit": "KG"
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "5",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT17H10M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "1",
                            "at": "2025-01-06T22:15:00"
                        },
                        "arrival": {
                            "iataCode": "CAN",
                            "terminal": "2",
                            "at": "2025-01-07T05:00:00"
                        },
                        "carrierCode": "CZ",
                        "number": "302",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "CZ"
                        },
                        "duration": "PT9H45M",
                        "id": "11",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "CAN",
                            "terminal": "2",
                            "at": "2025-01-07T09:25:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "at": "2025-01-07T11:25:00"
                        },
                        "carrierCode": "CZ",
                        "number": "8079",
                        "aircraft": {
                            "code": "7M8"
                        },
                        "operating": {
                            "carrierCode": "CZ"
                        },
                        "duration": "PT3H",
                        "id": "12",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "508.78",
            "base": "390.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "508.78"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "CZ"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "508.78",
                    "base": "390.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "11",
                        "cabin": "ECONOMY",
                        "fareBasis": "E2LSRSPX",
                        "class": "E",
                        "includedCheckedBags": {
                            "quantity": 2
                        }
                    },
                    {
                        "segmentId": "12",
                        "cabin": "ECONOMY",
                        "fareBasis": "E2LSRSPX",
                        "class": "E",
                        "includedCheckedBags": {
                            "quantity": 2
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "6",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT14H30M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "1",
                            "at": "2025-01-06T22:00:00"
                        },
                        "arrival": {
                            "iataCode": "SIN",
                            "terminal": "1",
                            "at": "2025-01-07T03:15:00"
                        },
                        "carrierCode": "TR",
                        "number": "21",
                        "aircraft": {
                            "code": "789"
                        },
                        "operating": {
                            "carrierCode": "TR"
                        },
                        "duration": "PT8H15M",
                        "id": "28",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "SIN",
                            "terminal": "1",
                            "at": "2025-01-07T06:55:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "at": "2025-01-07T08:30:00"
                        },
                        "carrierCode": "TR",
                        "number": "608",
                        "aircraft": {
                            "code": "788"
                        },
                        "operating": {
                            "carrierCode": "TR"
                        },
                        "duration": "PT2H35M",
                        "id": "29",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "541.31",
            "base": "432.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "541.31"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "SQ"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "541.31",
                    "base": "432.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "28",
                        "cabin": "PREMIUM_ECONOMY",
                        "fareBasis": "J0TR24",
                        "class": "J",
                        "includedCheckedBags": {
                            "weight": 30,
                            "weightUnit": "KG"
                        }
                    },
                    {
                        "segmentId": "29",
                        "cabin": "PREMIUM_ECONOMY",
                        "fareBasis": "J0TR24",
                        "class": "J",
                        "includedCheckedBags": {
                            "weight": 30,
                            "weightUnit": "KG"
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "7",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT15H40M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "1",
                            "at": "2025-01-06T22:10:00"
                        },
                        "arrival": {
                            "iataCode": "TPE",
                            "terminal": "2",
                            "at": "2025-01-07T04:20:00"
                        },
                        "carrierCode": "CI",
                        "number": "52",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "CI"
                        },
                        "duration": "PT9H10M",
                        "id": "44",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "TPE",
                            "terminal": "1",
                            "at": "2025-01-07T07:00:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "at": "2025-01-07T09:50:00"
                        },
                        "carrierCode": "CI",
                        "number": "833",
                        "aircraft": {
                            "code": "333"
                        },
                        "operating": {
                            "carrierCode": "CI"
                        },
                        "duration": "PT3H50M",
                        "id": "45",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "609.92",
            "base": "460.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "609.92"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "CI"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "609.92",
                    "base": "460.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "44",
                        "cabin": "ECONOMY",
                        "fareBasis": "RLOAU",
                        "class": "R",
                        "includedCheckedBags": {
                            "quantity": 2
                        }
                    },
                    {
                        "segmentId": "45",
                        "cabin": "ECONOMY",
                        "fareBasis": "RLOAU",
                        "class": "R",
                        "includedCheckedBags": {
                            "quantity": 2
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "8",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT24H5M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "1",
                            "at": "2025-01-06T15:15:00"
                        },
                        "arrival": {
                            "iataCode": "HAN",
                            "terminal": "2",
                            "at": "2025-01-06T21:15:00"
                        },
                        "carrierCode": "VN",
                        "number": "786",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "VN"
                        },
                        "duration": "PT10H",
                        "id": "7",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "HAN",
                            "terminal": "2",
                            "at": "2025-01-07T09:15:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "at": "2025-01-07T11:20:00"
                        },
                        "carrierCode": "VN",
                        "number": "611",
                        "aircraft": {
                            "code": "321"
                        },
                        "operating": {
                            "carrierCode": "VN"
                        },
                        "duration": "PT2H5M",
                        "id": "8",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "621.45",
            "base": "482.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "621.45",
            "additionalServices": [
                {
                    "amount": "192.22",
                    "type": "CHECKED_BAGS"
                }
            ]
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "VN"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "621.45",
                    "base": "482.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "7",
                        "cabin": "ECONOMY",
                        "fareBasis": "QHOXAU",
                        "class": "Q",
                        "includedCheckedBags": {
                            "quantity": 1
                        }
                    },
                    {
                        "segmentId": "8",
                        "cabin": "ECONOMY",
                        "fareBasis": "QHOXAU",
                        "class": "Q",
                        "includedCheckedBags": {
                            "quantity": 1
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "9",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT27H30M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "1",
                            "at": "2025-01-06T15:15:00"
                        },
                        "arrival": {
                            "iataCode": "HAN",
                            "terminal": "2",
                            "at": "2025-01-06T21:15:00"
                        },
                        "carrierCode": "VN",
                        "number": "786",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "VN"
                        },
                        "duration": "PT10H",
                        "id": "36",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "HAN",
                            "terminal": "2",
                            "at": "2025-01-07T12:40:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "at": "2025-01-07T14:45:00"
                        },
                        "carrierCode": "VN",
                        "number": "615",
                        "aircraft": {
                            "code": "321"
                        },
                        "operating": {
                            "carrierCode": "VN"
                        },
                        "duration": "PT2H5M",
                        "id": "37",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "621.45",
            "base": "482.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "621.45",
            "additionalServices": [
                {
                    "amount": "192.22",
                    "type": "CHECKED_BAGS"
                }
            ]
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "VN"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "621.45",
                    "base": "482.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "36",
                        "cabin": "ECONOMY",
                        "fareBasis": "QHOXAU",
                        "class": "Q",
                        "includedCheckedBags": {
                            "quantity": 1
                        }
                    },
                    {
                        "segmentId": "37",
                        "cabin": "ECONOMY",
                        "fareBasis": "QHOXAU",
                        "class": "Q",
                        "includedCheckedBags": {
                            "quantity": 1
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "10",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT9H25M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "1",
                            "at": "2025-01-06T15:50:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "at": "2025-01-06T21:15:00"
                        },
                        "carrierCode": "TG",
                        "number": "472",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "TG"
                        },
                        "duration": "PT9H25M",
                        "id": "21",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "670.68",
            "base": "599.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "670.68"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "TG"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "670.68",
                    "base": "599.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "21",
                        "cabin": "ECONOMY",
                        "fareBasis": "HLOFX",
                        "class": "H",
                        "includedCheckedBags": {
                            "weight": 30,
                            "weightUnit": "KG"
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "11",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT16H",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "1",
                            "at": "2025-01-06T22:15:00"
                        },
                        "arrival": {
                            "iataCode": "KUL",
                            "terminal": "1",
                            "at": "2025-01-07T03:50:00"
                        },
                        "carrierCode": "MH",
                        "number": "140",
                        "aircraft": {
                            "code": "333"
                        },
                        "operating": {
                            "carrierCode": "MH"
                        },
                        "duration": "PT8H35M",
                        "id": "3",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "KUL",
                            "terminal": "1",
                            "at": "2025-01-07T09:00:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "at": "2025-01-07T10:15:00"
                        },
                        "carrierCode": "MH",
                        "number": "784",
                        "aircraft": {
                            "code": "73H"
                        },
                        "operating": {
                            "carrierCode": "MH"
                        },
                        "duration": "PT2H15M",
                        "id": "4",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "680.11",
            "base": "591.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "680.11"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "MH"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "680.11",
                    "base": "591.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "3",
                        "cabin": "ECONOMY",
                        "fareBasis": "LBXOWAU",
                        "brandedFare": "BASIC",
                        "brandedFareLabel": "BASIC",
                        "class": "L",
                        "includedCheckedBags": {
                            "weight": 20,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": true,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "SNACK",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHILD DISCOUNT",
                                "isChargeable": false,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "INFANT DISCOUNT",
                                "isChargeable": false,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGE BEFORE DEPARTURE",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGE AFTER DEPARTURE",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUND BEFORE DEPARTURE",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "4",
                        "cabin": "ECONOMY",
                        "fareBasis": "LBXOWAU",
                        "brandedFare": "BASIC",
                        "brandedFareLabel": "BASIC",
                        "class": "L",
                        "includedCheckedBags": {
                            "weight": 20,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": true,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "SNACK",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHILD DISCOUNT",
                                "isChargeable": false,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "INFANT DISCOUNT",
                                "isChargeable": false,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGE BEFORE DEPARTURE",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGE AFTER DEPARTURE",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUND BEFORE DEPARTURE",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "12",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT19H10M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "1",
                            "at": "2025-01-06T22:15:00"
                        },
                        "arrival": {
                            "iataCode": "KUL",
                            "terminal": "1",
                            "at": "2025-01-07T03:50:00"
                        },
                        "carrierCode": "MH",
                        "number": "140",
                        "aircraft": {
                            "code": "333"
                        },
                        "operating": {
                            "carrierCode": "MH"
                        },
                        "duration": "PT8H35M",
                        "id": "13",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "KUL",
                            "terminal": "1",
                            "at": "2025-01-07T12:15:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "at": "2025-01-07T13:25:00"
                        },
                        "carrierCode": "MH",
                        "number": "788",
                        "aircraft": {
                            "code": "73H"
                        },
                        "operating": {
                            "carrierCode": "MH"
                        },
                        "duration": "PT2H10M",
                        "id": "14",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "680.11",
            "base": "591.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "680.11"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "MH"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "680.11",
                    "base": "591.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "13",
                        "cabin": "ECONOMY",
                        "fareBasis": "LBXOWAU",
                        "brandedFare": "BASIC",
                        "brandedFareLabel": "BASIC",
                        "class": "L",
                        "includedCheckedBags": {
                            "weight": 20,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": true,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "SNACK",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHILD DISCOUNT",
                                "isChargeable": false,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "INFANT DISCOUNT",
                                "isChargeable": false,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGE BEFORE DEPARTURE",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGE AFTER DEPARTURE",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUND BEFORE DEPARTURE",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "14",
                        "cabin": "ECONOMY",
                        "fareBasis": "LBXOWAU",
                        "brandedFare": "BASIC",
                        "brandedFareLabel": "BASIC",
                        "class": "L",
                        "includedCheckedBags": {
                            "weight": 20,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE RESERVED SEAT ASSIGNMENT",
                                "isChargeable": true,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "SNACK",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHILD DISCOUNT",
                                "isChargeable": false,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "INFANT DISCOUNT",
                                "isChargeable": false,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGE BEFORE DEPARTURE",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGE AFTER DEPARTURE",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUND BEFORE DEPARTURE",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "13",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT13H40M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "3",
                            "at": "2025-01-06T20:00:00"
                        },
                        "arrival": {
                            "iataCode": "MEL",
                            "terminal": "1",
                            "at": "2025-01-06T21:35:00"
                        },
                        "carrierCode": "QF",
                        "number": "493",
                        "aircraft": {
                            "code": "73H"
                        },
                        "operating": {
                            "carrierCode": "QF"
                        },
                        "duration": "PT1H35M",
                        "id": "42",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "MEL",
                            "terminal": "2",
                            "at": "2025-01-07T00:30:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "at": "2025-01-07T05:40:00"
                        },
                        "carrierCode": "TG",
                        "number": "462",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "TG"
                        },
                        "duration": "PT9H10M",
                        "id": "43",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "682.40",
            "base": "582.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "682.40"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "TG"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "682.40",
                    "base": "582.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "42",
                        "cabin": "ECONOMY",
                        "fareBasis": "SLOST",
                        "class": "O",
                        "includedCheckedBags": {
                            "weight": 25,
                            "weightUnit": "KG"
                        }
                    },
                    {
                        "segmentId": "43",
                        "cabin": "ECONOMY",
                        "fareBasis": "SLOST",
                        "class": "S",
                        "includedCheckedBags": {
                            "weight": 25,
                            "weightUnit": "KG"
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "14",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT14H10M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "3",
                            "at": "2025-01-06T19:30:00"
                        },
                        "arrival": {
                            "iataCode": "MEL",
                            "terminal": "1",
                            "at": "2025-01-06T21:05:00"
                        },
                        "carrierCode": "QF",
                        "number": "491",
                        "aircraft": {
                            "code": "73H"
                        },
                        "operating": {
                            "carrierCode": "QF"
                        },
                        "duration": "PT1H35M",
                        "id": "9",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "MEL",
                            "terminal": "2",
                            "at": "2025-01-07T00:30:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "at": "2025-01-07T05:40:00"
                        },
                        "carrierCode": "TG",
                        "number": "462",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "TG"
                        },
                        "duration": "PT9H10M",
                        "id": "10",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "682.40",
            "base": "582.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "682.40"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "TG"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "682.40",
                    "base": "582.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "9",
                        "cabin": "ECONOMY",
                        "fareBasis": "SLOST",
                        "class": "O",
                        "includedCheckedBags": {
                            "weight": 25,
                            "weightUnit": "KG"
                        }
                    },
                    {
                        "segmentId": "10",
                        "cabin": "ECONOMY",
                        "fareBasis": "SLOST",
                        "class": "S",
                        "includedCheckedBags": {
                            "weight": 25,
                            "weightUnit": "KG"
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "15",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 8,
        "itineraries": [
            {
                "duration": "PT25H45M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "2",
                            "at": "2025-01-06T21:45:00"
                        },
                        "arrival": {
                            "iataCode": "AVV",
                            "terminal": "D",
                            "at": "2025-01-06T23:15:00"
                        },
                        "carrierCode": "JQ",
                        "number": "613",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "JQ"
                        },
                        "duration": "PT1H30M",
                        "id": "50",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "MEL",
                            "terminal": "2",
                            "at": "2025-01-07T14:20:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "terminal": "I",
                            "at": "2025-01-07T19:30:00"
                        },
                        "carrierCode": "JQ",
                        "number": "29",
                        "aircraft": {
                            "code": "788"
                        },
                        "operating": {
                            "carrierCode": "JQ"
                        },
                        "duration": "PT9H10M",
                        "id": "51",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "684.98",
            "base": "558.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "684.98"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "HR"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "684.98",
                    "base": "558.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "50",
                        "cabin": "ECONOMY",
                        "fareBasis": "HLOW",
                        "class": "H",
                        "includedCheckedBags": {
                            "weight": 20,
                            "weightUnit": "KG"
                        }
                    },
                    {
                        "segmentId": "51",
                        "cabin": "ECONOMY",
                        "fareBasis": "RMXL2",
                        "class": "R",
                        "includedCheckedBags": {
                            "weight": 20,
                            "weightUnit": "KG"
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "16",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT12H45M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "1",
                            "at": "2025-01-06T13:35:00"
                        },
                        "arrival": {
                            "iataCode": "SIN",
                            "terminal": "1",
                            "at": "2025-01-06T19:05:00"
                        },
                        "carrierCode": "QF",
                        "number": "83",
                        "aircraft": {
                            "code": "333"
                        },
                        "operating": {
                            "carrierCode": "QF"
                        },
                        "duration": "PT8H30M",
                        "id": "48",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "SIN",
                            "terminal": "1",
                            "at": "2025-01-06T21:00:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "at": "2025-01-06T22:20:00"
                        },
                        "carrierCode": "TG",
                        "number": "410",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "TG"
                        },
                        "duration": "PT2H20M",
                        "id": "49",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "688.42",
            "base": "593.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "688.42"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "QF"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "688.42",
                    "base": "593.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "48",
                        "cabin": "ECONOMY",
                        "fareBasis": "SKATDO",
                        "brandedFare": "ECSV",
                        "brandedFareLabel": "ECONOMY SAVER",
                        "class": "S",
                        "includedCheckedBags": {
                            "weight": 30,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE PAID BAGGAGE",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "40KG BAGGAGE ALLOWANCE",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "50KG BAGGAGE ALLOWANCE",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "COMPLIMENTARY BEVERAGES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL OR SNACK",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "USB POWER",
                                "isChargeable": false,
                                "amenityType": "ENTERTAINMENT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "STANDARD SEATING",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "49",
                        "cabin": "ECONOMY",
                        "fareBasis": "SKATDO",
                        "brandedFare": "ECSV",
                        "brandedFareLabel": "ECONOMY SAVER",
                        "class": "W",
                        "includedCheckedBags": {
                            "weight": 30,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "PRE PAID BAGGAGE",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "40KG BAGGAGE ALLOWANCE",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "50KG BAGGAGE ALLOWANCE",
                                "isChargeable": true,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "COMPLIMENTARY BEVERAGES",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MEAL OR SNACK",
                                "isChargeable": false,
                                "amenityType": "MEAL",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "USB POWER",
                                "isChargeable": false,
                                "amenityType": "ENTERTAINMENT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "STANDARD SEATING",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "17",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 5,
        "itineraries": [
            {
                "duration": "PT28H45M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "2",
                            "at": "2025-01-06T18:45:00"
                        },
                        "arrival": {
                            "iataCode": "AVV",
                            "terminal": "D",
                            "at": "2025-01-06T20:20:00"
                        },
                        "carrierCode": "JQ",
                        "number": "611",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "JQ"
                        },
                        "duration": "PT1H35M",
                        "id": "52",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "MEL",
                            "terminal": "2",
                            "at": "2025-01-07T14:20:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "terminal": "I",
                            "at": "2025-01-07T19:30:00"
                        },
                        "carrierCode": "JQ",
                        "number": "29",
                        "aircraft": {
                            "code": "788"
                        },
                        "operating": {
                            "carrierCode": "JQ"
                        },
                        "duration": "PT9H10M",
                        "id": "53",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "705.98",
            "base": "579.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "705.98"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "HR"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "705.98",
                    "base": "579.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "52",
                        "cabin": "ECONOMY",
                        "fareBasis": "KFXL",
                        "class": "K",
                        "includedCheckedBags": {
                            "weight": 20,
                            "weightUnit": "KG"
                        }
                    },
                    {
                        "segmentId": "53",
                        "cabin": "ECONOMY",
                        "fareBasis": "RMXL2",
                        "class": "R",
                        "includedCheckedBags": {
                            "weight": 20,
                            "weightUnit": "KG"
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "18",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT25H30M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "2",
                            "at": "2025-01-06T22:00:00"
                        },
                        "arrival": {
                            "iataCode": "MEL",
                            "terminal": "4",
                            "at": "2025-01-06T23:30:00"
                        },
                        "carrierCode": "JQ",
                        "number": "535",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "JQ"
                        },
                        "duration": "PT1H30M",
                        "id": "34",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "MEL",
                            "terminal": "2",
                            "at": "2025-01-07T14:20:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "terminal": "I",
                            "at": "2025-01-07T19:30:00"
                        },
                        "carrierCode": "JQ",
                        "number": "29",
                        "aircraft": {
                            "code": "788"
                        },
                        "operating": {
                            "carrierCode": "JQ"
                        },
                        "duration": "PT9H10M",
                        "id": "35",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "707.23",
            "base": "575.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "707.23"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "HR"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "707.23",
                    "base": "575.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "34",
                        "cabin": "ECONOMY",
                        "fareBasis": "HLOW",
                        "class": "H",
                        "includedCheckedBags": {
                            "weight": 20,
                            "weightUnit": "KG"
                        }
                    },
                    {
                        "segmentId": "35",
                        "cabin": "ECONOMY",
                        "fareBasis": "RMXL2",
                        "class": "R",
                        "includedCheckedBags": {
                            "weight": 20,
                            "weightUnit": "KG"
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "19",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT26H40M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "2",
                            "at": "2025-01-06T20:50:00"
                        },
                        "arrival": {
                            "iataCode": "MEL",
                            "terminal": "4",
                            "at": "2025-01-06T22:20:00"
                        },
                        "carrierCode": "JQ",
                        "number": "531",
                        "aircraft": {
                            "code": "321"
                        },
                        "operating": {
                            "carrierCode": "JQ"
                        },
                        "duration": "PT1H30M",
                        "id": "46",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "MEL",
                            "terminal": "2",
                            "at": "2025-01-07T14:20:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "terminal": "I",
                            "at": "2025-01-07T19:30:00"
                        },
                        "carrierCode": "JQ",
                        "number": "29",
                        "aircraft": {
                            "code": "788"
                        },
                        "operating": {
                            "carrierCode": "JQ"
                        },
                        "duration": "PT9H10M",
                        "id": "47",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "707.23",
            "base": "575.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "707.23"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "HR"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "707.23",
                    "base": "575.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "46",
                        "cabin": "ECONOMY",
                        "fareBasis": "HLOW",
                        "class": "H",
                        "includedCheckedBags": {
                            "weight": 20,
                            "weightUnit": "KG"
                        }
                    },
                    {
                        "segmentId": "47",
                        "cabin": "ECONOMY",
                        "fareBasis": "RMXL2",
                        "class": "R",
                        "includedCheckedBags": {
                            "weight": 20,
                            "weightUnit": "KG"
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "20",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT16H30M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "1",
                            "at": "2025-01-06T22:15:00"
                        },
                        "arrival": {
                            "iataCode": "CAN",
                            "terminal": "2",
                            "at": "2025-01-07T05:00:00"
                        },
                        "carrierCode": "CZ",
                        "number": "302",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "CZ"
                        },
                        "duration": "PT9H45M",
                        "id": "30",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "CAN",
                            "terminal": "2",
                            "at": "2025-01-07T08:50:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "at": "2025-01-07T10:45:00"
                        },
                        "carrierCode": "CZ",
                        "number": "357",
                        "aircraft": {
                            "code": "7M8"
                        },
                        "operating": {
                            "carrierCode": "CZ"
                        },
                        "duration": "PT2H55M",
                        "id": "31",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "717.78",
            "base": "599.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "717.78"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "CZ"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "717.78",
                    "base": "599.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "30",
                        "cabin": "ECONOMY",
                        "fareBasis": "L2LSRSPX",
                        "class": "L",
                        "includedCheckedBags": {
                            "quantity": 2
                        }
                    },
                    {
                        "segmentId": "31",
                        "cabin": "ECONOMY",
                        "fareBasis": "L2LSRSPX",
                        "class": "L",
                        "includedCheckedBags": {
                            "quantity": 2
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "21",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT25H25M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "1",
                            "at": "2025-01-06T20:40:00"
                        },
                        "arrival": {
                            "iataCode": "PEK",
                            "terminal": "3",
                            "at": "2025-01-07T05:00:00"
                        },
                        "carrierCode": "CA",
                        "number": "174",
                        "aircraft": {
                            "code": "77W"
                        },
                        "operating": {
                            "carrierCode": "CA"
                        },
                        "duration": "PT11H20M",
                        "id": "24",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "PEK",
                            "terminal": "3",
                            "at": "2025-01-07T13:55:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "at": "2025-01-07T18:05:00"
                        },
                        "carrierCode": "CA",
                        "number": "959",
                        "aircraft": {
                            "code": "77W"
                        },
                        "operating": {
                            "carrierCode": "CA"
                        },
                        "duration": "PT5H10M",
                        "id": "25",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "784.54",
            "base": "623.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "784.54"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "CA"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "784.54",
                    "base": "623.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "24",
                        "cabin": "ECONOMY",
                        "fareBasis": "VLRCOAU6",
                        "class": "V",
                        "includedCheckedBags": {
                            "quantity": 2
                        }
                    },
                    {
                        "segmentId": "25",
                        "cabin": "ECONOMY",
                        "fareBasis": "VLRCOAU6",
                        "class": "V",
                        "includedCheckedBags": {
                            "quantity": 2
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "22",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT31H30M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "1",
                            "at": "2025-01-06T20:40:00"
                        },
                        "arrival": {
                            "iataCode": "PEK",
                            "terminal": "3",
                            "at": "2025-01-07T05:00:00"
                        },
                        "carrierCode": "CA",
                        "number": "174",
                        "aircraft": {
                            "code": "77W"
                        },
                        "operating": {
                            "carrierCode": "CA"
                        },
                        "duration": "PT11H20M",
                        "id": "38",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "PEK",
                            "terminal": "3",
                            "at": "2025-01-07T20:00:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "at": "2025-01-08T00:10:00"
                        },
                        "carrierCode": "CA",
                        "number": "979",
                        "aircraft": {
                            "code": "333"
                        },
                        "operating": {
                            "carrierCode": "CA"
                        },
                        "duration": "PT5H10M",
                        "id": "39",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "928.54",
            "base": "767.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "928.54"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "CA"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "928.54",
                    "base": "767.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "38",
                        "cabin": "ECONOMY",
                        "fareBasis": "QLRCOAU6",
                        "class": "Q",
                        "includedCheckedBags": {
                            "quantity": 2
                        }
                    },
                    {
                        "segmentId": "39",
                        "cabin": "ECONOMY",
                        "fareBasis": "QLRCOAU6",
                        "class": "Q",
                        "includedCheckedBags": {
                            "quantity": 2
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "23",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 6,
        "itineraries": [
            {
                "duration": "PT24H",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "1",
                            "at": "2025-01-06T15:15:00"
                        },
                        "arrival": {
                            "iataCode": "HKG",
                            "terminal": "1",
                            "at": "2025-01-06T21:25:00"
                        },
                        "carrierCode": "CX",
                        "number": "100",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "CX"
                        },
                        "duration": "PT9H10M",
                        "id": "5",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "HKG",
                            "terminal": "1",
                            "at": "2025-01-07T09:10:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "at": "2025-01-07T11:15:00"
                        },
                        "carrierCode": "CX",
                        "number": "619",
                        "aircraft": {
                            "code": "333"
                        },
                        "operating": {
                            "carrierCode": "CX"
                        },
                        "duration": "PT3H5M",
                        "id": "6",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "972.25",
            "base": "763.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "972.25"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "CX"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "972.25",
                    "base": "763.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "5",
                        "cabin": "PREMIUM_ECONOMY",
                        "fareBasis": "ER99AUIO",
                        "brandedFare": "PEYESSENT",
                        "brandedFareLabel": "PREMIUM ECONOMY ESSENTIAL",
                        "class": "E",
                        "includedCheckedBags": {
                            "quantity": 2
                        },
                        "amenities": [
                            {
                                "description": "1PC MAX 15LB 7KG 115LCM",
                                "isChargeable": false,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHKIN AT CERTAIN PORT",
                                "isChargeable": false,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": false,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MILEAGE ACCRUAL",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "6",
                        "cabin": "PREMIUM_ECONOMY",
                        "fareBasis": "ER99AUIO",
                        "brandedFare": "PEYESSENT",
                        "brandedFareLabel": "PREMIUM ECONOMY ESSENTIAL",
                        "class": "E",
                        "includedCheckedBags": {
                            "quantity": 2
                        },
                        "amenities": [
                            {
                                "description": "1PC MAX 15LB 7KG 115LCM",
                                "isChargeable": false,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHKIN AT CERTAIN PORT",
                                "isChargeable": false,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": false,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MILEAGE ACCRUAL",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "24",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 6,
        "itineraries": [
            {
                "duration": "PT16H55M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "1",
                            "at": "2025-01-06T22:20:00"
                        },
                        "arrival": {
                            "iataCode": "HKG",
                            "terminal": "1",
                            "at": "2025-01-07T04:25:00"
                        },
                        "carrierCode": "CX",
                        "number": "138",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "CX"
                        },
                        "duration": "PT9H5M",
                        "id": "58",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "HKG",
                            "terminal": "1",
                            "at": "2025-01-07T09:10:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "at": "2025-01-07T11:15:00"
                        },
                        "carrierCode": "CX",
                        "number": "619",
                        "aircraft": {
                            "code": "333"
                        },
                        "operating": {
                            "carrierCode": "CX"
                        },
                        "duration": "PT3H5M",
                        "id": "59",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "981.40",
            "base": "787.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "981.40"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "CX"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "981.40",
                    "base": "787.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "58",
                        "cabin": "PREMIUM_ECONOMY",
                        "fareBasis": "ER99AUIO",
                        "brandedFare": "PEYESSENT",
                        "brandedFareLabel": "PREMIUM ECONOMY ESSENTIAL",
                        "class": "E",
                        "includedCheckedBags": {
                            "quantity": 2
                        },
                        "amenities": [
                            {
                                "description": "1PC MAX 15LB 7KG 115LCM",
                                "isChargeable": false,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHKIN AT CERTAIN PORT",
                                "isChargeable": false,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": false,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MILEAGE ACCRUAL",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "59",
                        "cabin": "PREMIUM_ECONOMY",
                        "fareBasis": "ER99AUIO",
                        "brandedFare": "PEYESSENT",
                        "brandedFareLabel": "PREMIUM ECONOMY ESSENTIAL",
                        "class": "E",
                        "includedCheckedBags": {
                            "quantity": 2
                        },
                        "amenities": [
                            {
                                "description": "1PC MAX 15LB 7KG 115LCM",
                                "isChargeable": false,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY CHKIN AT CERTAIN PORT",
                                "isChargeable": false,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRIORITY BOARDING",
                                "isChargeable": false,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUNDABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "MILEAGE ACCRUAL",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGEABLE TICKET",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "25",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT17H20M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "1",
                            "at": "2025-01-06T19:10:00"
                        },
                        "arrival": {
                            "iataCode": "SIN",
                            "terminal": "0",
                            "at": "2025-01-07T00:20:00"
                        },
                        "carrierCode": "SQ",
                        "number": "242",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "SQ"
                        },
                        "duration": "PT8H10M",
                        "id": "17",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "SIN",
                            "terminal": "2",
                            "at": "2025-01-07T07:05:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "at": "2025-01-07T08:30:00"
                        },
                        "carrierCode": "SQ",
                        "number": "706",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "SQ"
                        },
                        "duration": "PT2H25M",
                        "id": "18",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "2288.49",
            "base": "2192.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "2288.49"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "SQ"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "2288.49",
                    "base": "2192.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "17",
                        "cabin": "ECONOMY",
                        "fareBasis": "YIFSQ",
                        "brandedFare": "YCLFLEXI",
                        "brandedFareLabel": "ECONOMY FLEXI",
                        "class": "Y",
                        "includedCheckedBags": {
                            "weight": 30,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "NO SHOW",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "SEAT SELECTION STANDARD ZONE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CANCELLATION",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "BOOKING CHANGE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "SEAT SELECTION FORWARD ZONE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "100 PERCENT KF MILES EARNED",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE WITH MILES PWM",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "18",
                        "cabin": "ECONOMY",
                        "fareBasis": "YIFSQ",
                        "brandedFare": "YCLFLEXI",
                        "brandedFareLabel": "ECONOMY FLEXI",
                        "class": "Y",
                        "includedCheckedBags": {
                            "weight": 30,
                            "weightUnit": "KG"
                        },
                        "amenities": [
                            {
                                "description": "NO SHOW",
                                "isChargeable": true,
                                "amenityType": "TRAVEL_SERVICES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "SEAT SELECTION STANDARD ZONE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CANCELLATION",
                                "isChargeable": true,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "BOOKING CHANGE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "SEAT SELECTION FORWARD ZONE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "100 PERCENT KF MILES EARNED",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "UPGRADE WITH MILES PWM",
                                "isChargeable": true,
                                "amenityType": "UPGRADES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "26",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT18H50M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "1",
                            "at": "2025-01-06T21:30:00"
                        },
                        "arrival": {
                            "iataCode": "PVG",
                            "terminal": "1",
                            "at": "2025-01-07T05:00:00"
                        },
                        "carrierCode": "MU",
                        "number": "736",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "MU"
                        },
                        "duration": "PT10H30M",
                        "id": "54",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "PVG",
                            "terminal": "1",
                            "at": "2025-01-07T08:45:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "at": "2025-01-07T12:20:00"
                        },
                        "carrierCode": "MU",
                        "number": "541",
                        "aircraft": {
                            "code": "320"
                        },
                        "operating": {
                            "carrierCode": "MU"
                        },
                        "duration": "PT4H35M",
                        "id": "55",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "3241.11",
            "base": "3060.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "3241.11"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "MU"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "3241.11",
                    "base": "3060.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "54",
                        "cabin": "ECONOMY",
                        "fareBasis": "YSE0WDNR",
                        "class": "Y",
                        "includedCheckedBags": {
                            "quantity": 2
                        }
                    },
                    {
                        "segmentId": "55",
                        "cabin": "ECONOMY",
                        "fareBasis": "YSE0WDNR",
                        "class": "Y",
                        "includedCheckedBags": {
                            "quantity": 2
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "27",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT22H25M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "1",
                            "at": "2025-01-06T21:30:00"
                        },
                        "arrival": {
                            "iataCode": "PVG",
                            "terminal": "1",
                            "at": "2025-01-07T05:00:00"
                        },
                        "carrierCode": "MU",
                        "number": "736",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "MU"
                        },
                        "duration": "PT10H30M",
                        "id": "22",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "PVG",
                            "terminal": "1",
                            "at": "2025-01-07T11:55:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "at": "2025-01-07T15:55:00"
                        },
                        "carrierCode": "MU",
                        "number": "8643",
                        "aircraft": {
                            "code": "73E"
                        },
                        "operating": {
                            "carrierCode": "FM"
                        },
                        "duration": "PT5H",
                        "id": "23",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "3241.11",
            "base": "3060.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "3241.11"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "MU"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "3241.11",
                    "base": "3060.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "22",
                        "cabin": "ECONOMY",
                        "fareBasis": "YSE0WDNR",
                        "class": "Y",
                        "includedCheckedBags": {
                            "quantity": 2
                        }
                    },
                    {
                        "segmentId": "23",
                        "cabin": "ECONOMY",
                        "fareBasis": "YSE0WDNR",
                        "class": "Y",
                        "includedCheckedBags": {
                            "quantity": 2
                        }
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "28",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 4,
        "itineraries": [
            {
                "duration": "PT21H55M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "1",
                            "at": "2025-01-06T21:45:00"
                        },
                        "arrival": {
                            "iataCode": "HND",
                            "at": "2025-01-07T05:20:00"
                        },
                        "carrierCode": "NH",
                        "number": "880",
                        "aircraft": {
                            "code": "789"
                        },
                        "operating": {
                            "carrierCode": "NH"
                        },
                        "duration": "PT9H35M",
                        "id": "60",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "HND",
                            "terminal": "3",
                            "at": "2025-01-07T10:35:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "at": "2025-01-07T15:40:00"
                        },
                        "carrierCode": "NH",
                        "number": "5599",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "TG"
                        },
                        "duration": "PT7H5M",
                        "id": "61",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "5661.91",
            "base": "5405.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "5661.91"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "NH"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "5661.91",
                    "base": "5405.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "60",
                        "cabin": "ECONOMY",
                        "fareBasis": "YFA0WQOY",
                        "brandedFare": "ECOFULFLX",
                        "brandedFareLabel": "ECO I FULLFLEX 2F",
                        "class": "Y",
                        "includedCheckedBags": {
                            "quantity": 2
                        },
                        "amenities": [
                            {
                                "description": "CHECKED BAG 2 PCS 23 KG EACH",
                                "isChargeable": false,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRE SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGE BEFORE DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGE AFTER DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUND BEFORE DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUND AFTER DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "61",
                        "cabin": "ECONOMY",
                        "fareBasis": "Y2XOWA1",
                        "brandedFare": "ECOFULFLX",
                        "brandedFareLabel": "ECO I FULLFLEX 2F",
                        "class": "Y",
                        "includedCheckedBags": {
                            "quantity": 2
                        },
                        "amenities": [
                            {
                                "description": "CHECKED BAG 2 PCS 23 KG EACH",
                                "isChargeable": false,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRE SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGE BEFORE DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGE AFTER DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUND BEFORE DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUND AFTER DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "29",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 9,
        "itineraries": [
            {
                "duration": "PT22H35M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "1",
                            "at": "2025-01-06T21:45:00"
                        },
                        "arrival": {
                            "iataCode": "HND",
                            "at": "2025-01-07T05:20:00"
                        },
                        "carrierCode": "NH",
                        "number": "880",
                        "aircraft": {
                            "code": "789"
                        },
                        "operating": {
                            "carrierCode": "NH"
                        },
                        "duration": "PT9H35M",
                        "id": "40",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "HND",
                            "at": "2025-01-07T11:05:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "at": "2025-01-07T16:20:00"
                        },
                        "carrierCode": "NH",
                        "number": "847",
                        "aircraft": {
                            "code": "781"
                        },
                        "operating": {
                            "carrierCode": "NH"
                        },
                        "duration": "PT7H15M",
                        "id": "41",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "5706.50",
            "base": "5451.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "5706.50"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "NH"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "5706.50",
                    "base": "5451.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "40",
                        "cabin": "ECONOMY",
                        "fareBasis": "YFA0WQOY",
                        "brandedFare": "ECOFULFLX",
                        "brandedFareLabel": "ECO I FULLFLEX 2F",
                        "class": "Y",
                        "includedCheckedBags": {
                            "quantity": 2
                        },
                        "amenities": [
                            {
                                "description": "CHECKED BAG 2 PCS 23 KG EACH",
                                "isChargeable": false,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRE SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGE BEFORE DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGE AFTER DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUND BEFORE DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUND AFTER DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "41",
                        "cabin": "ECONOMY",
                        "fareBasis": "Y2XOWA1",
                        "brandedFare": "ECOFULFLX",
                        "brandedFareLabel": "ECO I FULLFLEX 2F",
                        "class": "Y",
                        "includedCheckedBags": {
                            "quantity": 2
                        },
                        "amenities": [
                            {
                                "description": "CHECKED BAG 2 PCS 23 KG EACH",
                                "isChargeable": false,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRE SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGE BEFORE DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGE AFTER DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUND BEFORE DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUND AFTER DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "30",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 4,
        "itineraries": [
            {
                "duration": "PT21H30M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "1",
                            "at": "2025-01-06T21:45:00"
                        },
                        "arrival": {
                            "iataCode": "HND",
                            "at": "2025-01-07T05:20:00"
                        },
                        "carrierCode": "NH",
                        "number": "880",
                        "aircraft": {
                            "code": "789"
                        },
                        "operating": {
                            "carrierCode": "NH"
                        },
                        "duration": "PT9H35M",
                        "id": "32",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "NRT",
                            "terminal": "1",
                            "at": "2025-01-07T09:45:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "at": "2025-01-07T15:15:00"
                        },
                        "carrierCode": "NH",
                        "number": "5953",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "TG"
                        },
                        "duration": "PT7H30M",
                        "id": "33",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "5716.80",
            "base": "5451.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "5716.80"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "NH"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "5716.80",
                    "base": "5451.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "32",
                        "cabin": "ECONOMY",
                        "fareBasis": "YFA0WQOY",
                        "brandedFare": "ECOFULFLX",
                        "brandedFareLabel": "ECO I FULLFLEX 2F",
                        "class": "Y",
                        "includedCheckedBags": {
                            "quantity": 2
                        },
                        "amenities": [
                            {
                                "description": "CHECKED BAG 2 PCS 23 KG EACH",
                                "isChargeable": false,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRE SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGE BEFORE DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGE AFTER DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUND BEFORE DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUND AFTER DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "33",
                        "cabin": "ECONOMY",
                        "fareBasis": "Y2XOWA1",
                        "brandedFare": "ECOFULFLX",
                        "brandedFareLabel": "ECO I FULLFLEX 2F",
                        "class": "Y",
                        "includedCheckedBags": {
                            "quantity": 2
                        },
                        "amenities": [
                            {
                                "description": "CHECKED BAG 2 PCS 23 KG EACH",
                                "isChargeable": false,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRE SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGE BEFORE DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGE AFTER DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUND BEFORE DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUND AFTER DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "flight-offer",
        "id": "31",
        "source": "GDS",
        "instantTicketingRequired": false,
        "nonHomogeneous": false,
        "oneWay": false,
        "isUpsellOffer": false,
        "lastTicketingDate": "2025-01-06",
        "lastTicketingDateTime": "2025-01-06",
        "numberOfBookableSeats": 4,
        "itineraries": [
            {
                "duration": "PT23H20M",
                "segments": [
                    {
                        "departure": {
                            "iataCode": "SYD",
                            "terminal": "1",
                            "at": "2025-01-06T21:45:00"
                        },
                        "arrival": {
                            "iataCode": "HND",
                            "at": "2025-01-07T05:20:00"
                        },
                        "carrierCode": "NH",
                        "number": "880",
                        "aircraft": {
                            "code": "789"
                        },
                        "operating": {
                            "carrierCode": "NH"
                        },
                        "duration": "PT9H35M",
                        "id": "19",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    },
                    {
                        "departure": {
                            "iataCode": "NRT",
                            "terminal": "1",
                            "at": "2025-01-07T11:45:00"
                        },
                        "arrival": {
                            "iataCode": "BKK",
                            "at": "2025-01-07T17:05:00"
                        },
                        "carrierCode": "NH",
                        "number": "5955",
                        "aircraft": {
                            "code": "359"
                        },
                        "operating": {
                            "carrierCode": "TG"
                        },
                        "duration": "PT7H20M",
                        "id": "20",
                        "numberOfStops": 0,
                        "blacklistedInEU": false
                    }
                ]
            }
        ],
        "price": {
            "currency": "EUR",
            "total": "5716.80",
            "base": "5451.00",
            "fees": [
                {
                    "amount": "0.00",
                    "type": "SUPPLIER"
                },
                {
                    "amount": "0.00",
                    "type": "TICKETING"
                }
            ],
            "grandTotal": "5716.80"
        },
        "pricingOptions": {
            "fareType": [
                "PUBLISHED"
            ],
            "includedCheckedBagsOnly": true
        },
        "validatingAirlineCodes": [
            "NH"
        ],
        "travelerPricings": [
            {
                "travelerId": "1",
                "fareOption": "STANDARD",
                "travelerType": "ADULT",
                "price": {
                    "currency": "EUR",
                    "total": "5716.80",
                    "base": "5451.00"
                },
                "fareDetailsBySegment": [
                    {
                        "segmentId": "19",
                        "cabin": "ECONOMY",
                        "fareBasis": "YFA0WQOY",
                        "brandedFare": "ECOFULFLX",
                        "brandedFareLabel": "ECO I FULLFLEX 2F",
                        "class": "Y",
                        "includedCheckedBags": {
                            "quantity": 2
                        },
                        "amenities": [
                            {
                                "description": "CHECKED BAG 2 PCS 23 KG EACH",
                                "isChargeable": false,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRE SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGE BEFORE DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGE AFTER DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUND BEFORE DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUND AFTER DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    },
                    {
                        "segmentId": "20",
                        "cabin": "ECONOMY",
                        "fareBasis": "Y2XOWA1",
                        "brandedFare": "ECOFULFLX",
                        "brandedFareLabel": "ECO I FULLFLEX 2F",
                        "class": "Y",
                        "includedCheckedBags": {
                            "quantity": 2
                        },
                        "amenities": [
                            {
                                "description": "CHECKED BAG 2 PCS 23 KG EACH",
                                "isChargeable": false,
                                "amenityType": "BAGGAGE",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "PRE SEAT ASSIGNMENT",
                                "isChargeable": false,
                                "amenityType": "PRE_RESERVED_SEAT",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGE BEFORE DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "CHANGE AFTER DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUND BEFORE DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            },
                            {
                                "description": "REFUND AFTER DEPARTURE",
                                "isChargeable": false,
                                "amenityType": "BRANDED_FARES",
                                "amenityProvider": {
                                    "name": "BrandedFare"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
]