"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const moment_1 = __importDefault(require("moment"));
const app = express_1.default();
const port = 8080;
app.get('/', (req, res) => res.send(`Hello World! It's ${moment_1.default().format("dddd Do MMMM YYYY, hh:mm:ss")}`));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//# sourceMappingURL=index.js.map