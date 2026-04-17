const gameData = [
    {
        question: `
            Students ko har ek ko 3 pencils milti hain.
            Agar total 18 pencils hain, toh kitne students hain?
        `,

        // 🔹 GIVEN INFO
        infoSteps: [
            {
                blank: "_ students",
                answer: "students",
                options: [
                    { text: "Total students = 18", type: "wrong" },
                    { text: "No of students = x", type: "students" },
                    { text: "Students = 3", type: "wrong" },
                    { text: "Let number of students be x", type: "students" },
                    { text: "Let pencils be x", type: "wrong" },
                    { text: "Number of pencils = x", type: "wrong" }
                ]
            },
            {
                blank: "_ pencils per student",
                answer: "pencils",
                options: [
                    { text: "Each student has x pencils", type: "wrong" },
                    { text: "Total pencils = 3", type: "wrong" },
                    { text: "Pencils per student = x", type: "wrong" },
                    { text: "Pencils per student = 3", type: "pencils" },
                    { text: "Students get 18 pencils", type: "wrong" }
                ]
            },
            {
                blank: "_ total pencils",
                answer: "total",
                options: [
                    { text: "Total pencils = x", type: "wrong" },
                    { text: "Each student has 18 pencils", type: "wrong" },
                    { text: "Pencils = 18 per student", type: "wrong" },
                    { text: "Total students = 18", type: "wrong" },
                    { text: "Total pencils = 18", type: "total" }
                ]
            }
        ],

        // 🔹 SOLUTION
        solutionSteps: [
            {
                blank: "_ equation",
                answer: "eq",
                options: [

                    { text: "x + 3 = 18", type: "wrong" },
                    { text: "3 × 18 = x", type: "wrong" },
                    { text: "x × 18 = 3", type: "wrong" },
                    { text: "x × 3 = 18", type: "eq" },
                    { text: "18 ÷ 3 = x", type: "wrong" } // conceptually right but wrong format for step
                ]
            },
            {
                blank: "_ solution",
                answer: "sol",
                options: [
                    { text: "x = 9", type: "wrong" },
                    { text: "x = 6", type: "sol" },
                    { text: "x = 3", type: "wrong" },
                    { text: "x = 18", type: "wrong" },
                    { text: "x = 15", type: "wrong" }
                ]
            }
        ]
    },

    // ✅ SECOND QUESTION
    {
        question: `
            6 bags mein har ek mein kuch oranges hain.
            Agar total 42 oranges hain, toh har bag mein kitne oranges hain?
        `,

        infoSteps: [
            {
                blank: "_ bags",
                answer: "bags",
                options: [

                    { text: "Total bags = 42", type: "wrong" },
                    { text: "Bags = x", type: "wrong" },
                    { text: "Let oranges be x", type: "wrong" },
                    { text: "No of bags = 6", type: "bags" },
                    { text: "Number of bags is 6", type: "bags" }
                ]
            },
            {
                blank: "_ oranges per bag",
                answer: "oranges",
                options: [
                    { text: "Oranges per bag = x", type: "oranges" },
                    { text: "Oranges per bag = 42", type: "wrong" },
                    { text: "Each bag has 6 oranges", type: "wrong" },
                    { text: "Total oranges per bag = x", type: "wrong" },
                    { text: "Oranges = 6", type: "wrong" }
                ]
            },
            {
                blank: "_ total oranges",
                answer: "total",
                options: [
                    { text: "Total oranges = x", type: "wrong" },
                    { text: "Each bag has 42 oranges", type: "wrong" },
                    { text: "Total oranges = 42", type: "total" },
                    { text: "Total bags = 42", type: "wrong" }
                ]
            }
        ],

        solutionSteps: [
            {
                blank: "_ equation",
                answer: "eq",
                options: [
                    { text: "6 + x = 42", type: "wrong" },
                    { text: "x × 42 = 6", type: "wrong" },
                    { text: "6 × x = 42", type: "eq" },
                    { text: "42 ÷ 6 = x", type: "wrong" },
                    { text: "x = 42 × 6", type: "wrong" }
                ]
            },
            {
                blank: "_ solution",
                answer: "sol",
                options: [
                    { text: "x = 6", type: "wrong" },
                    { text: "x = 7", type: "sol" },
                    { text: "x = 42", type: "wrong" },
                    { text: "x = 36", type: "wrong" },
                    { text: "x = 8", type: "wrong" }
                ]
            }
        ]
    },
    // ✅ THIRD QUESTION
    {
        question: `
        Har student ko 5 chocolates milti hain.
        Agar total 40 chocolates hain, toh kitne students hain?
    `,

        infoSteps: [
            {
                blank: "_ students",
                answer: "students",
                options: [
                    { text: "Students = 40", type: "wrong" },
                    { text: "Let number of students be x", type: "students" },
                    { text: "No of students = x", type: "students" },
                    { text: "Students = 5", type: "wrong" },
                    { text: "Chocolates = x", type: "wrong" }
                ]
            },
            {
                blank: "_ chocolates per student",
                answer: "choco",
                options: [
                    { text: "Chocolates per student = 5", type: "choco" },
                    { text: "Chocolates per student = x", type: "wrong" },
                    { text: "Total chocolates = 5", type: "wrong" },
                    { text: "Each student has x chocolates", type: "wrong" }
                ]
            },
            {
                blank: "_ total chocolates",
                answer: "total",
                options: [
                    { text: "Total chocolates = 40", type: "total" },
                    { text: "Total chocolates = x", type: "wrong" },
                    { text: "Each student has 40 chocolates", type: "wrong" }
                ]
            }
        ],

        solutionSteps: [
            {
                blank: "_ equation",
                answer: "eq",
                options: [
                    { text: "x × 5 = 40", type: "eq" },
                    { text: "x + 5 = 40", type: "wrong" },
                    { text: "5 × 40 = x", type: "wrong" }
                ]
            },
            {
                blank: "_ solution",
                answer: "sol",
                options: [
                    { text: "x = 8", type: "sol" },
                    { text: "x = 5", type: "wrong" },
                    { text: "x = 10", type: "wrong" }
                ]
            }
        ]
    },

    // ✅ FOURTH QUESTION
    {
        question: `
        4 boxes mein pens hain.
        Agar total 20 pens hain, toh har box mein kitne pens hain?
    `,

        infoSteps: [
            {
                blank: "_ boxes",
                answer: "boxes",
                options: [
                    { text: "No of boxes = 4", type: "boxes" },
                    { text: "Boxes = x", type: "wrong" },
                    { text: "Total boxes = 20", type: "wrong" }
                ]
            },
            {
                blank: "_ pens per box",
                answer: "pens",
                options: [
                    { text: "Pens per box = x", type: "pens" },
                    { text: "Pens per box = 20", type: "wrong" },
                    { text: "Each box has 4 pens", type: "wrong" }
                ]
            },
            {
                blank: "_ total pens",
                answer: "total",
                options: [
                    { text: "Total pens = 20", type: "total" },
                    { text: "Total pens = x", type: "wrong" }
                ]
            }
        ],

        solutionSteps: [
            {
                blank: "_ equation",
                answer: "eq",
                options: [
                    { text: "4 × x = 20", type: "eq" },
                    { text: "4 + x = 20", type: "wrong" }
                ]
            },
            {
                blank: "_ solution",
                answer: "sol",
                options: [
                    { text: "x = 5", type: "sol" },
                    { text: "x = 4", type: "wrong" }
                ]
            }
        ]
    },

    // ✅ FIFTH QUESTION
    {
        question: `
        Har bag mein 2 apples hain.
        Agar total 14 apples hain, toh kitne bags hain?
    `,

        infoSteps: [
            {
                blank: "_ bags",
                answer: "bags",
                options: [
                    { text: "Let number of bags be x", type: "bags" },
                    { text: "Bags = 14", type: "wrong" },
                    { text: "No of apples = x", type: "wrong" }
                ]
            },
            {
                blank: "_ apples per bag",
                answer: "apples",
                options: [
                    { text: "Apples per bag = 2", type: "apples" },
                    { text: "Apples per bag = x", type: "wrong" },
                    { text: "Total apples = 2", type: "wrong" }
                ]
            },
            {
                blank: "_ total apples",
                answer: "total",
                options: [
                    { text: "Total apples = 14", type: "total" },
                    { text: "Total apples = x", type: "wrong" }
                ]
            }
        ],

        solutionSteps: [
            {
                blank: "_ equation",
                answer: "eq",
                options: [
                    { text: "x × 2 = 14", type: "eq" },
                    { text: "x + 2 = 14", type: "wrong" }
                ]
            },
            {
                blank: "_ solution",
                answer: "sol",
                options: [
                    { text: "x = 7", type: "sol" },
                    { text: "x = 2", type: "wrong" }
                ]
            }
        ]
    },

    // ✅ SIXTH QUESTION
    {
        question: `
        3 shelves mein books hain.
        Agar total 21 books hain, toh har shelf mein kitni books hain?
    `,

        infoSteps: [
            {
                blank: "_ shelves",
                answer: "shelves",
                options: [
                    { text: "No of shelves = 3", type: "shelves" },
                    { text: "Shelves = x", type: "wrong" }
                ]
            },
            {
                blank: "_ books per shelf",
                answer: "books",
                options: [
                    { text: "Books per shelf = x", type: "books" },
                    { text: "Books per shelf = 21", type: "wrong" }
                ]
            },
            {
                blank: "_ total books",
                answer: "total",
                options: [
                    { text: "Total books = 21", type: "total" },
                    { text: "Total books = x", type: "wrong" }
                ]
            }
        ],

        solutionSteps: [
            {
                blank: "_ equation",
                answer: "eq",
                options: [
                    { text: "3 × x = 21", type: "eq" },
                    { text: "3 + x = 21", type: "wrong" }
                ]
            },
            {
                blank: "_ solution",
                answer: "sol",
                options: [
                    { text: "x = 7", type: "sol" },
                    { text: "x = 3", type: "wrong" }
                ]
            }
        ]
    },
    // ✅ SEVENTH QUESTION
    {
        question: `
        Har child ko 4 candies milti hain.
        Agar total 28 candies hain, toh kitne children hain?
    `,

        infoSteps: [
            {
                blank: "_ children",
                answer: "children",
                options: [
                    { text: "No of children = x", type: "children" },
                    { text: "Let number of children be x", type: "children" },
                    { text: "Children = 28", type: "wrong" },
                    { text: "Candies = x", type: "wrong" }
                ]
            },
            {
                blank: "_ candies per child",
                answer: "candies",
                options: [
                    { text: "Candies per child = 4", type: "candies" },
                    { text: "Candies per child = x", type: "wrong" },
                    { text: "Total candies = 4", type: "wrong" }
                ]
            },
            {
                blank: "_ total candies",
                answer: "total",
                options: [
                    { text: "Total candies = 28", type: "total" },
                    { text: "Total candies = x", type: "wrong" },
                    { text: "Each child has 28 candies", type: "wrong" }
                ]
            }
        ],

        solutionSteps: [
            {
                blank: "_ equation",
                answer: "eq",
                options: [
                    { text: "x × 4 = 28", type: "eq" },
                    { text: "x + 4 = 28", type: "wrong" },
                    { text: "4 × 28 = x", type: "wrong" }
                ]
            },
            {
                blank: "_ solution",
                answer: "sol",
                options: [
                    { text: "x = 7", type: "sol" },
                    { text: "x = 4", type: "wrong" },
                    { text: "x = 6", type: "wrong" }
                ]
            }
        ]
    },

    // ✅ EIGHTH QUESTION
    {
        question: `
        5 crates mein bottles hain.
        Agar total 25 bottles hain, toh har crate mein kitni bottles hain?
    `,

        infoSteps: [
            {
                blank: "_ crates",
                answer: "crates",
                options: [
                    { text: "No of crates = 5", type: "crates" },
                    { text: "Crates = x", type: "wrong" },
                    { text: "Total crates = 25", type: "wrong" }
                ]
            },
            {
                blank: "_ bottles per crate",
                answer: "bottles",
                options: [
                    { text: "Bottles per crate = x", type: "bottles" },
                    { text: "Bottles per crate = 25", type: "wrong" },
                    { text: "Each crate has 5 bottles", type: "wrong" }
                ]
            },
            {
                blank: "_ total bottles",
                answer: "total",
                options: [
                    { text: "Total bottles = 25", type: "total" },
                    { text: "Total bottles = x", type: "wrong" }
                ]
            }
        ],

        solutionSteps: [
            {
                blank: "_ equation",
                answer: "eq",
                options: [
                    { text: "5 × x = 25", type: "eq" },
                    { text: "5 + x = 25", type: "wrong" },
                    { text: "x × 25 = 5", type: "wrong" }
                ]
            },
            {
                blank: "_ solution",
                answer: "sol",
                options: [
                    { text: "x = 5", type: "sol" },
                    { text: "x = 25", type: "wrong" },
                    { text: "x = 4", type: "wrong" }
                ]
            }
        ]
    },

    // ✅ NINTH QUESTION
    {
        question: `
        Har plate mein 6 cookies hain.
        Agar total 36 cookies hain, toh kitni plates hain?
    `,

        infoSteps: [
            {
                blank: "_ plates",
                answer: "plates",
                options: [
                    { text: "No of plates = x", type: "plates" },
                    { text: "Let number of plates be x", type: "plates" },
                    { text: "Plates = 36", type: "wrong" }
                ]
            },
            {
                blank: "_ cookies per plate",
                answer: "cookies",
                options: [
                    { text: "Cookies per plate = 6", type: "cookies" },
                    { text: "Cookies per plate = x", type: "wrong" },
                    { text: "Total cookies = 6", type: "wrong" }
                ]
            },
            {
                blank: "_ total cookies",
                answer: "total",
                options: [
                    { text: "Total cookies = 36", type: "total" },
                    { text: "Total cookies = x", type: "wrong" }
                ]
            }
        ],

        solutionSteps: [
            {
                blank: "_ equation",
                answer: "eq",
                options: [
                    { text: "x × 6 = 36", type: "eq" },
                    { text: "x + 6 = 36", type: "wrong" },
                    { text: "6 × 36 = x", type: "wrong" }
                ]
            },
            {
                blank: "_ solution",
                answer: "sol",
                options: [
                    { text: "x = 6", type: "sol" },
                    { text: "x = 3", type: "wrong" },
                    { text: "x = 12", type: "wrong" }
                ]
            }
        ]
    },

    // ✅ TENTH QUESTION
    {
        question: `
        7 boxes mein toys hain.
        Agar total 49 toys hain, toh har box mein kitne toys hain?
    `,

        infoSteps: [
            {
                blank: "_ boxes",
                answer: "boxes",
                options: [
                    { text: "No of boxes = 7", type: "boxes" },
                    { text: "Boxes = x", type: "wrong" },
                    { text: "Total boxes = 49", type: "wrong" }
                ]
            },
            {
                blank: "_ toys per box",
                answer: "toys",
                options: [
                    { text: "Toys per box = x", type: "toys" },
                    { text: "Toys per box = 49", type: "wrong" },
                    { text: "Each box has 7 toys", type: "wrong" }
                ]
            },
            {
                blank: "_ total toys",
                answer: "total",
                options: [
                    { text: "Total toys = 49", type: "total" },
                    { text: "Total toys = x", type: "wrong" }
                ]
            }
        ],

        solutionSteps: [
            {
                blank: "_ equation",
                answer: "eq",
                options: [
                    { text: "7 × x = 49", type: "eq" },
                    { text: "7 + x = 49", type: "wrong" },
                    { text: "x × 49 = 7", type: "wrong" }
                ]
            },
            {
                blank: "_ solution",
                answer: "sol",
                options: [
                    { text: "x = 7", type: "sol" },
                    { text: "x = 49", type: "wrong" },
                    { text: "x = 6", type: "wrong" }
                ]
            }
        ]
    }
];