import { useDebounce } from './useDebounce';
import { renderHook, act } from '@testing-library/react-hooks';

describe('useDebounce', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should be defined', () => {
    expect(useDebounce).toBeDefined();
  });

  it('should update value after specified delay', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: '', delay: 500 } },
    );

    expect(result.current).toBe('');
    jest.advanceTimersByTime(510);
    expect(result.current).toBe('');

    rerender({ value: 'Hello World', delay: 500 });

    expect(result.current).toBe('');
    jest.advanceTimersByTime(498);
    expect(result.current).toBe('');

    act(() => jest.advanceTimersByTime(3));
    expect(result.current).toBe('Hello World');
  });
});
