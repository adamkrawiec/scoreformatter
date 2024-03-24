const ScoreFormatter = require('../../dist/src/formatters/score_formatter').default;

describe('ScoreFormatter', () => {
  it('formats score', () => {
    let formatter = new ScoreFormatter();

    expect(
      formatter.score({ participant1: 'Chelsea', participant2: 'Arsenal', score: '2:1' })
      ).toBe('2:1');
  });
});