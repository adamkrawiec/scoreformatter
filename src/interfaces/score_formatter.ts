import type Match from '../types/event';

export default interface IScoreFormatter {
  score(match: Match): string | undefined;
}
