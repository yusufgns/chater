import React from 'react'

interface Props {
  children: React.ReactNode
  data: unknown[] | number
}

export default function rfor({ children, data }: Props) {
  const trnasformedData = typeof data === 'number' ? Array.from({ length: data }, (_, i) => i) : data

  return (
    <React.Fragment>
      { trnasformedData.map((dataItem, index) => {
        return React.cloneElement(children as React.ReactElement, { item: dataItem, key: index });
      })}
    </React.Fragment>
  )
}