const { EventsSerializer } = require("../dist/src/events_serializer");
const { EventSerializer } = require("../dist/src/event_serializer");

jest.mock("../dist/src/event_serializer");

describe("events_serializer.ts", () => {
  describe("EventsSerialier", () => {
    let events = [
      {
        sport: "soccer",
      },
      {
        sport: "volleyball",
      }
    ];

    it("calls EventSerializer for each event", () => {
      new EventsSerializer(events).serialize();

      expect(EventSerializer).toHaveBeenCalledTimes(2);
    })
  });
});