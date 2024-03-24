const DashNameFormatter = require('../../dist/src/formatters/dash_name_formatter').default;

describe('DashNameFormatter', () => {
  it('formats name with dash', () => {
    let formatter = new DashNameFormatter();

    expect(
      formatter.eventName({ participant1: 'Chelsea', participant2: 'Arsenal' })
    ).toBe('Chelsea - Arsenal');
  });
});