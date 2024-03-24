import type Match from "../types/event";
import INameFormatter from "../interfaces/name_formatter";

export default class VersusNameFormatter implements INameFormatter {
  eventName(match: Match): string {
    return `${match.participant1} vs ${match.participant2}`;
  }
}