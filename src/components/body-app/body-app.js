import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List } from '../index';
import { useDebonce } from '../../hooks';
import { getFilteredListTodos } from '../../utils';
import { getTodos } from '../../actions';
import { selectTodos } from '../../selectors';
import styles from './body-app.module.css';

export const BodyApp = ({ setTodos, errorGetting }) => {
	const todos = useSelector(selectTodos);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTodos);
	}, [dispatch]);

	const [searchValue, setSearchValue] = useState('');
	const [isSortFlag, setIsSortFlag] = useState(false);
	const { debouncedValue } = useDebonce(searchValue, 300);

	const newListTodos = getFilteredListTodos(todos, isSortFlag, debouncedValue);

	if (errorGetting) return <div className={styles.error}>{errorGetting}</div>;

	return (
		<>
			<div className={styles['list-header']}>
				<button
					className={
						styles['button-sort'] +
						' ' +
						(isSortFlag && styles['button-sort--active'])
					}
					onClick={() => setIsSortFlag(!isSortFlag)}
				>
					Sort
				</button>
				<span className={styles.span}>|</span>
				<input
					type="text"
					value={searchValue}
					className={styles['input-search']}
					placeholder="Search..."
					onChange={({ target }) => setSearchValue(target.value)}
				/>
			</div>
			<List todos={newListTodos} setTodos={setTodos} />
		</>
	);
};
