import React from 'react';

class Users extends React.Component<any, any> {
    render() {
        let {params} = this.props.match;
        return (
            <div>
                <h1>Users</h1>
                <p>{params.id}</p>
            </div>
        );
    }
}

export default Users;