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
            header={signupRoute ? "회원가입😁" : "환영합니다😎"}
            icon={signupRoute ? "settings" : "privacy"}
            content={signupRoute ? "우리 웹의 회원이 되어주세요!" : "이메일로 로그인하기"}
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
                        이미 가입된 아이디가 있나요? {" "}
                        <Link href="/login">
                            로그인 하러 가기
                        </Link>
                    </Message>
                    <Divider hidden />
                </>
            ) : (
                <>
                    <Message attached="bottom" info>
                        <Icon name="lock" />
                        <Link href="/reset">
                            비밀번호를 잊어버리셨나요?
                        </Link>
                    </Message>

                    <Message attached="bottom" warning>
                        <Icon name="help" />
                        처음오셨나요? <Link href="/signup">
                            회원가입
                        </Link>
                        {" "}
                        하러가기
                    </Message>
                </>
            )}
        </>
    )
}