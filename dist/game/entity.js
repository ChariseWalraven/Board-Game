"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const BaseEntity_1 = require("typeorm/repository/BaseEntity");
const color_1 = require("../lib/color");
const class_validator_1 = require("class-validator");
const colors = ['red', 'green', 'blue', 'yellow', 'magenta'];
const isValidColor = (color) => {
    return colors.includes(color);
};
let Game = class Game extends BaseEntity_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({ readonly: true })
], Game.prototype, "id", void 0);
__decorate([
    class_validator_1.IsString(),
    typeorm_1.Column('text', { nullable: false })
], Game.prototype, "name", void 0);
__decorate([
    typeorm_1.Column('text', { nullable: false })
], Game.prototype, "color", void 0);
__decorate([
    typeorm_1.Column('json', { default: color_1.defaultBoard })
], Game.prototype, "board", void 0);
Game = __decorate([
    typeorm_1.Entity()
], Game);
exports.default = Game;
//# sourceMappingURL=entity.js.map