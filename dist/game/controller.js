"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const entity_1 = require("./entity");
const color_1 = require("../lib/color");
const colors = ['red', 'green', 'blue', 'yellow', 'magenta'];
const isValidColor = (color) => {
    return colors.includes(color);
};
let GameController = class GameController {
    async allGames() {
        const games = await entity_1.default.find();
        return { games };
    }
    async updateGame(id, update) {
        const game = await entity_1.default.findOne(id);
        if (!game)
            throw new routing_controllers_1.NotFoundError('Cannot find game!');
        else
            return entity_1.default.merge(game, update).save();
    }
    async createGame(game) {
        if (game.color && isValidColor(game.color)) {
            const result = await entity_1.default.save(game);
            return { result };
        }
        if (!game.color) {
            const color = color_1.randomColor();
            const result = await entity_1.default.save({ name: game.name, color: color });
            return { result };
        }
        else
            return "Please enter a valid color";
    }
};
__decorate([
    routing_controllers_1.Get('/games')
], GameController.prototype, "allGames", null);
__decorate([
    routing_controllers_1.Put('/games/:id'),
    __param(0, routing_controllers_1.Param('id')),
    __param(1, routing_controllers_1.Body())
], GameController.prototype, "updateGame", null);
__decorate([
    routing_controllers_1.Post('/games'),
    routing_controllers_1.HttpCode(201),
    __param(0, routing_controllers_1.Body())
], GameController.prototype, "createGame", null);
GameController = __decorate([
    routing_controllers_1.JsonController()
], GameController);
exports.default = GameController;
//# sourceMappingURL=controller.js.map