import React from 'react'

import DynamicBox from './dynamic-box'

type Props = { globalState: { text: string } };

const App = ({ globalState: { text } }: Props) => {
  return (
    <section className="section">
      <DynamicBox text={text} />
    </section>
  )
}

export default App
