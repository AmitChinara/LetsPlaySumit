const gameData = [
    {
        question: `
            Har student ko 2 pens milte hain.
            Agar total 16 pens hain, toh kitne students hain?
        `,
        infoSteps: [
            {
                blank: "_ students",
                answer: "students",
                options: [
                    { text: "Let number of students be x", type: "students" },
                    { text: "Students = 16", type: "wrong" },
                    { text: "Pens = x", type: "wrong" }
                ]
            },
            {
                blank: "_ pens per student",
                answer: "pens",
                options: [
                    { text: "Pens per student = 2", type: "pens" },
                    { text: "Pens per student = x", type: "wrong" }
                ]
            },
            {
                blank: "_ total pens",
                answer: "total",
                options: [
                    { text: "Total pens = 16", type: "total" },
                    { text: "Total pens = x", type: "wrong" }
                ]
            }
        ],
        solutionSteps: [
            {
                blank: "_ equation",
                answer: "eq",
                options: [
                    { text: "x × 2 = 16", type: "eq" },
                    { text: "x + 2 = 16", type: "wrong" }
                ]
            },
            {
                blank: "_ solution",
                answer: "sol",
                options: [
                    { text: "x = 8", type: "sol" },
                    { text: "x = 6", type: "wrong" }
                ]
            }
        ]
    },

    {
        question: `
            8 boxes mein chocolates hain.
            Agar total 64 chocolates hain, toh har box mein kitni chocolates hain?
        `,
        infoSteps: [
            {
                blank: "_ boxes",
                answer: "boxes",
                options: [
                    { text: "No of boxes = 8", type: "boxes" },
                    { text: "Boxes = x", type: "wrong" }
                ]
            },
            {
                blank: "_ chocolates per box",
                answer: "choco",
                options: [
                    { text: "Chocolates per box = x", type: "choco" },
                    { text: "Chocolates per box = 64", type: "wrong" }
                ]
            },
            {
                blank: "_ total chocolates",
                answer: "total",
                options: [
                    { text: "Total chocolates = 64", type: "total" }
                ]
            }
        ],
        solutionSteps: [
            {
                blank: "_ equation",
                answer: "eq",
                options: [
                    { text: "8 × x = 64", type: "eq" }
                ]
            },
            {
                blank: "_ solution",
                answer: "sol",
                options: [
                    { text: "x = 8", type: "sol" },
                    { text: "x = 7", type: "wrong" }
                ]
            }
        ]
    },

    {
        question: `
            Har packet mein 3 biscuits hain.
            Agar total 27 biscuits hain, toh kitne packets hain?
        `,
        infoSteps: [
            {
                blank: "_ packets",
                answer: "packets",
                options: [
                    { text: "Let number of packets be x", type: "packets" }
                ]
            },
            {
                blank: "_ biscuits per packet",
                answer: "biscuits",
                options: [
                    { text: "Biscuits per packet = 3", type: "biscuits" }
                ]
            },
            {
                blank: "_ total biscuits",
                answer: "total",
                options: [
                    { text: "Total biscuits = 27", type: "total" }
                ]
            }
        ],
        solutionSteps: [
            {
                blank: "_ equation",
                answer: "eq",
                options: [
                    { text: "x × 3 = 27", type: "eq" }
                ]
            },
            {
                blank: "_ solution",
                answer: "sol",
                options: [
                    { text: "x = 9", type: "sol" }
                ]
            }
        ]
    },

    {
        question: `
            9 trays mein eggs hain.
            Agar total 72 eggs hain, toh har tray mein kitne eggs hain?
        `,
        infoSteps: [
            {
                blank: "_ trays",
                answer: "trays",
                options: [
                    { text: "No of trays = 9", type: "trays" }
                ]
            },
            {
                blank: "_ eggs per tray",
                answer: "eggs",
                options: [
                    { text: "Eggs per tray = x", type: "eggs" }
                ]
            },
            {
                blank: "_ total eggs",
                answer: "total",
                options: [
                    { text: "Total eggs = 72", type: "total" }
                ]
            }
        ],
        solutionSteps: [
            {
                blank: "_ equation",
                answer: "eq",
                options: [
                    { text: "9 × x = 72", type: "eq" }
                ]
            },
            {
                blank: "_ solution",
                answer: "sol",
                options: [
                    { text: "x = 8", type: "sol" }
                ]
            }
        ]
    },

    {
        question: `
            Har child ko 5 balloons milte hain.
            Agar total 45 balloons hain, toh kitne children hain?
        `,
        infoSteps: [
            {
                blank: "_ children",
                answer: "children",
                options: [
                    { text: "Let number of children be x", type: "children" }
                ]
            },
            {
                blank: "_ balloons per child",
                answer: "balloons",
                options: [
                    { text: "Balloons per child = 5", type: "balloons" }
                ]
            },
            {
                blank: "_ total balloons",
                answer: "total",
                options: [
                    { text: "Total balloons = 45", type: "total" }
                ]
            }
        ],
        solutionSteps: [
            {
                blank: "_ equation",
                answer: "eq",
                options: [
                    { text: "x × 5 = 45", type: "eq" }
                ]
            },
            {
                blank: "_ solution",
                answer: "sol",
                options: [
                    { text: "x = 9", type: "sol" }
                ]
            }
        ]
    },

    {
        question: `
            6 shelves mein toys hain.
            Agar total 54 toys hain, toh har shelf mein kitne toys hain?
        `,
        infoSteps: [
            {
                blank: "_ shelves",
                answer: "shelves",
                options: [
                    { text: "No of shelves = 6", type: "shelves" }
                ]
            },
            {
                blank: "_ toys per shelf",
                answer: "toys",
                options: [
                    { text: "Toys per shelf = x", type: "toys" }
                ]
            },
            {
                blank: "_ total toys",
                answer: "total",
                options: [
                    { text: "Total toys = 54", type: "total" }
                ]
            }
        ],
        solutionSteps: [
            {
                blank: "_ equation",
                answer: "eq",
                options: [
                    { text: "6 × x = 54", type: "eq" }
                ]
            },
            {
                blank: "_ solution",
                answer: "sol",
                options: [
                    { text: "x = 9", type: "sol" }
                ]
            }
        ]
    },

    {
        question: `
            Har bag mein 4 oranges hain.
            Agar total 32 oranges hain, toh kitne bags hain?
        `,
        infoSteps: [
            {
                blank: "_ bags",
                answer: "bags",
                options: [
                    { text: "Let number of bags be x", type: "bags" }
                ]
            },
            {
                blank: "_ oranges per bag",
                answer: "oranges",
                options: [
                    { text: "Oranges per bag = 4", type: "oranges" }
                ]
            },
            {
                blank: "_ total oranges",
                answer: "total",
                options: [
                    { text: "Total oranges = 32", type: "total" }
                ]
            }
        ],
        solutionSteps: [
            {
                blank: "_ equation",
                answer: "eq",
                options: [
                    { text: "x × 4 = 32", type: "eq" }
                ]
            },
            {
                blank: "_ solution",
                answer: "sol",
                options: [
                    { text: "x = 8", type: "sol" }
                ]
            }
        ]
    },

    {
        question: `
            10 racks mein books hain.
            Agar total 80 books hain, toh har rack mein kitni books hain?
        `,
        infoSteps: [
            {
                blank: "_ racks",
                answer: "racks",
                options: [
                    { text: "No of racks = 10", type: "racks" }
                ]
            },
            {
                blank: "_ books per rack",
                answer: "books",
                options: [
                    { text: "Books per rack = x", type: "books" }
                ]
            },
            {
                blank: "_ total books",
                answer: "total",
                options: [
                    { text: "Total books = 80", type: "total" }
                ]
            }
        ],
        solutionSteps: [
            {
                blank: "_ equation",
                answer: "eq",
                options: [
                    { text: "10 × x = 80", type: "eq" }
                ]
            },
            {
                blank: "_ solution",
                answer: "sol",
                options: [
                    { text: "x = 8", type: "sol" }
                ]
            }
        ]
    },

    {
        question: `
            Har plate mein 2 cakes hain.
            Agar total 18 cakes hain, toh kitni plates hain?
        `,
        infoSteps: [
            {
                blank: "_ plates",
                answer: "plates",
                options: [
                    { text: "Let number of plates be x", type: "plates" }
                ]
            },
            {
                blank: "_ cakes per plate",
                answer: "cakes",
                options: [
                    { text: "Cakes per plate = 2", type: "cakes" }
                ]
            },
            {
                blank: "_ total cakes",
                answer: "total",
                options: [
                    { text: "Total cakes = 18", type: "total" }
                ]
            }
        ],
        solutionSteps: [
            {
                blank: "_ equation",
                answer: "eq",
                options: [
                    { text: "x × 2 = 18", type: "eq" }
                ]
            },
            {
                blank: "_ solution",
                answer: "sol",
                options: [
                    { text: "x = 9", type: "sol" }
                ]
            }
        ]
    },

    {
        question: `
            4 jars mein candies hain.
            Agar total 36 candies hain, toh har jar mein kitni candies hain?
        `,
        infoSteps: [
            {
                blank: "_ jars",
                answer: "jars",
                options: [
                    { text: "No of jars = 4", type: "jars" }
                ]
            },
            {
                blank: "_ candies per jar",
                answer: "candies",
                options: [
                    { text: "Candies per jar = x", type: "candies" }
                ]
            },
            {
                blank: "_ total candies",
                answer: "total",
                options: [
                    { text: "Total candies = 36", type: "total" }
                ]
            }
        ],
        solutionSteps: [
            {
                blank: "_ equation",
                answer: "eq",
                options: [
                    { text: "4 × x = 36", type: "eq" }
                ]
            },
            {
                blank: "_ solution",
                answer: "sol",
                options: [
                    { text: "x = 9", type: "sol" }
                ]
            }
        ]
    }
];
