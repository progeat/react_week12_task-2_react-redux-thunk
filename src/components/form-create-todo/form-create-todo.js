import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, setErrorCreation } from '../../actions';
import { selectErrorCreation, selectIsLoading } from '../../selectors';
import styles from './form-create-todo.module.css';

export const FormCreateTodo = () => {
	const [newTodo, setNewTodo] = useState('');
	const errorCreating = useSelector(selectErrorCreation);
	const isLoading = useSelector(selectIsLoading);

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();

		if (newTodo.trim().length < 3) return;

		dispatch(createTodo(newTodo.trim()));

		setNewTodo('');
	};

	const onChangeNewTodo = ({ target }) => {
		setNewTodo(target.value);
		dispatch(setErrorCreation(''));
	};

	const onBlurNewTodo = ({ target }) => {
		const valueNewTodo = target.value.trim();

		if (valueNewTodo && valueNewTodo.length < 3) {
			const errorMessage = 'There must be more than 3 characters';

			dispatch(setErrorCreation(errorMessage));
		}
	};

	return (
		<form className={styles['form-new-todo']} onSubmit={onSubmit}>
			{errorCreating && <div className={styles.error}>{errorCreating}</div>}
			<input
				type="text"
				name="newTodo"
				value={newTodo}
				className={styles['input-new-todo']}
				placeholder="Task to be done..."
				onChange={onChangeNewTodo}
				onBlur={onBlurNewTodo}
			/>
			<button
				type="submit"
				className={styles['button-new-todo']}
				disabled={isLoading}
			>
				Add
			</button>
		</form>
	);
};
