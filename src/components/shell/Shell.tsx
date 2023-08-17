// import styles from '@/styles/page.module.css';
import styles from '@/styles/admin.module.scss';


import { NavbarNested } from '@/components/navbar/Navbar';
import { UserButton } from '../button/UserButton';
import { Button, rem } from '@mantine/core';

interface ShellProps {
    children: React.ReactElement;
}

export default function Shell({ children }: ShellProps) {
    return (
        <main className={styles.shell} >
            <NavbarNested></NavbarNested>
            <div className={`${styles.hero}`}>
                <div className={`${styles.util}`}>
                    <UserButton
                        image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
                        name="Ann Hathaway"
                        role="superadmin"
                        style={{
                            width: "300px",
                            borderRadius: rem(10),
                        }}
                    />
                    <Button color='red.7'>theme</Button>
                </div>
                <div>{children}</div>
            </div>
        </main>
    );
}
