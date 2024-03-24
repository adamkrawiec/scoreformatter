import type Match from "../types/event";
import IScoreFormatter from "../interfaces/score_formatter";
import { isNil } from 'lodash';

export default class SetScoreFormatter implements IScoreFormatter {
  score(match: Match): string | undefined {
    const { score } = match;
    
    if(isNil(score)) return undefined;

    // TUDU figure out why basketball score works
    if(Array.isArray(score)) return score.join(",")

    let [mainScore, ...setScores] = score.split(',');
      
    let setScoresFormatted = setScores.map((setScore, i) => `set${i + 1} ${setScore}`).join(", ");
    return `Main score: ${mainScore} (${setScoresFormatted})`;
  }
}