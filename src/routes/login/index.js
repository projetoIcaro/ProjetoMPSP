import styles from './index.module.css';

import React from 'react';
import FormWrapper, {Button, Input} from 'component/form/FormWrapper';

function login () {
  return (
		<div className={styles.wrapper}>
			<FormWrapper title="LOG IN">
				<Input name="usurname" placeholder="Usuario"/>
				<Input name="password" icon={true} placeholder="Senha"/>
				<Button className="button" circular={false}>Acessar</Button>
			</FormWrapper>
    </div>
  );
}


export default login;
