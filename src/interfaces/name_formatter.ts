import type Match from '../types/event';

export default interface INameFormatter {
  eventName(match: Match): string;
}
