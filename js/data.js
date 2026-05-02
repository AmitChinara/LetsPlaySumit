const gameData = [

{
    question: `
        Har student ko 4 pens milte hain.
        Agar total 28 pens hain, toh kitne students hain?
    `,
    steps: [
        { blank: "Number of students = ___", display: "Number of students = x", answers: ["x"] },
        { blank: "Pens per student = ___", display: "Pens per student = 4", answers: ["4"] },
        { blank: "Total  no. of pens = ___", display: "Total no. of pens = 28", answers: ["28"] },
        { blank: "Equation = ___", display: "Equation: x × 4 = 28", answers: ["x*4=28","4*x=28","28/4=x"] },
        { blank: "Solution x = ___", display: "x = 7", answers: ["7"] }
    ]
},

{
    question: `
        5 boxes mein chocolates hain.
        Total 40 chocolates hain. Har box mein kitni chocolates hain?
    `,
    steps: [
        { blank: "No. of Boxes = ___", display: "No. of Boxes = 5", answers: ["5"] },
        { blank: "Chocolates per box = ___", display: "Chocolates per box = x", answers: ["x"] },
        { blank: "Total no. of chocolates = ___", display: "Total no. of chocolates = 40", answers: ["40"] },
        { blank: "Equation = ___", display: "Equation: 5 × x = 40", answers: ["5*x=40","40/5=x"] },
        { blank: "Solution x = ___", display: "x = 8", answers: ["8"] }
    ]
},

{
    question: `
        Har packet mein 6 biscuits hain.
        Total 54 biscuits hain. Kitne packets hain?
    `,
    steps: [
        { blank: "No. of Packets = ___", display: "No. of Packets = x", answers: ["x"] },
        { blank: "Biscuits per packet = ___", display: "Biscuits per packet = 6", answers: ["6"] },
        { blank: "Total no. of biscuits = ___", display: "Total no. of biscuits = 54", answers: ["54"] },
        { blank: "Equation = ___", display: "Equation: x × 6 = 54", answers: ["x*6=54","54/6=x"] },
        { blank: "Solution x = ___", display: "x = 9", answers: ["9"] }
    ]
},

{
    question: `
        8 bags mein oranges hain.
        Total 64 oranges hain. Har bag mein kitne oranges hain?
    `,
    steps: [
        { blank: "No. of Bags = ___", display: "No. of Bags = 8", answers: ["8"] },
        { blank: "Oranges per bag = ___", display: "Oranges per bag = x", answers: ["x"] },
        { blank: "Total no. of oranges = ___", display: "Total no. of oranges = 64", answers: ["64"] },
        { blank: "Equation = ___", display: "Equation: 8 × x = 64", answers: ["8*x=64","64/8=x"] },
        { blank: "Solution x = ___", display: "x = 8", answers: ["8"] }
    ]
},

{
    question: `
        Har tray mein 5 eggs hain.
        Total 35 eggs hain. Kitni trays hain?
    `,
    steps: [
        { blank: "No. of Trays = ___", display: "No. of Trays = x", answers: ["x"] },
        { blank: "Eggs per tray = ___", display: "Eggs per tray = 5", answers: ["5"] },
        { blank: "Total no. of eggs = ___", display: "Total no. of eggs = 35", answers: ["35"] },
        { blank: "Equation = ___", display: "Equation: x × 5 = 35", answers: ["x*5=35","35/5=x"] },
        { blank: "Solution x = ___", display: "x = 7", answers: ["7"] }
    ]
},

{
    question: `
        9 racks mein books hain.
        Total 81 books hain. Har rack mein kitni books hain?
    `,
    steps: [
        { blank: "No. of Racks = ___", display: "No. of Racks = 9", answers: ["9"] },
        { blank: "Books per rack = ___", display: "Books per rack = x", answers: ["x"] },
        { blank: "Total no. of books = ___", display: "Total no. of books = 81", answers: ["81"] },
        { blank: "Equation = ___", display: "Equation: 9 × x = 81", answers: ["9*x=81","81/9=x"] },
        { blank: "Solution x = ___", display: "x = 9", answers: ["9"] }
    ]
},

{
    question: `
        Har child ko 3 candies milti hain.
        Total 24 candies hain. Kitne children hain?
    `,
    steps: [
        { blank: "No. of Children = ___", display: "No. of Children = x", answers: ["x"] },
        { blank: "Candies per child = ___", display: "Candies per child = 3", answers: ["3"] },
        { blank: "Total no. of candies = ___", display: "Total no. of candies = 24", answers: ["24"] },
        { blank: "Equation = ___", display: "Equation: x × 3 = 24", answers: ["x*3=24","24/3=x"] },
        { blank: "Solution x = ___", display: "x = 8", answers: ["8"] }
    ]
},

{
    question: `
        4 jars mein candies hain.
        Total 20 candies hain. Har jar mein kitni candies hain?
    `,
    steps: [
        { blank: "No. of Jars = ___", display: "No. of Jars = 4", answers: ["4"] },
        { blank: "Candies per jar = ___", display: "Candies per jar = x", answers: ["x"] },
        { blank: "Total no. of candies = ___", display: "Total no. of candies = 20", answers: ["20"] },
        { blank: "Equation = ___", display: "Equation: 4 × x = 20", answers: ["4*x=20","20/4=x"] },
        { blank: "Solution x = ___", display: "x = 5", answers: ["5"] }
    ]
},

{
    question: `
        Har plate mein 2 cakes hain.
        Total 16 cakes hain. Kitni plates hain?
    `,
    steps: [
        { blank: "No. of Plates = ___", display: "No. of Plates = x", answers: ["x"] },
        { blank: "Cakes per plate = ___", display: "Cakes per plate = 2", answers: ["2"] },
        { blank: "Total no. of cakes = ___", display: "Total no. of cakes = 16", answers: ["16"] },
        { blank: "Equation = ___", display: "Equation: x × 2 = 16", answers: ["x*2=16","16/2=x"] },
        { blank: "Solution x = ___", display: "x = 8", answers: ["8"] }
    ]
},

{
    question: `
        7 boxes mein toys hain.
        Total 63 toys hain. Har box mein kitne toys hain?
    `,
    steps: [
        { blank: "No. of Boxes = ___", display: "No. of Boxes = 7", answers: ["7"] },
        { blank: "Toys per box = ___", display: "Toys per box = x", answers: ["x"] },
        { blank: "Total no. of toys = ___", display: "Total no. of toys = 63", answers: ["63"] },
        { blank: "Equation = ___", display: "Equation: 7 × x = 63", answers: ["7*x=63","63/7=x"] },
        { blank: "Solution x = ___", display: "x = 9", answers: ["9"] }
    ]
}

];