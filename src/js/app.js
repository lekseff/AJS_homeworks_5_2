export default function getSpecialAttacks({ special }) {
  for (const prop of special) {
    if (!Object.prototype.hasOwnProperty.call(prop, 'description')) {
      prop.description = 'Описание недоступно';
    }
  }
  return special;
}
