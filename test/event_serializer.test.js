const { EventSerializer } = require("../dist/src/event_serializer");

describe("event_serializer.ts", () => {
  describe("EventSerializer", () => {
    describe("when sport is soccer", () => {
      let event = {
        sport: 'soccer',
        participant1: 'Chelsea',
        participant2: 'Arsenal',
        score: '2:1',
      };
      let eventSerialized = new EventSerializer(event).serialize();
      
      it("returns name formatted with dash", () => {
        expect(eventSerialized.name).toBe("Chelsea - Arsenal");
      });
      
      it("returns score formatted", () => {
        expect(eventSerialized.score).toBe("2:1");
      });
    });

    describe("when sport is volleyball", () => {
      let event = {
        sport: 'volleyball',
        participant1: 'Germany',
        participant2: 'France',
        score: '3:0,25:23,25:19,25:21',
      };
      let eventSerialized = new EventSerializer(event).serialize();
      
      it("returns name formatted with dash", () => {
        expect(eventSerialized.name).toBe("Germany - France");
      });
      
      it("returns score formatted", () => {
        expect(eventSerialized.score).toBe(
          "Main score: 3:0 (set1 25:23, set2 25:19, set3 25:21)"
        );
      });
    });

    describe("when sport is handball", () => {
      let event = {
        sport: 'handball',
        participant1: 'Pogoń Szczeciń',
        participant2: 'Azoty Puławy',
        score: '34:26',
      };
      let eventSerialized = new EventSerializer(event).serialize();

      it("returns name formatted with vs", () => {
        expect(eventSerialized.name).toBe("Pogoń Szczeciń vs Azoty Puławy");
      });
      
      it("returns score formatted", () => {
        expect(eventSerialized.score).toBe(
          "34:26"
        );
      });
    });

    describe("when sport is basketball", () => {
      let event = {
        sport: 'basketball',
        participant1: 'GKS Tychy',
        participant2: 'GKS Katowice',
        score: [
            ['9:7', '2:1'],
            ['5:3', '9:9']
        ],
      };
      let eventSerialized = new EventSerializer(event).serialize();

      it("returns name formatted with dash", () => {
        expect(eventSerialized.name).toBe("GKS Tychy - GKS Katowice");
      });
      
      it("returns score formatted", () => {
        expect(eventSerialized.score).toBe(
          "9:7,2:1,5:3,9:9"
        );
      });
    });

    describe("when sport is tennis", () => {
      let event = {
        sport: "tennis",
        participant1: 'Maria Sharapova',
        participant2: 'Serena Williams',
        score: '2:1,7:6,6:3,6:7',
      };
      let eventSerialized = new EventSerializer(event).serialize();
      
      it("returns name formatted with vs", () => {
        expect(eventSerialized.name).toBe("Maria Sharapova vs Serena Williams");
      });
      
      it("returns score formatted", () => {
        expect(eventSerialized.score).toBe(
          "Main score: 2:1 (set1 7:6, set2 6:3, set3 6:7)"
        );
      });
    });

    describe("when sport is ski jumping", () => {
      let event = {
        sport: "ski jumping",
      }
      let eventSerialized = new EventSerializer(event).serialize();
      
      it("does not serialize the event", () => {
        expect(eventSerialized).toBeUndefined();
      });
    });

    describe("when there is no serializer for a sport", () => {
      let event = {
        sport: "chess",
        participant1: 'Magnus Carlsen',
        participant2: 'Hikaru Nakamura',
        score: '1:0',
      };

      it("raises an error", () => {
        expect(() => new EventSerializer(event).serialize()).toThrow("Sport type not supported!");
      });
    })
  });
});