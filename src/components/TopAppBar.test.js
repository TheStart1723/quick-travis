import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import TopAppBar from '../TopAppBar'

test('TopAppBar should render passed props as content body and respond to callback props', () => {
  const userRole = "seller"
  const {getByTestId} = render(<TopAppBar userRole={userRole}/>)
  const headerVal = getByTestId('header')
  expect(headerVal.textContent).toBe("seller")
})