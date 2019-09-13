import styles from './index.module.css';

import React from 'react';
import compassIcon from './images/compass-menu.png';
import Input from 'component/form/Input';
import Button from 'component/form/Button';
import Form from 'component/form/Form';
import FormField from 'component/form/FormField';

function login () {
  return (
    <div className={styles.wrapper}>
      <img alt="compass" src={compassIcon}/>
      <Form>
        <FormField>
          <h2>LOG IN</h2>
          <Input
            icon="lock"
            placeholder="E-mail"
            size="big"
          />
          <Input
            icon="lock"
            placeholder="Senha"
            size="big"
          />
          <Button className="button" circular={false}>Acessar</Button>
        </FormField>
      </Form>
    </div>
  );
}


export default login;
