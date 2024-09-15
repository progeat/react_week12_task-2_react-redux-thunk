import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HeaderApp, BodyApp } from './components';
import { getTodos } from './actions';
import styles from './app-todo.module.css';

export const TodoApp = () => {
	const dispatch = useDispatch();

	useEffect(() => dispatch(getTodos), [dispatch]);

	return (
		<div className={styles.app}>
			<HeaderApp>TODO List App</HeaderApp>
			<BodyApp />
		</div>
	);
};
