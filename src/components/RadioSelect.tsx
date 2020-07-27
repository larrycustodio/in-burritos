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
            <OptionText>{option.label}</OptionText>
            <OptionButton
              checked={selected === option.value}
              id={option.id}
              onChange={handleChange}
              type="radio"
              value={option.value}
            />
          </OptionLabel>
        )
      })}
      </OptionsGroup>
    </FormGroup>
  )
}

const FormGroup = styled.div``
const FormLabel = styled.div`
  font-weight: bold;
`
const OptionsGroup = styled.div`
  display: flex;
`
const OptionLabel = styled.label`
  text-align: center;
`
const OptionText = styled.div``
const OptionButton = styled.input`` 

export { RadioSelect }