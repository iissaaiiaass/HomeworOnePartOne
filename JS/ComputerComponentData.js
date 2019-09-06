function onLoadData(){
    var computerComponents = [
        {
            id: 1,
            name: "Intel Core i7 8th Gen",
            category: "Microprocessor",
            description: "8M Cache, up to 4.20GHz",
            price: 300.00
        },
        {
            id: 2,
            name: "Intel Core i5 9th Gen",
            category: "Microprocessor",
            description: "9M Cache, Up to 4.40 GHz",
            price: 220.00
        },
        {
            id: 3,
            name: "Intel Core i3 9th Gen",
            category: "Microprocessor",
            description: "6M Cache, Up to 4.20 GHz",
            price: 120.00
        },
        {
            id: 4,
            name: "OLOy 16GB",
            category: "RAM",
            description: "Fast and reliable, OLOy DDR4 desktop memory is an ideal choice for building a new PC or upgrading your existing system. ",
            price: 50.00
        },
        {
            id: 5,
            name: "CORSAIR Vengeance LPX 32GB",
            category: "RAM",
            description: "Vengeance LPX memory is designed for high-performance overclocking.",
            price: 145.00
        },
        {
            id: 6,
            name: "G.SKILL Ripjaws V Series 64GB",
            category: "RAM",
            description: "As the newest dual-channel DDR4 memory, Ripjaws V is compatible with the latest Intel Core processors to unlock the biggest data bandwidth for jaw-dropping performance.",
            price: 270.00
        },
        {
            id: 7,
            name: "Seagate IronWolf 10TB",
            category: "Drive",
            description: "Higher capacity drives deliver up to 7200RPM spin speed, sustained data rates up to 214MB/s, and burst data rates of 6Gb/s.",
            price: 280.00
        },
        {
            id: 8,
            name: "Seagate BarraCuda ST2000DM008 2TB",
            category: "Drive",
            description: "Versatile HDDs for all your PC needs bring you industry-leading excellence in personal computing.",
            price: 50.00
        },
        {
            id: 9,
            name: "WD Black 1TB",
            category: "Drive",
            description: "Designed for creative professionals, gamers and system builders.",
            price: 58.00
        },
        {
            id: 10,
            name: "MSI Radeon RX 580",
            category: "Graphic Card",
            description: "Based on AMD Polaris architecture and manufactured with 14nm process, the AMD Radeon RX 580 graphics card is specced with 2304 Stream processors, 4GB/8GB GDDR5 memory and 256-bit memory bus.",
            price: 210.00
        },
        {
            id: 11,
            name: "GIGABYTE GeForce GTX 1660",
            category: "Graphic Card",
            description: "The WINDFORCE 2X cooling system features two 100mm unique blade fans (one an alternate spinning fan), two composite copper heat pipes, direct-touch GPU and 3D active fan functionalities.",
            price: 270.00
        },
        {
            id: 12,
            name: "EVGA GeForce RTX 2060",
            category: "Graphic Card",
            description: "The EVGA GeForce RTX 2060 SC Ultra GAMING graphics card is powered by the ground-breaking NVIDIA Turing architecture and the all-new RTX platform.",
            price: 350.00
        },
        {
            id: 13,
            name: "ASUS AM4 TUF Gaming X570-Plus",
            category: "Mother Board",
            description: "Powered by AMD Ryzen 2nd and 3rd AM4 processors, the ASUS TUF Gaming x570-plus (Wi-Fi) motherboard delivers 24/7 performance.",
            price: 200.0
        },
        {
            id: 14,
            name: "MSI MPG X570 GAMING EDGE",
            category: "Mother Board",
            description: "8+4 pin CPU power connectors and optimized power circuits let GAMING EDGE unleash maximum performance.",
            price: 201.00
        },
        {
            id: 15,
            name: "GIGABYTE X570 AORUS ELITE",
            category: "Mother Board",
            description: "upports AMD 3rd Gen Ryzen™/ 2nd Gen Ryzen™/ 2nd Gen Ryzen™ with Radeon™ Vega Graphics/ Ryzen™ with Radeon™ Vega Graphics Processors.",
            price: 210.00
        },
        {
            id: 16,
            name: "CORSAIR CX Series CX450 450W",
            category: "Power Supply",
            description: "CX Series power supply units provide modern power supply technologies and 80 PLUS Bronze efficiency at a competitive price point.",
            price: 60.00
        },
        {
            id: 17,
            name: "EVGA SuperNOVA 650W",
            category: "Power Supply",
            description: "80 PLUS Gold certified, with 91% (115VAC) / 92% (220VAC~240VAC) efficiency or higher under typical loads.",
            price: 110.00
        },
        {
            id: 18,
            name: "Gamdias Kratos P1-650G 650W",
            category: "Power Supply",
            description: "Gamdias built KRATOS P1-650G, a 650W power supply featuring built-in Neon-Flex addressable RGB lighting.",
            price: 60.00
        },
        {
            id: 19,
            name: "Lite-On DVD Burner Black",
            category: "DVD Rom",
            description: "Quickly burn and access data from different disc formats with the LITE-ON iHAS124 DVD Burner.",
            price: 20.00
        },
        {
            id: 20,
            name: "Asus Black SATA 24X DVD",
            category: "DVD Rom",
            description: "ASUS DRW-24F1ST is a power-saving 24X Multi DVD Writer, providing a fast, easy and secure way for multimedia data storage and sharing.",
            price: 23.00
        },
        {
            id: 21,
            name: "LG Internal 24x",
            category: "DVD Rom",
            description: "The M-DISC™uses a patent rock-like recording surface instead of organic dye to etch your data onto a disc. The M-DISC has been tested and proven to outlast standard DVDs currently on the market.",
            price: 18.00
        },
        {
            id: 22,
            name: "EVGA NU Audio Card",
            category: "Sound Card",
            description: "The most immersive audio and lifelike gaming experience on a PC with the EVGA NU Audio Card.",
            price: 189.00
        },
        {
            id: 23,
            name: "Creative Sound Blaster",
            category: "Sound Card",
            description: "Designed around the powerful Sound Core3D™ audio processor, the Sound Blaster Z series once again raises the bar for the industry standard of PCIe sound cards.",
            price: 110.00
        },
        {
            id: 24,
            name: "ASUS ESSENCE STX II",
            category: "Sound Card",
            description: "The Essence STX II is a PCIe x1 solution engineered for audiophiles and audio purists who demand top-notch sound from their desktops.",
            price: 264.00
        }
    ];

    var componentsFILE = JSON.stringify(computerComponents);
    localStorage.setItem("ComputerComponents", componentsFILE);
}