import getSpecialAttacks from '../app';

test('Getting Special Attacks', () => {
  const received = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'https://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'https://...',
        // <- обратите внимание, описание "засекречено"
      },
    ],
  };
  const expected = [
    {
      id: 8, name: 'Двойной выстрел', icon: 'https://...', description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9, name: 'Нокаутирующий удар', icon: 'https://...', description: 'Описание недоступно',
    },
  ];
  expect(getSpecialAttacks(received)).toEqual(expected);
});
