import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { UnmountClosed }from 'react-collapse';

export interface StepConfig {
    title: string;
    component: React.ComponentType<{ onSubmit: any }>;
}

interface Props {
    stepconfig: StepConfig[]
}
interface State {
    currentIndex: number;
}

class Stepcontainer extends React.Component<Props, State> {
    state = {
        currentIndex: 0
    };

    updateState = (index: number) => () => this.setState({ currentIndex: index });

    public render() {
        const augmentedChildren = this.props.stepconfig.map((config, index) => {
            const available = index <= this.state.currentIndex;
            return (
                <div key={config.title}>
                    <button className="stepcontainer__header" onClick={this.updateState(index)} disabled={!available}>
                        <FormattedMessage id={config.title} />
                    </button>
                    <UnmountClosed isOpened={index === this.state.currentIndex}>
                        <div className="stepcontainer__wrapper">
                            {React.createElement(config.component, {onSubmit: this.updateState(index + 1)} as any)}
                        </div>
                    </UnmountClosed>
                </div>
            );
        });

        return (
            <div className="App steps">
                {augmentedChildren}
            </div>
        );
    }
}

export default Stepcontainer;
