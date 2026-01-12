
import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

function Button({ label, onClick }) {
  return (
    <button className={clsx("btn", styles.btn)} onClick={onClick}>
      Click me !
    </button>
  );
}

export default Button;
