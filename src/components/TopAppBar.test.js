import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import TopAppBar from './TopAppBar'

test('TopAppBar should render passed props as content body and respond to callback props', () => {
  const userRole = "seller"
  const {getByTestId} = render(<TopAppBar userRole={userRole}/>)
  const headerVal = getByTestId('header')
  fireEvent.click(getByTestId('button'));
  expect(headerVal.textContent).toBe("seller")
})