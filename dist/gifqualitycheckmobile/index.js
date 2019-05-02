"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_navigation_1 = require("react-navigation");
var LandingScreen_1 = __importDefault(require("./LandingScreen"));
var StackNavigator = react_navigation_1.createStackNavigator({
    Home: LandingScreen_1.default,
});
exports.default = StackNavigator;
