import React from "react";
import ReactDOM from "react-dom/client";
import foodFireLogo from "./public/Images/foodFireLogo.png";

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// React.createElement ==> Object ==> HTML(DOM)
// JSX ==> React.createElement ==> Object ==> HTML(DOM)
// Babel converts JSX to React.createElement

const Title = () => (
    <a href="/">
        <img className="logo" src={foodFireLogo} alt="Food Fire Logo" />
    </a>
)

const restaurantList = [
    {
        "type": "restaurant",
        "info": {
            "resId": 18583747,
            "name": "The Little Easy Bandra",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/7/18583747/ae748f73b726f5c1af398bc0e3df58c8_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/chains/7/18583747/ae748f73b726f5c1af398bc0e3df58c8_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/7/18583747/a5a5954a2e4fe2d71fa25b1abf89be28_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.3",
                "rating_text": "4.3",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "4,060",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.2",
                        "reviewCount": "3,554",
                        "reviewTextSmall": "3,554 Reviews",
                        "subtext": "3,554 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.2",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.3",
                        "reviewCount": "506",
                        "reviewTextSmall": "506 Reviews",
                        "subtext": "506 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.3",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹1,700 for two"
            },
            "cfo": {
                "text": "₹700 for one"
            },
            "locality": {
                "name": "Linking Road, Bandra West, Mumbai",
                "address": "231 A, Link Corner, Linking Road, Bandra West, Mumbai",
                "localityUrl": "mumbai/linking-road-bandra-west-restaurants"
            },
            "timing": {
                "text": "Opens at 12noon",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMVwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/american/",
                    "name": "American"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcxXCJdfSJd",
                    "url": "https://www.zomato.com/mumbai/restaurants/finger-food/",
                    "name": "Finger Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/italian/",
                    "name": "Italian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/pizza/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
                    "url": "https://www.zomato.com/mumbai/restaurants/kebab/",
                    "name": "Kebab"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/sea-food/",
                    "name": "Seafood"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/mumbai/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹1,700 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/mumbai/the-little-easy-bandra-linking-road-bandra-west/info",
            "clickActionDeeplink": ""
        },
        "distance": "5.2 km",
        "isPromoted": true,
        "promotedText": "Promoted",
        "trackingData": [
            {
                "table_name": "jadtracking",
                "payload": "{\"banner_id\":\"7617938\",\"bzone\":\"0\",\"campaign_id\":\"16587597\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"3\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"18583747\",\"isNewAd\":\"34\",\"ad_position\":\"10\",\"slider_position\":\"10\",\"slider_sequence\":\"10\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":31,\\\"boosted_rank\\\":10,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.034054\\\",\\\"cost_for_two_ctr\\\":\\\"0.040124\\\",\\\"distance\\\":\\\"4.8215508460998535\\\",\\\"organic_ctr\\\":\\\"0.012791\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"1437\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.7935220785273215\\\",\\\"cost_for_two_ctr\\\":\\\"0.5219678852066962\\\",\\\"cost_per_unit\\\":\\\"0.6539121692976572\\\",\\\"distance\\\":\\\"0.4826501514676644\\\",\\\"organic_ctr\\\":\\\"0.04188182060154379\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.021935997062962738\\\"},\\\"search_id\\\":\\\"685baaf5-46db-48b3-a6d3-b60ead092377\\\",\\\"section_name\\\":\\\"featured\\\",\\\"total_score\\\":0.3773056177353839}\",\"subzone_id\":\"0\"}",
                "event_names": {
                    "tap": "{\"action\":\"click\"}",
                    "impression": "{\"action\":\"impression\"}",
                    "served": "{\"action\":\"serve\"}"
                }
            },
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"685baaf5-46db-48b3-a6d3-b60ead092377\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646509572521984\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18583747\",\"element_type\":\"listing\",\"rank\":10,\"metadata\":{\"is_ad\":\"true\"}}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18354537,
            "name": "KOKO",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/7/18354537/4155bf6815dc59500918f7795f6df1c9_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/7/18354537/4155bf6815dc59500918f7795f6df1c9_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/7/18354537/37e9f40e832b00d93c46a9dbe63857f0_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.6",
                "rating_text": "4.6",
                "rating_subtitle": "Excellent",
                "rating_color": "3F7E00",
                "votes": "2,789",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.7",
                        "reviewCount": "1,768",
                        "reviewTextSmall": "1,768 Reviews",
                        "subtext": "1,768 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.7",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "800"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.5",
                        "reviewCount": "1,021",
                        "reviewTextSmall": "1,021 Reviews",
                        "subtext": "1,021 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.5",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "800"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹3,500 for two"
            },
            "cfo": {
                "text": "₹1,400 for one"
            },
            "locality": {
                "name": "Kamala Mills Compound, Mumbai",
                "address": "C 2, Ground Floor, Trade World, Kamala Mills, SB Road, Near Radio Mirchi Office, Lower Parel, Mumbai",
                "localityUrl": "mumbai/restaurants/in/kamala-mills-compound"
            },
            "timing": {
                "text": "Opens in 2 minutes",
                "color": "#e5521f"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/asian/",
                    "name": "Asian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc3XCJdfSJd",
                    "url": "https://www.zomato.com/mumbai/restaurants/sushi/",
                    "name": "Sushi"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/mumbai/restaurants/desserts/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/mumbai/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹3,500 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/mumbai/koko-1-lower-parel/info",
            "clickActionDeeplink": ""
        },
        "distance": "3.4 km",
        "isPromoted": true,
        "promotedText": "Promoted",
        "trackingData": [
            {
                "table_name": "jadtracking",
                "payload": "{\"banner_id\":\"7667358\",\"bzone\":\"0\",\"campaign_id\":\"16637719\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"3\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"18354537\",\"isNewAd\":\"34\",\"ad_position\":\"11\",\"slider_position\":\"11\",\"slider_sequence\":\"11\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":198,\\\"boosted_rank\\\":11,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.022546\\\",\\\"cost_for_two_ctr\\\":\\\"0.035626\\\",\\\"distance\\\":\\\"3.549872636795044\\\",\\\"organic_ctr\\\":\\\"0.011702\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"906\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.5253640918093906\\\",\\\"cost_for_two_ctr\\\":\\\"0.4195194169229017\\\",\\\"cost_per_unit\\\":\\\"0.6091243746491812\\\",\\\"distance\\\":\\\"0.6836475480153194\\\",\\\"organic_ctr\\\":\\\"0.03463534735161033\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.013813253380652268\\\"},\\\"search_id\\\":\\\"685baaf5-46db-48b3-a6d3-b60ead092377\\\",\\\"section_name\\\":\\\"featured\\\",\\\"total_score\\\":0.3749299648910187}\",\"subzone_id\":\"0\"}",
                "event_names": {
                    "tap": "{\"action\":\"click\"}",
                    "impression": "{\"action\":\"impression\"}",
                    "served": "{\"action\":\"serve\"}"
                }
            },
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"685baaf5-46db-48b3-a6d3-b60ead092377\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646509572521984\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18354537\",\"element_type\":\"listing\",\"rank\":11,\"metadata\":{\"is_ad\":\"true\"}}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19310144,
            "name": "Mitron",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/4/19310144/c83086607aa03b7adfca5f60f4496761_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/4/19310144/c83086607aa03b7adfca5f60f4496761_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/4/18784164/250100ed8f01ba536a7e7a485b51de4b_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.0",
                "rating_text": "4.0",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "3,014",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.2",
                        "reviewCount": "2,696",
                        "reviewTextSmall": "2,696 Reviews",
                        "subtext": "2,696 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.2",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.7",
                        "reviewCount": "318",
                        "reviewTextSmall": "318 Reviews",
                        "subtext": "318 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.7",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹2,000 for two"
            },
            "cfo": {
                "text": "₹800 for one"
            },
            "locality": {
                "name": "Linking Road, Bandra West, Mumbai",
                "address": "Floor 5, Crystal Shoppers Paradise, Linking Road, Bandra West, Mumbai",
                "localityUrl": "mumbai/linking-road-bandra-west-restaurants"
            },
            "timing": {
                "text": "Opens at 12noon",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzhcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/european/",
                    "name": "European"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/continental/",
                    "name": "Continental"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/asian/",
                    "name": "Asian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc3XCJdfSJd",
                    "url": "https://www.zomato.com/mumbai/restaurants/sushi/",
                    "name": "Sushi"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/mumbai/restaurants/desserts/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/mumbai/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹2,000 for two"
            }
        },
        "order": [],
        "gold": {
            "instant": 10,
            "welcome_offer": false,
            "gold_offer": false,
            "text": "Flat",
            "offerValue": "10% OFF",
            "isGoldIcon": false
        },
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/mumbai/mitron-linking-road-bandra-west/info",
            "clickActionDeeplink": ""
        },
        "distance": "5.8 km",
        "isPromoted": true,
        "promotedText": "Promoted",
        "trackingData": [
            {
                "table_name": "jadtracking",
                "payload": "{\"banner_id\":\"7784220\",\"bzone\":\"0\",\"campaign_id\":\"16755259\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"3\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"19310144\",\"isNewAd\":\"34\",\"ad_position\":\"12\",\"slider_position\":\"12\",\"slider_sequence\":\"12\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":130,\\\"boosted_rank\\\":12,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.034815\\\",\\\"cost_for_two_ctr\\\":\\\"0.04179\\\",\\\"distance\\\":\\\"5.459420204162598\\\",\\\"organic_ctr\\\":\\\"0.156777\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"113\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.8112548060118839\\\",\\\"cost_for_two_ctr\\\":\\\"0.5599134494932241\\\",\\\"cost_per_unit\\\":\\\"0.6807874134177799\\\",\\\"distance\\\":\\\"0.38183055782358966\\\",\\\"organic_ctr\\\":\\\"1\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.001682677598972037\\\"},\\\"search_id\\\":\\\"685baaf5-46db-48b3-a6d3-b60ead092377\\\",\\\"section_name\\\":\\\"featured\\\",\\\"total_score\\\":0.3744539327584221}\",\"subzone_id\":\"0\"}",
                "event_names": {
                    "tap": "{\"action\":\"click\"}",
                    "impression": "{\"action\":\"impression\"}",
                    "served": "{\"action\":\"serve\"}"
                }
            },
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"685baaf5-46db-48b3-a6d3-b60ead092377\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646509572521984\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19310144\",\"element_type\":\"listing\",\"rank\":12,\"metadata\":{\"is_ad\":\"true\"}}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18617715,
            "name": "Plum by Bent Chair",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/5/18617715/babb766e1ba1c9149330e41ac30779c6_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/5/18617715/babb766e1ba1c9149330e41ac30779c6_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": false
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.3",
                "rating_text": "4.3",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "4,142",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.5",
                        "reviewCount": "4,132",
                        "reviewTextSmall": "4,132 Reviews",
                        "subtext": "4,132 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.5",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "800"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.0",
                        "reviewCount": "10",
                        "reviewTextSmall": "10 Reviews",
                        "subtext": "10 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.0",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹3,000 for two"
            },
            "cfo": {
                "text": "₹1,200 for one"
            },
            "locality": {
                "name": "Lower Parel, Mumbai",
                "address": "CS 465, Unit 1, 3Rd Floor, Trade View Building, Oasis Complex, P B Marg, Lower Parel, Mumbai",
                "localityUrl": "mumbai/lower-parel-restaurants"
            },
            "timing": {
                "text": "Opens at 12noon",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/asian/",
                    "name": "Asian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc3XCJdfSJd",
                    "url": "https://www.zomato.com/mumbai/restaurants/sushi/",
                    "name": "Sushi"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/mumbai/restaurants/desserts/",
                    "name": "Desserts"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹3,000 for two"
            }
        },
        "order": [],
        "gold": {
            "instant": 20,
            "welcome_offer": false,
            "gold_offer": false,
            "text": "Flat",
            "offerValue": "20% OFF",
            "isGoldIcon": false
        },
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/mumbai/plum-by-bent-chair-lower-parel/info",
            "clickActionDeeplink": ""
        },
        "distance": "3.4 km",
        "isPromoted": true,
        "promotedText": "Promoted",
        "trackingData": [
            {
                "table_name": "jadtracking",
                "payload": "{\"banner_id\":\"6751007\",\"bzone\":\"0\",\"campaign_id\":\"15707833\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"3\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"18617715\",\"isNewAd\":\"109\",\"ad_position\":\"13\",\"slider_position\":\"13\",\"slider_sequence\":\"13\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":250,\\\"boosted_rank\\\":13,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0\\\",\\\"cost_for_two_ctr\\\":\\\"0.030183\\\",\\\"distance\\\":\\\"3.514049530029297\\\",\\\"organic_ctr\\\":\\\"0.009654\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"14365\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0\\\",\\\"cost_for_two_ctr\\\":\\\"0.29554720419086666\\\",\\\"cost_per_unit\\\":\\\"0.7320330957711547\\\",\\\"distance\\\":\\\"0.6893096338665033\\\",\\\"organic_ctr\\\":\\\"0.021007452754857596\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.21969650614942177\\\"},\\\"search_id\\\":\\\"685baaf5-46db-48b3-a6d3-b60ead092377\\\",\\\"section_name\\\":\\\"featured\\\",\\\"total_score\\\":0.35110841726173864}\",\"subzone_id\":\"0\"}",
                "event_names": {
                    "tap": "{\"action\":\"click\"}",
                    "impression": "{\"action\":\"impression\"}",
                    "served": "{\"action\":\"serve\"}"
                }
            },
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"685baaf5-46db-48b3-a6d3-b60ead092377\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646509572521984\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18617715\",\"element_type\":\"listing\",\"rank\":13,\"metadata\":{\"is_ad\":\"true\"}}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 21299778,
            "name": "P.F. Chang's",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/8/21299778/0a614cb9d97bd9bb3d92f5e04cf064d7_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/8/21299778/0a614cb9d97bd9bb3d92f5e04cf064d7_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/8/21299778/3ba346256f3e913045ab988fadcd2b3a_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.3",
                "rating_text": "4.3",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "1,151",
                "subtext": "REVIEW",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.4",
                        "reviewCount": "921",
                        "reviewTextSmall": "921 Reviews",
                        "subtext": "921 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.4",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.1",
                        "reviewCount": "230",
                        "reviewTextSmall": "230 Reviews",
                        "subtext": "230 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.1",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹2,200 for two"
            },
            "cfo": {
                "text": "₹900 for one"
            },
            "locality": {
                "name": "Khar, Mumbai",
                "address": "442, 14th Road, Khar, Mumbai",
                "localityUrl": "mumbai/khar-restaurants"
            },
            "timing": {
                "text": "Opens in 2 minutes",
                "color": "#e5521f"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/asian/",
                    "name": "Asian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc3XCJdfSJd",
                    "url": "https://www.zomato.com/mumbai/restaurants/sushi/",
                    "name": "Sushi"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjBcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/japanese/",
                    "name": "Japanese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/mumbai/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹2,200 for two"
            }
        },
        "order": [],
        "gold": {
            "instant": 10,
            "welcome_offer": false,
            "gold_offer": false,
            "text": "Flat",
            "offerValue": "10% OFF",
            "isGoldIcon": false
        },
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/mumbai/p-f-changs-khar/info",
            "clickActionDeeplink": ""
        },
        "distance": "6.5 km",
        "isPromoted": true,
        "promotedText": "Promoted",
        "trackingData": [
            {
                "table_name": "jadtracking",
                "payload": "{\"banner_id\":\"7586930\",\"bzone\":\"0\",\"campaign_id\":\"16556482\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"3\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"21299778\",\"isNewAd\":\"34\",\"ad_position\":\"14\",\"slider_position\":\"14\",\"slider_sequence\":\"14\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":69,\\\"boosted_rank\\\":14,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.031846\\\",\\\"cost_for_two_ctr\\\":\\\"0.052586\\\",\\\"distance\\\":\\\"6.18408727645874\\\",\\\"organic_ctr\\\":\\\"0.045538\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"2873\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.7420715367587091\\\",\\\"cost_for_two_ctr\\\":\\\"0.8058079945336523\\\",\\\"cost_per_unit\\\":\\\"5.762677121056054e-05\\\",\\\"distance\\\":\\\"0.2672919946638403\\\",\\\"organic_ctr\\\":\\\"0.2597883949960075\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.0439025882640886\\\"},\\\"search_id\\\":\\\"685baaf5-46db-48b3-a6d3-b60ead092377\\\",\\\"section_name\\\":\\\"featured\\\",\\\"total_score\\\":0.33549983702917374}\",\"subzone_id\":\"0\"}",
                "event_names": {
                    "tap": "{\"action\":\"click\"}",
                    "impression": "{\"action\":\"impression\"}",
                    "served": "{\"action\":\"serve\"}"
                }
            },
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"685baaf5-46db-48b3-a6d3-b60ead092377\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646509572521984\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21299778\",\"element_type\":\"listing\",\"rank\":14,\"metadata\":{\"is_ad\":\"true\"}}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20981052,
            "name": "Takumi",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/2/20981052/ce8fb7b9b9b9d041869c1f71f1d32cb0_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/2/20981052/ce8fb7b9b9b9d041869c1f71f1d32cb0_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/2/20981052/ab6bc2bd6ed47073afe8c8804f6ae084_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.0",
                "rating_text": "4.0",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "1,540",
                "subtext": "REVIEW",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.2",
                        "reviewCount": "1,505",
                        "reviewTextSmall": "1,505 Reviews",
                        "subtext": "1,505 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.2",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.7",
                        "reviewCount": "35",
                        "reviewTextSmall": "35 Reviews",
                        "subtext": "35 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.7",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹1,500 for two"
            },
            "cfo": {
                "text": "₹600 for one"
            },
            "locality": {
                "name": "Santacruz West, Mumbai",
                "address": "Ground Floor, Savoy Chambers, Linking Road, Santacruz West, Mumbai",
                "localityUrl": "mumbai/santacruz-west-restaurants"
            },
            "timing": {
                "text": "Opens at 12noon",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
                    "url": "https://www.zomato.com/mumbai/restaurants/salad/",
                    "name": "Salad"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/mumbai/restaurants/desserts/",
                    "name": "Desserts"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹1,500 for two"
            }
        },
        "order": [],
        "gold": {
            "instant": 10,
            "welcome_offer": false,
            "gold_offer": false,
            "text": "Flat",
            "offerValue": "10% OFF",
            "isGoldIcon": false
        },
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/mumbai/takumi-santacruz-west/info",
            "clickActionDeeplink": ""
        },
        "distance": "8 km",
        "isPromoted": true,
        "promotedText": "Promoted",
        "trackingData": [
            {
                "table_name": "jadtracking",
                "payload": "{\"banner_id\":\"7584321\",\"bzone\":\"0\",\"campaign_id\":\"16553872\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"3\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"20981052\",\"isNewAd\":\"34\",\"ad_position\":\"15\",\"slider_position\":\"15\",\"slider_sequence\":\"15\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":103,\\\"boosted_rank\\\":15,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.03642\\\",\\\"cost_for_two_ctr\\\":\\\"0.042013\\\",\\\"distance\\\":\\\"7.603521823883057\\\",\\\"organic_ctr\\\":\\\"0.009803\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"5696\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.8486543166724921\\\",\\\"cost_for_two_ctr\\\":\\\"0.5649925976540258\\\",\\\"cost_per_unit\\\":\\\"0.8559665799271261\\\",\\\"distance\\\":\\\"0.042940703185744326\\\",\\\"organic_ctr\\\":\\\"0.021998935320734624\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.0870862142813437\\\"},\\\"search_id\\\":\\\"685baaf5-46db-48b3-a6d3-b60ead092377\\\",\\\"section_name\\\":\\\"featured\\\",\\\"total_score\\\":0.3347305386674402}\",\"subzone_id\":\"0\"}",
                "event_names": {
                    "tap": "{\"action\":\"click\"}",
                    "impression": "{\"action\":\"impression\"}",
                    "served": "{\"action\":\"serve\"}"
                }
            },
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"685baaf5-46db-48b3-a6d3-b60ead092377\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646509572521984\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20981052\",\"element_type\":\"listing\",\"rank\":15,\"metadata\":{\"is_ad\":\"true\"}}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 21514668,
            "name": "Two Gud Sisters",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/8/21514668/be1b9e6f5ddcebc87ec110718486a440_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/8/21514668/be1b9e6f5ddcebc87ec110718486a440_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": false
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.3",
                "rating_text": "4.3",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "206",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.3",
                        "reviewCount": "206",
                        "reviewTextSmall": "206 Reviews",
                        "subtext": "206 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.3",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹2,000 for two"
            },
            "cfo": {
                "text": "₹800 for one"
            },
            "locality": {
                "name": "Santacruz West, Mumbai",
                "address": "Ground Floor, Damodar Villa, West 16 Avenue Road, Santacruz West, Mumbai",
                "localityUrl": "mumbai/santacruz-west-restaurants"
            },
            "timing": {
                "text": "Opens at 12noon",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/mumbai/restaurants/beverages/",
                    "name": "Beverages"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTM3XCJdfSJd",
                    "url": "https://www.zomato.com/mumbai/restaurants/middle-eastern/",
                    "name": "Middle Eastern"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/italian/",
                    "name": "Italian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/continental/",
                    "name": "Continental"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzNcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/mexican/",
                    "name": "Mexican"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzBcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/mediterranean/",
                    "name": "Mediterranean"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹2,000 for two"
            }
        },
        "order": [],
        "gold": {
            "instant": 10,
            "welcome_offer": false,
            "gold_offer": false,
            "text": "Flat",
            "offerValue": "10% OFF",
            "isGoldIcon": false
        },
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/mumbai/two-gud-sisters-santacruz-west/info",
            "clickActionDeeplink": ""
        },
        "distance": "7.3 km",
        "isPromoted": true,
        "promotedText": "Promoted",
        "trackingData": [
            {
                "table_name": "jadtracking",
                "payload": "{\"banner_id\":\"6709227\",\"bzone\":\"0\",\"campaign_id\":\"15665926\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"3\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"21514668\",\"isNewAd\":\"34\",\"ad_position\":\"16\",\"slider_position\":\"16\",\"slider_sequence\":\"16\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":86,\\\"boosted_rank\\\":16,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.031178\\\",\\\"cost_for_two_ctr\\\":\\\"0.038913\\\",\\\"distance\\\":\\\"6.959174156188965\\\",\\\"organic_ctr\\\":\\\"0.008595\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"210\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.899953815956587\\\",\\\"cost_for_two_ctr\\\":\\\"0.8584512463829675\\\",\\\"cost_per_unit\\\":\\\"0.9718251220552995\\\",\\\"distance\\\":\\\"0.35789352070689306\\\",\\\"organic_ctr\\\":\\\"0.02825336020943284\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.0017004718426374165\\\"},\\\"search_id\\\":\\\"685baaf5-46db-48b3-a6d3-b60ead092377\\\",\\\"section_name\\\":\\\"more\\\",\\\"total_score\\\":0.517810410426079}\",\"subzone_id\":\"0\"}",
                "event_names": {
                    "tap": "{\"action\":\"click\"}",
                    "impression": "{\"action\":\"impression\"}",
                    "served": "{\"action\":\"serve\"}"
                }
            },
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"685baaf5-46db-48b3-a6d3-b60ead092377\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646509572521984\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21514668\",\"element_type\":\"listing\",\"rank\":16,\"metadata\":{\"is_ad\":\"true\"}}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20948135,
            "name": "The Nines",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/5/20948135/c2c3bd806b490fade0e1205056745f6a_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/5/20948135/c2c3bd806b490fade0e1205056745f6a_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/5/20948135/b822582a93ba667931077d74d46e1e0b_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.5",
                "rating_text": "4.5",
                "rating_subtitle": "Excellent",
                "rating_color": "3F7E00",
                "votes": "4,175",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.5",
                        "reviewCount": "4,175",
                        "reviewTextSmall": "4,175 Reviews",
                        "subtext": "4,175 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.5",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "800"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹1,800 for two"
            },
            "cfo": {
                "text": "₹750 for one"
            },
            "locality": {
                "name": "Juhu, Mumbai",
                "address": "Plot 70, JVPD Grounds, Devle Road, Juhu, Mumbai",
                "localityUrl": "mumbai/juhu-restaurants"
            },
            "timing": {
                "text": "Opens at 12noon",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/continental/",
                    "name": "Continental"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/asian/",
                    "name": "Asian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/pizza/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/italian/",
                    "name": "Italian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxOFwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/modern-indian/",
                    "name": "Modern Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc3XCJdfSJd",
                    "url": "https://www.zomato.com/mumbai/restaurants/sushi/",
                    "name": "Sushi"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/chinese/",
                    "name": "Chinese"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹1,800 for two"
            }
        },
        "order": [],
        "gold": {
            "instant": 10,
            "welcome_offer": false,
            "gold_offer": false,
            "text": "Flat",
            "offerValue": "10% OFF",
            "isGoldIcon": false
        },
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/mumbai/the-nines-juhu/info",
            "clickActionDeeplink": ""
        },
        "distance": "11.4 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"685baaf5-46db-48b3-a6d3-b60ead092377\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646509572521984\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20948135\",\"element_type\":\"listing\",\"rank\":17}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 21110761,
            "name": "Charlee",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/1/21110761/81ab7c10b2dd8461c46db65613a6c54c_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/1/21110761/81ab7c10b2dd8461c46db65613a6c54c_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": false
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.2",
                "rating_text": "4.2",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "168",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.2",
                        "reviewCount": "168",
                        "reviewTextSmall": "168 Reviews",
                        "subtext": "168 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.2",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹2,000 for two"
            },
            "cfo": {
                "text": "₹800 for one"
            },
            "locality": {
                "name": "Santacruz West, Mumbai",
                "address": "1st Floor, Vatshal Niwas CHS, Ward H/W, Santacruz West, Mumbai",
                "localityUrl": "mumbai/santacruz-west-restaurants"
            },
            "timing": {
                "text": "Opens at 12noon",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
                    "url": "https://www.zomato.com/mumbai/restaurants/salad/",
                    "name": "Salad"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/asian/",
                    "name": "Asian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxOFwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/modern-indian/",
                    "name": "Modern Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjI3XCJdfSJd",
                    "url": "https://www.zomato.com/mumbai/restaurants/bar-food/",
                    "name": "Bar Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹2,000 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/mumbai/charlee-santacruz-west/info",
            "clickActionDeeplink": ""
        },
        "distance": "6.9 km",
        "isPromoted": true,
        "promotedText": "Promoted",
        "trackingData": [
            {
                "table_name": "jadtracking",
                "payload": "{\"banner_id\":\"7092050\",\"bzone\":\"0\",\"campaign_id\":\"16056172\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"3\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"21110761\",\"isNewAd\":\"34\",\"ad_position\":\"18\",\"slider_position\":\"18\",\"slider_sequence\":\"18\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":79,\\\"boosted_rank\\\":18,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.030451\\\",\\\"cost_for_two_ctr\\\":\\\"0.037085\\\",\\\"distance\\\":\\\"6.5483078956604\\\",\\\"organic_ctr\\\":\\\"0.012573\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"1682\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.8789689412308047\\\",\\\"cost_for_two_ctr\\\":\\\"0.809923279088906\\\",\\\"cost_per_unit\\\":\\\"0.9270976647133495\\\",\\\"distance\\\":\\\"0.4095803122434103\\\",\\\"organic_ctr\\\":\\\"0.061525079248249855\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.024250873215270544\\\"},\\\"search_id\\\":\\\"685baaf5-46db-48b3-a6d3-b60ead092377\\\",\\\"section_name\\\":\\\"more\\\",\\\"total_score\\\":0.5044538617558598}\",\"subzone_id\":\"0\"}",
                "event_names": {
                    "tap": "{\"action\":\"click\"}",
                    "impression": "{\"action\":\"impression\"}",
                    "served": "{\"action\":\"serve\"}"
                }
            },
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"685baaf5-46db-48b3-a6d3-b60ead092377\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646509572521984\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21110761\",\"element_type\":\"listing\",\"rank\":18,\"metadata\":{\"is_ad\":\"true\"}}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20566183,
            "name": "Amazonia",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/3/20566183/b3f2a3a41d56486331a8cebd1feaf351_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/3/20566183/b3f2a3a41d56486331a8cebd1feaf351_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": false
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.0",
                "rating_text": "4.0",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "3,012",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.0",
                        "reviewCount": "3,008",
                        "reviewTextSmall": "3,008 Reviews",
                        "subtext": "3,008 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.0",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "4",
                        "reviewTextSmall": "4 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹1,800 for two"
            },
            "cfo": {
                "text": "₹750 for one"
            },
            "locality": {
                "name": "Bandra Kurla Complex, Mumbai",
                "address": "Unit 5, Ground Floor, Godrej BKC, Bandra Kurla Complex, Mumbai",
                "localityUrl": "mumbai/bandra-kurla-complex-restaurants"
            },
            "timing": {
                "text": "Opens at 12noon",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/asian/",
                    "name": "Asian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjBcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/japanese/",
                    "name": "Japanese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc3XCJdfSJd",
                    "url": "https://www.zomato.com/mumbai/restaurants/sushi/",
                    "name": "Sushi"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/italian/",
                    "name": "Italian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjdcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/korean/",
                    "name": "Korean"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
                    "url": "https://www.zomato.com/mumbai/restaurants/salad/",
                    "name": "Salad"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/sea-food/",
                    "name": "Seafood"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹1,800 for two"
            }
        },
        "order": [],
        "gold": {
            "instant": 10,
            "welcome_offer": false,
            "gold_offer": false,
            "text": "Flat",
            "offerValue": "10% OFF",
            "isGoldIcon": false
        },
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/mumbai/amazonia-bandra-kurla-complex/info",
            "clickActionDeeplink": ""
        },
        "distance": "4.7 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"685baaf5-46db-48b3-a6d3-b60ead092377\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646509572521984\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20566183\",\"element_type\":\"listing\",\"rank\":19}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 21169411,
            "name": "Carnival By Trèsind",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/1/21169411/0b4ec0d005170112b3089718809c4641_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/1/21169411/0b4ec0d005170112b3089718809c4641_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": false
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.5",
                "rating_text": "4.5",
                "rating_subtitle": "Excellent",
                "rating_color": "3F7E00",
                "votes": "646",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.5",
                        "reviewCount": "646",
                        "reviewTextSmall": "646 Reviews",
                        "subtext": "646 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.5",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "800"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Delivery",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "100"
                        },
                        "textColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹3,500 for two"
            },
            "cfo": {
                "text": "₹1,400 for one"
            },
            "locality": {
                "name": "Santacruz West, Mumbai",
                "address": "7th Floor, Krishna Curve Building, Santacruz West, Mumbai",
                "localityUrl": "mumbai/santacruz-west-restaurants"
            },
            "timing": {
                "text": "Opens at 12noon",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxOFwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/modern-indian/",
                    "name": "Modern Indian"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹3,500 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/mumbai/carnival-by-trèsind-santacruz-west/info",
            "clickActionDeeplink": ""
        },
        "distance": "7.8 km",
        "isPromoted": true,
        "promotedText": "Promoted",
        "trackingData": [
            {
                "table_name": "jadtracking",
                "payload": "{\"banner_id\":\"7782748\",\"bzone\":\"0\",\"campaign_id\":\"16753617\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"3\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"21169411\",\"isNewAd\":\"34\",\"ad_position\":\"20\",\"slider_position\":\"20\",\"slider_sequence\":\"20\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"data\":\"{\\\"type\\\":\\\"boost\\\",\\\"original_rank\\\":44,\\\"boosted_rank\\\":20,\\\"ordering_parameter_value\\\":{\\\"ads_ctr\\\":\\\"0.029409\\\",\\\"cost_for_two_ctr\\\":\\\"0.038664\\\",\\\"distance\\\":\\\"7.437595367431641\\\",\\\"organic_ctr\\\":\\\"0.011996\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"popularity_score_source\\\":\\\"default\\\",\\\"target_left\\\":\\\"816\\\"},\\\"ordering_parameter_normalised_value\\\":{\\\"ads_ctr\\\":\\\"0.848891582958088\\\",\\\"cost_for_two_ctr\\\":\\\"0.8518410363959754\\\",\\\"cost_per_unit\\\":\\\"0.96691525563971\\\",\\\"distance\\\":\\\"0.297708346630208\\\",\\\"organic_ctr\\\":\\\"0.05669909084065874\\\",\\\"popularity_score\\\":\\\"0\\\",\\\"target_left\\\":\\\"0.010984128929468718\\\"},\\\"search_id\\\":\\\"685baaf5-46db-48b3-a6d3-b60ead092377\\\",\\\"section_name\\\":\\\"more\\\",\\\"total_score\\\":0.5027233219837253}\",\"subzone_id\":\"0\"}",
                "event_names": {
                    "tap": "{\"action\":\"click\"}",
                    "impression": "{\"action\":\"impression\"}",
                    "served": "{\"action\":\"serve\"}"
                }
            },
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"685baaf5-46db-48b3-a6d3-b60ead092377\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646509572521984\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21169411\",\"element_type\":\"listing\",\"rank\":20,\"metadata\":{\"is_ad\":\"true\"}}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20411632,
            "name": "One8 Commune",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/2/20411632/1bebf1a16cc974053dcecd8a1651a71c_featured_v2.jpg",
                "urlWithParams": "https://b.zmtcdn.com/data/pictures/2/20411632/1bebf1a16cc974053dcecd8a1651a71c_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
            },
            "o2FeaturedImage": {
                "url": false
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.2",
                "rating_text": "4.2",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "2,152",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.1",
                        "reviewCount": "2,113",
                        "reviewTextSmall": "2,113 Reviews",
                        "subtext": "2,113 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.1",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "39",
                        "reviewTextSmall": "39 Reviews",
                        "subtext": "39 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹1,900 for two"
            },
            "cfo": {
                "text": "₹800 for one"
            },
            "locality": {
                "name": "Juhu, Mumbai",
                "address": "Ground Floor, Kishore Kumar Bungalow, Gauri Marg, Juhu, Mumbai",
                "localityUrl": "mumbai/juhu-restaurants"
            },
            "timing": {
                "text": "Opens at 12noon",
                "color": "#ab000d"
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/italian/",
                    "name": "Italian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/asian/",
                    "name": "Asian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzhcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/european/",
                    "name": "European"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/pasta/",
                    "name": "Pasta"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/mumbai/restaurants/desserts/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/continental/",
                    "name": "Continental"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/pizza/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzBcIl19Il0%3D",
                    "url": "https://www.zomato.com/mumbai/restaurants/mediterranean/",
                    "name": "Mediterranean"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹1,900 for two"
            }
        },
        "order": [],
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/mumbai/one8-commune-1-juhu/info",
            "clickActionDeeplink": ""
        },
        "distance": "8.5 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"685baaf5-46db-48b3-a6d3-b60ead092377\",\"location_type\":\"delivery_cell\",\"location_id\":\"4316646509572521984\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20411632\",\"element_type\":\"listing\",\"rank\":21}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": false,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    }
]

