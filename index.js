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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var Student = /** @class */ (function () {
    function Student(studentID, firstname, lastname, age) {
        this.studentID = studentID;
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    Student.prototype.getfullname = function () {
        return "".concat(this.firstname, " ").concat(this.lastname);
    };
    return Student;
}());
var StudentManagementSystem = /** @class */ (function () {
    function StudentManagementSystem() {
        this.students = [];
    }
    StudentManagementSystem.prototype.addstudent = function (student) {
        this.students.push(student);
        console.log("Student ".concat(student.getfullname(), " added"));
    };
    StudentManagementSystem.prototype.viewstudents = function () {
        console.log("Students");
        this.students.forEach(function (student) {
            console.log("Name ".concat(student.getfullname()));
        });
    };
    return StudentManagementSystem;
}());
function managestudent() {
    return __awaiter(this, void 0, void 0, function () {
        var studentSystem, actionchoice, _a, studentInput, newstudent;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    studentSystem = new StudentManagementSystem();
                    _b.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 8];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            type: "list",
                            name: "selectedaction",
                            message: "Select an action",
                            choices: ["addstudent", "viewstudent", "exit"]
                        })];
                case 2:
                    actionchoice = _b.sent();
                    _a = actionchoice.selectedaction;
                    switch (_a) {
                        case "addstudent": return [3 /*break*/, 3];
                        case "viewstudent": return [3 /*break*/, 5];
                        case "exit": return [3 /*break*/, 6];
                    }
                    return [3 /*break*/, 7];
                case 3: return [4 /*yield*/, inquirer_1.default.prompt([{
                            type: "input",
                            name: "studentID",
                            message: "Enter studentID"
                        },
                        {
                            type: "input",
                            name: "firstname",
                            message: "Enter your first name"
                        },
                        {
                            type: "input",
                            name: "lastname",
                            message: "Enter your lastname"
                        },
                        {
                            type: "input",
                            name: "age",
                            message: "Enter your age"
                        }
                    ])];
                case 4:
                    studentInput = _b.sent();
                    newstudent = new Student(studentInput.studentID, studentInput.firstname, studentInput.lastname, parseInt(studentInput.age));
                    studentSystem.addstudent(newstudent);
                    return [3 /*break*/, 7];
                case 5:
                    studentSystem.viewstudents();
                    return [3 /*break*/, 7];
                case 6:
                    console.log("Good bye");
                    _b.label = 7;
                case 7: return [3 /*break*/, 1];
                case 8: return [2 /*return*/];
            }
        });
    });
}
managestudent();
