import sortPerson from '../mathers';

const testArr = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const comparativeArr = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('test Arrays sort', () => {
  const result = sortPerson(testArr);
  expect(result).toEqual(comparativeArr);
});