const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </li>
                </ul>
            </div>
        </div>
    );
};

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
    image,
    name,
    cuisine,
    area,
    distance,
    cft,
    rating,
}) => {
    return (
        <div className="card">
            <img src={image.urlWithParams} />
            <h2>{name}</h2>
            <h4>{cuisine.map((ele) => ele.name).join(", ")}</h4>
            <h4>{area}</h4>
            <span>
                <h4>
                    <i class="fa-solid fa-star"></i>
                    {rating.aggregate_rating}
                </h4>
                <h4>{distance}</h4>
                <h4>{cft.text}</h4>
            </span>
        </div>
    );
};

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {
    return (
        <div className="restaurant-list">
            {restaurantList.map((restaurant) => {
                return <RestaurantCard key={restaurant.info.resId} {...restaurant.info} />;
            })}
        </div>
    );
};

// Footer component for footer section
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            Created By
            <i class="fa-solid fa-heart"></i>
            <a href="https://www.linkedin.com/in/md-shahbaz-alam-6a8679197/" target="_blank">
                Md Shahbaz Alam
            </a>
            <i class="fa-solid fa-copyright"></i>
            {year}
            <strong style={{marginLeft: '5px'}}>
                Food<span>Fire</span>
            </strong>
        </div>
    );
};


const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppLayout />);