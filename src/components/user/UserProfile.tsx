import { useMutation } from "@apollo/client";
import client from "../../../graphql-client/graphql-client";
import { LOGOUT_MUTATION } from "@/gql/mutation";
import styles from '@/styles/profile.module.css';
import { useRouter } from "next/navigation";

interface UserProfileProps {
  name: string,
  email: string,
  id: string,
}

export default function UserProfile({ name, email, id }: UserProfileProps) {

  const [logoutMutation] = useMutation(LOGOUT_MUTATION, { client });
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const { data } = await logoutMutation();
      console.log(`Logout success ${JSON.stringify(data)}`);
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  return (
    <div className={styles['userProfile']}>
      <h2>User Profile</h2>
      <div className={styles['profileInfo']}>
        <p>{name}</p>
        <p>{email}</p>
      </div>
      <div className={styles['logout']} onClick={handleLogout}>Log out</div>
    </div>
  );
}