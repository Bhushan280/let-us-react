import React from "react";
import ReactDOM from "react-dom/client"; 
/**
 * Rough Idea how to build an web applicaiton
 * Header 
 * - logo 
 * - nav items
 * 
 * Body
 * -Search
 * - Restaureant list
 *  - ResaurantCard
 *    -> img, name of res, start rating, couisins , delivery time etc.
 * Footer
 *  - Copuright
 *  - Links
 *  - Address
 *  - Contsnt 
*/
//React Element
const Header = () => {
    return (
        <div className="header">
            <div>
                <img
                    className="log0"
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"}
                    alt=""
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    );
};


const RestaurentCard = ({
  resData: {
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    sla
  }
}) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.slaString} minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const resList = {
  "restaurants": [
    {
      "restaurant": {
        "id": "588619",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/4398bfb2-6948-484a-9613-2d7628a2457a_588619.JPG",
        "locality": "Brigade Road",
        "areaName": "Central Bangalore",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Fast Food",
          "Rolls & Wraps"
        ],
        "avgRating": 4.5,
        "parentId": "547",
        "avgRatingString": "4.5",
        "totalRatingsString": "2.5K+",
        "sla": {
          "deliveryTime": 37,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-04-21 23:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹59"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.9",
            "ratingCount": "396"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-b166f6ce-7dd6-47e3-8bf8-cdaeedce0bc5"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/kfc-brigade-road-central-bangalore-rest588619",
        "type": "WEBLINK"
      }
    },
    {
      "restaurant": {
        "id": "5938",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/aa2250f4-9b3d-4df1-a58d-276d36cc813e_5938.jpg",
        "locality": "Tasker Town",
        "areaName": "Shivaji Nagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.4,
        "parentId": "166",
        "avgRatingString": "4.4",
        "totalRatingsString": "38K+",
        "sla": {
          "deliveryTime": 40,
          "lastMileTravel": 2.7,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "2.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-04-22 04:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-b166f6ce-7dd6-47e3-8bf8-cdaeedce0bc5"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/burger-king-tasker-town-shivaji-nagar-rest5938",
        "type": "WEBLINK"
      }
    },
    {
      "restaurant": {
        "id": "59146",
        "name": "Krispy Kreme - Doughnuts & Coffee",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/21/34619ab4-1f7a-4094-8365-4bbaa880409b_59146.jpg",
        "locality": "Austin town",
        "areaName": "Richmond Road",
        "costForTwo": "₹170 for two",
        "cuisines": [
          "Desserts",
          "Cafe",
          "Bakery",
          "Coffee",
          "Beverages",
          "Snacks"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "570",
        "avgRatingString": "4.7",
        "totalRatingsString": "5.1K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 2.5,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-04-21 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-b166f6ce-7dd6-47e3-8bf8-cdaeedce0bc5"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/krispy-kreme-doughnuts-and-coffee-austin-town-richmond-road-rest59146",
        "type": "WEBLINK"
      }
    },
    {
      "restaurant": {
        "id": "12345",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/20/3c85376d-7142-48b7-adb2-363daf24f308_43836.JPG",
        "locality": "MG Road",
        "areaName": "Central Bangalore",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Burgers",
          "Fast Food",
          "Desserts"
        ],
        "avgRating": 4.2,
        "parentId": "630",
        "avgRatingString": "4.2",
        "totalRatingsString": "25K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 1.8,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "1.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-04-22 03:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.1",
            "ratingCount": "1.2K"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-b166f6ce-7dd6-47e3-8bf8-cdaeedce0bc5"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/mcdonalds-mg-road-central-bangalore-rest12345",
        "type": "WEBLINK"
      }
    },
    {
      "restaurant": {
        "id": "67890",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/23f109d4-5a1c-4b5c-be08-47be37d366c2_23847.JPG",
        "locality": "Indiranagar",
        "areaName": "East Bangalore",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "2456",
        "avgRatingString": "4.3",
        "totalRatingsString": "15K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 3.2,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "3.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-04-22 01:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "BUY 1 GET 1",
          "subHeader": "ON MEDIUM PIZZAS"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.0",
            "ratingCount": "850"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-b166f6ce-7dd6-47e3-8bf8-cdaeedce0bc5"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/dominos-pizza-indiranagar-east-bangalore-rest67890",
        "type": "WEBLINK"
      }
    },
    {
      "restaurant": {
        "id": "24680",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/23f109d4-5a1c-4b5c-be08-47be37d366c2_23847.JPG",
        "locality": "Koramangala",
        "areaName": "South Bangalore",
        "costForTwo": "₹550 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.1,
        "parentId": "721",
        "avgRatingString": "4.1",
        "totalRatingsString": "12K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 4.5,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-04-22 00:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹150"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.8",
            "ratingCount": "720"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-b166f6ce-7dd6-47e3-8bf8-cdaeedce0bc5"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/pizza-hut-koramangala-south-bangalore-rest24680",
        "type": "WEBLINK"
      }
    },
    {
      "restaurant": {
        "id": "13579",
        "name": "Subway",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/940f33d0-b52c-4fca-a684-80edad8a2e8b_12808.jpg",
        "locality": "Whitefield",
        "areaName": "East Bangalore",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Salads",
          "Snacks",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.0,
        "parentId": "402",
        "avgRatingString": "4.0",
        "totalRatingsString": "8K+",
        "sla": {
          "deliveryTime": 40,
          "lastMileTravel": 5.8,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "5.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-04-21 23:30:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.9",
            "ratingCount": "650"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-b166f6ce-7dd6-47e3-8bf8-cdaeedce0bc5"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/subway-whitefield-east-bangalore-rest13579",
        "type": "WEBLINK"
      }
    },
    {
      "restaurant": {
        "id": "86420",
        "name": "Haldiram's",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/f571f8d2-2d3c-484b-9046-2a770ae4820c_847260.JPG",
        "locality": "Jayanagar",
        "areaName": "South Bangalore",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "North Indian",
          "Sweets",
          "Snacks",
          "Street Food"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "1080",
        "avgRatingString": "4.5",
        "totalRatingsString": "9.5K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 3.0,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-04-21 22:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.2",
            "ratingCount": "950"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-b166f6ce-7dd6-47e3-8bf8-cdaeedce0bc5"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/haldirams-jayanagar-south-bangalore-rest86420",
        "type": "WEBLINK"
      }
    },
    {
      "restaurant": {
        "id": "97531",
        "name": "Theobroma",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/2385f59d-92c8-46fb-9bab-e370e61bc197_396748.jpg",
        "locality": "Lavelle Road",
        "areaName": "Central Bangalore",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Beverages",
          "Continental"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "1040",
        "avgRatingString": "4.6",
        "totalRatingsString": "7.2K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.0,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-04-21 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "ABOVE ₹500"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.4",
            "ratingCount": "1.1K"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-b166f6ce-7dd6-47e3-8bf8-cdaeedce0bc5"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/theobroma-lavelle-road-central-bangalore-rest97531",
        "type": "WEBLINK"
      }
    },
    {
      "restaurant": {
        "id": "35791",
        "name": "Bikanervala",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/12/e7ccd786-be92-4743-8e0c-f3d3a577d48f_622202.jpg",
        "locality": "Malleswaram",
        "areaName": "West Bangalore",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "North Indian",
          "Sweets",
          "Snacks",
          "Street Food"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "1120",
        "avgRatingString": "4.3",
        "totalRatingsString": "6.8K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 4.0,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-04-21 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.1",
            "ratingCount": "780"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-b166f6ce-7dd6-47e3-8bf8-cdaeedce0bc5"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/bikanervala-malleswaram-west-bangalore-rest35791",
        "type": "WEBLINK"
      }
    },
    {
      "restaurant": {
        "id": "68240",
        "name": "Chaayos",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/14414940-565f-4b31-8880-eb44478a5ec0_681612.jpg",
        "locality": "Bellandur",
        "areaName": "South East Bangalore",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Beverages",
          "Snacks",
          "Desserts",
          "Bakery"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "2810",
        "avgRatingString": "4.4",
        "totalRatingsString": "5.5K+",
        "sla": {
          "deliveryTime": 40,
          "lastMileTravel": 6.2,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "6.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-04-22 00:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.3",
            "ratingCount": "620"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-b166f6ce-7dd6-47e3-8bf8-cdaeedce0bc5"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/chaayos-bellandur-south-east-bangalore-rest68240",
        "type": "WEBLINK"
      }
    }
  ]
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                { 
                    resList.restaurants.map((restaurantObj) => (
                            <RestaurentCard
                                key={restaurantObj.restaurant.id}
                                resData={restaurantObj.restaurant}
                            />
                        ))
                }
            </div>
        </div>
    )
};

//Root Level Cmoponent
const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body/>

    </div>;
}
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>);


