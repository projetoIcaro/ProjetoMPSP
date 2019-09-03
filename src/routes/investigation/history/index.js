import React, {Fragment} from 'react';
import HeaderCompass from 'component/Header';
import SvgIcon from 'component/SvgIcon';

function index () {
  return (
    <Fragment>
      <HeaderCompass />
      <SvgIcon name='linecons-search'/>
      <div>Famosa Página de Histórico</div>
    </Fragment>
  );
}

export default index;
