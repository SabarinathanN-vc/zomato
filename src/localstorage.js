const RestaurentDetails = {

    location: [
        {
            location_id: "1",
            city: "coimbatore",
            available_Service:{delivery:true,dinning:true,nightout:false},
            subCity: [
                {
                    sub_location: "peelamedu",
                    hotels_list: [
                        {
                            hotel_Name: "abc1 Hotel",
                            availabaleService: ["Delivery", "Diningout", "NightLife"],
                            regionWiseTast: ["chines","South India", "Pure Veg"],
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                    
                        },
                        { hotel_Name: "abc2 Hotel",
                         availabaleService: ["Delivery", "Diningout"], 
                         regionWiseTast: ["chines", "North India", "South India"], 
                         location: "peelamedu,coimbatore", 
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc3 Hotel", 
                        availabaleService: ["Delivery", "Diningout"], 
                        regionWiseTast: ["chines", "North India", "South India"],
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        {hotel_Name: "abc4 Hotel", 
                            availabaleService: ["Delivery", "Diningout", "NightLife"], 
                            regionWiseTast: ["chines", "North India", "Arabic"], 
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc5 Hotel", 
                        regionWiseTast: ["chines", "North India", "South India"],
                         location: "peelamedu,coimbatore",
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc6 Hotel", 
                        regionWiseTast: ["chines", "North India", "Arabic"], 
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        { hotel_Name: "abc7 Hotel",
                         regionWiseTast: ["cake", "sweets", "chat", "samosa", "Birth day Cakes"], 
                         location: "peelamedu,coimbatore" ,
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc8 Hotel",
                         availabaleService: ["Delivery", "Diningout", "NightLife"],
                          regionWiseTast: ["chines", "North India", "South India"],
                           location: "peelamedu,coimbatore",
                           hotel_catogory:"veg",
                           hotel_menu: [
                           { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                           { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                           { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                           { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                           { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                           { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                           { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                           { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                       ] }
                    ]
                },
                {
                    sub_location: "Kalapatti",
                    hotels_list: [
                        {
                            hotel_Name: "abc1 Hotel",
                            availabaleService: ["Delivery", "Diningout", "NightLife"],
                            regionWiseTast: ["chines", "South India", "Pure Veg"],
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc2 Hotel",
                         availabaleService: ["Delivery", "Diningout"], 
                         regionWiseTast: ["chines", "North India", "South India"], 
                         location: "peelamedu,coimbatore", 
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc3 Hotel", 
                        availabaleService: ["Delivery", "Diningout"], 
                        regionWiseTast: ["chines", "North India", "South India"],
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        {
                            hotel_Name: "abc4 Hotel", 
                            availabaleService: ["Delivery", "Diningout", "NightLife"], 
                            regionWiseTast: ["chines", "North India", "Arabic"], 
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc5 Hotel", 
                        regionWiseTast: ["chines", "North India", "South India"],
                         location: "peelamedu,coimbatore",
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc6 Hotel", 
                        regionWiseTast: ["chines", "North India", "Arabic"], 
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        { hotel_Name: "abc7 Hotel",
                         regionWiseTast: ["cake", "sweets", "chat", "samosa", "Birth day Cakes"], 
                         location: "peelamedu,coimbatore" ,
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc8 Hotel",
                         availabaleService: ["Delivery", "Diningout", "NightLife"],
                          regionWiseTast: ["chines", "North India", "South India"],
                           location: "peelamedu,coimbatore",
                           hotel_catogory:"veg",
                           hotel_menu: [
                           { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                           { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                           { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                           { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                           { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                           { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                           { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                           { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                       ] }
                    ]

                },
                {
                    sub_location: "RS Puram",
                    hotels_list: [
                        {
                            hotel_Name: "abc1 Hotel",
                            availabaleService: ["Delivery", "Diningout", "NightLife"],
                            regionWiseTast: ["chines","South India", "Pure Veg"],
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc2 Hotel",
                         availabaleService: ["Delivery", "Diningout"], 
                         regionWiseTast: ["chines", "North India", "South India"], 
                         location: "peelamedu,coimbatore", 
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc3 Hotel", 
                        availabaleService: ["Delivery", "Diningout"], 
                        regionWiseTast: ["chines", "North India", "South India"],
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        {
                            hotel_Name: "abc4 Hotel", 
                            availabaleService: ["Delivery", "Diningout", "NightLife"], 
                            regionWiseTast: ["chines", "North India", "Arabic"], 
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc5 Hotel", 
                        regionWiseTast: ["chines", "North India", "South India"],
                         location: "peelamedu,coimbatore",
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc6 Hotel", 
                        regionWiseTast: ["chines", "North India", "Arabic"], 
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        { hotel_Name: "abc7 Hotel",
                         regionWiseTast: ["cake", "sweets", "chat", "samosa", "Birth day Cakes"], 
                         location: "peelamedu,coimbatore" ,
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc8 Hotel",
                         availabaleService: ["Delivery", "Diningout", "NightLife"],
                          regionWiseTast: ["chines", "North India", "South India"],
                           location: "peelamedu,coimbatore",
                           hotel_catogory:"veg",
                           hotel_menu: [
                           { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                           { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                           { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                           { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                           { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                           { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                           { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                           { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                       ] }
                    ]

                },
                {
                    sub_location: "Race Course",
                    hotels_list: [
                        {
                            hotel_Name: "abc1 Hotel",
                            availabaleService: ["Delivery", "Diningout", "NightLife"],
                            regionWiseTast: ["chines","South India", "Pure Veg"],
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc2 Hotel",
                         availabaleService: ["Delivery", "Diningout"], 
                         regionWiseTast: ["chines", "North India", "South India"], 
                         location: "peelamedu,coimbatore", 
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc3 Hotel", 
                        availabaleService: ["Delivery", "Diningout"], 
                        regionWiseTast: ["chines", "North India", "South India"],
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        {
                            hotel_Name: "abc4 Hotel", 
                            availabaleService: ["Delivery", "Diningout", "NightLife"], 
                            regionWiseTast: ["chines", "North India", "Arabic"], 
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc5 Hotel", 
                        regionWiseTast: ["chines", "North India", "South India"],
                         location: "peelamedu,coimbatore",
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc6 Hotel", 
                        regionWiseTast: ["chines", "North India", "Arabic"], 
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        { hotel_Name: "abc7 Hotel",
                         regionWiseTast: ["cake", "sweets", "chat", "samosa", "Birth day Cakes"], 
                         location: "peelamedu,coimbatore" ,
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc8 Hotel",
                         availabaleService: ["Delivery", "Diningout", "NightLife"],
                          regionWiseTast: ["chines", "North India", "South India"],
                           location: "peelamedu,coimbatore",
                           hotel_catogory:"veg",
                           hotel_menu: [
                           { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                           { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                           { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                           { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                           { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                           { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                           { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                           { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                       ] }
                    ]

                },
                {
                    sub_location: "Gandhipuram",
                    hotels_list: [
                        {
                            hotel_Name: "abc1 Hotel",
                            availabaleService: ["Delivery", "Diningout", "NightLife"],
                            regionWiseTast: ["chines","South India", "Pure Veg"],
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc2 Hotel",
                         availabaleService: ["Delivery", "Diningout"], 
                         regionWiseTast: ["chines", "North India", "South India"], 
                         location: "peelamedu,coimbatore", 
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc3 Hotel", 
                        availabaleService: ["Delivery", "Diningout"], 
                        regionWiseTast: ["chines", "North India", "South India"],
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        {
                            hotel_Name: "abc4 Hotel", 
                            availabaleService: ["Delivery", "Diningout", "NightLife"], 
                            regionWiseTast: ["chines", "North India", "Arabic"], 
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc5 Hotel", 
                        regionWiseTast: ["chines", "North India", "South India"],
                         location: "peelamedu,coimbatore",
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc6 Hotel", 
                        regionWiseTast: ["chines", "North India", "Arabic"], 
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        { hotel_Name: "abc7 Hotel",
                         regionWiseTast: ["cake", "sweets", "chat", "samosa", "Birth day Cakes"], 
                         location: "peelamedu,coimbatore" ,
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc8 Hotel",
                         availabaleService: ["Delivery", "Diningout", "NightLife"],
                          regionWiseTast: ["chines", "North India", "South India"],
                           location: "peelamedu,coimbatore",
                           hotel_catogory:"veg",
                           hotel_menu: [
                           { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                           { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                           { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                           { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                           { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                           { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                           { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                           { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                       ] }
                    ]

                },
        ]
        },
        {
            location_id: "2",
            city: "chennai",
            available_Service:["Delivery", "Diningout", "NightLife"],
            subCity: [
                {
                    sub_location: "peelamedu",
                    hotels_list: [
                        {
                            hotel_Name: "abc1 Hotel",
                            availabaleService: ["Delivery", "Diningout", "NightLife"],
                            regionWiseTast: ["chines","South India", "Pure Veg"],
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc2 Hotel",
                         availabaleService: ["Delivery", "Diningout"], 
                         regionWiseTast: ["chines", "North India", "South India"], 
                         location: "peelamedu,coimbatore", 
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc3 Hotel", 
                        availabaleService: ["Delivery", "Diningout"], 
                        regionWiseTast: ["chines", "North India", "South India"],
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        {
                            hotel_Name: "abc4 Hotel", 
                            availabaleService: ["Delivery", "Diningout", "NightLife"], 
                            regionWiseTast: ["chines", "North India", "Arabic"], 
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc5 Hotel", 
                        regionWiseTast: ["chines", "North India", "South India"],
                         location: "peelamedu,coimbatore",
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc6 Hotel", 
                        regionWiseTast: ["chines", "North India", "Arabic"], 
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        { hotel_Name: "abc7 Hotel",
                         regionWiseTast: ["cake", "sweets", "chat", "samosa", "Birth day Cakes"], 
                         location: "peelamedu,coimbatore" ,
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc8 Hotel",
                         availabaleService: ["Delivery", "Diningout", "NightLife"],
                          regionWiseTast: ["chines", "North India", "South India"],
                           location: "peelamedu,coimbatore",
                           hotel_catogory:"veg",
                           hotel_menu: [
                           { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                           { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                           { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                           { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                           { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                           { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                           { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                           { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                       ] }
                    ]
                },
                {
                    sub_location: "Kalapatti",
                    hotels_list: [
                        {
                            hotel_Name: "abc1 Hotel",
                            availabaleService: ["Delivery", "Diningout", "NightLife"],
                            regionWiseTast: ["chines","South India", "Pure Veg"],
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc2 Hotel",
                         availabaleService: ["Delivery", "Diningout"], 
                         regionWiseTast: ["chines", "North India", "South India"], 
                         location: "peelamedu,coimbatore", 
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc3 Hotel", 
                        availabaleService: ["Delivery", "Diningout"], 
                        regionWiseTast: ["chines", "North India", "South India"],
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        {
                            hotel_Name: "abc4 Hotel", 
                            availabaleService: ["Delivery", "Diningout", "NightLife"], 
                            regionWiseTast: ["chines", "North India", "Arabic"], 
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc5 Hotel", 
                        regionWiseTast: ["chines", "North India", "South India"],
                         location: "peelamedu,coimbatore",
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc6 Hotel", 
                        regionWiseTast: ["chines", "North India", "Arabic"], 
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        { hotel_Name: "abc7 Hotel",
                         regionWiseTast: ["cake", "sweets", "chat", "samosa", "Birth day Cakes"], 
                         location: "peelamedu,coimbatore" ,
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc8 Hotel",
                         availabaleService: ["Delivery", "Diningout", "NightLife"],
                          regionWiseTast: ["chines", "North India", "South India"],
                           location: "peelamedu,coimbatore",
                           hotel_catogory:"veg",
                           hotel_menu: [
                           { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                           { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                           { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                           { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                           { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                           { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                           { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                           { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                       ] }
                    ]

                },
                {
                    sub_location: "RS Puram",
                    hotels_list: [
                        {
                            hotel_Name: "abc1 Hotel",
                            availabaleService: ["Delivery", "Diningout", "NightLife"],
                            regionWiseTast: ["chines","South India", "Pure Veg"],
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc2 Hotel",
                         availabaleService: ["Delivery", "Diningout"], 
                         regionWiseTast: ["chines", "North India", "South India"], 
                         location: "peelamedu,coimbatore", 
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc3 Hotel", 
                        availabaleService: ["Delivery", "Diningout"], 
                        regionWiseTast: ["chines", "North India", "South India"],
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        {
                            hotel_Name: "abc4 Hotel", 
                            availabaleService: ["Delivery", "Diningout", "NightLife"], 
                            regionWiseTast: ["chines", "North India", "Arabic"], 
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc5 Hotel", 
                        regionWiseTast: ["chines", "North India", "South India"],
                         location: "peelamedu,coimbatore",
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc6 Hotel", 
                        regionWiseTast: ["chines", "North India", "Arabic"], 
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        { hotel_Name: "abc7 Hotel",
                         regionWiseTast: ["cake", "sweets", "chat", "samosa", "Birth day Cakes"], 
                         location: "peelamedu,coimbatore" ,
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc8 Hotel",
                         availabaleService: ["Delivery", "Diningout", "NightLife"],
                          regionWiseTast: ["chines", "North India", "South India"],
                           location: "peelamedu,coimbatore",
                           hotel_catogory:"veg",
                           hotel_menu: [
                           { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                           { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                           { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                           { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                           { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                           { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                           { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                           { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                       ] }
                    ]

                },
                {
                    sub_location: "Race Course",
                    hotels_list: [
                        {
                            hotel_Name: "abc1 Hotel",
                            availabaleService: ["Delivery", "Diningout", "NightLife"],
                            regionWiseTast: ["chines","South India", "Pure Veg"],
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc2 Hotel",
                         availabaleService: ["Delivery", "Diningout"], 
                         regionWiseTast: ["chines", "North India", "South India"], 
                         location: "peelamedu,coimbatore", 
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc3 Hotel", 
                        availabaleService: ["Delivery", "Diningout"], 
                        regionWiseTast: ["chines", "North India", "South India"],
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        {
                            hotel_Name: "abc4 Hotel", 
                            availabaleService: ["Delivery", "Diningout", "NightLife"], 
                            regionWiseTast: ["chines", "North India", "Arabic"], 
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc5 Hotel", 
                        regionWiseTast: ["chines", "North India", "South India"],
                         location: "peelamedu,coimbatore",
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc6 Hotel", 
                        regionWiseTast: ["chines", "North India", "Arabic"], 
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        { hotel_Name: "abc7 Hotel",
                         regionWiseTast: ["cake", "sweets", "chat", "samosa", "Birth day Cakes"], 
                         location: "peelamedu,coimbatore" ,
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc8 Hotel",
                         availabaleService: ["Delivery", "Diningout", "NightLife"],
                          regionWiseTast: ["chines", "North India", "South India"],
                           location: "peelamedu,coimbatore",
                           hotel_catogory:"veg",
                           hotel_menu: [
                           { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                           { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                           { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                           { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                           { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                           { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                           { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                           { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                       ] }
                    ]

                },
                {
                    sub_location: "Gandhipuram",
                    hotels_list: [
                        {
                            hotel_Name: "abc1 Hotel",
                            availabaleService: ["Delivery", "Diningout", "NightLife"],
                            regionWiseTast: ["chines","South India", "Pure Veg"],
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc2 Hotel",
                         availabaleService: ["Delivery", "Diningout"], 
                         regionWiseTast: ["chines", "North India", "South India"], 
                         location: "peelamedu,coimbatore", 
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc3 Hotel", 
                        availabaleService: ["Delivery", "Diningout"], 
                        regionWiseTast: ["chines", "North India", "South India"],
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        {
                            hotel_Name: "abc4 Hotel", 
                            availabaleService: ["Delivery", "Diningout", "NightLife"], 
                            regionWiseTast: ["chines", "North India", "Arabic"], 
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc5 Hotel", 
                        regionWiseTast: ["chines", "North India", "South India"],
                         location: "peelamedu,coimbatore",
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc6 Hotel", 
                        regionWiseTast: ["chines", "North India", "Arabic"], 
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        { hotel_Name: "abc7 Hotel",
                         regionWiseTast: ["cake", "sweets", "chat", "samosa", "Birth day Cakes"], 
                         location: "peelamedu,coimbatore" ,
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc8 Hotel",
                         availabaleService: ["Delivery", "Diningout", "NightLife"],
                          regionWiseTast: ["chines", "North India", "South India"],
                           location: "peelamedu,coimbatore",
                           hotel_catogory:"veg",
                           hotel_menu: [
                           { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                           { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                           { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                           { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                           { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                           { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                           { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                           { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                       ] }
                    ]

                },
        ]
        },
        {
            location_id: "3",
            city: "madurai",
            available_Service:["Delivery", "Diningout"],
            subCity: [
                {
                    sub_location: "peelamedu",
                    hotels_list: [
                        {
                            hotel_Name: "abc1 Hotel",
                            availabaleService: ["Delivery", "Diningout", "NightLife"],
                            regionWiseTast: ["chines","South India", "Pure Veg"],
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc2 Hotel",
                         availabaleService: ["Delivery", "Diningout"], 
                         regionWiseTast: ["chines", "North India", "South India"], 
                         location: "peelamedu,coimbatore", 
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc3 Hotel", 
                        availabaleService: ["Delivery", "Diningout"], 
                        regionWiseTast: ["chines", "North India", "South India"],
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        {
                            hotel_Name: "abc4 Hotel", 
                            availabaleService: ["Delivery", "Diningout", "NightLife"], 
                            regionWiseTast: ["chines", "North India", "Arabic"], 
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc5 Hotel", 
                        regionWiseTast: ["chines", "North India", "South India"],
                         location: "peelamedu,coimbatore",
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc6 Hotel", 
                        regionWiseTast: ["chines", "North India", "Arabic"], 
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        { hotel_Name: "abc7 Hotel",
                         regionWiseTast: ["cake", "sweets", "chat", "samosa", "Birth day Cakes"], 
                         location: "peelamedu,coimbatore" ,
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc8 Hotel",
                         availabaleService: ["Delivery", "Diningout", "NightLife"],
                          regionWiseTast: ["chines", "North India", "South India"],
                           location: "peelamedu,coimbatore",
                           hotel_catogory:"veg",
                           hotel_menu: [
                           { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                           { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                           { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                           { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                           { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                           { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                           { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                           { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                       ] }
                    ]
                },
                {
                    sub_location: "Kalapatti",
                    hotels_list: [
                        {
                            hotel_Name: "abc1 Hotel",
                            availabaleService: ["Delivery", "Diningout", "NightLife"],
                            regionWiseTast: ["chines","South India", "Pure Veg"],
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc2 Hotel",
                         availabaleService: ["Delivery", "Diningout"], 
                         regionWiseTast: ["chines", "North India", "South India"], 
                         location: "peelamedu,coimbatore", 
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc3 Hotel", 
                        availabaleService: ["Delivery", "Diningout"], 
                        regionWiseTast: ["chines", "North India", "South India"],
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        {
                            hotel_Name: "abc4 Hotel", 
                            availabaleService: ["Delivery", "Diningout", "NightLife"], 
                            regionWiseTast: ["chines", "North India", "Arabic"], 
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc5 Hotel", 
                        regionWiseTast: ["chines", "North India", "South India"],
                         location: "peelamedu,coimbatore",
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc6 Hotel", 
                        regionWiseTast: ["chines", "North India", "Arabic"], 
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        { hotel_Name: "abc7 Hotel",
                         regionWiseTast: ["cake", "sweets", "chat", "samosa", "Birth day Cakes"], 
                         location: "peelamedu,coimbatore" ,
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc8 Hotel",
                         availabaleService: ["Delivery", "Diningout", "NightLife"],
                          regionWiseTast: ["chines", "North India", "South India"],
                           location: "peelamedu,coimbatore",
                           hotel_catogory:"veg",
                           hotel_menu: [
                           { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                           { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                           { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                           { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                           { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                           { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                           { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                           { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                       ] }
                    ]

                },
                {
                    sub_location: "RS Puram",
                    hotels_list: [
                        {
                            hotel_Name: "abc1 Hotel",
                            availabaleService: ["Delivery", "Diningout", "NightLife"],
                            regionWiseTast: ["chines","South India", "Pure Veg"],
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc2 Hotel",
                         availabaleService: ["Delivery", "Diningout"], 
                         regionWiseTast: ["chines", "North India", "South India"], 
                         location: "peelamedu,coimbatore", 
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc3 Hotel", 
                        availabaleService: ["Delivery", "Diningout"], 
                        regionWiseTast: ["chines", "North India", "South India"],
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        {
                            hotel_Name: "abc4 Hotel", 
                            availabaleService: ["Delivery", "Diningout", "NightLife"], 
                            regionWiseTast: ["chines", "North India", "Arabic"], 
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc5 Hotel", 
                        regionWiseTast: ["chines", "North India", "South India"],
                         location: "peelamedu,coimbatore",
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc6 Hotel", 
                        regionWiseTast: ["chines", "North India", "Arabic"], 
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        { hotel_Name: "abc7 Hotel",
                         regionWiseTast: ["cake", "sweets", "chat", "samosa", "Birth day Cakes"], 
                         location: "peelamedu,coimbatore" ,
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc8 Hotel",
                         availabaleService: ["Delivery", "Diningout", "NightLife"],
                          regionWiseTast: ["chines", "North India", "South India"],
                           location: "peelamedu,coimbatore",
                           hotel_catogory:"veg",
                           hotel_menu: [
                           { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                           { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                           { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                           { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                           { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                           { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                           { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                           { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                       ] }
                    ]

                },
                {
                    sub_location: "Race Course",
                    hotels_list: [
                        {
                            hotel_Name: "abc1 Hotel",
                            availabaleService: ["Delivery", "Diningout", "NightLife"],
                            regionWiseTast: ["chines","South India", "Pure Veg"],
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc2 Hotel",
                         availabaleService: ["Delivery", "Diningout"], 
                         regionWiseTast: ["chines", "North India", "South India"], 
                         location: "peelamedu,coimbatore", 
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc3 Hotel", 
                        availabaleService: ["Delivery", "Diningout"], 
                        regionWiseTast: ["chines", "North India", "South India"],
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        {
                            hotel_Name: "abc4 Hotel", 
                            availabaleService: ["Delivery", "Diningout", "NightLife"], 
                            regionWiseTast: ["chines", "North India", "Arabic"], 
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc5 Hotel", 
                        regionWiseTast: ["chines", "North India", "South India"],
                         location: "peelamedu,coimbatore",
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc6 Hotel", 
                        regionWiseTast: ["chines", "North India", "Arabic"], 
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        { hotel_Name: "abc7 Hotel",
                         regionWiseTast: ["cake", "sweets", "chat", "samosa", "Birth day Cakes"], 
                         location: "peelamedu,coimbatore" ,
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc8 Hotel",
                         availabaleService: ["Delivery", "Diningout", "NightLife"],
                          regionWiseTast: ["chines", "North India", "South India"],
                           location: "peelamedu,coimbatore",
                           hotel_catogory:"veg",
                           hotel_menu: [
                           { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                           { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                           { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                           { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                           { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                           { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                           { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                           { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                       ] }
                    ]

                },
                {
                    sub_location: "Gandhipuram",
                    hotels_list: [
                        {
                            hotel_Name: "abc1 Hotel",
                            availabaleService: ["Delivery", "Diningout", "NightLife"],
                            regionWiseTast: ["chines","South India", "Pure Veg"],
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc2 Hotel",
                         availabaleService: ["Delivery", "Diningout"], 
                         regionWiseTast: ["chines", "North India", "South India"], 
                         location: "peelamedu,coimbatore", 
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc3 Hotel", 
                        availabaleService: ["Delivery", "Diningout"], 
                        regionWiseTast: ["chines", "North India", "South India"],
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        {
                            hotel_Name: "abc4 Hotel", 
                            availabaleService: ["Delivery", "Diningout", "NightLife"], 
                            regionWiseTast: ["chines", "North India", "Arabic"], 
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc5 Hotel", 
                        regionWiseTast: ["chines", "North India", "South India"],
                         location: "peelamedu,coimbatore",
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc6 Hotel", 
                        regionWiseTast: ["chines", "North India", "Arabic"], 
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        { hotel_Name: "abc7 Hotel",
                         regionWiseTast: ["cake", "sweets", "chat", "samosa", "Birth day Cakes"], 
                         location: "peelamedu,coimbatore" ,
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc8 Hotel",
                         availabaleService: ["Delivery", "Diningout", "NightLife"],
                          regionWiseTast: ["chines", "North India", "South India"],
                           location: "peelamedu,coimbatore",
                           hotel_catogory:"veg",
                           hotel_menu: [
                           { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                           { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                           { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                           { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                           { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                           { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                           { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                           { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                       ] }
                    ]

                },
        ]
        },
        {
            location_id: "4",
            city: "trichy",
            available_Service:["Delivery", "Diningout"],
            subCity: [
                {
                    sub_location: "peelamedu",
                    hotels_list: [
                        {
                            hotel_Name: "abc1 Hotel",
                            availabaleService: ["Delivery", "Diningout", "NightLife"],
                            regionWiseTast: ["chines","South India", "Pure Veg"],
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc2 Hotel",
                         availabaleService: ["Delivery", "Diningout"], 
                         regionWiseTast: ["chines", "North India", "South India"], 
                         location: "peelamedu,coimbatore", 
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc3 Hotel", 
                        availabaleService: ["Delivery", "Diningout"], 
                        regionWiseTast: ["chines", "North India", "South India"],
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        {
                            hotel_Name: "abc4 Hotel", 
                            availabaleService: ["Delivery", "Diningout", "NightLife"], 
                            regionWiseTast: ["chines", "North India", "Arabic"], 
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc5 Hotel", 
                        regionWiseTast: ["chines", "North India", "South India"],
                         location: "peelamedu,coimbatore",
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc6 Hotel", 
                        regionWiseTast: ["chines", "North India", "Arabic"], 
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        { hotel_Name: "abc7 Hotel",
                         regionWiseTast: ["cake", "sweets", "chat", "samosa", "Birth day Cakes"], 
                         location: "peelamedu,coimbatore" ,
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc8 Hotel",
                         availabaleService: ["Delivery", "Diningout", "NightLife"],
                          regionWiseTast: ["chines", "North India", "South India"],
                           location: "peelamedu,coimbatore",
                           hotel_catogory:"veg",
                           hotel_menu: [
                           { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                           { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                           { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                           { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                           { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                           { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                           { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                           { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                       ] }
                    ]
                },
                {
                    sub_location: "Kalapatti",
                    hotels_list: [
                        {
                            hotel_Name: "abc1 Hotel",
                            availabaleService: ["Delivery", "Diningout", "NightLife"],
                            regionWiseTast: ["chines","South India", "Pure Veg"],
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc2 Hotel",
                         availabaleService: ["Delivery", "Diningout"], 
                         regionWiseTast: ["chines", "North India", "South India"], 
                         location: "peelamedu,coimbatore", 
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc3 Hotel", 
                        availabaleService: ["Delivery", "Diningout"], 
                        regionWiseTast: ["chines", "North India", "South India"],
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        {
                            hotel_Name: "abc4 Hotel", 
                            availabaleService: ["Delivery", "Diningout", "NightLife"], 
                            regionWiseTast: ["chines", "North India", "Arabic"], 
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc5 Hotel", 
                        regionWiseTast: ["chines", "North India", "South India"],
                         location: "peelamedu,coimbatore",
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc6 Hotel", 
                        regionWiseTast: ["chines", "North India", "Arabic"], 
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        { hotel_Name: "abc7 Hotel",
                         regionWiseTast: ["cake", "sweets", "chat", "samosa", "Birth day Cakes"], 
                         location: "peelamedu,coimbatore" ,
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc8 Hotel",
                         availabaleService: ["Delivery", "Diningout", "NightLife"],
                          regionWiseTast: ["chines", "North India", "South India"],
                           location: "peelamedu,coimbatore",
                           hotel_catogory:"veg",
                           hotel_menu: [
                           { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                           { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                           { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                           { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                           { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                           { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                           { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                           { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                       ] }
                    ]

                },
                {
                    sub_location: "RS Puram",
                    hotels_list: [
                        {
                            hotel_Name: "abc1 Hotel",
                            availabaleService: ["Delivery", "Diningout", "NightLife"],
                            regionWiseTast: ["chines","South India", "Pure Veg"],
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc2 Hotel",
                         availabaleService: ["Delivery", "Diningout"], 
                         regionWiseTast: ["chines", "North India", "South India"], 
                         location: "peelamedu,coimbatore", 
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc3 Hotel", 
                        availabaleService: ["Delivery", "Diningout"], 
                        regionWiseTast: ["chines", "North India", "South India"],
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        {
                            hotel_Name: "abc4 Hotel", 
                            availabaleService: ["Delivery", "Diningout", "NightLife"], 
                            regionWiseTast: ["chines", "North India", "Arabic"], 
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc5 Hotel", 
                        regionWiseTast: ["chines", "North India", "South India"],
                         location: "peelamedu,coimbatore",
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc6 Hotel", 
                        regionWiseTast: ["chines", "North India", "Arabic"], 
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        { hotel_Name: "abc7 Hotel",
                         regionWiseTast: ["cake", "sweets", "chat", "samosa", "Birth day Cakes"], 
                         location: "peelamedu,coimbatore" ,
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc8 Hotel",
                         availabaleService: ["Delivery", "Diningout", "NightLife"],
                          regionWiseTast: ["chines", "North India", "South India"],
                           location: "peelamedu,coimbatore",
                           hotel_catogory:"veg",
                           hotel_menu: [
                           { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                           { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                           { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                           { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                           { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                           { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                           { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                           { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                       ] }
                    ]

                },
                {
                    sub_location: "Race Course",
                    hotels_list: [
                        {
                            hotel_Name: "abc1 Hotel",
                            availabaleService: ["Delivery", "Diningout", "NightLife"],
                            regionWiseTast: ["chines", "South India", "Pure Veg"],
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc2 Hotel",
                         availabaleService: ["Delivery", "Diningout"], 
                         regionWiseTast: ["chines", "North India", "South India"], 
                         location: "peelamedu,coimbatore", 
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc3 Hotel", 
                        availabaleService: ["Delivery", "Diningout"], 
                        regionWiseTast: ["chines", "North India", "South India"],
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        {
                            hotel_Name: "abc4 Hotel", 
                            availabaleService: ["Delivery", "Diningout", "NightLife"], 
                            regionWiseTast: ["chines", "North India", "Arabic"], 
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc5 Hotel", 
                        regionWiseTast: ["chines", "North India", "South India"],
                         location: "peelamedu,coimbatore",
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc6 Hotel", 
                        regionWiseTast: ["chines", "North India", "Arabic"], 
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        { hotel_Name: "abc7 Hotel",
                         regionWiseTast: ["cake", "sweets", "chat", "samosa", "Birth day Cakes"], 
                         location: "peelamedu,coimbatore" ,
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc8 Hotel",
                         availabaleService: ["Delivery", "Diningout", "NightLife"],
                          regionWiseTast: ["chines", "North India", "South India"],
                           location: "peelamedu,coimbatore",
                           hotel_catogory:"veg",
                           hotel_menu: [
                           { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                           { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                           { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                           { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                           { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                           { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                           { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                           { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                       ] }
                    ]

                },
                {
                    sub_location: "Gandhipuram",
                    hotels_list: [
                        {
                            hotel_Name: "abc1 Hotel",
                            availabaleService: ["Delivery", "Diningout", "NightLife"],
                            regionWiseTast: ["chines", "South India", "Pure Veg"],
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc2 Hotel",
                         availabaleService: ["Delivery", "Diningout"], 
                         regionWiseTast: ["chines", "North India", "South India"], 
                         location: "peelamedu,coimbatore", 
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc3 Hotel", 
                        availabaleService: ["Delivery", "Diningout"], 
                        regionWiseTast: ["chines", "North India", "South India"],
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        {
                            hotel_Name: "abc4 Hotel", 
                            availabaleService: ["Delivery", "Diningout", "NightLife"], 
                            regionWiseTast: ["chines", "North India", "Arabic"], 
                            location: "peelamedu,coimbatore",
                            hotel_catogory:"veg",
                            hotel_menu: [
                            { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                            { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                            { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                            { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                            { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                            { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                            { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                            { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                        ]
                        },
                        { hotel_Name: "abc5 Hotel", 
                        regionWiseTast: ["chines", "North India", "South India"],
                         location: "peelamedu,coimbatore",
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc6 Hotel", 
                        regionWiseTast: ["chines", "North India", "Arabic"], 
                        location: "peelamedu,coimbatore" ,
                        hotel_catogory:"veg",
                        hotel_menu: [
                        { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                        { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                        { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                        { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                        { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                        { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                        { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                        { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                    ]
                        },
                        { hotel_Name: "abc7 Hotel",
                         regionWiseTast: ["cake", "sweets", "chat", "samosa", "Birth day Cakes"], 
                         location: "peelamedu,coimbatore" ,
                         hotel_catogory:"veg",
                         hotel_menu: [
                         { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                         { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                         { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                         { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                         { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                         { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                         { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                         { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                     ]
                        },
                        { hotel_Name: "abc8 Hotel",
                         availabaleService: ["Delivery", "Diningout", "NightLife"],
                          regionWiseTast: ["chines", "North India", "South India"],
                           location: "peelamedu,coimbatore",
                           hotel_catogory:"veg",
                           hotel_menu: [
                           { foodName: "dosa", typeOfFood: "veg",price:"50",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqePQnQbnHifo5ff58-vTE7YkThcP-1x7MwBdq6y6X&s" },
                           { foodName: "idly", typeOfFood: "veg",price:"150",foodImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjjV4Qeu5Nh0KqHhHEJTxKH_JsMI-QI2fiJCg9RX-&s"},
                           { foodName: "parota", typeOfFood: "veg",price:"80",foodImageUrl:"https://t3.ftcdn.net/jpg/03/95/75/32/240_F_395753259_SAfutnAcUShsviPNdp2xBtAYijDvS6ok.jpg" },
                           { foodName: "poori", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t3.ftcdn.net/jpg/01/15/65/16/240_F_115651659_EQRX6zMokZDNT8aid06tO2xxwFktqzVv.jpg"},
                           { foodName: "pani poori", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t4.ftcdn.net/jpg/04/54/35/37/240_F_454353705_dLtoZNlC3RBudcg7OUBnlPTx36j5661S.jpg"},
                           { foodName: "vadai", typeOfFood: "veg",price:"40",foodImageUrl:"https://t3.ftcdn.net/jpg/01/61/64/70/240_F_161647021_oKvLcWMmMoyfvsfJ6ZVJVjEpdByyTGR8.jpg" },
                           { foodName: "pongal", typeOfFood: "veg",price:"150" ,foodImageUrl:"https://t3.ftcdn.net/jpg/02/80/40/82/240_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg"},
                           { foodName: "meals", typeOfFood: "veg",price:"100" ,foodImageUrl:"https://t4.ftcdn.net/jpg/00/86/59/89/240_F_86598969_ju2bZp0D2siXwGqNfVlBWj0kCwyuFt5p.jpg"}
                       ] }
                    ]

                },
        ]
        }
    ]
}