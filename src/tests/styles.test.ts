import styles from '../styles';

test.each([
  [{width: '100px'}],
  [{width: '100px', height: '50px'}],
  [{width: null, height: '50px'}],
  [{width: '100px', height: undefined}],
])('styles', (value) => {
  expect(styles(value)).toMatchSnapshot()
});
