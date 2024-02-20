import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '.'

type ControlledInputProps<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'defaultValue' | 'disabled' | 'rules'
> &
  Omit<InputProps, 'name' | 'onChange' | 'value'>

export const ControlledInput = <T extends FieldValues>({
  control,
  name,
  shouldUnregister,
  ...rest
}: ControlledInputProps<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    disabled: rest.disabled,
    name,
    shouldUnregister,
  })

  return <Input {...rest} onChange={onChange} value={value} />
}
