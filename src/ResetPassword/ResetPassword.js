import React from 'react'
import VhiInput from '../inputs/TextInput/TextInput';

export default function VhiResetPassword() {
    return (
        <div>
            <VhiInput vplaceholder="Enter your old password"></VhiInput>
            <VhiInput vplaceholder="Enter a new password"></VhiInput>
            <VhiInput vplaceholder="Confirm your new password"></VhiInput>
        </div>
    )
}
