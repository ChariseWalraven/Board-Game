import { JsonController, Get, Post, Put, Param, Body, HttpCode, NotFoundError } from 'routing-controllers'
import Game from './entity'
import { defaultBoard, randomColor } from '../lib/color';

const colors = ['red', 'green', 'blue', 'yellow', 'magenta']

const isValidColor = (color) => {
  return colors.includes(color)
}

const moves = (board1, board2) =>
  board1
    .map((row, y) => row.filter((cell, x) => board2[y][x] !== cell))
    .reduce((a, b) => a.concat(b))
    .length

@JsonController()
export default class GameController {

  @Get('/games')
    async allGames(){
    const games = await Game.find()
    return { games }
  }

  
  @Put('/games/:id')
  async updateGame(
    @Param('id') id: number,
    @Body() update: Partial<Game>
  ) {
    const game = await Game.findOneById(id)
    if(!game) throw new NotFoundError('Cannot find game!')
    if(moves(game.board, defaultBoard) < 1) return Game.merge(game, update).save()
    else return "Invalid move"
  }
  
  @Post('/games')
  @HttpCode(201)
  async createGame(
  @Body({validate: true}) game: Game
  ) {    
    // await console.log(game)
    // const valid = game.color
    // console.log('_____________\nCOLOR:',valid)
    
      const result = await Game.save({name: game.name, color: randomColor()})
      return { result }

    // { name: game.name, color: randomColor() }
  }
}