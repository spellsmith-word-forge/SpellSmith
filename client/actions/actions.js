import * as types from '../constants/types.js';
import { createAction } from '@reduxjs/toolkit';

//actions needed
export const score = createAction(types.SCORE); // Returns the current score?
export const pass = createAction(types.PASS); // What happens if you spell correctly - add to score in state
export const fail = createAction(types.FAIL); // What happens if you don't spell correctly - subtract to score in state
export const save = createAction(types.SAVE); //save score to db
export const newWord = createAction(types.NEWWORD); //save score to db