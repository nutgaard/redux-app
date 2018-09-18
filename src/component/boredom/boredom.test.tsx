import * as React from 'react';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';
import { Boredom } from './boredom';
import messages from '../../bundle';
import { ReactNode } from 'react';

function mountWithIntl(node: ReactNode) {
    return mount(
        <IntlProvider locale="en" messages={messages.en}>
            {node}
        </IntlProvider>
    );
}

describe('boredom component', () => {
    it('boredom snapshot', () => {
        const findNew = jest.fn();
        const wrapper = mountWithIntl(<Boredom findNew={findNew} />);

        expect(wrapper).toMatchSnapshot();
    });
});
