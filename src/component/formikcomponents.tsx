import * as React from 'react';
import {
    Input as InputOrg,
    Select as SelectOrg,
    Textarea as TextareaOrg,
    Radio as RadioOrg
} from 'nav-frontend-skjema';

export function formik(Component: React.ComponentType<any>) {
    return (props: any) => {
        const { field, form } = props;
        const error = form.errors[field.name];
        const touched = form.touched[field.name];
        const errorMessage = touched && !!error ? { feilmelding: error } : null;

        return (
            <Component
                {...props.field}
                label={props.label}
                feil={errorMessage}
            >
                {props.children}
            </Component>
        );
    }
}

export const Input = formik(InputOrg);
export const Textarea = formik(TextareaOrg);
export const Select = formik(SelectOrg);
export const Radio = formik(RadioOrg);
