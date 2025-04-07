document.addEventListener("DOMContentLoaded", function () {
    const cars = [
        {
            name: "BMW M5 Competition",
            image: "static/images/bmw-m5.JPG",
            price: "$110,000",
            horsepower: "617 HP",
            mileage: "15 MPG city / 21 MPG highway",
            mileageKMPL: "6.4 kmpl city / 8.9 kmpl highway",
            seaters: "5-seater",
            engineCapacity: "4.4L V8",
            engineDescription: "Twin-turbocharged V8 engine",
            fuelCapacity: "20 gallons",
            fuelCapacityLiters: "75 liters",
            description: "A high-performance luxury sedan with aggressive styling and power.",
            link: "https://www.bmwusa.com/vehicles/m-models/m5.html"
        },
        {
            name: "Bugatti Chiron",
            image: "static/images/bugatti-chiron.JPG",
            price: "$3,300,000",
            horsepower: "1,479 HP",
            seaters: "2-seater",
            engineCapacity: "8.0L W16",
            engineDescription: "Quad-turbocharged W16 engine",
            fuelCapacity: "22 gallons",
            fuelCapacityLiters: "83 liters",
            description: "A hypercar with breathtaking speed and luxury.",
            link: "https://www.bugatti.com/chiron/"
        },
        {
            name: "Chevrolet Corvette Z06",
            image: "static/images/corvette-z06.JPG",
            price: "$108,000",
            horsepower: "670 HP",
            mileage: "12 MPG city / 19 MPG highway",
            mileageKMPL: "5.1 kmpl city / 8.1 kmpl highway",
            seaters: "2-seater",
            engineCapacity: "5.5L V8",
            engineDescription: "Naturally aspirated V8 engine",
            fuelCapacity: "18 gallons",
            fuelCapacityLiters: "68 liters",
            description: "An American supercar designed for both track and road.",
            link: "https://www.chevrolet.com/performance/corvette"
        },
        {
            name: "Dodge Challenger SRT Hellcat",
            image: "static/images/dodge-challenger-hellcat.JPG",
            price: "$69,995",
            horsepower: "717 HP",
            mileage: "13 MPG city / 22 MPG highway",
            mileageKMPL: "5.5 kmpl city / 9.4 kmpl highway",
            seaters: "5-seater",
            engineCapacity: "6.2L V8",
            engineDescription: "Supercharged HEMI V8 engine",
            fuelCapacity: "18.5 gallons",
            fuelCapacityLiters: "70 liters",
            description: "A modern muscle car with legendary power and aggressive styling.",
            link: "https://www.dodge.com/challenger.html"
        },
        {
            name: "Ferrari SF90 Stradale",
            image: "static/images/ferrari-sf90.JPG",
            price: "$524,815",
            horsepower: "986 HP",
            range: "N/A",
            seaters: "2-seater",
            engineCapacity: "4.0L V8 Hybrid",
            engineDescription: "Twin-turbo V8 with hybrid electric assist",
            fuelCapacity: "16 gallons",
            fuelCapacityLiters: "60 liters",
            description: "A hybrid supercar with extreme performance and Italian flair.",
            link: "https://www.ferrari.com/en-EN/auto/sf90-stradale"
        },
        {
            name: "Ford Mustang GT",
            image: "static/images/ford_mustang_gt.JPG",
            price: "$42,500",
            horsepower: "450 HP",
            mileage: "15 MPG city / 24 MPG highway",
            mileageKMPL: "6.4 kmpl city / 10.2 kmpl highway",
            seaters: "4-seater",
            engineCapacity: "5.0L V8",
            engineDescription: "Naturally aspirated V8 engine",
            fuelCapacity: "16 gallons",
            fuelCapacityLiters: "61 liters",
            description: "A classic American muscle car with a powerful V8 engine and aggressive styling.",
            link: "https://www.ford.com/cars/mustang/"
        },
        {
            name: "Koenigsegg Jesko",
            image: "static/images/koenigsegg-jesko.JPG",
            price: "$3,000,000",
            horsepower: "1,600 HP",
            range: "N/A",
            seaters: "2-seater",
            engineCapacity: "5.0L V8",
            engineDescription: "Twin-turbocharged V8 engine",
            fuelCapacity: "21 gallons",
            fuelCapacityLiters: "79 liters",
            description: "A hypercar engineered for extreme speed and performance.",
            link: "https://www.koenigsegg.com/model/jesko"
        },
        {
            name: "Lamborghini Aventador",
            image: "static/images/lamborghini-aventador.JPG",
            price: "$517,000",
            horsepower: "769 HP",
            mileage: "9 MPG city / 15 MPG highway",
            mileageKMPL: "3.8 kmpl city / 6.4 kmpl highway",
            seaters: "2-seater",
            engineCapacity: "6.5L V12",
            engineDescription: "Naturally aspirated V12 engine",
            fuelCapacity: "22.5 gallons",
            fuelCapacityLiters: "85 liters",
            description: "An iconic Italian supercar with aggressive styling and thrilling performance.",
            link: "https://www.lamborghini.com/en-en/models/aventador"
        },
        {
         name: "Land Rover Defender 130 V8",
         image: "static/images/land-rover-defender.JPG",
         price: "$116,600",
         horsepower: "493 HP",
         mileage: "15 MPG city / 19 MPG highway",
         mileageKMPL: "6.4 kmpl city / 8.1 kmpl highway",
         seaters: "8-seater",
         engineCapacity: "5.0L V8",
         engineDescription: "Supercharged 5.0-liter V8 engine",
         fuelCapacity: "23.8 gallons",
         fuelCapacityLiters: "90 liters",
         description: "A powerful, full-size luxury off-roader with a rugged design, spacious 8-seater capacity, and a supercharged V8 engine for excellent performance on and off the road.",
         link: "https://www.landrover.in/defender/index.html"
        },
        {
            name: "Land Rover Range Rover",
            image: "static/images/land-rover-range-rover.JPG",
            price: "$104,500",
            horsepower: "523 HP",
            mileage: "18 MPG city / 23 MPG highway",
            mileageKMPL: "7.6 kmpl city / 9.8 kmpl highway",
            seaters: "5-seater",
            engineCapacity: "4.4L V8",
            engineDescription: "Twin-turbocharged V8 engine",
            fuelCapacity: "23 gallons",
            fuelCapacityLiters: "87 liters",
            description: "A luxury SUV with off-road capabilities and premium comfort.",
            link: "https://www.landroverusa.com/vehicles/new-range-rover/index.html"
        },
        {
            name: "Maserati MC20",
            image: "static/images/maserati-mc20.jpg",
            price: "$233,000",
            horsepower: "621 HP",
            range: "N/A",
            seaters: "2-seater",
            engineCapacity: "3.0L V6",
            engineDescription: "Twin-turbocharged Nettuno V6",
            fuelCapacity: "15.8 gallons",
            fuelCapacityLiters: "60 liters",
            description: "A lightweight, mid-engine supercar with exceptional Italian design and a powerful V6 engine.",
            link: "https://www.maserati.com/international/en/models/mc20"
        },
        {
            name: "McLaren P1",
            image: "static/images/mclaren-p1.JPG",
            price: "$1,350,000",
            horsepower: "903 HP",
            mileage: "18 MPG combined",
            mileageKMP: "7.6 kmpl combined",
            seaters: "2-seater",
            engineCapacity: "3.8L V8 Hybrid",
            engineDescription: "Twin-turbocharged V8 with hybrid-electric assist",
            fuelCapacity: "19 gallons",
            fuelCapacityLiters: "72 liters",
            description: "A hybrid hypercar combining cutting-edge aerodynamics and extreme performance with electric-assisted boost.",
            link: "https://cars.mclaren.com/en/legacy/mclaren-p1"
        },
        {
            name: "Mercedes-AMG One",
            image: "static/images/mercedes-amg-one.JPG",
            price: "$2,720,000",
            horsepower: "1,063 HP",
            mileage: "N/A (Hybrid Hypercar)",
            mileageKMPL: "N/A",
            seaters: "2-seater",
            engineCapacity: "1.6L V6 Hybrid",
            engineDescription: "Formula 1-derived turbocharged V6 engine with hybrid-electric assist",
            fuelCapacity: "14.5 gallons",
            fuelCapacityLiters: "55 liters",
            description: "A road-legal hypercar with Formula 1 technology, delivering extreme performance and aerodynamics.",
            link: "https://www.mercedes-amg.com/en/vehicles/one.html"
        },
        {
            name: "Nissan GT-R R34",
            image: "static/images/nissan-gtr-r34.jpg",
            price: "Varies ($70,000 - $500,000)",
            horsepower: "276 HP (stock)",
            range: "N/A",
            seaters: "4-seater",
            engineCapacity: "2.6L I6",
            engineDescription: "Twin-turbocharged RB26DETT Inline-6",
            fuelCapacity: "17.2 gallons",
            fuelCapacityLiters: "65 liters",
            description: "A legendary Japanese sports car, renowned for its advanced AWD system and tunability.",
            link: "https://www.nissan-global.com/EN/HERITAGE/skyline_r34.html"
        },
        {
            name: "Porsche 918 Spyder",
            image: "static/images/porsche-918-spyder.JPG",
            price: "$845,000",
            horsepower: "887 HP",
            range: "N/A",
            seaters: "2-seater",
            engineCapacity: "4.6L V8 Hybrid",
            engineDescription: "Naturally aspirated V8 with hybrid system",
            fuelCapacity: "18 gallons",
            fuelCapacityLiters: "68 liters",
            description: "A hybrid hypercar with extreme performance and efficiency.",
            link: "https://www.porsche.com/usa/models/918-spyder/"
        },
        {
            name: "Rolls-Royce Ghost",
            image: "static/images/rolls-royce-ghost.JPEG",
            price: "$343,000",
            horsepower: "563 HP",
            range: "N/A",
            seaters: "4-seater",
            engineCapacity: "6.75L V12",
            engineDescription: "Twin-turbocharged V12",
            fuelCapacity: "21.8 gallons",
            fuelCapacityLiters: "82.5 liters",
            description: "A luxury sedan offering supreme comfort, handcrafted interiors, and an ultra-smooth ride.",
            link: "https://www.rolls-roycemotorcars.com/en_US/showroom/ghost.html"
        },
        {
            name: "Tesla Model S Plaid",
            image: "static/images/tesla-model-s.JPG",
            price: "$89,990",
            horsepower: "1,020 HP",
            range: "396 miles",
            seaters: "5-seater",
            engineCapacity: "Electric Motor",
            engineDescription: "Tri-Motor All-Wheel Drive",
            fuelCapacity: "N/A",
            fuelCapacityLiters: "N/A",
            description: "An all-electric luxury sedan with cutting-edge technology and unparalleled speed.",
            link: "https://www.tesla.com/models"
        },
        {
            name: "Toyota Land Cruiser 79 Pickup",
            image: "static/images/cruiser.JPG",
            price: "$45,000 (approx, varies by region)",
            horsepower: "202 HP",
            mileage: "13 MPG city / 17 MPG highway",
            mileageKMPL: "5.5 kmpl city / 7.2 kmpl highway",
            seaters: "2- to 5-seater (depending on configuration)",
            engineCapacity: "4.5L V8",
            engineDescription: "4.5-liter V8 turbo-diesel engine",
            fuelCapacity: "42.3 gallons (dual tanks)",
            fuelCapacityLiters: "160 liters",
            description: "A rugged, no-nonsense pickup truck built for extreme durability and off-road performance, widely used in remote and challenging environments around the world.",
            link: "https://toyota.com.bh/vehicles/land-cruiser-pickup"

        }
        
    ];

    
    const container = document.createElement("div");
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";
    container.style.gap = "20px";
    container.style.padding = "20px";
    document.body.appendChild(container);

    cars.forEach(car => {
        const carCard = document.createElement("div");
        carCard.style.border = "4px solid #ddd";
        carCard.style.padding = "15px";
        carCard.style.borderRadius = "10px";
        carCard.style.textAlign = "center";
        carCard.style.boxShadow = "2px 2px 10px rgb(250, 250, 250)";
        carCard.style.backgroundColor = "#FFFFE4";



        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.name}" style="width: 100%; border-radius: 10px; object-fit: cover; height: 200px;">
            <h2>${car.name}</h2>
            <p><strong>Price:</strong> ${car.price}</p>
            <p><strong>Seaters:</strong> ${car.seaters}</p>
            <p><strong>Engine:</strong> ${car.engineCapacity} - ${car.engineDescription}</p>
            <p><strong>Fuel Capacity:</strong> ${car.fuelCapacity} (${car.fuelCapacityLiters} liters)</p>
            ${car.range ? `<p><strong>Range:</strong> ${car.range}</p>` : `<p><strong>Mileage:</strong> ${car.mileage} (${car.mileageKMPL})</p>`}
            <p>${car.description}</p>
            <a href="${car.link}" target="_blank">More Info</a>
        `;

        container.appendChild(carCard);
    });
});
