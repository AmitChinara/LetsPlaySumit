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
    }
];