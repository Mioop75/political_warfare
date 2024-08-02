import { useAppSelector } from '../../../hooks/useDispatch';
import { RootState } from '../../../store';
import InvitedFriendModal from './InvitedFriendModal/InvitedFriendModal';

const Modals = () => {
	const { nameModal } = useAppSelector((state: RootState) => state.modal);

	return <>{nameModal === 'invitedFriend' && <InvitedFriendModal />}</>;
};

export default Modals;
