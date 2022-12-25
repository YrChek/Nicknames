import Validator from '../validator';

test.each([
  ['test1', 'n', true],
  ['test2', 'naMe', true],
  ['test3', 'name_2-ru', true],
  ['test4', '2name', false],
  ['test5', 'name@ru', false],
  ['test6', 'имя', false],
  ['test7', 'name1234ru', false],
  ['test8', 'name123ru', true],
  ['test9', 'name2', false],
])('тестирование "%s"', (_, names, expected) => {
  const nicknameTest = new Validator(names);
  const testing = nicknameTest.validateUsername();
  expect(testing).toBe(expected);
});
