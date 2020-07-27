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

  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <div>
          <Form onSubmit={handleSubmit}>
            <RadioSelect
              handleChange={handleChangeRadio}
              label="Select a filling"
              options={[
                { id: "0", label: 'Pork', value: 'pork' },
                { id: "1", label: 'Chicken', value: 'chicken' },
                { id: "2", label: 'Beef', value: 'beef' },
                { id: "3", label: 'Fish', value: 'fish' },
                { id: "4", label: 'Tofu', value: 'tofu' },
              ]}
              selected={filling}
            />
            <div className="form-group">
              <label htmlFor="extras">
                <div>Add Guac?</div>
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
            <ButtonWrapper>
              <Button type="submit">Let's see</Button>
            </ButtonWrapper>
          </Form>
          <Results>
            TODO TODO TODO RESULTS
          </Results>
        </div>
      </AppWrapper>
    </>
  )
}

const AppWrapper = styled.main`
  background-color: #f7fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`

const Form = styled.form`
  background-color: #fff;
  border-radius: 12px;
  color: #373537;
  overflow: hidden;
  width: 480px;
  text-align: center; 
`

const ButtonWrapper = styled.div`
  margin: 0 auto;
  padding: 36px 0;
`

const Button = styled.button`
  background-color: #5368d4;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  line-height: 36px;
  max-width: 380px;
  width: 100%;
  &:focus {
    box-shadow: 0 0 0 3px #88b8ff;
    border-radius: 10px;
    outline: none;
  }
`

// TODO: update results
const Results = styled.div`
  display: none;
`

export default App
