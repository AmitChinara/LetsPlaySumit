const gameData = [

{
    question: `
        Har student ko 5 pencils milti hain.
        Agar 6 students hain, toh total pencils kitni hain?
    `,
    steps: [
        { blank: "No. of Students = ___", display: "No. of Students = 6", answers: ["6"] },
        { blank: "No. of Pencils per student = ___", display: "No. of Pencils per student = 5", answers: ["5"] },
        { blank: "Total no. of pencils = ___", display: "Total no. of pencils = x", answers: ["x"] },
        { blank: "Equation = ___", display: "Equation: 6 × 5 = x", answers: ["6*5=x","5*6=x"] },
        { blank: "Solution x = ___", display: "x = 30", answers: ["30"] }
    ]
},

{
    question: `
        4 boxes mein apples hain.
        Har box mein 7 apples hain.
        Total apples kitne hain?
    `,
    steps: [
        { blank: "No. of Boxes = ___", display: "No. of Boxes = 4", answers: ["4"] },
        { blank: "No. of Apples per box = ___", display: "No. of Apples per box = 7", answers: ["7"] },
        { blank: "Total no. of apples = ___", display: "Total no. of apples = x", answers: ["x"] },
        { blank: "Equation = ___", display: "Equation: 4 × 7 = x", answers: ["4*7=x","7*4=x"] },
        { blank: "Solution x = ___", display: "x = 28", answers: ["28"] }
    ]
},

{
    question: `
        Har packet mein 8 biscuits hain.
        Total 64 biscuits hain.
        Kitne packets hain?
    `,
    steps: [
        { blank: "No. of Packets = ___", display: "No. of Packets = x", answers: ["x"] },
        { blank: "No. of Biscuits per packet = ___", display: "No. of Biscuits per packet = 8", answers: ["8"] },
        { blank: "Total no. of biscuits = ___", display: "Total no. of biscuits = 64", answers: ["64"] },
        { blank: "Equation = ___", display: "Equation: x × 8 = 64", answers: ["x*8=64","64/8=x"] },
        { blank: "Solution x = ___", display: "x = 8", answers: ["8"] }
    ]
},

{
    question: `
        9 trays mein eggs hain.
        Har tray mein 6 eggs hain.
        Total eggs kitne hain?
    `,
    steps: [
        { blank: "No. of Trays = ___", display: "No. of Trays = 9", answers: ["9"] },
        { blank: "No. of Eggs per tray = ___", display: "No. of Eggs per tray = 6", answers: ["6"] },
        { blank: "Total no. of eggs = ___", display: "Total no. of eggs = x", answers: ["x"] },
        { blank: "Equation = ___", display: "Equation: 9 × 6 = x", answers: ["9*6=x","6*9=x"] },
        { blank: "Solution x = ___", display: "x = 54", answers: ["54"] }
    ]
},

{
    question: `
        Har bag mein 4 oranges hain.
        Total 36 oranges hain.
        Kitne bags hain?
    `,
    steps: [
        { blank: "No. of Bags = ___", display: "No. of Bags = x", answers: ["x"] },
        { blank: "No. of Oranges per bag = ___", display: "No. of Oranges per bag = 4", answers: ["4"] },
        { blank: "Total no. of oranges = ___", display: "Total no. of oranges = 36", answers: ["36"] },
        { blank: "Equation = ___", display: "Equation: x × 4 = 36", answers: ["x*4=36","36/4=x"] },
        { blank: "Solution x = ___", display: "x = 9", answers: ["9"] }
    ]
},

{
    question: `
        7 racks mein books hain.
        Har rack mein 5 books hain.
        Total books kitni hain?
    `,
    steps: [
        { blank: "No. of Racks = ___", display: "No. of Racks = 7", answers: ["7"] },
        { blank: "No. of Books per rack = ___", display: "No. of Books per rack = 5", answers: ["5"] },
        { blank: "Total no. of books = ___", display: "Total no. of books = x", answers: ["x"] },
        { blank: "Equation = ___", display: "Equation: 7 × 5 = x", answers: ["7*5=x","5*7=x"] },
        { blank: "Solution x = ___", display: "x = 35", answers: ["35"] }
    ]
},

{
    question: `
        Har child ko 9 candies milti hain.
        Total 72 candies hain.
        Kitne children hain?
    `,
    steps: [
        { blank: "No. of Children = ___", display: "No. of Children = x", answers: ["x"] },
        { blank: "No. of Candies per child = ___", display: "No. of Candies per child = 9", answers: ["9"] },
        { blank: "Total no. of candies = ___", display: "Total no. of candies = 72", answers: ["72"] },
        { blank: "Equation = ___", display: "Equation: x × 9 = 72", answers: ["x*9=72","72/9=x"] },
        { blank: "Solution x = ___", display: "x = 8", answers: ["8"] }
    ]
},

{
    question: `
        3 jars mein candies hain.
        Har jar mein 11 candies hain.
        Total candies kitni hain?
    `,
    steps: [
        { blank: "No. of Jars = ___", display: "No. of Jars = 3", answers: ["3"] },
        { blank: "No. of Candies per jar = ___", display: "No. of Candies per jar = 11", answers: ["11"] },
        { blank: "Total no. of candies = ___", display: "Total no. of candies = x", answers: ["x"] },
        { blank: "Equation = ___", display: "Equation: 3 × 11 = x", answers: ["3*11=x","11*3=x"] },
        { blank: "Solution x = ___", display: "x = 33", answers: ["33"] }
    ]
},

{
    question: `
        Har plate mein 6 cakes hain.
        Total 42 cakes hain.
        Kitni plates hain?
    `,
    steps: [
        { blank: "No. of Plates = ___", display: "No. of Plates = x", answers: ["x"] },
        { blank: "No. of Cakes per plate = ___", display: "No. of Cakes per plate = 6", answers: ["6"] },
        { blank: "Total no. of cakes = ___", display: "Total no. of cakes = 42", answers: ["42"] },
        { blank: "Equation = ___", display: "Equation: x × 6 = 42", answers: ["x*6=42","42/6=x"] },
        { blank: "Solution x = ___", display: "x = 7", answers: ["7"] }
    ]
},

{
    question: `
        8 boxes mein toys hain.
        Har box mein 9 toys hain.
        Total toys kitne hain?
    `,
    steps: [
        { blank: "No. of Boxes = ___", display: "No. of Boxes = 8", answers: ["8"] },
        { blank: "No. of Toys per box = ___", display: "No. of Toys per box = 9", answers: ["9"] },
        { blank: "Total no. of toys = ___", display: "Total no. of toys = x", answers: ["x"] },
        { blank: "Equation = ___", display: "Equation: 8 × 9 = x", answers: ["8*9=x","9*8=x"] },
        { blank: "Solution x = ___", display: "x = 72", answers: ["72"] }
    ]
}

];