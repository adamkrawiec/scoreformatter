import type Match from "../types/event";
import IScoreFormatter from "../interfaces/score_formatter";

export default class ScoreFormatter implements IScoreFormatter {
  score(match: Match): string | undefined {
    if(Array.isArray(match.score)) return match.score.join(",")

    return match.score;
  }
}