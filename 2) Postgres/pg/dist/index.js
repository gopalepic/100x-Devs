"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
require('dotenv').config();
function postgresQuery() {
    return __awaiter(this, void 0, void 0, function* () {
        let { CONNECTION_STRING } = process.env;
        const connectionString = `${CONNECTION_STRING}`;
        const client = new pg_1.Client({
            connectionString
        });
        try {
            yield client.connect();
            console.log("Connected to database");
            const Relationships = `
          SELECT * FROM beepic
          INNER JOIN epic ON beEPic.collage = epic.collage
        `;
            const res = yield client.query(Relationships);
            console.log("Joined table data : ");
            console.log(res.rows);
        }
        catch (err) {
            console.error('Error during process:', err);
        }
        finally {
            yield client.end();
        }
    });
}
postgresQuery();
