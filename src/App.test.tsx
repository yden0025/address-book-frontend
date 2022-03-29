import { isUnique } from "./pages/Contact";
import { ICounter } from "./redux/reducers/contact";

test('check unique', () => {
  const counter: ICounter = { 'Alice': 1, 'Bob': 2 }
  expect(isUnique(counter, 'Alice')).toBe('yes');
  expect(isUnique(counter, 'Bob')).toBe('no');
});


