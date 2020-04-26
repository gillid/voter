import get from 'lodash/get';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './actions';

export const useUser = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => get(state, 'user.id'));

  return {
    isAuthorized: Boolean(id),
    id,
    name: useSelector((state) => get(state, 'user.name')),
    setUser: (name) => dispatch(setUser(name)),
  };
};
