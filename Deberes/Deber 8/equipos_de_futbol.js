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
        while (_) try {
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
exports.__esModule = true;
var prompts = require("./node_modules/prompts");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        function agregarEquipos() {
            return __awaiter(this, void 0, void 0, function () {
                var informacion;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts(preguntas)];
                        case 1:
                            informacion = _a.sent();
                            arregloEquipos.push(informacion);
                            decidir();
                            return [2 /*return*/];
                    }
                });
            });
        }
        function editarEquipos() {
            return __awaiter(this, void 0, void 0, function () {
                var indice, caracteristica_a_editar, nuevovalor, Equipoelegido;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts({
                                type: 'number',
                                name: 'indice',
                                message: 'Inserte el indice del equipo que desea editar'
                            })];
                        case 1:
                            indice = _a.sent();
                            if (!(indice.indice < arregloEquipos.length)) return [3 /*break*/, 6];
                            return [4 /*yield*/, prompts({
                                    type: 'text',
                                    name: 'caracteristica',
                                    message: '¿Qué es lo que desea editar?'
                                })];
                        case 2:
                            caracteristica_a_editar = _a.sent();
                            if (!(caracteristica_a_editar.caracteristica == 'Nombre'
                                || caracteristica_a_editar.caracteristica == 'Pais'
                                || caracteristica_a_editar.caracteristica == 'Liga'
                                || caracteristica_a_editar.caracteristica == 'Presupuesto')) return [3 /*break*/, 4];
                            return [4 /*yield*/, prompts({
                                    type: 'text',
                                    name: 'valor',
                                    message: '¿Que desea insertar?'
                                })];
                        case 3:
                            nuevovalor = _a.sent();
                            Equipoelegido = arregloEquipos[indice.indice];
                            switch (caracteristica_a_editar.caracteristica) {
                                case 'Nombre':
                                    Equipoelegido.Nombre = nuevovalor.valor;
                                    break;
                                case 'Pais':
                                    Equipoelegido.Pais = nuevovalor.valor;
                                    break;
                                case 'Liga':
                                    Equipoelegido.Liga = nuevovalor.valor;
                                    break;
                                case 'Presupuesto':
                                    Equipoelegido.Presupuesto = nuevovalor.valor;
                                    break;
                            }
                            decidir();
                            return [3 /*break*/, 5];
                        case 4:
                            console.log('¡La característica insertada no existe!');
                            editarEquipos();
                            _a.label = 5;
                        case 5: return [3 /*break*/, 7];
                        case 6:
                            console.log('¡El indice no existe!');
                            editarEquipos();
                            _a.label = 7;
                        case 7: return [2 /*return*/];
                    }
                });
            });
        }
        function decidir() {
            return __awaiter(this, void 0, void 0, function () {
                var decision;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts({
                                type: 'text',
                                name: 'eleccion',
                                message: 'Insertar nuevo equipo --> 1 \n Editar equipo --> 2 \n Salir --> 3'
                            })];
                        case 1:
                            decision = _a.sent();
                            switch (decision.eleccion) {
                                case '1':
                                    agregarEquipos();
                                    break;
                                case '2':
                                    editarEquipos();
                                    break;
                                case '3':
                                    console.log('Asi han quedado conformados tus equipos:');
                                    console.log(arregloEquipos);
                                    break;
                                default:
                                    console.log('La opción elegida no es válida');
                                    decidir();
                                    break;
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
        var arregloEquipos, preguntas;
        return __generator(this, function (_a) {
            arregloEquipos = [];
            preguntas = [
                {
                    type: 'text',
                    name: 'Nombre',
                    message: 'Inserte el nombre de su equipo'
                },
                {
                    type: 'text',
                    name: 'Pais',
                    message: 'Inserte el pais de origen de su equipo'
                },
                {
                    type: 'text',
                    name: 'Liga',
                    message: 'Inserte la liga en la que se encuentra su equipo'
                },
                {
                    type: 'number',
                    name: 'Presupuesto',
                    message: 'Ingrese el presupuesto actual de su equipo en dólares'
                }
            ];
            agregarEquipos();
            return [2 /*return*/];
        });
    });
}
main();
