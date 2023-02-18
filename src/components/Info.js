import * as React from 'react';
import { useState } from 'react';



export default function Info({ item, id, deletePerson }) {
  return (
    <form id={id} onSubmit={deletePerson} className="infoblock">
        <p>{item.name}</p>
        <p>{item.number}</p>
        <button type='submit' className='delete-button'>Delete</button>
    </form>
  );
}
