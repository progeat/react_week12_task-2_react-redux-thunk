import { useSelector } from 'react-redux';
import { Item, Loader } from '../index';
import styles from './list.module.css';
import { selectIsLoading } from '../../selectors';

export const List = ({ todos }) => {
	const isLoading = useSelector(selectIsLoading);

	if (isLoading) return <Loader />;
	if (!todos[0]) return <div className={styles['list-message']}>No added todos...</div>;

	return (
		<ul className={styles.list}>
			{todos.map(({ id, title, completed }) => (
				<Item key={id} id={id} title={title} completed={completed} />
			))}
		</ul>
	);
};
