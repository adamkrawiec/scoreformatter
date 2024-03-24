// Import this named export into your test file:
export const mockSerialize = jest.fn();

export const mock = jest.fn().mockImplementation(() => {
  return { serialize: mockSerialize};
});