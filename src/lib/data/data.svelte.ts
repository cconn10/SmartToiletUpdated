import { Pages, Users } from "./enum";

export const phone = $state({
    device: "Smith Toilet",
    activePage: Pages.HEALTH,
});
export const toilet = $state({
    activeUser: Users.GUEST,
    ledColor: "transparent",
    action: "None",
    actionMessage: "None",
});

export const options = $state([
    { id: 0, name: "Heated Seat", active: false },
    { id: 1, name: "Safety Rails", active: false },
    { id: 2, name: "Screen Reader", active: false },
    { id: 3, name: "Squat Stool", active: false },
]);

export let maintenanceButtons = [
    { className: "unclog", label: "Unclog", actionText: "Unclogging" },
    { className: "clean-bowl", label: "Clean", actionText: "Cleaning Toilet" },
];

export let users = [
    { id: "john", details: Users.JOHN },
    { id: "betsy", details: Users.BETSY },
    { id: "gustavo", details: Users.GUSTAVO },
    { id: "timo", details: Users.TIMO },
];

export let tempSelectors = [
    { id: 0, name: "cold", color: "#0D6CF2" },
    { id: 1, name: "cool", color: "#86B5F9" },
    { id: 2, name: "medium", color: "#FFFFFF" },
    { id: 3, name: "warm", color: "#F88686" },
    { id: 4, name: "hot", color: "#F20D0D" },
];

export let iconButtons = [
    { name: "health", iconClass: "fa-heart", page: Pages.HEALTH },
    { name: "water", iconClass: "fa-water", page: Pages.WATER },
    { name: "lights", iconClass: "fa-lightbulb", page: Pages.LED },
    { name: "defaults", iconClass: "fa-gear", page: Pages.DEFAULTS },
];
