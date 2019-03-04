import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Component from './Component';

const GET_QTS_USUARIOS = gql`
    {
        qtsUsuarios
    }
`

const Usuario = (props) => (
    <Query query={GET_QTS_USUARIOS}>
        {({ loading, error, data }) => (
            <Component
                {...props}
                qtsUsuarios={data.qtsUsuarios}
                usuarioLoading={loading}
                usuarioError={error}
            />
        )}
    </Query>
)

export default Usuario;
