"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Here, hamile boolean, number, string kun maa lagxa vanni ta taha pai halxum but we cannot determine the type of app, request, response etc. So, we already installed (npm install @types/express --save-dev) this package which can determine the types of these. So, we import the application, request and response from the express to determine the types of app, req and res.
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
//requiring model
require('./model/index');
app.get('/', (req, res) => {
    res.send("Hello World");
});
app.get('/about', (req, res) => {
    res.send("Hello World from about page.");
});
app.listen(PORT, () => {
    console.log("Server has started at port", PORT);
});
