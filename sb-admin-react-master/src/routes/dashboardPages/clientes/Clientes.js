import React, { PropTypes } from 'react';
import PageHeader from 'react-bootstrap/lib/PageHeader';

  const title = 'Clientes';

  function displayClientes(props, context) {
    context.setTitle(title);
    return (
      <div>
        <div className="col-lg-12">
          <PageHeader>Clientes</PageHeader>
        </div>
      </div>
    );
  }

displayClientes.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayClientes;
