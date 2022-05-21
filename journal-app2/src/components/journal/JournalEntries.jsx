import React from 'react'
import { JournalEntry } from './JournalEntry';

export const JournalEntries = () => {

    const entires = [1,23,4,5];

  return (
    <div className='journal__entries'>
        {
            entires.map(value => (
                <JournalEntry key={value}/>
            ))
        }
    </div>
  )
}
