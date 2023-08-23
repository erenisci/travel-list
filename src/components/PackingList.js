import { useState } from 'react';
import Item from './Item';

export default function PackingList({ items, onDeleteItem, onToggleItems, onClearList }) {
  const [sortBy, setSortBy] = useState('input');
  let sortedItems;

  if (sortBy === 'input') sortedItems = items;
  console.log(items, sortedItems);
  if (sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  console.log(items, sortedItems);
  if (sortBy === 'packed') sortedItems = items.slice().sort((a, b) => +a.packed - +b.packed);
  console.log(items, sortedItems);

  return (
    <div className='list'>
      <ul>
        {sortedItems.map(item => (
          <Item item={item} onDeleteItem={onDeleteItem} onToggleItems={onToggleItems} key={item.id} />
        ))}
      </ul>

      <div className='actions'>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
        </select>
        {/* <button onClick={() => items.map(item => onDeleteItem(item.id))}>Clear list</button> */}
        <button onClick={() => onClearList()}>Clear list</button>
      </div>
    </div>
  );
}
