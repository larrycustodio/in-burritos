import React, { FC, ChangeEvent } from 'react'
import styled from 'styled-components'

interface RadioOption {
  id: string
  label: string
  value: string
}

interface RadioSelectProps {
  label: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  options: RadioOption[]
  selected: string
}

const RadioSelect: FC<RadioSelectProps> = ({ handleChange, label, options, selected }) => {
  if (!options.length) return null

  return (
    <FormGroup>
      <FormLabel>{label}</FormLabel>
      <OptionsGroup>
      {options.map((option) => {
        return (
          <OptionLabel htmlFor={option.id} key={option.id}>
            <OptionButton
              checked={selected === option.value}
              id={option.id}
              onChange={handleChange}
              type="radio"
              value={option.value}
              />
              <OptionText>{option.label}</OptionText>
          </OptionLabel>
        )
      })}
      </OptionsGroup>
    </FormGroup>
  )
}

const FormGroup = styled.div`
  margin-bottom: 18px;
  padding: 18px;
`
const FormLabel = styled.div`
  font-weight: bold;
  margin-bottom: 9px;
`
const OptionsGroup = styled.div`
  display: flex;
  justify-content: space-around;
`
const OptionLabel = styled.label``

const OptionButton = styled.input`
  display: none;
  /* style label */
  :checked + div {
    border-color: #3c4257;
    color: #3c4257;
    font-weight: bold;
  }
` 
const OptionText = styled.div`
  align-items: center;
  border: 1px solid #eef1f4;
  border-radius: 4px;
  color: #697386;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  justify-content: center;
  height: 68px;
  width: 68px;  
`

export { RadioSelect }