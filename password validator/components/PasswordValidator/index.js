import {useState} from 'react'

import {
  PasswordValidatorContainer,
  CardContainer,
  Heading,
  Paragraph,
  InputElement,
  ParagraphOne,
} from './styledComponents'

const PasswordValidator = () => {
  const [onCount, setOnCount] = useState('')

  const onChangeValue = event => {
    setOnCount(event.target.value)
  }

  const Count = onCount.length

  const ErrorMsg = Count < 8 && (
    <ParagraphOne>Your password must be at least 8 characters</ParagraphOne>
  )

  return (
    <PasswordValidatorContainer>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <InputElement
          onChange={onChangeValue}
          type="password"
          value={onCount}
        />

        {ErrorMsg}
      </CardContainer>
    </PasswordValidatorContainer>
  )
}

export default PasswordValidator
