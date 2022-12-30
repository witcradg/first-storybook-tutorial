import React from 'react'
import Input from './Input'

export default {
    title: 'Form/Input',
    component: Input
}

export const Large = () => <Input size='large'  placeholder="Large Size"></Input>
export const Medium = () => <Input placeholder="Medium Size"></Input>
export const Small = () => <Input size='small'  placeholder="Small Size"></Input>
