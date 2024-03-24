import type IScoreFormatter from './interfaces/score_formatter'
import type INameFormatter from './interfaces/name_formatter'

import type Event from './types/event'
import type EventSerialized from './types/event_serialized'

import DashNameFormatter from './formatters/dash_name_formatter'
import VersusNameFormatter from './formatters/versus_name_formatter'
import SetScoreFormatter from './formatters/set_score_formatter'
import ScoreFormatter from './formatters/score_formatter'

import { isEmpty, isNil } from 'lodash'

class BaseSerializer {
  event: Event
  nameFormatter: INameFormatter
  scoreFormatter: SetScoreFormatter

  constructor (
    event: Event,
    nameFormatter?: INameFormatter,
    scoreFormatter?: IScoreFormatter
  ) {
    this.event = event
    this.nameFormatter = nameFormatter || new DashNameFormatter()
    this.scoreFormatter = scoreFormatter || new ScoreFormatter()
  }

  get eventName (): string | undefined {
    return this.nameFormatter.eventName(this.event)
  }

  get score (): string | undefined {
    return isEmpty(this.event.score) ? undefined: this.scoreFormatter.score(this.event)
  }

  serialize (): EventSerialized | undefined {
    return (isNil(this.score))
      ? undefined
      : { name: this.eventName, score: this.score }
  }
}

class SoccerSerializer extends BaseSerializer {
  constructor (event: Event) {
    super(event, new DashNameFormatter())
  }
}

class HandballSerializer extends BaseSerializer {
  constructor (event: Event) {
    super(event, new VersusNameFormatter())
  }
}

class VolleyballSerializer extends BaseSerializer {
  constructor (event: Event) {
    super(event, new DashNameFormatter(), new SetScoreFormatter())
  }
}

class BasketballSerializer extends BaseSerializer {
}

class TennisSerializer extends BaseSerializer {
  constructor (event: Event) {
    super(event, new VersusNameFormatter(), new SetScoreFormatter())
  }
}

class SkiJumpingSerializer extends BaseSerializer {
}

export class EventSerializer {
  event: Event

  static mapping = {
    soccer: SoccerSerializer,
    volleyball: VolleyballSerializer,
    handball: HandballSerializer,
    basketball: BasketballSerializer,
    tennis: TennisSerializer,
    'ski jumping': SkiJumpingSerializer
  }

  constructor (event: Event) {
    this.event = event
  }

  serializer (): BaseSerializer {
    const eventSerializerClass= EventSerializer.mapping[this.event.sport]
    if (isNil(eventSerializerClass)) throw new Error('Sport type not supported!')

    const eventSerializer = new eventSerializerClass(this.event)
    return eventSerializer
  }

  serialize (): EventSerialized | undefined {
    return this.serializer().serialize()
  }
}
