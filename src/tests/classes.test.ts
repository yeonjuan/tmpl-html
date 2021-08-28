import classes from '../classes';

test.each([
  [{foo: true}],
  [{foo: false}],
  [{foo: true, bar: true}],
])('classes - record', (value) => {
  expect(classes(value)).toMatchSnapshot()
});


test.each([
  ["foo", "bar"],
  ["foo", undefined],
  ["foo", null, "bar"],
])('classes - string', (...value) => {
  expect(classes(...value)).toMatchSnapshot()
});
