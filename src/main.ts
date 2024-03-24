import { EventsSerializer } from './events_serializer';
import { events } from '../data';

console.log(new EventsSerializer(events).serialize())