import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Field, Form, Formik, FormikActions } from 'formik';
import { Input } from './../formikcomponents';
import { Hovedknapp } from 'nav-frontend-knapper';
import Intl from './intl';
import './step.css';
import { required } from '../validators';

interface Values {
    fornavn: string;
    etternavn: string;
    mobilnummer: string;
    epost: string;
}

const initialValues: Values = {
    fornavn: '',
    etternavn: '',
    mobilnummer: '',
    epost: ''
};

const onSubmit = (fn: () => void) => (values: Values, actions: FormikActions<any>) => {
    console.log('values', values); // tslint:disable-line
    setTimeout(() => actions.setSubmitting(false), 10000);
    fn();
};

const validate = (values: Values) => {
    const errors: Partial<Values> = {};

    required(errors, values, 'fornavn');
    required(errors, values, 'etternavn');
    required(errors, values, 'mobilnummer');
    required(errors, values, 'epost');

    return errors;
};

interface Props {
    onSubmit(): void
}
function Step2(props: Props) {
    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit(props.onSubmit)}
            className="stepform"
        >
            {() => (
                <Form>
                    <div className="stepform__twocolumn">
                        <FormattedMessage id={Intl.step2LabelFornavn}>
                            {(label: string) => <Field label={label} name="fornavn" component={Input} />}
                        </FormattedMessage>
                        <FormattedMessage id={Intl.step2LabelEtternavn}>
                            {(label: string) => <Field label={label} name="etternavn" component={Input} />}
                        </FormattedMessage>
                    </div>
                    <FormattedMessage id={Intl.step2LabelMobilnummber}>
                        {(label: string) => <Field label={label} name="mobilnummer" component={Input} />}
                    </FormattedMessage>
                    <FormattedMessage id={Intl.step2LabelEpost}>
                        {(label: string) => <Field label={label} name="epost" component={Input} />}
                    </FormattedMessage>
                    <Hovedknapp htmlType="submit">
                        <FormattedMessage id={Intl.stepSubmit}/>
                    </Hovedknapp>
                </Form>
            )}
        </Formik>
    );
}

export default Step2;
