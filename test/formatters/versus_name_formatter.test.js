const VersusNameFormatter = require('../../dist/src/formatters/versus_name_formatter').default;

describe('VersusNameFormatter', () => {
  it('formats name with vs', () => {
    let formatter = new VersusNameFormatter();

    expect(
      formatter.eventName({ participant1: 'Chelsea', participant2: 'Arsenal' })
      ).toBe('Chelsea vs Arsenal');
  });
});