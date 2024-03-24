import { map, compact } from 'lodash'

import type Event from './types/event'
import type EventSerialized from './types/event_serialized'

import { EventSerializer } from './event_serializer'

export class EventsSerializer {
  events: Event[]

  constructor (events: Event[]) {
    this.events = events
  }

  serialize (): Array<EventSerialized | undefined> {
    return compact(
      map(
        this.events, event => new EventSerializer(event).serialize()
      )
    )
  }
}
