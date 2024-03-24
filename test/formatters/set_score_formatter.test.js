const SetScoreFormatter = require('../../dist/src/formatters/set_score_formatter').default;

describe('SetScoreFormatter', () => {
  it('formats score giving every set its number', () => {
    let formatter = new SetScoreFormatter();

    expect(
      formatter.score({ participant1: 'Chelsea', participant2: 'Arsenal', score: '3:0,25:23,25:19,25:21' })
      ).toBe('Main score: 3:0 (set1 25:23, set2 25:19, set3 25:21)');
  });

  it('formats score with any number of sets', () => {
    let formatter = new SetScoreFormatter();

    expect(
      formatter.score({ participant1: 'Chelsea', participant2: 'Arsenal', score: '3:2,25:23,25:19,27:25,25:13,12:25' })
      ).toBe('Main score: 3:2 (set1 25:23, set2 25:19, set3 27:25, set4 25:13, set5 12:25)');
  })
});