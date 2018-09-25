import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Field, Form, Formik, FormikActions } from 'formik';
import { Select } from './../formikcomponents';
import { Hovedknapp } from 'nav-frontend-knapper';
import Intl from './intl';
import './step.css';
import { required } from '../validators';
import FormattedMultipleMessages from '../intl-utils';
import { Input } from '../formikcomponents';

type Type = 'bedrift' | 'privat' | '';
interface Values {
    skade: string;
    bedriftEllerPrivat: Type;
    identifikatorNr: string;
    forsikringsnummer: string;
}

const initialValues: Values = {
    skade: '',
    bedriftEllerPrivat: '',
    identifikatorNr: '',
    forsikringsnummer: ''
};

const onSubmit = (fn: () => void) => (values: Values, actions: FormikActions<any>) => {
    console.log('values', values); // tslint:disable-line
    setTimeout(() => actions.setSubmitting(false), 10000);
    fn();
};

const validate = (values: Values) => {
    const errors: Partial<Values> = {};

    required(errors, values, 'skade');
    required(errors, values, 'bedriftEllerPrivat');

    return errors;
};
interface Props {
    onSubmit(): void
}
function Step3(props: Props) {
    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit(props.onSubmit)}
            className="stepform"
        >
            {() => (
                <Form>
                    <FormattedMultipleMessages ids={[Intl.step3LabelSkade, Intl.step3LabelSkadeValg1, Intl.step3LabelSkadeValg2]} >
                        {([label, valg1, valg2]) => (
                            <Field label={label} name="skade" component={Select}>
                                <option value="">-- Velg --</option>
                                <option value="HARVERK">{valg1}</option>
                                <option value="STORM">{valg2}</option>
                            </Field>
                        )}
                    </FormattedMultipleMessages>

                    <FormattedMultipleMessages ids={[Intl.step3LabelBedriftEllerPrivat, Intl.step3LabelBedriftEllerPrivatBedrift, Intl.step3LabelBedriftEllerPrivatPrivat]} >
                        {([label, valg1, valg2]) => (
                            <Field label={label} name="bedriftEllerPrivat" component={Select}>
                                <option value="">-- Velg --</option>
                                <option value="bedrift">{valg1}</option>
                                <option value="privat">{valg2}</option>
                            </Field>
                        )}
                    </FormattedMultipleMessages>

                    <FormattedMessage id={Intl.step3LabelIdentifikatorNr}>
                        {(label: string) => <Field label={label} name="identifikatorNr" component={Input} />}
                    </FormattedMessage>

                    <FormattedMessage id={Intl.step2LabelMobilnummber}>
                        {(label: string) => <Field label={label} name="forsikringsnummer" component={Input} />}
                    </FormattedMessage>

                    <Hovedknapp htmlType="submit">
                        <FormattedMessage id={Intl.stepSubmit}/>
                    </Hovedknapp>
                </Form>
            )}
        </Formik>
    );
}

export default Step3;
