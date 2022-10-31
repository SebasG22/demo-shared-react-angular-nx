import styles from './novatest-ui.module.css';
import * as PropTypes from 'prop-types';

/* eslint-disable-next-line */
export interface NovatestUiProps {
  name: string;
}

export function NovatestUi(props: NovatestUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NovatestUi! {props.name}</h1>
    </div>
  );
}

NovatestUi.propTypes = { name: PropTypes.string };

export default NovatestUi;
