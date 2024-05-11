import { classNames } from "shared/lib/classNames/classNames";

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('some')).toBe('some');
  });

  test('with additional class', () => {
    const expected = 'some class1 class2';
    expect(classNames('some', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'some class1 class2 hovered scroll';
    expect(classNames('some', {hovered: true, scroll: true}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'some class1 class2 hovered';
    expect(classNames('some', {hovered: true, scroll: false}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'some class1 class2 hovered';
    expect(classNames('some', {hovered: true, scroll: undefined}, ['class1', 'class2'])).toBe(expected);
  })
})