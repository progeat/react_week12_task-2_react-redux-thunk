import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, updateTodo } from '../../actions';
import { selectIsLoading } from '../../selectors';
import styles from './item.module.css';

export const Item = ({ id, title, completed }) => {
	const [editFlag, setEditFlag] = useState('');
	const [editInputValue, setEditInputValue] = useState(title);
	const isLoading = useSelector(selectIsLoading);

	const dispatch = useDispatch();

	return (
		<li className={styles.item + ' ' + (completed && styles['item-completed'])}>
			{editFlag ? (
				<input
					autoFocus
					type="text"
					size="75"
					className={styles['input-edit']}
					value={editInputValue}
					onChange={({ target }) => setEditInputValue(target.value)}
				/>
			) : (
				<span>{title}</span>
			)}
			<div className={styles['item_button-wrapp']}>
				{editFlag ? (
					<button
						className={styles['item_button-edit']}
						onClick={() => {
							dispatch(
								updateTodo({ id, title: editInputValue, completed }),
							);
							setEditFlag(false);
						}}
					>
						confirm
					</button>
				) : (
					<button
						className={styles['item_button-edit']}
						onClick={() => setEditFlag(true)}
					>
						edit
					</button>
				)}
				<button
					className={styles['item_button-complete']}
					onClick={() =>
						dispatch(updateTodo({ id, title, completed: !completed }))
					}
					disabled={isLoading}
				>
					complete
				</button>
				<button
					className={styles['item_button-delete']}
					onClick={() => dispatch(deleteTodo(id))}
					disabled={isLoading}
				>
					delete
				</button>
			</div>
		</li>
	);
};
