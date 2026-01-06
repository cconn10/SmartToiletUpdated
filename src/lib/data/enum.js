export const Users = Object.freeze({
    JOHN: {
        info: { firstName: "John", lastName: "Smith", age: 34 },
        settings: {
            seatHeight: 3,
            bowlWidth: 5,
            led: "#DCD0FF",
            heatedSeat: false,
            stool: true,
            rails: false,
            reader: false,
        },
        health: { hydration: "Overhydrated", bathroomTrips: 5, weeklyAvg: 3 },
    },
    TIMO: {
        info: { firstName: "Timo", lastName: "Smith", age: 4 },
        settings: {
            seatHeight: 1,
            bowlWidth: 1,
            led: "#FF0000",
            heatedSeat: false,
            stool: true,
            rails: false,
            reader: true,
        },
        health: { hydration: "Normal", bathroomTrips: 1, weeklyAvg: 2 },
    },
    GUSTAVO: {
        info: { firstName: "Gustavo", lastName: "Smith", age: 77 },
        settings: {
            seatHeight: 5,
            bowlWidth: 2,
            led: "transparent",
            heatedSeat: false,
            stool: true,
            rails: true,
            reader: true,
        },
        health: { hydration: "Dehydrated", bathroomTrips: 3, weeklyAvg: 4 },
    },
    BETSY: {
        info: { firstName: "Betsy", lastName: "Smith", age: 40 },
        settings: {
            seatHeight: 2,
            bowlWidth: 3,
            led: "#00FFFF",
            heatedSeat: false,
            stool: false,
            rails: false,
            reader: false,
        },
        health: { hydration: "Normal", bathroomTrips: 3, weeklyAvg: 3 },
    },
    MOBILE: {
        info: { firstName: "John", lastName: "Cellphone", age: 40 },
        settings: {
            seatHeight: 4,
            bowlWidth: 3,
            led: "#DD00DD",
            heatedSeat: false,
            stool: true,
            rails: false,
            reader: false,
        },
        health: { hydration: "Normal", bathroomTrips: 3, weeklyAvg: 3 },
    },
    GUEST: {
        info: { firstName: "Guest", lastName: "User", age: 0 },
        settings: {
            seatHeight: 3,
            bowlWidth: 3,
            led: "transparent",
            heatedSeat: false,
            stool: false,
            rails: false,
            reader: false,
        },
        health: { hydration: "Normal", bathroomTrips: 0, weeklyAvg: 0 },
    },
});

export const Pages = Object.freeze({
    HEALTH: {
        id: "health",
        display_text: "Health",
    },
    WATER: {
        id: "water",
        display_text: "Water Usage",
    },
    LED: {
        id: "led",
        display_text: "Lights",
    },
    DEFAULTS: {
        id: "defaults",
        display_text: "Default Settings",
    },
    NONE: {
        id: "",
        display_text: "",
    },
});
