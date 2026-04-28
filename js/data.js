const gameData = [

    // 1
    {
        question: `
            Har student ko 3 pencils milti hain.
            Agar total 21 pencils hain, toh kitne students hain?
        `,
        infoSteps: [
            {
                blank: "_ students",
                answer: "students",
                options: [
                    { text: "Let number of students be x", type: "students" },
                    { text: "Students = 21", type: "wrong" },
                    { text: "Students = 3", type: "wrong" },
                    { text: "No of students = x", type: "students" },
                    { text: "Pencils = students", type: "wrong" }
                ]
            },
            {
                blank: "_ pencils per student",
                answer: "pencils",
                options: [
                    { text: "Pencils per student = 3", type: "pencils" },
                    { text: "Each student has 3 pencils", type: "pencils" },
                    { text: "Pencils per student = x", type: "wrong" },
                    { text: "Each student has 21 pencils", type: "wrong" },
                    { text: "Total pencils per student = 21", type: "wrong" }
                ]
            },
            {
                blank: "_ total pencils",
                answer: "total",
                options: [
                    { text: "Total pencils = 21", type: "total" },
                    { text: "Total pencils = x", type: "wrong" },
                    { text: "Total students = 21", type: "wrong" },
                    { text: "Pencils per student = 21", type: "wrong" }
                ]
            }
        ],
        solutionSteps: [
            {
                blank: "_ equation",
                answer: "eq",
                options: [
                    { text: "x × 3 = 21", type: "eq" },
                    { text: "3 × x = 21", type: "eq" },
                    { text: "21 ÷ 3 = x", type: "eq_alt" },
                    { text: "x + 3 = 21", type: "wrong" },
                    { text: "x × 21 = 3", type: "wrong" }
                ]
            },
            {
                blank: "_ solution",
                answer: "sol",
                options: [
                    { text: "x = 7", type: "sol" },
                    { text: "x = 6", type: "wrong" },
                    { text: "x = 5", type: "wrong" },
                    { text: "x = 9", type: "wrong" },
                    { text: "x = 4", type: "wrong" }
                ]
            }
        ]
    },

    // 2
    {
        question: `
            6 boxes mein apples hain.
            Agar total 48 apples hain, toh har box mein kitne apples hain?
        `,
        infoSteps: [
            {
                blank: "_ boxes",
                answer: "boxes",
                options: [
                    { text: "No of boxes = 6", type: "boxes" },
                    { text: "Boxes = x", type: "wrong" },
                    { text: "Boxes = 48", type: "wrong" },
                    { text: "Total boxes = 6", type: "boxes" }
                ]
            },
            {
                blank: "_ apples per box",
                answer: "apples",
                options: [
                    { text: "Apples per box = x", type: "apples" },
                    { text: "Each box has x apples", type: "apples" },
                    { text: "Apples per box = 6", type: "wrong" },
                    { text: "Each box has 48 apples", type: "wrong" },
                    { text: "Per box = 48 apples", type: "wrong" }
                ]
            },
            {
                blank: "_ total apples",
                answer: "total",
                options: [
                    { text: "Total apples = 48", type: "total" },
                    { text: "Total apples = x", type: "wrong" },
                    { text: "Total boxes = 48", type: "wrong" }
                ]
            }
        ],
        solutionSteps: [
            {
                blank: "_ equation",
                answer: "eq",
                options: [
                    { text: "6 × x = 48", type: "eq" },
                    { text: "x × 6 = 48", type: "eq" },
                    { text: "48 ÷ 6 = x", type: "eq_alt" },
                    { text: "x + 6 = 48", type: "wrong" }
                ]
            },
            {
                blank: "_ solution",
                answer: "sol",
                options: [
                    { text: "x = 8", type: "sol" },
                    { text: "x = 6", type: "wrong" },
                    { text: "x = 7", type: "wrong" },
                    { text: "x = 9", type: "wrong" }
                ]
            }
        ]
    },

    // 3
    {
        question: `
            Har packet mein 4 biscuits hain.
            Agar total 32 biscuits hain, toh kitne packets hain?
        `,
        infoSteps: [
            {
                blank: "_ packets",
                answer: "packets",
                options: [
                    { text: "Let number of packets be x", type: "packets" },
                    { text: "Packets = 32", type: "wrong" },
                    { text: "Packets = 4", type: "wrong" },
                    { text: "No of packets = x", type: "packets" }
                ]
            },
            {
                blank: "_ biscuits per packet",
                answer: "biscuits",
                options: [
                    { text: "Biscuits per packet = 4", type: "biscuits" },
                    { text: "Each packet has 4 biscuits", type: "biscuits" },
                    { text: "Biscuits per packet = x", type: "wrong" },
                    { text: "Each packet has 32 biscuits", type: "wrong" }
                ]
            },
            {
                blank: "_ total biscuits",
                answer: "total",
                options: [
                    { text: "Total biscuits = 32", type: "total" },
                    { text: "Total biscuits = x", type: "wrong" }
                ]
            }
        ],
        solutionSteps: [
            {
                blank: "_ equation",
                answer: "eq",
                options: [
                    { text: "x × 4 = 32", type: "eq" },
                    { text: "32 ÷ 4 = x", type: "eq_alt" },
                    { text: "x + 4 = 32", type: "wrong" }
                ]
            },
            {
                blank: "_ solution",
                answer: "sol",
                options: [
                    { text: "x = 8", type: "sol" },
                    { text: "x = 7", type: "wrong" },
                    { text: "x = 6", type: "wrong" }
                ]
            }
        ]
    },

    // 4
    {
        question: `
            5 trays mein eggs hain.
            Agar total 40 eggs hain, toh har tray mein kitne eggs hain?
        `,
        infoSteps: [
            {
                blank: "_ trays",
                answer: "trays",
                options: [
                    { text: "No of trays = 5", type: "trays" },
                    { text: "Trays = x", type: "wrong" },
                    { text: "Trays = 40", type: "wrong" }
                ]
            },
            {
                blank: "_ eggs per tray",
                answer: "eggs",
                options: [
                    { text: "Eggs per tray = x", type: "eggs" },
                    { text: "Each tray has x eggs", type: "eggs" },
                    { text: "Eggs per tray = 5", type: "wrong" }
                ]
            },
            {
                blank: "_ total eggs",
                answer: "total",
                options: [
                    { text: "Total eggs = 40", type: "total" },
                    { text: "Total eggs = x", type: "wrong" }
                ]
            }
        ],
        solutionSteps: [
            {
                blank: "_ equation",
                answer: "eq",
                options: [
                    { text: "5 × x = 40", type: "eq" },
                    { text: "40 ÷ 5 = x", type: "eq_alt" }
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

    // 5
    {
        question: `
            Har child ko 6 candies milti hain.
            Agar total 54 candies hain, toh kitne children hain?
        `,
        infoSteps: [
            {
                blank: "_ children",
                answer: "children",
                options: [
                    { text: "Let number of children be x", type: "children" },
                    { text: "Children = 54", type: "wrong" },
                    { text: "Children = 6", type: "wrong" }
                ]
            },
            {
                blank: "_ candies per child",
                answer: "candies",
                options: [
                    { text: "Candies per child = 6", type: "candies" },
                    { text: "Each child gets 6 candies", type: "candies" },
                    { text: "Candies per child = x", type: "wrong" }
                ]
            },
            {
                blank: "_ total candies",
                answer: "total",
                options: [
                    { text: "Total candies = 54", type: "total" }
                ]
            }
        ],
        solutionSteps: [
            {
                blank: "_ equation",
                answer: "eq",
                options: [
                    { text: "x × 6 = 54", type: "eq" },
                    { text: "54 ÷ 6 = x", type: "eq_alt" }
                ]
            },
            {
                blank: "_ solution",
                answer: "sol",
                options: [
                    { text: "x = 9", type: "sol" },
                    { text: "x = 8", type: "wrong" }
                ]
            }
        ]
    },

    // 6
    {
        question: `
            7 boxes mein toys hain.
            Agar total 56 toys hain, toh har box mein kitne toys hain?
        `,
        infoSteps: [
            {
                blank: "_ boxes",
                answer: "boxes",
                options: [
                    { text: "No of boxes = 7", type: "boxes" },
                    { text: "Boxes = x", type: "wrong" }
                ]
            },
            {
                blank: "_ toys per box",
                answer: "toys",
                options: [
                    { text: "Toys per box = x", type: "toys" },
                    { text: "Each box has x toys", type: "toys" }
                ]
            },
            {
                blank: "_ total toys",
                answer: "total",
                options: [
                    { text: "Total toys = 56", type: "total" }
                ]
            }
        ],
        solutionSteps: [
            {
                blank: "_ equation",
                answer: "eq",
                options: [
                    { text: "7 × x = 56", type: "eq" },
                    { text: "56 ÷ 7 = x", type: "eq_alt" }
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

    // 7
    {
        question: `
            Har bag mein 5 oranges hain.
            Agar total 45 oranges hain, toh kitne bags hain?
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
                    { text: "Oranges per bag = 5", type: "oranges" }
                ]
            },
            {
                blank: "_ total oranges",
                answer: "total",
                options: [
                    { text: "Total oranges = 45", type: "total" }
                ]
            }
        ],
        solutionSteps: [
            {
                blank: "_ equation",
                answer: "eq",
                options: [
                    { text: "x × 5 = 45", type: "eq" },
                    { text: "45 ÷ 5 = x", type: "eq_alt" }
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

    // 8
    {
        question: `
            9 racks mein books hain.
            Agar total 72 books hain, toh har rack mein kitni books hain?
        `,
        infoSteps: [
            {
                blank: "_ racks",
                answer: "racks",
                options: [
                    { text: "No of racks = 9", type: "racks" }
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
                    { text: "Total books = 72", type: "total" }
                ]
            }
        ],
        solutionSteps: [
            {
                blank: "_ equation",
                answer: "eq",
                options: [
                    { text: "9 × x = 72", type: "eq" },
                    { text: "72 ÷ 9 = x", type: "eq_alt" }
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

    // 9
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
                    { text: "x × 2 = 18", type: "eq" },
                    { text: "18 ÷ 2 = x", type: "eq_alt" }
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

    // 10
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
                    { text: "4 × x = 36", type: "eq" },
                    { text: "36 ÷ 4 = x", type: "eq_alt" }
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
