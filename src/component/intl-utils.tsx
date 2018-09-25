import * as React from 'react';
import { injectIntl } from 'react-intl';
import InjectedIntlProps = ReactIntl.InjectedIntlProps;

interface Props extends InjectedIntlProps{
    ids: string[],
    children: (texts: string[]) => React.ReactElement<{}>
}

function FormattedMultipleMessages<T>(props: Props) {
    const texts = props.ids
        .map((id) => ({ id }))
        .map((messageDescription) => props.intl.formatMessage(messageDescription));

    return props.children(texts);
}

export default injectIntl<Props>(FormattedMultipleMessages);
