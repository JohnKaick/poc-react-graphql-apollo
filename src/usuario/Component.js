import React from 'react';
import { Statistic } from 'semantic-ui-react';

class Usuario extends React.Component {
    render() {
        return (
            <Statistic>
                <Statistic.Value>{this.props.qtsUsuarios}</Statistic.Value>
                <Statistic.Label>Usuário <br />Cadastrados</Statistic.Label>
            </Statistic>
        )
    }
}

export default Usuario;