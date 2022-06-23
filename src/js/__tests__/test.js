import ErrorRepository from '../app';

test.each([[
  1,
  'Error 1',
],
[
  3,
  'Error 3',
]])('проверка кода ошибки', () => {
  const errorRepo = new ErrorRepository();

  expect(errorRepo.translate(1)).toBe('Error-1');
});

test('проверка неизвестной оишбки', () => {
  const errorRepo = new ErrorRepository();

  expect(errorRepo.translate(4)).toBe('Unknown error');
});
