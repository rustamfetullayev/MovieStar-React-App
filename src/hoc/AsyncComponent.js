import React, {Component} from 'react';

const asyncComponent = (importedComponent) => {
    return class extends Component{
        state = {
            component: null
        }

        componentDidMount(){
            importedComponent().then(cmp => {
                this.setState(
                    {
                        component: cmp.default
                    }
                )
            })
        }

        render(){
            let Comp = this.state.component;

            return  Comp ? <Comp {...this.props} /> : null;
        }
    }
}

export default asyncComponent;