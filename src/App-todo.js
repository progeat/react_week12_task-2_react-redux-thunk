import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderApp, BodyApp, Loader } from './components';
import { getTodos } from './actions';
import { selectIsLoading } from './selectors';
import styles from './app-todo.module.css';

export const TodoApp = () => {
	const dispatch = useDispatch();

	useEffect(() => dispatch(getTodos), [dispatch]);

	const isLoading = useSelector(selectIsLoading);

	return (
		<div className={styles.app}>
			<HeaderApp>TODO List App</HeaderApp>
			{isLoading ? <Loader /> : <BodyApp />}
		</div>
	);
};
