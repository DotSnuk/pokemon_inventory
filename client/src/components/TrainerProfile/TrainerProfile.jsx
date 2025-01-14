import { useActiveTrainer } from '../TrainerContext/TrainerContextProvider';
import Banner from '../Banner/Banner';
import Pokemon from '../pokemon/pokemon';
import ProfileMenu from '../ProfileMenu/ProfileMenu';

export default function TrainerProfile() {
  return (
    <>
      <Banner />
      <ProfileMenu />
    </>
  );
}
