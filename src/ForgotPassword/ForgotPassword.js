import React from 'react'
import VhiInput from '../inputs/TextInput/TextInput';
import VhiButton from '../Buttons/Button/Button';

export default function ForgotPassword() {
    return (
        <div>
            <VhiInput vplaceholder="Enter your email please"></VhiInput>
            <VhiButton vtext="Send"></VhiButton>
        </div>
    )
}
