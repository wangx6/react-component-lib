import React from 'react'
import VhiButton from '../Buttons/Button/Button';
import VhiInput from '../inputs/TextInput/TextInput';

export default function VhiLogin() {
    return (
        <div>
            <VhiInput vplaceholder="Username of email" />
            <VhiInput vtype="password" vplaceholder="Password" />
            <VhiButton vtext="Sign in"></VhiButton>
        </div>
    )
}
