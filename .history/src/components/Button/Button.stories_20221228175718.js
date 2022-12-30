import React from 'react'
import Button from './Button'

export default {
    title: 'Form/control/Button',
    component: Button
}

export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>

const Template = args => <Button {...args} />

// export const PrimaryA = Temlate.bind({})
// PrimaryA.args = {
//     variant: 'primary',
//     children: 'Primary Args'
// }

// export const SecondaryA = Template.bind({})
// Secondary.args = {
//     variant: 'secondary',
//     children: 'Secondary Args'
// }
