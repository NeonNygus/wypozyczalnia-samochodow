export const categories = {
    1: "Basic",
    2: "Standard",
    3: "Medium",
    4: "Premium",
}
export const mockupDatabase = [
    {
    id:1,
    brand:{
        name:"Citroen",
        model:[{
            id:1,
            name: "C3",
            availability: {
                Rzeszów: 4,
                Kraków: 4,
                Warszawa: 3
            },
            pricePerDay: {
                Rzeszów: 70,
                Kraków: 75,
                Warszawa: 80
            },
            category: categories[1],
            combustion: 4.7
        },
        {
            id:2,
            name: "C5 AIRCROSS",
            availability: {
                Rzeszów: 1,
                Kraków: 2,
                Warszawa: 9
            },
            pricePerDay: {
                Rzeszów: 70,
                Kraków: 75,
                Warszawa: 80
            },
            category: categories[4],
            combustion: 4.4
        },
    ]
    },
    },
    {
    id:2,
    brand:{
        name:"Hyundai",
        model:[{
            id:1,
            name: "i30",
            availability: {
                Rzeszów: 6,
                Kraków: 2,
                Warszawa: 8
            },
            pricePerDay: {
                Rzeszów: 70,
                Kraków: 75,
                Warszawa: 80
            },
            category: categories[2],
            combustion: 8.4
        }]
    }
    },
    {
    id:3,
    brand:{
        name:"Kia",
        model:[{
            id:1,
            name: "Ceed",
            availability: {
                Rzeszów: 2,
                Kraków: 5,
                Warszawa: 1
            },
            pricePerDay: {
                Rzeszów: 70,
                Kraków: 75,
                Warszawa: 80
            },
            category: categories[2],
            combustion: 4.4
        },
        {
            id:2,
            name: "Optima",
            availability: {
                Rzeszów: 4,
                Kraków: 4,
                Warszawa: 5
            },
            pricePerDay: {
                Rzeszów: 70,
                Kraków: 75,
                Warszawa: 80
            },
            category: categories[3],
            combustion: 10.3
        },
        {
            id:3,
            name: "Sportage",
            availability: {
                Rzeszów: 4,
                Kraków: 6,
                Warszawa: 5
            },
            pricePerDay: {
                Rzeszów: 70,
                Kraków: 75,
                Warszawa: 80
            },
            category: categories[4],
            combustion: 4.8
        },
    ]
    }
    },
    {
        id:4,
        brand:{
            name:"Opel",
            model:[{
                id:1,
                name: "Insignia",
                availability: {
                    Rzeszów: 8,
                    Kraków: 6,
                    Warszawa: 7
                },
                pricePerDay: {
                    Rzeszów: 70,
                    Kraków: 75,
                    Warszawa: 80
                },
                category: categories[3],
                combustion: 6.8
            }
        ]
        }
    },
    {
        id:5,
        brand:{
            name:"Seat",
            model:[{
                id:1,
                name: "Ibiza",
                availability: {
                    Rzeszów: 7,
                    Kraków: 4,
                    Warszawa: 5
                },
                pricePerDay: {
                    Rzeszów: 70,
                    Kraków: 75,
                    Warszawa: 80
                },
                category: categories[1],
                combustion: 6.9
            },
            {
                id:2,
                name: "Leon",
                availability: {
                    Rzeszów: 7,
                    Kraków: 5,
                    Warszawa: 5
                },
                pricePerDay: {
                    Rzeszów: 70,
                    Kraków: 75,
                    Warszawa: 80
                },
                category: categories[2],
                combustion: 6.0
            },
        ]
        }
    },
    {
        id:6,
        brand:{
            name:"Skoda",
            model:[{
                id:1,
                name: "Fabia",
                availability: {
                    Rzeszów: 7,
                    Kraków: 5,
                    Warszawa: 3
                },
                pricePerDay: {
                    Rzeszów: 70,
                    Kraków: 75,
                    Warszawa: 80
                },
                category: categories[1],
                combustion: 4.7
            }
        ]
        }
    },
    {
        id:7,
        brand:{
            name:"Toyota",
            model:[{
                id:1,
                name: "Avensis",
                availability: {
                    Rzeszów: 3,
                    Kraków: 5,
                    Warszawa: 4
                },
                pricePerDay: {
                    Rzeszów: 70,
                    Kraków: 75,
                    Warszawa: 80
                },
                category: categories[3],
                combustion: 5.7
            },
            {
                id:2,
                name: "RAV4",
                availability: {
                    Rzeszów: 6,
                    Kraków: 3,
                    Warszawa: 5
                },
                pricePerDay: {
                    Rzeszów: 70,
                    Kraków: 75,
                    Warszawa: 80
                },
                category: categories[4],
                combustion: 9.3
            },
        ]
        }
    },
]
