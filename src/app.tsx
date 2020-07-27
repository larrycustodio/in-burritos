import React, { FC, useState, ChangeEvent, FormEvent } from 'react'
import styled from 'styled-components'
import { GlobalStyle } from './components/GlobalStyle'
import { RadioSelect } from './components/RadioSelect'

const App: FC = () => {
  const [comparePrice, setComparePrice] = useState<number>(0)
  const [filling, setFilling] = useState<string>('')
  const [includeGuac, setIncludeGuac] = useState<boolean>(false)
  const [includeCheese, setIncludeCheese] = useState<boolean>(false)

  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const { target: { id, checked } } = e
    if (id === 'extras') {
      setIncludeGuac(checked)
    }

    if (id === 'extras1') {
      setIncludeCheese(checked)
    }
  }

  const handleChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    setFilling(e.target.value)
  }

  const handleChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e
    const numValue = parseInt(value, 10)
    if (isNaN(numValue)) return
    setComparePrice(numValue)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  const fillingOptions = [
    {id: "0", label: 'Pork', value: 'pork'},
    {id: "1", label: 'Chicken', value: 'chicken'},
    {id: "2", label: 'Beef', value: 'beef'},
    {id: "3", label: 'Fish', value: 'fish'},
    {id: "4", label: 'Tofu', value: 'tofu'},
  ]

  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <div>
          <form onSubmit={handleSubmit}>
            <RadioSelect label="Select a filling" options={fillingOptions} handleChange={handleChangeRadio} selected={filling} />
            <div className="form-group">
              <label htmlFor="extras">
                <div>Feeling Guac today?</div>
                <input id="extras" type="checkbox" checked={includeGuac} onChange={handleChangeCheckbox} />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="extras1">
                <div>Want some cheese?</div>
                <input id="extras1" type="checkbox" checked={includeCheese} onChange={handleChangeCheckbox} />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="comparePrice">
                <div>Price:</div>
                <input id="comparePrice" type="number" step="any" value={comparePrice} onChange={handleChangePrice} />
              </label>
            </div>
            <button type="submit">Calculate!</button>
          </form>
          <div>
            TODO TODO TODO RESULTS
          </div>
        </div>
      </AppWrapper>
    </>
  )
}

const AppWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`

export default App
