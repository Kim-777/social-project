import { Message, Icon, Divider } from 'semantic-ui-react';
import {useRouter} from 'next/router';
import Link from 'next/link';

export const HeaderMessage = () => {

    const router = useRouter();
    const signupRoute = router.pathname === '/signup';

    return (
        <Message 
            attached
            color="teal"
            header={signupRoute ? "νμκ°μπ" : "νμν©λλ€π"}
            icon={signupRoute ? "settings" : "privacy"}
            content={signupRoute ? "μ°λ¦¬ μΉμ νμμ΄ λμ΄μ£ΌμΈμ!" : "μ΄λ©μΌλ‘ λ‘κ·ΈμΈνκΈ°"}
        />

    )

}

export const FooterMessage = () => {
    const router = useRouter();
    const signupRoute = router.pathname === "/signup"

    return (
        <>
            {signupRoute ? (
                <>
                    <Message attached="bottom" warning>
                        <Icon name="help" />
                        μ΄λ―Έ κ°μλ μμ΄λκ° μλμ? {" "}
                        <Link href="/login">
                            λ‘κ·ΈμΈ νλ¬ κ°κΈ°
                        </Link>
                    </Message>
                    <Divider hidden />
                </>
            ) : (
                <>
                    <Message attached="bottom" info>
                        <Icon name="lock" />
                        <Link href="/reset">
                            λΉλ°λ²νΈλ₯Ό μμ΄λ²λ¦¬μ¨λμ?
                        </Link>
                    </Message>

                    <Message attached="bottom" warning>
                        <Icon name="help" />
                        μ²μμ€μ¨λμ? <Link href="/signup">
                            νμκ°μ
                        </Link>
                        {" "}
                        νλ¬κ°κΈ°
                    </Message>
                </>
            )}
        </>
    )
}