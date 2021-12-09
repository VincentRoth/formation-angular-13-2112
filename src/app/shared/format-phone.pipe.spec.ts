import { FormatPhonePipe } from './format-phone.pipe';

describe('FormatPhonePipe', () => {
  let pipe: FormatPhonePipe;

  beforeEach(() => {
    pipe = new FormatPhonePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should handle null value', () => {
    expect(pipe.transform(null)).toBeNull();
  });

  it('should handle undefined value', () => {
    expect(pipe.transform(undefined)).toBeUndefined();
  });

  it('should transform value with default separator', () => {
    const input = '01.23.45.67.89';
    const output = '01 23 45 67 89';
    expect(pipe.transform(input)).toEqual(output);
  });

  it('should transform value with defined separator', () => {
    const input = '01.23.45.67.89';
    const output = '01-23-45-67-89';
    expect(pipe.transform(input, '-')).toEqual(output);
  });

  it('should not transform a value that has nothing to be replaced', () => {
    const input = '0123456789';
    const output = input;
    expect(pipe.transform(input)).toEqual(output);
  });

  it('should handle non string value', () => {
    const input: any = 123456789.25;
    const output = input;
    expect(pipe.transform(input)).toEqual(output);
  });
});
