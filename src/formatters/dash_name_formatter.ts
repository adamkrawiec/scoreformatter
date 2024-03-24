import type Match from "../types/event";
import INameFormatter from "../interfaces/name_formatter";

export default class DashNameFormatter implements INameFormatter {
  eventName(match: Match): string {
    return `${match.participant1} - ${match.participant2}`;
  }
}