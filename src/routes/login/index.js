import styles from './index.module.css';

import React from 'react';
import Input from 'component/form/Input';
import Button from 'component/form/Button';
import Form from 'component/form/Form';
import FormField from 'component/form/FormField';

function login () {
  return (
		<div className={styles.wrapper}>
      <Form>
				<FormField title="LOG IN">
					<Input name="usurname" placeholder="Usuario"/>
					<Input name="password" icon={true} placeholder="Senha"/>
          <Button className="button" circular={false}>Acessar</Button>
        </FormField>
      </Form>
    </div>
  );
}


export default login;
