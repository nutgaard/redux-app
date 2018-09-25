import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Field, Form, Formik, FormikActions } from 'formik';
import { Normaltekst } from 'nav-frontend-typografi';
import { Input, Textarea } from './../formikcomponents';
import { Hovedknapp } from 'nav-frontend-knapper';
import Intl from './intl';
import './step.css';

interface Values {
    hvor: string;
    hva: string;
}

const initialValues: Values = {
    hvor: '',
    hva: ''
};

const onSubmit = (fn: () => void) => (values: Values, actions: FormikActions<any>) => {
    console.log('values', values); // tslint:disable-line
    setTimeout(() => actions.setSubmitting(false), 10000);
    fn();
};

const validate = (values: Values) => {
    const errors: Partial<Values> = {};
    if (!values.hva || values.hva.length === 0) {
        errors.hva = 'Må fylles ut';
    }
    if (!values.hvor || values.hvor.length === 0) {
        errors.hvor = 'Må fylles ut';
    }
    return errors;
};
interface Props {
    onSubmit(): void
}
function Step1(props: Props) {
    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit(props.onSubmit)}
            className="stepform"
        >
            {() => (
                <Form>
                    <Normaltekst className="blokk-m">
                        <FormattedMessage id={Intl.step1Ingress}/>
                    </Normaltekst>
                    <FormattedMessage id={Intl.step1LabelHva}>
                        {(label: string) => <Field label={label} name="hva" component={Textarea} />}
                    </FormattedMessage>
                    <FormattedMessage id={Intl.step1LabelHvor}>
                        {(label: string) => <Field label={label} name="hvor" component={Input} />}
                    </FormattedMessage>
                    <Hovedknapp htmlType="submit">
                        <FormattedMessage id={Intl.stepSubmit}/>
                    </Hovedknapp>
                </Form>
            )}
        </Formik>
    );
}

export default Step1;
